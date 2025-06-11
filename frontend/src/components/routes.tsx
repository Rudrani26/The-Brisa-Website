import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Accommodations from '../pages/Accomodations';
import Amenities from '../pages/Ammenities';
import Gallery from '../pages/Gallery';
import Testimonials from '../pages/Testimonials';
import Contact from '../pages/Contact';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/accommodations',
        element: <Accommodations />,
    },
    {
        path: '/amenities',
        element: <Amenities />,
    },
    {
        path: '/gallery',
        element: <Gallery />,
    },
    {
        path: '/testimonials',
        element: <Testimonials />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
];

export default routes;
