import React, { useState } from "react"
import LanguageSwitch from "../../components/LanguageSwitch"
import { CarrerCard } from "../../components/SideBar/components/ExperienceCard"
import { InfoCard } from "../../components/SideBar/components/InfoCard"
import { ProfileCard } from "../../components/SideBar/components/ProfileCard"
import { SkillsCard } from "../../components/SideBar/components/SkillsCard"
import { Timeline } from "../../components/timeline"
import * as S from "./style"

export function Home() {
  return (
    <S.Main>
      <LanguageSwitch></LanguageSwitch>
      <S.SideBarColumn>
        <ProfileCard />
        <InfoCard />
        <SkillsCard />
        <CarrerCard />
      </S.SideBarColumn>
      <S.TimelineColumn>
        <Timeline />
      </S.TimelineColumn>
    </S.Main>
  )
}