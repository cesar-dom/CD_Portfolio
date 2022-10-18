import styled from '@emotion/styled'
import SVG from "react-inlinesvg";


export const DataIcon = styled(SVG)`
  width: 1.5rem;
  height: 1.5rem;
`

export const PersonalDataLine = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  width: 18rem;
  text-decoration: none;
  color: #B5B1CE;
  &:hover: {
    color: hotpink;
  }
`

export const PersonalDataContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`