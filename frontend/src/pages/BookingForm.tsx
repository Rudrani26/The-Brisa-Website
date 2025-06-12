import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { rooms } from './Accomodations'
import { differenceInCalendarDays, isWeekend } from 'date-fns'
import { ImageCarousel } from '../components/ImageCarousal'

export default function BookingForm() {
    const { id } = useParams<{ id: string }>()
    const room = rooms.find((r) => r.id === Number(id))
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        number: '',
        adults: 1,
        children: 0,
        meals: 'no',
        extraBeds: 0,
        requests: '',
        checkIn: '',
        checkOut: '',
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target

        const updatedValue =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked
                : name === 'adults' || name === 'children' || name === 'extraBeds'
                    ? Number(value)
                    : value

        setForm((prev) => ({
            ...prev,
            [name]: updatedValue,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { name, email, number, checkIn, checkOut } = form
        if (!name || !email || !number || !checkIn || !checkOut) {
            alert('Please fill in all required fields.')
            return
        }
        navigate('/payment', { state: { room, form, totalCost: calculateCost() } })
    }

    const calculateCost = () => {
        if (!form.checkIn || !form.checkOut || !room) return 0

        const start = new Date(form.checkIn)
        const end = new Date(form.checkOut)
        const nights = differenceInCalendarDays(end, start)

        if (nights <= 0) return 0

        let total = 0
        for (let i = 0; i < nights; i++) {
            const date = new Date(start)
            date.setDate(start.getDate() + i)

            total += isWeekend(date)
                ? room.weekendPrice // Use weekend price from room data
                : room.weekdayPrice // Use weekday price from room data
        }

        // Extra beds cost
        total += form.extraBeds * 500

        return total
    }


    if (!room) return <p className="text-center mt-20">Room not found</p>

    const images = Array.isArray(room.image) ? room.image : [room.image]

    return (
        <section className="flex flex-col lg:flex-row mt-20 px-4 py-10 max-w-7xl mx-auto gap-6">
            {/* Left: Room Info */}
            <div className="w-full lg:w-1/3 space-y-4">
                <div className="w-full h-64 overflow-hidden rounded-lg relative">
                    <ImageCarousel images={images} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">{room.title}</h2>
                    <p className="text-gray-600 mt-2">{room.description}</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                        {room.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                    <p className="mt-4 font-semibold text-lg">Weekday: ₹{room.weekdayPrice} | Weekend: ₹{room.weekendPrice}</p>
                </div>
            </div>

            {/* Center: Booking Form */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Booking Request</h2>
                <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label htmlFor="checkIn" className="block mb-1 font-medium">Check-in Date</label>
                            <input id="checkIn" name="checkIn" type="date" className="p-2 border rounded w-full" value={form.checkIn} onChange={handleChange} required />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="checkOut" className="block mb-1 font-medium">Check-out Date</label>
                            <input id="checkOut" name="checkOut" type="date" className="p-2 border rounded w-full" value={form.checkOut} onChange={handleChange} required />
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <input name="name" placeholder="Full Name" className="p-2 border rounded w-full" value={form.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input name="email" type="email" placeholder="Email" className="p-2 border rounded w-full" value={form.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="block font-medium mb-1">Phone Number</label>
                        <input name="number" type="tel" placeholder="Phone Number" className="p-2 border rounded w-full" value={form.number} onChange={handleChange} required />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label className="block font-medium mb-1">Adults</label>
                            <input name="adults" type="number" min="1" className="p-2 border rounded w-full" value={form.adults} onChange={handleChange} required />
                        </div>
                        <div className="w-1/2">
                            <label className="block font-medium mb-1">Children</label>
                            <input name="children" type="number" min="0" className="p-2 border rounded w-full" value={form.children} onChange={handleChange} required />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Extra Beds (₹500 per bed)</label>
                        <input
                            name="extraBeds"
                            type="number"
                            min="0"
                            max="5"
                            className="p-2 border rounded w-full"
                            value={form.extraBeds}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div >

            <div className="w-full lg:w-1/4 bg-gray-50 p-4 rounded-lg shadow h-fit">
                <h3 className="text-xl font-bold mb-3 text-center">Booking Summary</h3>

                <div className="flex justify-between mb-2">
                    <span><strong>Check-In:</strong></span>
                    <span className="text-right">{form.checkIn || '-'}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span><strong>Check-Out:</strong></span>
                    <span className="text-right">{form.checkOut || '-'}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span><strong>Nights:</strong></span>
                    <span className="text-right">
                        {form.checkIn && form.checkOut
                            ? Math.max(0, differenceInCalendarDays(new Date(form.checkOut), new Date(form.checkIn)))
                            : '-'}
                    </span>
                </div>
                <div className="flex justify-between mb-2">
                    <span><strong>Adults:</strong></span>
                    <span className="text-right">{form.adults}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span><strong>Children:</strong></span>
                    <span className="text-right">{form.children}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span><strong>Extra Beds:</strong></span>
                    <span className="text-right">
                        {form.extraBeds} {form.extraBeds > 0 && `(₹${form.extraBeds * 500})`}
                    </span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between text-lg font-semibold mb-2">
                    <span>Total Cost:</span>
                    <span className="text-right">₹{calculateCost()}</span>
                </div>
                <p className="text-xs text-gray-500 text-right">* Inclusive of all taxes</p>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Confirm and Send Booking Request
                    </button>
                    <p className="text-xs text-gray-500 text-center py-5">We will get back to you immediately with the confirmation.</p>
                </div>
            </div>
        </section >
    )
}