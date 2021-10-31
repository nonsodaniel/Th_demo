import * as React from 'react'
import MainLayout from '../../layouts/MainLayout'
import User from '../../components/User'
import Button from '../../components/Button'
import styles from './giveFeedback.module.css'
import { UserT } from '../../context/types'
import GiveFeedbackForm from './FeedbackForm'
import useUsersPendingReview from '../../hooks/useUsersPendingReview'
import GiveFeedbackLoader from './GiveFeedbackLoader'

const GiveFeedback = () => {
  const [feedbackUser, setFeedbackUser] = React.useState<UserT | null>(null)
  const [hasGivenFeedBack, setHasGivenFeedBack] = React.useState(false)

  const handleFeedbackGiven = () => {
    setHasGivenFeedBack(true)
    setFeedbackUser(null)
  }
  const handleGoBack = () => {
    setFeedbackUser(null)
  }
  return (
    <MainLayout loggedIn>
      {feedbackUser ? (
        <GiveFeedbackForm
          user={feedbackUser}
          onFeedbackGiven={handleFeedbackGiven}
          onGoBack={handleGoBack}
        />
      ) : (
        <UserPendingFeedback
          hasGivenFeedBack={hasGivenFeedBack}
          setFeedbackUser={setFeedbackUser}
        />
      )}
    </MainLayout>
  )
}

const UserPendingFeedback: React.FC<{
  setFeedbackUser: (user: UserT) => void
  hasGivenFeedBack: boolean
}> = ({ setFeedbackUser, hasGivenFeedBack }) => {
  const users = useUsersPendingReview()

  return (
    <div className={styles.wrapper}>
      {users && (
        <>
          <h1>
            {hasGivenFeedBack
              ? 'Thank You for sharing your feedback'
              : 'Share Feedback'}
          </h1>
          {hasGivenFeedBack && (
            <p>continue to give feedback to other teams members</p>
          )}
        </>
      )}

      {users ? (
        users.length > 0 && (
          <ul className={styles.users}>
            {users.map((user) => (
              <li key={user.id} className={styles.user}>
                <User name={user.name} avatarUrl={user.avatarUrl} />
                <span style={{ flex: 1 }} />
                <Button
                  onClick={() => {
                    setFeedbackUser(user)
                  }}
                >
                  Fill out
                </Button>
              </li>
            ))}
          </ul>
        )
      ) : (
        <GiveFeedbackLoader />
      )}
    </div>
  )
}

export default GiveFeedback
