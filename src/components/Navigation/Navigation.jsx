import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <NavLink to="/counter">Conter</NavLink>
            <NavLink to="/goals">Goals</NavLink>
        </>
    )
}

export default Navigation;