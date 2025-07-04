import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Home({ products, setProducts }) {
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      axios.delete("http://localhost:3000/products/" + id)
        .then(() => {
          const updatedProducts = products.filter(p => p.id !== id);
          setProducts(updatedProducts);
          alert("Produit supprimé !");
        })
        .catch(err => {
          console.error("Erreur lors de la suppression :", err);
          alert("Échec de la suppression.");
        });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Liste des produits</h1>
      <div className="row">
        {products && products.map((product) => (
          <div key={product.id} className="col-4">
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="text-center">{product.name}</h5>
              </div>
              <div className="card-body">
                <p className="lead">{product.price}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <NavLink to={"/products/" + product.id} className="btn btn-primary">
                  Voir
                </NavLink>
                <NavLink to={"/edit-product/" + product.id} className="btn btn-warning">
                  Modifier
                </NavLink>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
