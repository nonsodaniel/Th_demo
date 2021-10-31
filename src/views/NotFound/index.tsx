import { useHistory } from 'react-router-dom'
import Empty from '../../components/Empty'
import styles from './notFound.module.css'

const NotFound = () => {
  const history = useHistory()
  return (
    <div className={styles.notFound} data-testid="not_found_wrapper">
      <Empty
        header="No Team feedback to display 🔮"
        body="There is no feedback to display at this time - check back in a bit!"
        buttonText="Back to  Share Feedback"
        onButtonClick={() => history.push('/share-feedback')}
        data-testid="empty"
      />
    </div>
  )
}

export default NotFound
