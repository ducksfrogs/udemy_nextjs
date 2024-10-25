import Link from "next/link";
import logoImg from '@/assets/logo.jpg';

export default function MainHeader() {
    return <header>
        <Link href={"/"}>
            <img src={logoImg.src} />
            next food
        </Link>

        <nav>
            <ul>
                <li>
                    <Link href={'/meals'}>Brolw</Link>
                </li>
            </ul>
        </nav>
    </header>
} 