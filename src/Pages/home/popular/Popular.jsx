import React, { useState } from 'react'
import ContentWrapper from '../../../component/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../component/switchTabs/SwitchTabs'
import Usefetch from '../../../hooks/Usefetch'
import Carousel from '../../../component/carousel/Carousel'

const Popular = () => {
    const [endpoint,setEndpoint] = useState("movie")
    const {data,loading} = Usefetch(`/${endpoint}/popular`)
    const onTabChange = (tab)=>{
          setEndpoint(tab==="Movies"?"movie":"tv")
    }
  return (
    <div className='crouselSection'>
       <ContentWrapper>
          <span className='crouselTitle'>What's Popular</span>
          <SwitchTabs data = {["Movies","TV Shows"]} onTabChange={onTabChange}></SwitchTabs>
       </ContentWrapper>
       <Carousel data={data?.results} loading={loading} endpoint={endpoint}></Carousel>
    </div>
  )
}

export default Popular