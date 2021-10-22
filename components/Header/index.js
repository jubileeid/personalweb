import Link from 'next/link';
import styles from '/styles/Header.module.css'

export default function Header() {
    return (
    <header className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.item}><Link href="/"><a>Kembali ke Index</a></Link></li>
            <li className={styles.item}><Link href="/posts/halodunia"><a>Halo Dunia</a></Link></li>
            <li className={styles.item}><Link href="/about"><a>About Us</a></Link></li>            
        </ul>
    </header>
    );
}