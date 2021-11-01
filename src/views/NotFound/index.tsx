import { useHistory } from 'react-router-dom'
import Empty from '../../components/Empty'
import MainLayout from '../../layouts/MainLayout'
import styles from './notFound.module.css'

const NotFound = () => {
  const history = useHistory()
  return (
    <MainLayout loggedIn>
      <div className={styles.notFound} data-testid="not_found_wrapper">
        <div className={styles.empty_wrap}>
          <Empty
            topText="404"
            header="Sorry! The page you are looking for cannot be found. 😢"
            body=""
            buttonText="Back to Share Feedback"
            onButtonClick={() => history.push('/share-feedback')}
            data-testid="empty"
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFound
