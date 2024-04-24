import { NavLink } from "react-router-dom"

//add navigation to ships

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