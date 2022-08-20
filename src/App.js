import React, { useEffect, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop';
import ItemINfo from './components/ItemInfo';
import ShopItem from "./components/ShopItem";
import { data } from "./data";
import Basket from './components/Basket/Basket';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BasketBtn from "./components/Basket/BasketBtn";
import BasketItem from "./components/Basket/BasketItem";



function App() {


  const [itemInfo, setItemInfo] = useState({})
  const showInfo = (id) => {
       const item = data.filter(el => el.id === id) 
       setItemInfo({
        img: item[0].img,
        name: item[0].name,
        price: item[0].price,
        gpu: item[0].gpu,
        cpu: item[0].cpu,
        display: item[0].display,
        storage: item[0].storage,
        id: item[0].id,
        addItem:()=>addItem(item[0].id)
       })
  }

  const shopItems = data.map((item) => (
    <ShopItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      showInfo={()=>showInfo(item.id)}
    />
  ));



  const [cart, setCart] = useState([])

  function handleDel(id) {
    setCart(current => [...current.filter((el) => el.id !== id)])
  }

  useEffect(()=> {
    basketItems()
    sumTotal()
  }, [cart])

  const addItem = (itemId) => {
    const item = data.filter(el => el.id === itemId) 
    if (cart.some(el => el.id === item[0].id)===true) return
    else {
      setCart(current => {
        return [...current, { 
          img: item[0].img,
          name: item[0].name,
          price: item[0].price,
          id: item[0].id,
          handleDel: ()=> handleDel(item[0].id)}]
      })
    }

}
const basketItems = () => cart.map((item) => {
  return (
    <BasketItem
      name={item.name}
      img={item.img}
      price={item.price}
      key={item.id}
      id={item.id}
      handleDel={item.handleDel}
      total={sumTotal}
    />
  );
});
 const [finalTotal, setFinalTotal] = useState()
const sumTotal = () => {
  let total = 0
  cart.map((item) => {
    let price = parseInt(item.price.replace(/\W+/g, ''))
    let quant = document.querySelector(`.${item.id}`) || 1;
    if(document.querySelector(`.${item.id}`)) total += price* quant.value
    else total += price * quant
  })
  setFinalTotal('$'+ total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')) 
}
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Shop" exact element={<Shop shopItems={shopItems}  />} />
          <Route path="/About" exact element={<Shop />} />
          <Route path="/ItemInfo/:id" exact element={<ItemINfo item={itemInfo}/>} />
          <Route path="/Basket" exact element={<Basket  basketItems={basketItems} total={sumTotal} finalTotal={finalTotal}/>} />
        </Routes>
        <BasketBtn basketCount={cart.length} />
      </BrowserRouter>
    </>
  );
}

export default App;
