import React, { useEffect } from 'react'
import "./style.scss"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usefetch from '../../../hooks/Usefetch'
import { useSelector } from 'react-redux'
import Img from "../../../component/lazyLoadImage/Img"
import ContentWrapper from "../../../component/contentWrapper/ContentWrapper"


const HeroBanner = () => {
   const navigate = useNavigate();
   const [background, setBackground] = useState("")
   const [query, setQuery] = useState("")
   const { url } = useSelector((state) => state?.home)

   const { data, loading } = Usefetch("/tv/top_rated")
   console.log(data);

   useEffect(() => {
      const bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
      setBackground(bg)
   }, [data])

   const searchQueryHandler = (event) => {
      if (event?.key == "Enter" && query?.length > 0) {
         navigate(`/search/${query}`)
      }
   }
   return (
      <div className="heroBanner">
         {
            !loading && <div className="backdrop-img">
               {!!background && <Img src={background}></Img>}
               
               {/* <img src={background} alt="" /> */}
            </div>
         }
         <div className="opacity"></div>
         <ContentWrapper>
            <div className="heroBannerContent">
               <span className='title'>Welcome</span>
               <span className='subTitle'>
                  Millions of movies,TV shows and people to discover.Explore now.
               </span>
               <div className="searchInput">
                  <input type="text" name="" id="" placeholder='search for a movie or a tv show' onChange={(e) => setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
                  <button >Search</button>
               </div>
            </div>
         </ContentWrapper>
      </div>
   )
}

export default HeroBanner