import { useState } from 'react'
import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import ProjectCards from './components/ProjectCard'
import * as S from './style'

export function Timeline() {
  const wppNumber = import.meta.env.VITE_WPP_NUMBER
  const wppText = "Hello,+there!+Feel+free+to+say+hi.++I+can't+wait+to+meet+you."
  const wppLink = `https://api.whatsapp.com/send/?phone=${wppNumber}&text=${wppText}&type=phone_number&app_absent=0`

  return (
    <S.TimelineContentBody>
      <S.TimelineTitleCard>
        <S.TimelineTitleCardH2>My projects</S.TimelineTitleCardH2>
      </S.TimelineTitleCard>
      {/* <S.TimelineTitleCard>
        <S.TimelineTitleCardH2>Audio Player</S.TimelineTitleCardH2>
        <audio
        controls
        src="https://nerdcast-cdn.jovemnerd.com.br/nerdtech_81.mp3">
        </audio>
      </S.TimelineTitleCard> */}
      <ProjectCards />
      <S.TimelineTitleCard>
        {/* <S.TimelineTitleCardH2>Recent Posts</S.TimelineTitleCardH2> */}
        <S.TimelineTitleCardH2>Contact me</S.TimelineTitleCardH2>
        <a
          href={wppLink}
          target="_blank"
          rel="noopener noreferrer">
          <S.WppIcon src="whatsapp-icon.svg" alt="wpp-icon" />
        </a>
      </S.TimelineTitleCard>
      <ContactForm />
    </S.TimelineContentBody>
  )
}