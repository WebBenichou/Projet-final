import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/products/" + id)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error("Erreur lors du chargement :", err);
        alert("Produit introuvable.");
        navigate("/products");
      });
  }, [id, navigate]);

  const handleDelete = () => {
    if (window.confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      axios.delete("http://localhost:3000/products/" + id)
        .then(() => {
          alert("Produit supprimé !");
          navigate("/products");
        })
        .catch(err => {
          console.error("Erreur lors de la suppression :", err);
          alert("Échec de la suppression.");
        });
    }
  };


  if (!product) {
    return <div className="container mt-4">Chargement...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Détails du produit (ID : {id})</h2>

      <div className="card p-4">
        <h5>{product.name}</h5>
        <p className="lead">{product.description || "Pas de description"}</p>
        <div>
          <button className="btn btn-secondary">
            {product.price} DH
          </button>
          <button className="btn btn-danger ms-2" onClick={handleDelete}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
