import { styled } from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  max-height: 80%;
  overflow: auto;

  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    overflow: auto;
    min-width: 600px;

    height: 100%;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }

    tbody {
      overflow: auto;
      max-height: 80%;
    }
  }

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme['gray-600']}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 4px solid ${(props) => props.theme['gray-800']}; /* creates padding around scroll thumb */
  }
`

const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
