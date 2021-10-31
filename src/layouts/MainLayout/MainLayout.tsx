import * as React from 'react'
import classnames from 'classnames'
import Content from '../Content'
import Footer from '../Footer'
import Header from '../Header'
import styles from './mainLayout.module.css'

type Props = {
  children: React.ReactNode
  loggedIn?: boolean
  className?: string
}

// styles.darkMode
const MainLayout = ({ children, loggedIn, className }: Props) => (
  <div
    className={classnames(styles.mainLayout, className, {
      [styles.loggedIn]: loggedIn,
    })}
  >
    {loggedIn && <Header />}
    <Content>{children}</Content>
    {loggedIn && <Footer />}
  </div>
)


export default MainLayout
