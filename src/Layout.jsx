import { Outlet, NavLink } from "react-router-dom"

export default function Layout() {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Page One</NavLink>
                    </li>
                    <li>
                        <NavLink to='/two'>Page Two</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
        <footer>
            <p>&copy; Copywrite GBG 2014</p>
        </footer>
        </>
    )
}