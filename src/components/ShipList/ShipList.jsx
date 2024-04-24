/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { removeShip} from "../../redux/actions/shipAction";

const ShipList = () => {
    const ships = useSelector(state => state.ships);
    const dispatch = useDispatch();

    const handleRemoveShip = (id) => {
        console.log(id)
        dispatch(removeShip(id));
    };

    return (
        <div>
            <ul>{ships.map(({id, name, type}) => (
                <li key={id}>
                    <p>{name}</p>
                    <p>{type}</p>
                    <div>
                    <button onClick={()=> handleRemoveShip(id)}>Remove</button>
                    </div>
                </li>
            ))}</ul>
        </div>
    );
};

export default ShipList;