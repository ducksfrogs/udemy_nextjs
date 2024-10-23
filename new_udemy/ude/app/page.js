import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to this nextjs course!!!</h1>
      {/* <p><a href="/about">About Us</a></p> */}
      <p><Link href="/about">About Us</Link></p>
    </div>
  );
}
