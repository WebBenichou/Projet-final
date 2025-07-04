import { NavLink } from "react-router-dom";
export default function Home({ products }) {
  return (
    <div className="container">
      <h1>Liste des produits</h1>
      <div className="row">
        {products && products.map((product) => (
          <div key={product.id} className="col-4">
            <div className="card">
              <div className="card-header">
                <h5 className="text-center">{product.name}</h5>
              </div>
              <div className="card-body">
                <p className="lead">
                  {product.price} 
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <NavLink to={"/products/" + product.id} className="btn btn-primary">
                  Voir
                </NavLink>
                <button className="btn btn-danger">Supprimer</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
