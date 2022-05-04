import "./Historia.css";
import bosque from './assets/bosque.jpg'

const Historia = () => {

  /*Prueba*/
  return (
    <div className="card mb-3" >
      <img src={bosque} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Viveros Rulcas</h5>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum amet magni pariatur deleniti ratione voluptatem veniam architecto facilis saepe doloribus dolore illo laboriosam ullam! Earum eveniet animi nemo aut!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae sint perspiciatis doloribus veritatis, aperiam iure ratione sequi eveniet, eos vero deleniti fugit officiis ipsum id atque sit, perferendis quod.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic eaque ea, dolores laudantium totam omnis assumenda. Laborum amet adipisci, assumenda nostrum impedit quo ipsam officia labore ad enim explicabo.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi expedita repellendus autem quaerat asperiores recusandae voluptas dicta, unde magnam dolorum nemo numquam illo eum repudiandae dolores voluptatem explicabo commodi!
        </p>
      </div>
    </div>
  );
};

export default Historia;
