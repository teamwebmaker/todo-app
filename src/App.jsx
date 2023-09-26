import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/product'
import Wrapped from './components/wrapped'
import Loader from './components/loader'
import CartProductView from './components/cartProductView'
import CartProductHeader from './components/cartProductHeader'
import CartProductFooter from './components/cartProductFooter'
import Modal from './components/modal'

function App() {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [modalVisibility, setModalVisibility] = useState(null)
  const [modalContent, setModalContent] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      (async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json()
      setProducts(data.products)
    })();
    }, 1000)
  }, [])

  function addToCart(id) {
    const selectedProduct = cartProducts.find(product => product.id === id)
    if(selectedProduct){
        const updatedCartProduct = cartProducts.map((product) => product.id === id ? {...product, quantity: product.quantity + 1} :  product)
        setCartProducts(updatedCartProduct)
    } else {
      const choosenProduct = products.find((product) => product.id === id)
      setCartProducts([...cartProducts, {...choosenProduct, quantity: 1}])
    }
  }
  function deleteProductsFromCart(id) {
    if(confirm('Are you sure you want to delete this product?')){
        setCartProducts(cartProducts.filter((product) => product.id !== id))
    }
  }
  function clearProductCart(){
    if(confirm('Are you sure you want to clear product cart?')){
      setCartProducts([])
    }
  }
  function closeModal(){
    setModalVisibility(null)
    setModalContent(null)
  }
  function showProduct(id){
    setModalVisibility({closeModal: closeModal})
    const product = products.find((product) => product.id === id)
    setModalContent(<Product product={product} />)
  }
  return (
    <>
      {modalVisibility ? <Modal {...modalVisibility}>{modalContent}</Modal> : null}
      <Wrapped classes={["container"]}>
        <CartProductHeader headers={["პოსტერი", "სათაური", "რაოდენობა", "ერთეულის ფასი", "სრული ფასი", "მოდიფიცირება"]}/>
        {cartProducts.map((product) => <CartProductView product={product} 
                                        deleteProductsFromCart={deleteProductsFromCart} 
                                        key={crypto.randomUUID()}/>)}
        <CartProductFooter cartProducts={cartProducts} clearProductCart={clearProductCart} />
      </Wrapped>
      <Wrapped classes={["row"]}>

        {products.length ? products.map((product) => {
          return (
            <Wrapped classes={["col-lg-4", "col-md-6", "mb-4"]} key={crypto.randomUUID()}> 
              <Product product={product} addToCart={addToCart} showProduct={showProduct}/>
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
