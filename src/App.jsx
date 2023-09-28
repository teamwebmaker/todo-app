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
import Page from './components/page'

function App() {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState(initCartProducts())
  const [paginationArray, setPaginationArray] = useState([])
  const [modalProps, setModalProps] = useState({display: 'none', title: "Model Title", closeModal: closeModal})
  const [modalContent, setModalContent] = useState(null)
  const [pagesArray, setPagesArray] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const prePage = 6
  const pages = Math.floor(products.length / prePage)
  
  function initCartProducts(){
    if (localStorage.hasOwnProperty('products')){
        return JSON.parse(localStorage.getItem('products'));
    } 
    return []
  }
  useEffect(() => {
    setTimeout(() => {
      (async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json()
      setProducts(data.products)
      setPaginationArray(data.products.slice(0, prePage))
    })();
    }, 1000)
  }, [])

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartProducts))
  }, [cartProducts])

  function addToCart(id) {
    const selectedProduct = cartProducts.find(product => product.id === id)
    if(selectedProduct){
        const updatedCartProducts = cartProducts.map((product) => product.id === id ? {...product, quantity: product.quantity + 1} :  product)
        setCartProducts(updatedCartProducts)
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
    setModalProps({display: 'none', title: "Model Title", closeModal: closeModal})
    setModalContent(null)
  }

  function showProduct(id){
    setModalProps({display: 'block', title: "Model Title", closeModal: closeModal})
    const product = products.find((product) => product.id === id)
    setModalContent(<Product product={product} />)
  }

  function generateNumbersArray(from, to){
    const numbers = []
    for(let i = from; i <= to; i++) numbers.push(i)
    return numbers
  }

  function pagination(page){
    const from = (page - 1) * prePage
    const to = page * prePage
    setPaginationArray(products.slice(from, to))
    setCurrentPage(page)
  }

  return (
    <>
      <Modal {...modalProps}>{modalContent}</Modal>
      <Wrapped classes={["container"]}>
        <CartProductHeader headers={["პოსტერი", "სათაური", "რაოდენობა", "ერთეულის ფასი", "სრული ფასი", "მოდიფიცირება"]}/>
        {cartProducts.map((product) => <CartProductView product={product} 
                                        deleteProductsFromCart={deleteProductsFromCart} 
                                        key={crypto.randomUUID()}/>)}
        <CartProductFooter cartProducts={cartProducts} clearProductCart={clearProductCart} />
      </Wrapped>
      <Wrapped classes={["row"]}>

        {paginationArray.length ? paginationArray.map((product) => {
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
      <Wrapped classes={["container"]}>
        <ul className="pagination justify-content-center gap-2">
          {generateNumbersArray(1, pages).map((page) => <Page page={page} currentPage={currentPage} pagination={pagination} key={crypto.randomUUID()} />)}
        </ul>
      </Wrapped>

    </>
  )
}

export default App
