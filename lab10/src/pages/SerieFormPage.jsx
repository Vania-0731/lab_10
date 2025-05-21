import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SerieContext } from "../context/SerieContext";

function SerieFormPage() {
    const { idserie } = useParams();
    const navigate = useNavigate();

    const { series, setSeries } = useContext(SerieContext);

    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagenTexto, setImagenTexto] = useState("");

    useEffect(() => {
        if (idserie) {
            const serieEdit = series.find((s) => s.cod === Number(idserie));
            if (serieEdit) {
                setNombre(serieEdit.nom);
                setCategoria(serieEdit.cat);
                setImagenTexto(serieEdit.img);
            }
        }
    }, [idserie, series]);

    useEffect(() => {
        setImagenTexto(nombre.replace(/\s+/g, "-").toLowerCase() + ".png");
    }, [nombre]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !categoria) return;

        if (idserie) {
            const newSeries = series.map((s) =>
                s.cod === Number(idserie)
                    ? { ...s, nom: nombre, cat: categoria, img: imagenTexto }
                    : s
            );
            setSeries(newSeries);
        } else {
            const maxCod = series.reduce(
                (max, s) => (s.cod > max ? s.cod : max),
                0
            );
            const nuevaSerie = {
                cod: maxCod + 1,
                nom: nombre,
                cat: categoria,
                img: imagenTexto,
            };
            setSeries([...series, nuevaSerie]);
        }

        navigate("/series");
    };

    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>{idserie ? "Editar" : "Nuevo"} - Serie</h3>
                </div>
                <form className="row" onSubmit={handleSubmit}>
                    <div className="col-md-4">
                        <img
                            id="fileImg"
                            className="card-img-top"
                            src={`https://dummyimage.com/400x250/000/fff&text=${imagenTexto}`}
                            alt="preview"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="inputCategory"
                                className="form-label"
                            >
                                Categoria
                            </label>
                            <select
                                className="form-select"
                                id="inputCategory"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">
                                Imagen (no se sube, solo muestra)
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImage"
                                disabled
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary me-2" type="submit">
                                Guardar
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => navigate("/series")}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SerieFormPage;
