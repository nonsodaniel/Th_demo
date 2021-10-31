import React from 'react'
import Rating from 'react-rating'

type ScaleResponseProps = {
  label: string
  value: number
  onChange: (value: number) => void
}

const ScaleResponse: React.FC<ScaleResponseProps> = ({
  label,
  value = 0,
  onChange,
}) => {
  return (
    <div className="response-area">
      <div className="rating_area">
      <Rating start={1} stop={10} initialRating={value} onChange={onChange} />
      </div>

    </div>
  )
}

export default ScaleResponse
