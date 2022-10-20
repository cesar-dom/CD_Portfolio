import * as S from "./style"
import * as Style from "../../style"
import { useEffect, useState } from "react"

export function ProfileCard() {
  const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  const statusArray = ["Graphic Designer", "Front-end Developer", "Keynote Speaker",
    "Video Maker", "Game Designer", "Illustrator", "Product Owner"];
  const [profileStatus, setProfileStatus] = useState('Full Stack Designer');
  const [delta, setDelta] = useState(200);
  const period = 4000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [profileStatus]);

  const tick = () => {
    let i = loopNum % statusArray.length;
    let fullText = statusArray[i];
    let updatedText = fullText.substring(0, profileStatus.length + 3)

    setProfileStatus(updatedText);

    // if (isDeleting) {
    //   setDelta(prevDelta => prevDelta / 2)
    // }

    if (updatedText === fullText) {
      setLoopNum(loopNum + 1);
      setDelta(period / 2);

    }
    // if (!isDeleting && updatedText === fullText) {
    //   setIsDeleting(true);
    //   setDelta(period);
    // } else if (isDeleting && updatedText === '')
    //   setIsDeleting(false);

  }

  return (
    <Style.ColumnCard>
      <S.ProfileContent>
        <S.ProfileImg src='/avatar-cd.jpg' />
        <S.ProfileTitle>César Domingos</S.ProfileTitle>
        <S.ProfileSubtitle>{profileStatus}</S.ProfileSubtitle>
      </S.ProfileContent>
    </Style.ColumnCard>
  )
}