import * as S from "./style"
import * as Style from "../../style"
import { useEffect, useState } from "react"

export function InfoCard() {
  return (
    <Style.ColumnCard>
      <S.PersonalDataContent>
        <S.PersonalDataLine href='https://goo.gl/maps/2JM5UeuDmgtQYv5y8' target='__blank'>
          <S.DataIcon src='/map-pin.svg' /> <p>Brasil • Brasília</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine href='https://github.com/cesar-dom' target='__blank'>
          <S.DataIcon src='/github.svg' /> <p>cesar-dom</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine href='https://www.linkedin.com/in/c%C3%A9sar-domingos-6768bb116/' target='__blank'>
          <S.DataIcon src='/linkedin.svg' /> <p>César Domingos</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine href='https://twitter.com/sonecadom' target='__blank'>
          <S.DataIcon src='/twitter.svg' /> <p>@sonecadom</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine href='https://gamifica.ai' target='__blank'>
          <S.DataIcon src='/globe.svg' /> <p>gamifica.ai</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine>
          <S.DataIcon src='/mail.svg' /> <p>cesinhaobdc@gmail.com</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine
          href="/Curriculum_Vitae_César_Domingos_outubro_2022_en.pdf" target="_blank">
          <S.DataIcon src='/star.svg' /> <p>Download Curriculum</p>
        </S.PersonalDataLine>
        <S.PersonalDataLine
          href="/" target="_blank">
          <S.DataIcon src='/whatsapp-icon.svg' /> <p>Contact Me</p>
        </S.PersonalDataLine>
      </S.PersonalDataContent>
    </Style.ColumnCard>
  )
}