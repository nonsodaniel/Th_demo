import React from 'react'

type TextResponseProps = {
  value: string
  onChange: (value: string) => void
}

const TextResponse: React.FC<TextResponseProps> = ({
  value = '',
  onChange,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    onChange(target.value)
  }

  return (
    <div className="response-area">
      <textarea
        value={value}
        className="text-area"
        onChange={handleChange}
        placeholder="Say Something"
      />
    </div>
  )
}

export default TextResponse
