import * as React from 'react'
import Empty from '../../components/Empty'
import User from '../../components/User'
import { useFeedbacksRecieved } from '../../hooks/feedback'
import MainLayout from '../../layouts/MainLayout'
import styles from '../ReviewFeedback/reviewFeedback.module.css'
import classNames from 'classnames'
import Rating from 'react-rating'

const ReviewFeedback = () => {
  const feedbacks = useFeedbacksRecieved()
  const [activeFeedbackTab, setActiveFeedbackTab] = React.useState(0)
  return (
    <MainLayout loggedIn>
      {feedbacks?.length ? (
        <div className={styles.feedbackContainer}>
          <ul className={styles.users}>
            {feedbacks.map((feedback, index) => (
              <li
                className={classNames(
                  index === activeFeedbackTab ? styles.activeUserTab : '',
                )}
                key={feedback.feedbackTo.id}
                onClick={() => setActiveFeedbackTab(index)}
              >
                <User {...feedback.feedbackTo} />
              </li>
            ))}
          </ul>
          {feedbacks.map((feedback, index) => (
            <ul
              className={classNames(
                styles.feedback,
                index === activeFeedbackTab ? styles.feedbackActive : '',
              )}
            >
              <li>
                <h3> {feedback.feedbackTo.name}'s Feedback</h3>
              </li>
              {feedback.feedbackQuestionResponses.map(
                ({ answer, question }) => (
                  <li>
                    <div>
                      <h1 className={styles.question}>{question}</h1>
                    </div>
                    <div className="answer">
                      <p>
                        {answer ? (
                          <>
                            {typeof answer === 'number' ? (
                              <Rating
                                placeholderSymbol={styles.rating}
                                className={styles.rating}
                                start={1}
                                stop={10}
                                initialRating={answer}
                                readonly
                              />
                            ) : (
                              <span>{answer}</span>
                            )}
                          </>
                        ) : (
                          <span className={styles.skipped}>SKIPPED</span>
                        )}
                      </p>
                    </div>
                  </li>
                ),
              )}
            </ul>
          ))}
        </div>
      ) : (
        <Empty
          topText=""
          header="No feedback to display 🔮"
          body="There is no feedback to display at this time - check back in a bit!"
        />
      )}
    </MainLayout>
  )
}

export default ReviewFeedback
