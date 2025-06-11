import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col min-h-screen scroll-smooth">
            <Navbar />
            <main className="flex-auto">{children}</main>
            <Footer />
        </div>
    )
}
