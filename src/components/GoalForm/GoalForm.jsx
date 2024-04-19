import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../redux/actions/goalAction";

const Form = () => {
    const [goal, setGoal] = useState("");
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
      dispatch(addGoal({
          id: Date.now(),
        goal,
          completed: false,
      }));
    resetForm();
  };

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setGoal(value);
  };

  const resetForm = () => {
    setGoal("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="goal"
        id="goal"
        value={goal}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Write your goal..."
      />
      <button>Add Goal</button>
    </form>
  );
};

export default Form;
