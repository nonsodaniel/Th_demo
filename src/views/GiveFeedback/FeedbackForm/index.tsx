import * as React from 'react'
import './feedback-form.css'
import { QuestionContext } from '../../../context/QuestionProvider'
import OptionResponse from './OptionResponse'
import TextResponse from './TextResponse'
import ScaleResponse from './ScaleResponse'
import { DispatchFeedbackContext } from '../../../context/FeedbackProvider'
import { AccountContext } from '../../../context/AccountProvider'
import { UserT } from '../../../context/types'

type AnswerT = {
  question: string
  answer: any
}

const GiveFeedbackForm: React.FC<{
  user: UserT
  onFeedbackGiven: () => void
  onGoBack: () => void
}> = ({ user, onFeedbackGiven, onGoBack }) => {
  const authUser = React.useContext(AccountContext)
  const questions = React.useContext(QuestionContext)
  const feedbackDispatch = React.useContext(DispatchFeedbackContext)
  const [activeQuestionIndex, setActiveQuestionIndex] =
    React.useState<number>(0)

  const [questionAnswers, setQuestionAnswers] = React.useState<
    Map<string, AnswerT>
  >(new Map())

  if (!questions) return null

  const activeQuestion = questions[activeQuestionIndex]
  const questionAnswer = questionAnswers.get(activeQuestion.id)
  const isLastQuestion = activeQuestionIndex === questions.length - 1
  const disableNext = activeQuestion.required && questionAnswer === undefined

  const handleGoToNextQuestion = () => {
    if (!isLastQuestion) {
      setActiveQuestionIndex((currentIndex) => currentIndex + 1)
      return
    }
    saveFeedBack()
  }

  const handleSkipQuestion = () => {
    if (!activeQuestion.required) {
      handleSetQuestionAnswer(null)
      handleGoToNextQuestion()
    }
  }

  const handleGoToPreviousQuestion = () => {
    setActiveQuestionIndex((currentIndex) => currentIndex - 1)
  }

  const handleSetQuestionAnswer = (value: any) => {
    questionAnswers.set(activeQuestion.id, {
      question: activeQuestion.label,
      answer: value,
    })
    setQuestionAnswers(new Map(questionAnswers))
  }

  const saveFeedBack = () => {
    feedbackDispatch({
      action: 'add',
      payload: {
        feedbackFrom: authUser,
        feedbackTo: user,
        feedbackQuestionResponses: Array.from(questionAnswers.values()),
      },
    })
    onFeedbackGiven()
  }

  const goBack = () => {
    onGoBack()
  }
  return (
    <div className="feedback-form">
      <span className="goBack" onClick={goBack}>
        <i className="fas fa-chevron-left"></i> Back
      </span>
      <div className="desc_photo">
        <div className="desc">
          <h1>{activeQuestion.label}</h1>
          <p>SHARE YOUR FEEDBACK FOR {user.name}</p>
        </div>
        <div className="photo">
          <img src={user.avatarUrl} alt={`${user.name}__photo`} />
        </div>
      </div>

      <div className="question-response-section">
        {
          {
            multipleChoice: (
              <OptionResponse
                value={questionAnswer?.answer}
                options={activeQuestion.options}
                onChange={handleSetQuestionAnswer}
              />
            ),
            scale: (
              <ScaleResponse
                value={questionAnswer?.answer}
                label={activeQuestion.label}
                onChange={handleSetQuestionAnswer}
              />
            ),
            text: (
              <TextResponse
                value={questionAnswer?.answer}
                onChange={handleSetQuestionAnswer}
              />
            ),
          }[activeQuestion.type]
        }
        <div className="paginate">
          <button
            disabled={activeQuestionIndex < 1}
            onClick={handleGoToPreviousQuestion}
            className="prev btn"
          >
            Previous
          </button>
          <button
            disabled={activeQuestion.required}
            onClick={handleSkipQuestion}
            className="prev btn"
          >
            Skip
          </button>
          <button
            disabled={disableNext}
            onClick={handleGoToNextQuestion}
            className="prev btn"
          >
            {isLastQuestion ? 'Share' : 'Next'}
          </button>
        </div>
        <div className="bottom">
          <div className="progress-wrap">
            <progress
              className="progress"
              id="file"
              value={(activeQuestionIndex / questions.length) * 100}
              max="100"
            >
              {activeQuestionIndex / questions.length}%
            </progress>
          </div>
          <div className="qstn-rating">
            <div className="qstn">
              <h5 className="qstn-completed">QUESTIONS COMPLETED</h5>
              <p>
                {activeQuestionIndex + 1}/{questions.length}
              </p>
            </div>
            <div className="rating">
              <span className="tooltip">
                <i className="far fa-flag"></i>
                <span className="tooltiptext">
                  I have feedback about this question, please ask me about it.{' '}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiveFeedbackForm
