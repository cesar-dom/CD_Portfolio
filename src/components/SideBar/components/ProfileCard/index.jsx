import * as S from "./style"
import * as Style from "../../style"
import { useEffect, useState } from "react"

export function ProfileCard() {
  const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  const statusArray = ["Graphic Designer", "Front-end Developer", "Keynote Speaker",
    "Video Maker", "Game Designer", "Illustrator", "Product Owner"];
  // const statusArrayPT = ["Designer Gráfico", "Desenvolvedor Front-end", "Palestrante",
  // "Video Maker", "Game Designer", "Ilustrador", "Product Manager"];
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
    const language = localStorage.getItem('_language')

  return (
    <Style.ColumnCard>
      <S.ProfileContent>
        <S.ProfileImg src='/avatar-cd.jpg' />
        <S.ProfileTitle>César Domingos</S.ProfileTitle>
        <S.ProfileSubtitle>{profileStatus}</S.ProfileSubtitle>
        <S.ProfileIntroContainer>
          {language === 'pt' ? (
            <>
              <p>Cresci no Distrito Federal; em 2018 fundei a <strong>Gamifica.ai</strong>, plataforma SaaS para eventos online, que encerrou suas atividades em 2022.</p>
              
              <p>Nos últimos 4 anos prestei serviços para empresas como <strong>Organização Mundial de Saúde (OMS)</strong>, <strong>Banco Central do Brasil</strong> e <strong>Fundação Getúlio Vargas</strong>.</p>
              
              <p>Tenho ampla familiaridade acadêmica e mercadológica em metodologias de design e métodos ágeis. Acostumado a trabalhar sob pressão em eventos para milhares de usuários.</p>

              <p>Procuro trabalhar com uma plataforma tecnológica escalável e/ou times técnicos de produto; em regime PJ ou CLT, remoto ou híbrido.</p>
              
              <p>Contribuo com minha experiência de 8 anos como designer e meus 4 anos como CEO de startup.</p>

              <p>Hoje busco me reposicionar na área de tecnologia como desenvolvedor front-end web (javascript). Mas estou aberto à oportunidades em atividades como Product Manager, Especialista de Suporte Técnico, UX/UI Designer ou Designer Gráfico.</p>

              <p>Aproveite este portifólio que fiz especialmente para você e conheça um pouco mais sobre mim.</p>
          </>
          ) : (
            <>
              <p>Born and raised in <strong>Brasília, <S.PinkStrong>Brazil</S.PinkStrong></strong>; on 2018 I've founded <strong>Gamifica.ai</strong>, SaaS platform for virtual events, wich has ended activities in 2022.</p>
              
              <p>In the last years I've been working with companies such as <strong>World Health Organization (WHO)</strong>, <strong>Central Bank of Brazil (BACEN)</strong> and <strong>Getúlio Vargas Foundation (FGV)</strong>.</p>
              
              <p>I have a vast experience with design methodologies and Agile. Also, I feel very comfortable working in a product with thousands of users.</p>

              <p>I'm looking forward to work on a scalable tech platform and/or tech teams directly with the product; open to <strong>formal work</strong> (CLT) and to <strong>legal person (PJ) contract</strong>, <strong>remote</strong> or <strong>hybrid</strong>.</p>
              
              <p>I'll contribute with my <strong>8</strong> years experience as a <S.PinkStrong>Designer</S.PinkStrong> and <strong>4</strong> years as a <S.PinkStrong>startup founder</S.PinkStrong> and <S.PinkStrong>CEO</S.PinkStrong>.</p>

              <p>Now I'm seeking for an opportunity as <S.PinkStrong>front-end web developer</S.PinkStrong> (javascript). But I'm also open for activities as <strong>Product Manager, Technical Suport Specialist, UX/UI Designer and Graphic Designer</strong>.</p>

              <p><S.PinkStrong>Enjoy</S.PinkStrong> this portfolio I made for you. And <strong>welcome</strong> to see more stuff about me.</p>
            </>
          )}
          </S.ProfileIntroContainer>
      </S.ProfileContent>
    </Style.ColumnCard>
  )
}