import * as S from "./style"
import * as Style from "../../style"


export function CarrerCard() {
  return (
    <>
      <Style.ColumnCard>
        <S.SkillsContent>
          <S.SkillsTitle>Experience</S.SkillsTitle>
          <S.SkillsSetContent>
            <S.SkillNameCol>
              <S.SkillNameRow>
                <S.SkillName>Gamifica.ai</S.SkillName>
                <S.SkillValue ><strong>CEO</strong><br />2018 — 2022</S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Ekoá Jogos</S.SkillName>
                <S.SkillValue ><strong>Head of Development</strong><br />2017 — 2021 </S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Empreendi na Rede</S.SkillName>
                <S.SkillValue ><strong>Designer</strong><br />2017</S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Federal Senate</S.SkillName>
                <S.SkillValue ><strong>Intern</strong><br />2015 — 2017</S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Supernova Tec</S.SkillName>
                <S.SkillValue ><strong>Project Manager</strong><br />2014 — 2015</S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Concentro</S.SkillName>
                <S.SkillValue ><strong>Designer Junior</strong><br />2014 — 2015</S.SkillValue>
              </S.SkillNameRow>
              <S.SkillNameRow>
                <S.SkillName>Lamparina Design</S.SkillName>
                <S.SkillValue ><strong>Designer Junior</strong><br />2014 — 2015</S.SkillValue>
              </S.SkillNameRow>
            </S.SkillNameCol>
          </S.SkillsSetContent>
        </S.SkillsContent>
      </Style.ColumnCard>
      <Style.ColumnCard>
        <S.SkillsContent>
          <S.SkillsTitle>Education</S.SkillsTitle>
          <S.SkillsSetContent>
            <S.SkillNameCol>
              <S.SkillNameRow>
                <S.SkillName>
                  <strong>University of Brasília (UnB)</strong>
                </S.SkillName>

                <S.SkillValue>
                  <strong>Design</strong> (Industrial Design)
                  2013 — 2018<br />
                </S.SkillValue>
              </S.SkillNameRow>
            </S.SkillNameCol>

            {/* » <S.SkillName>
              <strong>O&G Brasil / DataShield</strong><br />
              2019<br />
              Formação Data Protection Officer (LGPD)
            </S.SkillName>
            » <S.SkillName>
              <strong>Perestroika</strong><br />
              2015<br />
              Alfabetização em Futuros (Futurismo)
            </S.SkillName> */}
          </S.SkillsSetContent>
        </S.SkillsContent>
      </Style.ColumnCard>
    </>
  )
};
