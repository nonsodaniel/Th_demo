import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import {
  AccountContext,
  DispatchAccountContext,
} from '../../context/AccountProvider'
import useUsersPendingReview from '../../hooks/useUsersPendingReview'
import { useFeedbacksGiven, useFeedbacksRecieved } from '../../hooks/feedback'
import classNames from 'classnames'

const Header = () => {
  const currentUser = useContext(AccountContext)
  const logoutUser = useContext(DispatchAccountContext)
  const [showMenuOnMobile, setShowMenuOnMobile] = React.useState(false)

  const handleLogout = () => {
    logoutUser({ action: 'logout' })
  }

  const users = useUsersPendingReview()
  const myFback = useFeedbacksGiven()
  const recFback = useFeedbacksRecieved()
  const image = currentUser && currentUser.avatarUrl

  return (
    <div className={styles.header} data-testid="header">
      <NavLink exact to="/" className={styles.link}>
        <h1>Honesto</h1>
      </NavLink>

      <i
        onClick={() => setShowMenuOnMobile((show) => !show)}
        className={`fas fa-bars ${styles.mobileHambugger}`}
      ></i>
      <div
        className={classNames(
          styles.navLinks,
          showMenuOnMobile ? styles.showMenuOnMobile : '',
        )}
      >
        <NavLink
          exact
          to="/share-feedback"
          className={styles.link}
          activeClassName={styles.active}
        >
          Share Feedback{' '}
          <span className={styles.badge}>
            {users?.length ? users.length : 0}
          </span>
        </NavLink>
        <NavLink
          exact
          className={styles.link}
          to="/my-feedback"
          activeClassName={styles.active}
        >
          My Feedback{' '}
          <span className={styles.badge}>
            {myFback?.length ? myFback.length : 0}
          </span>
        </NavLink>
        <NavLink
          exact
          className={styles.link}
          to="/team-feedback"
          activeClassName={styles.active}
        >
          Team Feedback{' '}
          <span className={styles.badge}>
            {recFback?.length ? recFback.length : 0}
          </span>
        </NavLink>
        <NavLink
          exact
          className={styles.link}
          to="/teams"
          activeClassName={styles.active}
        >
          Teams
        </NavLink>

        <NavLink exact className={`${styles.link} ${styles.cycle_days}`} to="#">
          <h5 className={styles.cycle}>Next Feedback Cycle:</h5>
          <p className={styles.date}>
            Sept 2018 - <span className={styles.days_count}>4 day</span>
          </p>
        </NavLink>
        <NavLink exact className={styles.profile} to="/" onClick={handleLogout}>
          <div className={styles.photo}>
            {image && (
              <img
                src={image}
                alt={`${currentUser && currentUser.name}__photo`}
              />
            )}
          </div>
          <div className={styles.name_logout}>
            <span className={styles.name}>
              {currentUser && `${currentUser.name}`}
            </span>
            <span className={styles.logout}>LOGOUT</span>
          </div>
        </NavLink>
      </div>
    </div>
  )
}
export default Header
