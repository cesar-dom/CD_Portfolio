import styled from '@emotion/styled'

export const SkillValue = styled.p`
  margin: 0;
 font-size: smaller;
  width: 50%;
 text-align: left;
 &:hover {
  color: hotpink;
 }
`

export const SkillName = styled.p`
 margin: 0;
 font-size: large;
 width: 50%;

 &:hover {
  color: hotpink;
 }
`

export const SkillValueCol = styled.div`
 display: flex;
 flex-direction: column;
 align-items: start;
 width: 100%;
 margin-left: .5rem;
`

export const SkillNameCol = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 width: 100%;
 text-align: right;
 gap: .2rem;
`
export const SkillNameRow = styled.div`
 display: flex;
 flex-direction: row;
 gap: 1rem;
 width: 100%;
`

export const SkillsSetContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 1rem 0;
  width: 100%;
`

export const SkillsTitle = styled.h2`
 margin: .4rem;
`

export const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
 width: 100%;

`