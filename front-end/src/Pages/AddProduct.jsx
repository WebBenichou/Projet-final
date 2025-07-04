import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Number(price) <= 0) {
            alert("Le prix doit être supérieur à 0.");
            return;
        }

        const newProduct = {
            name,
            price: Number(price),
            desc
        };

        axios.post("http://localhost:3000/products", newProduct)
            .then(() => {
                alert("Produit ajouté !");
                navigate("/"); // Redirige vers la page d'accueil
            })
            .catch((err) => {
                console.error("Erreur lors de l'ajout :", err);
                alert("Échec de l'ajout du produit. Veuillez réessayer.");
            });
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un nouveau produit</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nom du produit</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Prix</label>
                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="mb-3">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        rows="3"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!name || !price || Number(price) <= 0}
                >
                    Ajouter
                </button>
            </form>
        </div>
    );
}
 