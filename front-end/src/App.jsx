import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import ProductDetails from './Pages/ProductDetails'
import Home from './Pages/Home'
import NavBar from './Component/NavBar'
import NewProduct from './Pages/NewProduct'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/NewProduct" element={<NewProduct />} />
      </Routes>
    </>
  )
}

export default App