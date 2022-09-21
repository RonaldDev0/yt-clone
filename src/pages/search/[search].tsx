import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Results from '../../components/Rerults'

export default function Search() {
  const [result, setResult] = useState()

  const {query: { search }} = useRouter()

  return(
    <div>
      {search}
    </div>
  )
}