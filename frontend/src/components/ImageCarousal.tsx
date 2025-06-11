import { useState } from 'react'

export function ImageCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0)

    const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1))

    return (
        <div className="relative w-full h-full">
            <img
                src={images[index]}
                alt={`${index + 1}`}
                className="w-full h-full object-cover rounded-lg transition duration-300"
            />
            {images.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow">
                        ‹
                    </button>
                    <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow">
                        ›
                    </button>
                </>
            )}
        </div>
    )
}
