import * as React from 'react'
import MainLayout from '../../layouts/MainLayout'
import User from '../../components/User'
import styles from './giveFeedback.module.css'
import useUsersPendingReview from '../../hooks/useUsersPendingReview'

const GiveFeedback = () => {

  const users = useUsersPendingReview()

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        <h1>
          Teams
      </h1>
        {users ? (
          users.length > 0 && (
            <ul className={styles.users}>
              {users.map((user) => (
                <li key={user.id} className={styles.user}>
                  <User name={user.name} avatarUrl={user.avatarUrl} />
                  <span style={{ flex: 1 }} />
                </li>
              ))}
            </ul>
          )
        ) : (
            <div>loading...</div>
          )}
      </div>
  )
    </MainLayout>
  )
}


export default GiveFeedback
