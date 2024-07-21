import { memo } from 'react'

interface FlagProps {
  className?: string
  onClick?: () => void
}

const SpainFlagIcon = ({ className, onClick }: FlagProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="none"
      fill="none"
      onClick={onClick}
    >
      <rect width="24" height="24" fill="#C60B1E" />
      <rect y="8" width="24" height="8" fill="#FFC400" />
      <rect y="16" width="24" height="8" fill="#C60B1E" />
    </svg>
  )
}

export default memo(SpainFlagIcon)
