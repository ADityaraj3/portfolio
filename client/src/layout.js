import Navbar from './scenes/Navbar.jsx';
import {Outlet} from "react-router-dom"

export default function Layout () {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
}