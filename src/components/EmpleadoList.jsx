import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
    return (
        <ListGroup className="">
            {
                empleados.map(empleado => <EmpleadoRow key={empleado.id} empleado={empleado}></EmpleadoRow>)
            }
        </ListGroup>
    );
};

export default EmpleadoList;