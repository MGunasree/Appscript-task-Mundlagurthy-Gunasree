import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a>LOGO</a>
        </div>
        <div className={styles.icons}>
          <span className={styles.icon}>🔍</span> {/* Search icon */}
          <span className={styles.icon}>💖</span> {/* Love symbol */}
          <span className={styles.icon}>🛍️</span> {/* Bag icon */}
          <span className={styles.icon}>👤</span> {/* User icon */}
          <select className={styles.languageDropdown}>
            <option value="en">ENG</option>
            <option value="es">SPA</option>
            <option value="fr">FRE</option>
          </select>
        </div>
      </header>
    </>
  );
};

export default Header;
