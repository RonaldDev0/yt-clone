import { useState } from 'react'
import Miniature from '../components/Miniature'
import style from '../styles/style.module.css'

export default function Home({ menu }:any) {
  const [videos, setVideos] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ])

  return (
    <div className={menu? style.container_min : style.container_max}>
      {videos.map((item: {}, index: number) => (
        <Miniature key={index} item={item} index={index} />
      ))}
    </div>
  )
}