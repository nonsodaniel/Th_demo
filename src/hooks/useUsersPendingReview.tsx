import React from 'react'
import { AccountContext } from '../context/AccountProvider'
import { FeedbackContext } from '../context/FeedbackProvider'
import { UserT } from '../context/types'
import { UserContext } from '../context/UserProvider'

const useUsersPendingReview = (): UserT[] | null => {
  const authUser = React.useContext(AccountContext)
  const feedbacks = React.useContext(FeedbackContext)
  const users = React.useContext(UserContext)

  if (!users || !feedbacks || !authUser) return null

  const usersWithFeedBack: { [key: string]: UserT } = {}

  feedbacks.reduce((usersMap, feedback) => {
    if (feedback.feedbackFrom.id === authUser.id) {
      usersMap[feedback.feedbackTo.id] = feedback.feedbackTo
    }
    return usersMap
  }, usersWithFeedBack)

  return users?.filter((user) => {
    if (user.id === authUser.id) {
      return false
    }
    return !usersWithFeedBack[user.id]
  })
}

export default useUsersPendingReview
