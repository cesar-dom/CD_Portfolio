import * as S from "./style"
import * as Style from "../../style"
import ReactTooltip from "react-tooltip"

export function SkillsCard() {
  return (
    <Style.ColumnCard>
      <ReactTooltip
        disable
      // delayHide={1000}
      />
      <S.SkillsContent>
        <S.SkillsTitle>Skills</S.SkillsTitle>
        <S.SkillsSetContent>
          <S.SkillNameCol>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>HTML</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>CSS</S.SkillName>
            <S.SkillName data-tip="Básico" data-delay-hide='1000'>Javascript</S.SkillName>
            <S.SkillName data-tip="Básico" data-delay-hide='1000'>React</S.SkillName>
            <S.SkillName data-tip="Iniciante" data-delay-hide='1000'>AWS</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>Illustrator</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>Photoshop</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>Premiere</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>Oratory</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>Facilitator</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>Methodologies</S.SkillName>
          </S.SkillNameCol>
          <S.SkillNameCol>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>● ● ● ● ○</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>● ● ● ● ○</S.SkillName>
            <S.SkillName data-tip="Básico" data-delay-hide='1000'>● ● ○ ○ ○</S.SkillName>
            <S.SkillName data-tip="Básico" data-delay-hide='1000'>● ● ○ ○ ○</S.SkillName>
            <S.SkillName data-tip="Iniciante" data-delay-hide='1000'>● ○ ○ ○ ○</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>● ● ● ● ●</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>● ● ● ● ○</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>● ● ● ● ○</S.SkillName>
            <S.SkillName data-tip="Avançado" data-delay-hide='1000'>● ● ● ● ○</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>● ● ● ● ●</S.SkillName>
            <S.SkillName data-tip="Especialista" data-delay-hide='1000'>● ● ● ● ●</S.SkillName>
          </S.SkillNameCol>
        </S.SkillsSetContent>
      </S.SkillsContent>
    </Style.ColumnCard>
  )
}