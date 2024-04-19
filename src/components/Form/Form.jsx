import { useState } from "react";

const Form = () => {
  const [goal, setGoal] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
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
      />
      <button>Add Goal</button>
    </form>
  );
};

export default Form;
