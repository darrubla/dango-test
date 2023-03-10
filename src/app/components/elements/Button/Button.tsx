import { ButtonProps } from '@/app/constants/types'
import { StyledButton } from './Button.styles'

export const Button: React.FC<ButtonProps> = ({ id, action, text }) => {
  return (
    <StyledButton id={`${id}-button`} onClick={action}>
      {text}
    </StyledButton>
  )
}
