import * as React from 'react'
import { UserT } from './types'

type DispatchFeedbackContextT = any

export type AnswerT = {
  question: string
  answer: any
}

export type FeedbackT = {
  feedbackFrom: UserT
  feedbackTo: UserT
  feedbackQuestionResponses: AnswerT[]
}

export const DispatchFeedbackContext =
  React.createContext<DispatchFeedbackContextT | null>(null)

export const FeedbackContext = React.createContext<FeedbackT[] | null>(null)

type SetFeedbackT = {
  action: 'add'
  payload: FeedbackT
}

const reducer = (
  state: FeedbackT[] | null,
  update: SetFeedbackT,
): FeedbackT[] | null => {
  if (update.action === 'add') {
    if (state && state.length) {
      return [...state, update.payload]
    }
    return [update.payload]
  }

  return state
}

const UIProvider = ({ children }: { children: React.ReactNode }): any => {
  const [state, dispatch] = React.useReducer(reducer, [])
  return (
    <DispatchFeedbackContext.Provider value={dispatch}>
      <FeedbackContext.Provider value={state}>
        {children}
      </FeedbackContext.Provider>
    </DispatchFeedbackContext.Provider>
  )
}

export default UIProvider
