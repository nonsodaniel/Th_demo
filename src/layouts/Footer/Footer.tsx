import styles from './footer.module.css'
import logo from './Theorem-logo.svg'

const Footer = () => (
  <footer className={styles.footer}>
    <a href="https://www.theorem.co/">
      <img alt="Theorem logo" src={logo} width={110} />
    </a>
    <small>
      Copyright {new Date().getFullYear()} Theorem, LLC. All Rights Reserved.
    </small>
  </footer>
)

export default Footer
