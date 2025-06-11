export interface Room {
  id: number
  title: string
  description: string
  image: string | string[]
  label: string
  features: string[]
  weekdayPrice: number
  weekendPrice: number
  rating: number
  reviews: number
}

export interface BookingData {
  customerName: string;
  email: string;
  phone: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  numAdults: number;
  numChildren: number;
  totalPrice: number;
  confirmed: boolean;
  specialRequests?: string;
}
