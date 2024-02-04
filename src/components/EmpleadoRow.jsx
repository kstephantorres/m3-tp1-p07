import { Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleado}) => {
    const {fullName, title, department, pic} = empleado
    return (
        <Row className="mb-3 border-bottom ">
            <Col xs={12} sm={3}>
                <EmpleadoAvatar pic={pic} alt={fullName} />
            </Col>
            <Col xs={12} sm={9} className="p-3">
                <h5>{fullName}</h5>
                <p>{`${title} `}<span className="badge text-bg-info text-white">{department}</span></p>
            </Col>
        </Row>
    );
};

export default EmpleadoRow;