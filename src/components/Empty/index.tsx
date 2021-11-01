import React from 'react'
import Button from '../Button'
import styles from './empty.module.css'

const Empty: React.FC<{
  topText: string
  header: string
  body: string
  buttonText?: string
  onButtonClick?: () => void
}> = ({ header, body, buttonText, topText, onButtonClick = () => {} }) => {
  return (
    <div className={styles.empty_wrap}>
      <span className={styles.topText}>{topText && topText}</span>
      <h1>{header}</h1>
      <p>{body}</p>
      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </div>
  )
}

export default Empty
