import styled from '@emotion/styled'

export const SkillName = styled.p`
 margin: .2rem;
 font-size: large;
 &:hover {
  font-weight: 600;
  color: hotpink;
 }
`
export const SkillNameCol = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 width: 100%;
 @media (max-width: 425px) {
  text-align: right;
  width: 42%;
  }
`
export const SkillNameRow = styled.div`
 display: flex;
 flex-direction: row;
`

export const SkillsSetContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0 4rem;
  width: 60%;
  @media (max-width: 425px) {
  padding: 0;
  width: 100%;
  }
`

export const SkillsTitle = styled.h2`
 margin: .4rem;
`

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
 width: 100%;

`