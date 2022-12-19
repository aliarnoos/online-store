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
import Footer from './components/Footer';
import About from './components/About';
import Loading from './components/Loading';


import { initializeApp } from "firebase/app";
import {
  getFirestore, collection,
  deleteDoc, doc, setDoc, getDocs
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBk9ZgVjEu_zZLY4unQ_401RbpqTg9XoNY",
  authDomain: "new-laptop-store.firebaseapp.com",
  projectId: "new-laptop-store",
  storageBucket: "new-laptop-store.appspot.com",
  messagingSenderId: "307802676707",
  appId: "1:307802676707:web:0981a953aa9099166194d6"
};


function App() {

const [isLoading, setIsLoading] = useState(false)
initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db, 'cart')

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

  const featuredData = data.slice(19,23)
  const featuredItems = featuredData.map((item) => (
    <ShopItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      img={item.img}
      showInfo={()=>showInfo(item.id)}
    />
  ))

  const [cart, setCart] = useState([])

  function handleDel(id) {
    const docRef = doc(db, 'cart', id)
    deleteDoc(docRef)
    setCart(current => [...current.filter((el) => el.id !== id)])

  }
  const addItem = (itemId) => {
    setIsLoading(true)
    const item = data.filter(el => el.id === itemId) 
    if (cartDb.some(el => el.id === item[0].id)===true) return
    else {
      setCart(current => {
        return [...current, { 
          img: item[0].img,
          name: item[0].name,
          price: item[0].price,
          id: item[0].id,
          handleDel: ()=> handleDel()}]
      })
       setDoc(doc(db, "cart", item[0].id), {
        img: item[0].img,
        name: item[0].name,
        price: item[0].price,
        id: item[0].id
      });
      setIsLoading(false)
    }
}
const [cartDb, setCartDb] = useState([])

  async function getCartDb () {
    setIsLoading(true)
    await getDocs(colRef)
    .then(snapshot => {
       setCartDb([])
      snapshot.docs.forEach(doc => {
        setCartDb (current => [...current,  {...doc.data()}])
      })
    }) 
    .catch(err => {
      console.log(err.message)
    })
    setIsLoading(false)
  }
useEffect(()=> {
getCartDb()
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[cart] )

 const basketItems = () =>  cartDb.map((item) => {
  return (
    <BasketItem
      name={item.name}
      img={item.img}
      price={item.price}
      key={item.id}
      id={item.id}
      handleDel={()=>handleDel(item.id)}
      total={sumTotal}
    />
  );
});

 const [finalTotal, setFinalTotal] = useState()
const sumTotal = () => {
  // let total = 0
  // cartDb.map((item) => {
  //   let price = parseInt(item.price)
  //   let quant = document.querySelector(`.${item.id}`) || 1;
  //   if(document.querySelector(`.${item.id}`)) return total += price* quant.value
  //   else return total += price * quant
  // })
  // setFinalTotal('$'+ total.toString()) 
}
useEffect(()=> {
  // sumTotal()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [cartDb])
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home  featuredItems={featuredItems}/>} />
          <Route path="/Shop" exact element={<Shop shopItems={shopItems}  />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/ItemInfo/:id" exact element={<ItemINfo item={itemInfo} featuredItems={featuredItems}/>} />
          <Route path="/Basket" exact element={(isLoading===false && <Basket  basketItems={basketItems} total={sumTotal} finalTotal={finalTotal}/> ) ||  (isLoading && <Loading/>) } />
        </Routes>
        <BasketBtn basketCount={cartDb.length} />
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
