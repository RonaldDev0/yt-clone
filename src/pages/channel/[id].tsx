import { useRouter } from "next/router"

export default function Id() {
  const {query : { id }} = useRouter()

  return(
    <div>{id}</div>
  )
}