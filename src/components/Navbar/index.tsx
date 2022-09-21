import { useRouter } from 'next/router'
import { useState } from 'react'

import style from './style.module.css'

export default function Navbar({ menu, setMenu }:any) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (search == '') {
      null
    } else if (search == '/home') {
      setSearch('')
      router.push('/')
    } else if (search == '/subs' || search == '/subscriptions') {
      setSearch('')
      router.push('/subscriptions') 
    }else router.push('/search/' + search) 
  }

  return (
    <nav className={style.nav}>
      <div className={style.menu}>
        <button onClick={() => setMenu(!menu)}>Menu</button>
        <button onClick={() => router.push('/')}>Home</button>
      </div>

      <form className={style.input} onSubmit={handleSubmit}>
        <input type='text' placeholder='Search' onChange={e => setSearch(e.target.value)} value={search}/>
      </form>

      <div className={style.search}>
        <button onClick={handleSubmit}>Search</button>
        <button onClick={() => alert('Esta funcion aun no esta disponible')}>Voice</button>
      </div>

      <div className={style.me}>
        <button>Create</button>
        <button>Notifications</button>
        <button>Account</button>
      </div>
    </nav>
  )
}