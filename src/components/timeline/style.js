import styled from '@emotion/styled'
import SVG from "react-inlinesvg";


export const WppIcon = styled(SVG)`
 width: 2rem;
 height: auto;
 padding: .2rem;
 
  &:hover {
    background: linear-gradient(45deg, #9B47DD, #FFBC00);
    color: #302F3D;
    border-radius: .2rem;
  }
 
`

export const TimelineTitleCardH2 = styled.h2`
 margin: 1rem;
`

export const TimelineTitleCard = styled.div`
  padding: 1rem;
  background: #302F3D;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 5px #000;
  display: flex;
  align-items: center;
  margin: 1rem;
`

export const TimelineContentBody = styled.div`
  width: 100%;
`

