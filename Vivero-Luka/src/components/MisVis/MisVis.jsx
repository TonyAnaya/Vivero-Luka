import "./MisVis.css";
import mision from './assets/mision.png'
import vision from './assets/vision.png'
import valores from './assets/valores.png'

const MisVis = () => {
  return (
    <div>
      <div class="card-group">
        <div class="card">
          <img src={mision} class="card-img-top" alt="mision" id='misVisVal'/>
          <div class="card-body">
            <h5 class="card-title">Nuestra Misión</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={vision} class="card-img-top" alt="..." id='misVisVal'/>
          <div class="card-body">
            <h5 class="card-title">Nuestra Visión</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={valores} class="card-img-top" alt="..." id='misVisVal'/>
          <div class="card-body">
            <h5 class="card-title">Nuestros Valores</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="container misviscont row">
    //     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    //         <div className="carousel-inner">
    //             <div className="carousel-item active" data-bs-interval="10000">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestra Misión</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="carousel-item" data-bs-interval="2000">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestra Visión</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="carousel-item">
    //                 <div className="d-block w-100">
    //                     <div className="card text-center">
    //                         <div className="card-body">
    //                             <h5 className="card-title">Nuestros Valores</h5>
    //                             <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="visually-hidden">Next</span>
    //         </button>
    //         </div>
    // </div>
  );
};

export default MisVis;
