import styled from '@emotion/styled'

export const TimelineColumn = styled.div`
  padding: 2rem 0rem;
  width: 60vw;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const SideBarColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 1rem 0rem 1rem;
  @media (max-width: 425px) {
    padding: 0;
  }
`

export const Main = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
`