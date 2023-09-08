import React, {useState, useEffect} from 'react'
import MyNavbar from './components/myNavbar/MyNavbar'
import MyFooter from './components/myFooter/MyFooter'
import {myNavLink} from "./data/myNavLink"
import {myFooterLink} from './data/myFooterLink'
import axios from 'axios'
import LatestRelease from './components/latestRelease/LatestRelease'



export default function App() {
  const url = "https://epibooks.onrender.com"

  const [book, setBook] = useState([])

  const getData = async () => {
    try{
      const response = await axios.get(url)
      setBook(response.data)
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    getData()
  },[])

  return (
   <>
   <MyNavbar link={myNavLink}/>
   <LatestRelease books={book.slice(0,20)}/>
   <MyFooter link={myFooterLink}/>
   </>
  )
}
