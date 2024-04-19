import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/counterAction";
import HomeButton from "../HomeButton/HomeButton";

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h2>Counter Value: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <HomeButton/>
        </div>
    )
};

export default Counter;
