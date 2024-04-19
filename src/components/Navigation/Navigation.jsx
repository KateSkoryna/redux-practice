import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/goals">Goals</NavLink>
        </>
    )
}

export default Navigation;