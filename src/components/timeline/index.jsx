import { ContactForm } from './components/ContactForm'
import ProjectCards from './components/ProjectCard'
import * as S from './style'

export function Timeline() {
  return (
    <S.TimelineContentBody>
      <S.TimelineTitleCard>
        <S.TimelineTitleCardH2>My projects</S.TimelineTitleCardH2>
      </S.TimelineTitleCard>
      <ProjectCards />
      <S.TimelineTitleCard>
        {/* <S.TimelineTitleCardH2>Recent Posts</S.TimelineTitleCardH2> */}
        <S.TimelineTitleCardH2>Contact me</S.TimelineTitleCardH2>
      </S.TimelineTitleCard>
      <ContactForm />
    </S.TimelineContentBody>
  )
}