import { styled } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    justify-content: flex-start;
    font-size: 1rem;
  }
`
const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    height: 2rem;
  }
`

export const TaskInputs = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInputs = styled(BaseInput)`
  width: 4rem;
`
