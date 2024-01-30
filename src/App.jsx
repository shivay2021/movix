// import './App.css'
import { useEffect } from 'react'
import { fetchDataFromApi } from './Utils/api'
import {useDispatch,useSelector} from "react-redux" 
import { getApiConfiguration,getGenres } from './store/homeSlice'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/home/Home'
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer"
import Details from "./Pages/detail/Detail"
import SearchResult from "./Pages/searchResult/SearchResult"
import PagenotFound from "./Pages/404/PagenotFound"
import Explore from "./Pages/explore/Explore"

function App() {

  const dispatch = useDispatch()

  const {url} = useSelector((state)=> state.home)
  console.log(url)


  useEffect(()=>{
         apiTesting();
         genresCall()
  },[])

 
  //only state will return the home reducer

  const apiTesting = () =>{
       fetchDataFromApi("/configuration").then((res)=>{
        // console.log(res);
        const url = {
          backdrop: res.images.base_url + "original",
          poster: res.images.base_url + "original",
          profile: res.images.base_url + "original",
        }
        dispatch(getApiConfiguration(url))
       }).catch((err)=>{
        console.log(err)
       })
  }

  const genresCall = async()=>{
       let promises = [];
       let endPoints = ["tv","movie"]
       let allGenres = {};
       endPoints.forEach((url)=>{
        return promises.push(fetchDataFromApi(`/genre/${url}/list`))
       })

       const data = await Promise.all(promises)
       

      data.map(({genres}) =>{
        console.log("Genres",genres)
        return genres.map((item)=>(allGenres[item.id]=item))
      })

      dispatch(getGenres(allGenres))

  }
  return (
     <BrowserRouter>
         <Header></Header>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/:mediaType/:id' element={<Details></Details>}></Route>
           <Route path='/search/:query' element={<SearchResult></SearchResult>}></Route>
           <Route path='/explore/:mediaType' element={<Explore></Explore>}></Route>
           <Route path='*' element={<PagenotFound></PagenotFound>}></Route>
         </Routes>
         <Footer></Footer>
     </BrowserRouter>
  )
}

export default App
