import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import { SerieContext } from "../context/SerieContext";

function SeriePage() {
    const { series } = useContext(SerieContext);

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <h3>Series</h3>
                    <div>
                        <a className="btn btn-primary" href="#">
                            Nuevo
                        </a>
                    </div>
                </div>
                <div className="row">
                    {series.map((serie) => (
                        <div key={serie.cod} className="col-md-3 mb-3">
                            <SerieComponent
                                codigo={serie.cod}
                                nombre={serie.nom}
                                categoria={serie.cat}
                                imagen={serie.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SeriePage;
