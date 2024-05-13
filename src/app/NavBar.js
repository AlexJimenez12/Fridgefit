import Link from 'next/link';
import styles from './NavBar.module.css';  // Ensure your CSS module path is correct

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/fridge" className={styles.navLink}>
                        Fridge
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/recipes" className={styles.navLink}>
                        Recipes
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/grocery-list" className={styles.navLink}>
                        Grocery List
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/login" className={`${styles.navLink} ${styles.loginButton}`}>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
