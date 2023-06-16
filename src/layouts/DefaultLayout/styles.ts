import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  max-height: 46.25rem;
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 1.875rem 0.75rem;
  }
`
