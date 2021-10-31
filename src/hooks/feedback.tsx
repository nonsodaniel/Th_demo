import React from 'react'
import { AccountContext } from '../context/AccountProvider'
import { FeedbackContext, FeedbackT } from '../context/FeedbackProvider'

export const useFeedbacksGiven = (): FeedbackT[] | null => {
  const feedbacks = React.useContext(FeedbackContext)
  const user = React.useContext(AccountContext)

  if (!user || !feedbacks) {
    return null
  }

  return feedbacks.filter((feedback) => feedback.feedbackFrom.id === user.id)
}

export const useFeedbacksRecieved = (): FeedbackT[] | null => {
  const feedbacks = React.useContext(FeedbackContext)
  const user = React.useContext(AccountContext)

  if (!user || !feedbacks) {
    return null
  }

  return feedbacks.filter((feedback) => feedback.feedbackTo.id === user.id)
}
