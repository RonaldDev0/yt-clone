import style from './style.module.css'

export default function Menu() {
  return(
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.fastAcces}>Home</div>
        <div className={style.fastAcces}>Explore</div>
        <div className={style.fastAcces}>Shorts</div>
        <div className={style.fastAcces}>Subscriptions</div>
        <br />
      </div>
      <div className={style.section}>
        <div className={style.fastAcces}>Library</div>
        <div className={style.fastAcces}>History</div>
        <div className={style.fastAcces}>Your videos</div>
        <div className={style.fastAcces}>Watch later</div>
        <div className={style.fastAcces}>Liked videos</div>
        <br />
      </div>
      <div className={style.section}>
        <p>SUSCRIPTIONS</p>
        <div className={style.fastAcces}>Westcol</div>
        <div className={style.fastAcces}>Spreen</div>
        <div className={style.fastAcces}>Penyair</div>
        <div className={style.fastAcces}>F*cksNews</div>
        <div className={style.fastAcces}>Platzi</div>
        <br />
      </div>
      <div className={style.section}>
        <p>EXPLORE</p>
        <div className={style.fastAcces}>Gaming</div>
        <div className={style.fastAcces}>Live</div>
        <div className={style.fastAcces}>Fashin & Beauty</div>
        <div className={style.fastAcces}>Learning</div>
        <div className={style.fastAcces}>Sports</div>
        <br />
      </div>
      <div className={style.section}>
        <p>MORE FROM YOUTUBE</p>
        <div className={style.fastAcces}>YouTube Premiun</div>
        <div className={style.fastAcces}>Creator Studio</div>
        <div className={style.fastAcces}>YouTube Kids</div>
        <div className={style.fastAcces}>YouTube TV</div>
        <br />
      </div>
      <div className={style.section}>
        <div className={style.fastAcces}>Settings</div>
        <div className={style.fastAcces}>Report History</div>
        <div className={style.fastAcces}>Help</div>
        <div className={style.fastAcces}>Send feedback</div>
        <br />
      </div>
      <div>
        <div>About Press Copyright Contact us Creators Advertise Developers</div><br />
        <div>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</div><br />
        <p>© 2022 Google LLC</p>
      </div>
    </div>
  )
}