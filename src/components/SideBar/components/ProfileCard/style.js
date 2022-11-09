import styled from '@emotion/styled'

export const ProfileIntroContainer = styled.div`
  height: 20rem;
  overflow-y: scroll;
  padding-right: 1rem;
  margin-top: 1rem;
`

export const ProfileSubtitle = styled.p`
  margin: 0;
  font-weight: 200;
`

export const ProfileTitle = styled.h2`
  margin: 0;
  margin-top: 1rem;
`

export const ProfileImg = styled.img`
  width: 8rem;
  height: 8rem;
  border: solid 4px transparent;
  border-radius: 50%;
  background-image: linear-gradient(90deg, white, white), radial-gradient(circle at top right, #FFBC00, #9B47DD);
  background-origin: border-box;
  background-clip: content-box, border-box;
  :hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`