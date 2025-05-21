import HeaderComponent from "../components/HeaderComponent"

function SerieFormPage(){
    return (
        <>
            <HeaderComponent />
            <div className="container mt-3">
                <div className="border-bottom pb-3 mb-3">
                    <h3>Nuevo - Serie</h3>
                </div>
                <form className="row">
                    <div className="col-md-4">
                        <img 
                            id="fileImg"
                            className="card-img-top" 
                            src={"https://dummyimage.com/400x250/000/fff"} 
                            alt="img" />
                    </div>
                    <div className="col-md-8">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="inputName" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputCategory" className="form-label">Categoria</label>
                            <select className="form-select" id="inputCategory" required >
                                <option value="">Seleccione una opción</option>
                                <option value="Horror">Horror</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputImage" className="form-label">Imagen</label>
                            <input type="file" className="form-control" id="inputImage" required />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default SerieFormPage
