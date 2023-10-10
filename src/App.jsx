import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a mi tienda de ropa"} />
    </>
  )
}

export default App
