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
        <S.ProfileIntroContainer>
          <p>Cresci no Distrito Federal; em 2018 fundei a Gamifica.ai, plataforma SaaS para eventos online, que encerrou suas atividades em 2022. Nos últimos 4 anos prestei serviços para empresas como Organização Mundial de Saúde (OMS), Banco Central do Brasil e Fundação Getúlio Vargas.</p>
          
          <p>Tenho ampla familiaridade acadêmica e mercadológica em metodologias de design e métodos ágeis. Acostumado a trabalhar sob pressão em eventos para milhares de usuários.</p>

          <p>Procuro trabalhar com uma plataforma tecnológica escalável e/ou times técnicos de produto; em regime PJ ou CLT, remoto ou híbrido.</p>
          
          <p> Contribuo com minha experiência de 8 anos como designer e meus 4 anos como CEO de startup.</p>

          <p>Hoje busco me reposicionar na área de tecnologia como desenvolvedor front-end web (javascript). Mas estou aberto à oportunidades em atividades como Product Manager, Especialista de Suporte Técnico, UX/UI Designer ou Designer Gráfico.</p>

          <p>Aproveite este portifólio que fiz especialmente para você e conheça um pouco mais sobre mim.</p>
          </S.ProfileIntroContainer>
      </S.ProfileContent>
    </Style.ColumnCard>
  )
}