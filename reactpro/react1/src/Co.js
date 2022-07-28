import nature from './nature.jpeg';
import './Co.css';

function Co(){
	return(<>
	<div className="grid">
		<div className="container text-center">
  <div className="row">
    <div className="col">
      <img src={nature} className="image-fluid"/>
      <h1 className="text-center">Photo 1</h1>
    </div>
    <div className="col">
      <img src={nature} className="image-fluid"/>
      <h1 className="text-center">Photo 2</h1>
    </div>
    <div className="col">
      <img src={nature} className="image-fluid"/>
      <h1 className="text-center">Photo 3</h1>
    </div>
  </div>
</div>
	</div>
  </>
		);
}

export default Co;