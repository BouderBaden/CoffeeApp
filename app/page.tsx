"use client"

import Header from "./Component/Header";


import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../app/db/firebaseConfig'; 
import {ProductsTypes} from "./Types/productsType"
import Galerie from "./Component/Galerie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Component/Footer";


export default function Home() {

  const [dataProducts, setDataProducts] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const productsCollection = collection(db, 'product');
    const productsSnapshot = await getDocs(productsCollection);
    const productsData = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as ProductsTypes[];
    setDataProducts(productsData);
  };

  return (
   <>
    <ToastContainer />
    <Header />
    <Galerie dataProducts={dataProducts}/>
    <Footer />
   </>
  );
}