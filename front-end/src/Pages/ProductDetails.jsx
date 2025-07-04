import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:3000/products/" + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) {
        return <div className="container mt-4">Chargement...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Détails du produit (ID : {id})</h2>

            <div className="card p-4">
                <h5>{product.name}</h5>
                <p className="lead">{product.description}</p>
                <button className="btn btn-secondary">
                    {product.price} DH
                </button>
            </div>
        </div>
    );
}
