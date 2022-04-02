import "./MisVis.css"

const MisVis = () => {
  return (
    <div className="container misviscont row">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="d-block w-100">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Nuestra Misión</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="d-block w-100">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Nuestra Visión</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Nuestros Valores</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </div>
  )
}

export default MisVis