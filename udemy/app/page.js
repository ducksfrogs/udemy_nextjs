import Link from "next/link";

import classes from './page.module.css';
// import Header from '@/components/header';
import MainHeader from "@/components/main-header/main-header";

export default function Home() {
  return (

      <>
      
       <MainHeader />
        <header className={classes.header}>
          <div className={classes.slideshow}>


          </div>
          <div>
            <div className={classes.hero}>
              <h1>Next level hoood</h1>
              <p>tatest %% yrda</p>
            </div>
            <div className={classes.cta} >
              <Link href={"/community"} >community</Link>
              <Link href={"/meals"} >meals</Link>

            </div>
          </div>
        </header>
      

      <main>
           <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
      </>
    // <main>
      // <MainHeader />
    //   {/* <Header /> */}
    //   <p>🔥 Let&apos;s get started! 🔥</p>
    //   <p><Link href={"/about"}>About Us</Link> </p>
    //   <p><Link href={"/meals"}>meals</Link> </p>
    //   <p><Link href={"/meals/share"}>Share Meals</Link> </p>
    //   <p><Link href={"/community"}>community</Link> </p>
    // </main>
  );
}
