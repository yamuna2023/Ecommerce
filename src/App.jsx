import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './components/Home'
import { BrowserRouter as Router,Routes , Route } from 'react-router-dom'
import FooterContent from './layouts/FooterContent'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
const App = () => {
  return (
    <main>
    <Router>
      <Header />
      <section className='main-container'>
          <Routes>
             <Route path='' element={<Home />}/>
              <Route path='products' element={<Products />}/>
              <Route path='product-details/:id' element={ <ProductDetails />}/>
          </Routes>
      </section>
      <FooterContent />
      <Footer />
    </Router>
    </main>
  )
}

export default App