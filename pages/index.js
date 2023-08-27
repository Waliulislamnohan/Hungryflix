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

			<header className={styles.banner}>
				<div className={styles.bannerOne}>
				<h2>Hey there this is banner text</h2>
				<img src="https://i.ibb.co/QNVPSSt/hungryflix.png" alt="A beautiful landscape" />
				</div>
				<div>
					<img src='https://i.ibb.co/dBbhzk5/banner.png' />
				</div>
			</header>
		<div>

		</div>
	</>)
}
