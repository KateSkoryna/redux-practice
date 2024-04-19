import { useSelector, useDispatch } from "react-redux";
import { removeGoal } from "../../redux/actions/goalAction";

const GoalList = () => {
    const goals = useSelector(state => state.goals);
    const dispatch = useDispatch();

    const handleRemoveGoal = (id) => {
        dispatch(removeGoal(id));
    };

    const handleToggle = (id) => {
        return id;
    }

    return (
        <div>
            <ul>{goals.map(({id, goal}) => (
                <li key={id}>
        <input
        type="checkbox"
        onChange={()=> handleToggle(id)}
        checked={goal.completed}
    />
                    <p>{goal}</p>
                    <div>
                    <button onClick={()=> handleRemoveGoal(id)}>Remove</button>
                    </div>
                </li>
            ))}</ul>
        </div>
    );
};

export default GoalList;