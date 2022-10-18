import styled from '@emotion/styled'

export const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`

export const Dot = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: hotpink;
`

export const ProjectCardWrapper = styled.div`
  width: 24%;
  height: 8rem;
  padding: 1rem 2rem;
  background: #302F3D;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 5px -1px #000;
  display: flex;
  flex-direction: column;
  /* margin: 1rem; */
  &:hover {
  box-shadow: 1px 1px 10px -1px #000;
  }
  `