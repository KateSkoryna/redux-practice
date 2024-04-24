/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { removeGoal, toggleGoal } from "../../redux/actions/goalAction";

const GoalList = () => {
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch();

    const handleRemoveGoal = (id) => {
        dispatch(removeGoal(id));
    };

    const handleToggle = (id) => {
        dispatch(toggleGoal(id));
    }


    return (
        <div>
            <ul>{goals.map(({id, text, completed}) => (
                <li key={id}>
        <input
        type="checkbox"
        onChange={()=> handleToggle(id)}
        checked={completed}
    />
                    <p>{text}</p>
                    <div>
                    <button onClick={()=> handleRemoveGoal(id)}>Remove</button>
                    </div>
                </li>
            ))}</ul>
        </div>
    );
};

export default GoalList;