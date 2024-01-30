import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import Usefetch from '../../../hooks/Usefetch'
import Carousel from '../../../component/carousel/Carousel'

const Trending = () => {
    const [endpoint,setEndpoint] = useState("day")
    const {data,loading} = Usefetch(`/trending/all/${endpoint}`)
    const onTabChange = (tab)=>{
          setEndpoint(tab==="Day"?"day":"week")
    }
  return (
    <div className='crouselSection'>
       <ContentWrapper>
          <span className='crouselTitle'>Trending</span>
          <SwitchTabs data = {["Day","Week"]} onTabChange={onTabChange}></SwitchTabs>
       </ContentWrapper>
       <Carousel data={data?.results} loading={loading}></Carousel>
    </div>
  )
}

export default Trending