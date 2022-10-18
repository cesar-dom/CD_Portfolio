import React, { useState } from "react"
import { CarrerCard } from "../../components/SideBar/components/ExperienceCard"
import { InfoCard } from "../../components/SideBar/components/InfoCard"
import { ProfileCard } from "../../components/SideBar/components/ProfileCard"
import { SkillsCard } from "../../components/SideBar/components/SkillsCard"
import { Timeline } from "../../components/timeline"
import * as S from "./style"

{/* TODO:
1. Componentizar Cards;
2. Fazer responsivo;
3. Melhorar organização com JavaScript (ex: map() na lista de Personal Data)
4. Fazer o subtitulo do profile ficar mudando
*/}


export function Home() {
  return (
    <S.Main>
      <S.Column>
        <ProfileCard />
        <InfoCard />
        <SkillsCard />
        <CarrerCard />
      </S.Column>
      <Timeline />
    </S.Main>
  )
}