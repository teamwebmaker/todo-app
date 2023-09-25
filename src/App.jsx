import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product'
import Wrapped from './components/wrapped'
import Loader from './components/loader'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setTimeout(() => {
      (async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json()
      setProducts(data.products)
    })();
    }, 3000)
    

  }, [])

  return (
    <>
      <Wrapped classes={["row"]}>

        {products.length ? products.map((product) => {
          return (
            <Wrapped classes={["col-lg-4", "col-md-6", "mb-4"]} key={crypto.randomUUID()}> 
              <Product product={product} />
            </Wrapped>
          )
        }) :  
          <Wrapped classes={["col"]}>
            <Loader classes={["spinner-border", "text-danger"]} />
          </Wrapped>  
        }
      </Wrapped>
    </>
  )
}

export default App
