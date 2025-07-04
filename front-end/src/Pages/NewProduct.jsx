import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/products", { name, price })
            .then(() => {
                alert("Produit ajouté !");
                navigate("/");
            })
            .catch((err) => {
                console.error("Erreur lors de l'ajout :", err);
                alert("Échec de l'ajout du produit. Veuillez réessayer.");
            });
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control w-50"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control w-50"
                        required
                    />
                </div>
                <div className="form-group mt-3">
                    <button className="btn btn-secondary" type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    );
}
