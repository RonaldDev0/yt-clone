import { useRouter } from 'next/router'
import Image from 'next/image'

import style from './style.module.css'

export default function Miniature({ item, index }: any) {
  const router = useRouter()

  return (
    <div className={style.container} onClick={() => router.push('/watch/test')}>
      <Image src='https://i.ytimg.com/vi/HIxEaIBSiTI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnoX90vnFdIV1Ye1_JPTlT93lZqw'
      alt='miniature'
      width={500}
      height={270}
      />
      <div className={style.description}>
        <p className={style.d_text}>title<br />
          channel<br />
          views date</p>
      </div>
    </div>
  )
}