import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShip } from "../../redux/actions/shipAction";

const ShipForm = () => {
    const [shipName, setShipName] = useState("");
    const [shipType, setShipType] = useState("Container");
    const dispatch = useDispatch();

    const handleFormSubmit = (e) => {
        e.preventDefault();
    dispatch(addShip({
        id: Date.now(),
        name: shipName,
        type: shipType,
    }));
    resetForm();
  };

    const handleChange = (e) => {
    const { name, value } = e.currentTarget;

      switch (name) {
          case "name":
              setShipName(value);
              break;
          case "type":
              setShipType(value);
              break;
          default: return;
    }
  };

  const resetForm = () => {
      setShipName("");
      setShipType("Container");
  };

return (
    <form onSubmit={handleFormSubmit} id="shipForm">
        <label htmlFor="name" id="name-label">Ship Name</label>
    <input
        type="text"
        name="name"
        id="ship-name"
        value={shipName}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Write ship name..."
        />
 <label htmlFor="type">Ship Type</label>
        <select id="type" name="type" onChange={handleChange} value={shipType}>
          <option value="Container">Container</option>
          <option value="Bulk">Bulk</option>
          <option value="Tanker">Tanker</option>
        </select>
      <button>Add Ship</button>
    </form>
  );
};

export default ShipForm;
