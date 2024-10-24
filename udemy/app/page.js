import Link from "next/link";

import Header from '@/components/header';


export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href={"/about"}>About Us</Link> </p>
      <p><Link href={"/meals"}>meals</Link> </p>
      <p><Link href={"/meals/share"}>Share Meals</Link> </p>
      <p><Link href={"/meals/community"}>community</Link> </p>
    </main>
  );
}
