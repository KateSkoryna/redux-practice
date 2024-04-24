import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/ships">Ships</NavLink>
        </>
    )
}

export default Navigation;