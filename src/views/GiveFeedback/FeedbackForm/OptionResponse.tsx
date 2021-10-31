import React from 'react'

type OptionResponseProps = {
  value: string
  options?: {
    label: string
    value: number
  }[]
  onChange: (value: number) => void
}

const OptionResponse: React.FC<OptionResponseProps> = ({
  value: selectedValue,
  options,
  onChange,
}) => {
  return (
    <ul className="response-area">
      {options?.map(({ label, value }) => {
        let className = Number(selectedValue) === value ? 'list active' : 'list'

        return (
          <li key={value} className={className} onClick={() => onChange(value)}>
            {label}
          </li>
        )
      })}
    </ul>
  )
}

export default OptionResponse
