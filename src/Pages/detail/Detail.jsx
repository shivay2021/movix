import React from 'react'
import "./style.scss"
import Usefetch from '../../hooks/Usefetch'
import { useParams } from 'react-router-dom'
import DetailsBanner from './detailBanner/DetailsBanner'
import Cast from '../cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from "./carousels/Similar"
import Recommendation from './carousels/Recommendation'
const Detail = () => {
  const {mediaType,id}=useParams()
  const {data,loading} = Usefetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading} = Usefetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}></DetailsBanner>
      <Cast data={credits?.cast} loading={creditsLoading}></Cast>
      <VideosSection data={data} loading={loading}></VideosSection>
      <Similar mediaType={mediaType} id={id}></Similar>
      <Recommendation  mediaType={mediaType} id={id}></Recommendation>
    </div>
  )
}

export default Detail