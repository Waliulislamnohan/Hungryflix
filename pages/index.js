import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

	return (<>
	  <Head>
        <title>Hungryflix</title>
        <meta name="description" content="The Hunger aid of your ENTERTAINMENT needs" />
        <link rel="icon" href="" />
      </Head>

			
			<nav className={styles.navbar}>
					<ul class="nav justify-content-center">
					<li class="nav-item">
					<div className={styles.logo}>
	  <img src='https://i.ibb.co/K9Nf7H7/hungryflix-logo.png' />
	  </div>
				</li>

				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
				</ul>		
			</nav>
			<div className={styles.heading}>
				
			</div>
			<header className={styles.banner}>
				<div className={styles.bannerOne}>
				<h2>Elevate your entertainment experience with Hungryflix!</h2>
				 <p>
				 About Us: Hungryflix (a sister consultant company of Base It ) is a leading provider of all kind of movie series streaming platform and all kind of educational & professional software subscriptions. We are specialized in offering premium movie series streaming platforms like Netflix, Amazon Prime, Spotify Premium, HoiChoi, Chorki, Disney+, HBO Max, Premium VPNs and all kind of educational software like Chat GPT-4, Grammarly, Chegg, Copy Ai, Bartleby, Canva, Quilbot, Turnitin and all kind of professional software like Adobe, Windows, Microsoft 365 license keys and more.
				 </p>
				</div>
				<div>
					
					<img src="https://i.ibb.co/kXvSz0V/Stream-it-from-your-mobile-Tv-Laptop.png" alt="A beautiful landscape" />
				</div>
			</header>
		<div className={styles.sectionOne}>
			<button>Contact Us</button>
		</div>
		<div className={styles.sectionTwo}>
			<div><img src='https://i.ibb.co/5hD0n7k/media.png' /></div>
			<div><img src='https://i.ibb.co/JmxB5NJ/sub.png' /></div>
			
			
		</div>
		<div className={styles.sectionThree}> 

		</div>
	</>)
}
