import { Image } from "react-bootstrap";
const EmpleadoAvatar = ({pic, alt}) => {
    const urlImg= `./img/${pic}`
    return (
        <div className="imgContenedor">
            <Image src={urlImg} alt={alt} thumbnail   className="m-md-3"/>            
        </div>
    );
};

export default EmpleadoAvatar;