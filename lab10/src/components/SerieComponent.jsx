import { NavLink } from "react-router-dom";

function SerieComponent(props) {
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={
                    "https://dummyimage.com/400x250/000/fff&text=" +
                    props.imagen
                }
                alt="img"
            />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.categoria}</p>
                <div className="d-flex justify-content-between">
                    <NavLink
                        className="btn btn-secondary"
                        to={`/series/edit/${props.codigo}`}
                    >
                        Editar
                    </NavLink>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default SerieComponent;
