import './App.css';

function App() {
  const products = require('./products.json').products;
  return (
    <div className="App">
      <section className="pricing">
        <div className="container">
          <div className="row">
            {products.map((product) => {
              return <Product details={product}/>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Product(props){
  let template = "";
  return(
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.details.subscription}</h5>
            <h6 className="card-price text-center">{props.details.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                (Object.entries(props.details.features)).map((feature)=>{
                    if(feature[1]){
                      return <li><span className="fa-li"><i className="fa fa-check"></i></span>{(typeof(feature[1]) === "boolean") ? feature[0] : feature[1]}</li>;
                    }else{
                      return <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{feature[0]}</li>;
                    }
                  })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
