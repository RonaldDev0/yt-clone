import { useRouter } from 'next/router'

import style from './style.module.css'

export default function Watch({ menu, setMenu }:any) {
  const {query: {id}} = useRouter()

  return(
    <div className={menu? style.container_min : style.container_max}>
      <iframe width='1650' height='800' src='https://www.youtube.com/embed/SK37InR9j38' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen={true}></iframe>
      <h4>{id}</h4>
    </div>
  )
}