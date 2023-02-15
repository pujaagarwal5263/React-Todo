import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const MyBoot = () => {
    return (
        <>
        <h1 className="text-center">Welcome to Page 1</h1>
        <div className="container">
  <div className="row">
    <div className="col-sm">
      <div class="card" >
  <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
      <div class="card" >
  <img class="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" width="200px" height="200px" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
        </>
    );
}

export default MyBoot;