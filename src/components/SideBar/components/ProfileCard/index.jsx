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
              <p>Cresci no <S.PinkStrong>Distrito Federal</S.PinkStrong>; em 2018 fundei a <strong>Gamifica.ai</strong>, plataforma SaaS para eventos online, que entregou mundos virtuais imersivos e experiências gamificadas para mais de <S.PinkStrong>86 mil usuários</S.PinkStrong>, mas que encerrou suas atividades em 2022.</p>
              
              <p>Nos últimos 4 anos prestei serviços para empresas como <strong>Organização Mundial de Saúde (OMS)</strong>, <strong>Banco Central do Brasil</strong> e <strong>Fundação Getúlio Vargas</strong>.</p>
              
              <p>Tenho ampla familiaridade acadêmica e mercadológica em metodologias de design e métodos ágeis. Acostumado a trabalhar sob pressão em eventos para milhares de usuários. Realizei eventos internacionais e atingi mais de <S.PinkStrong>100 países</S.PinkStrong> com o meu produto.</p>

              <p>Procuro trabalhar com uma plataforma tecnológica escalável e/ou times técnicos de produto; em regime <strong>PJ</strong> ou <strong>CLT</strong>, <strong>remoto</strong> ou <strong>híbrido</strong>.</p>
              
              <p>Contribuo com minha experiência como <S.PinkStrong>Designer</S.PinkStrong> e meus <strong>4 anos</strong> como <S.PinkStrong>co-fundador de startup</S.PinkStrong> e <S.PinkStrong>CEO</S.PinkStrong>.</p>

              <p>Hoje busco me reposicionar na área de tecnologia como <S.PinkStrong>desenvolvedor front-end</S.PinkStrong> (javascript), mas estou aberto às oportunidades em atividades como <strong>Product Manager</strong>, <strong>Especialista de Suporte Técnico</strong>, <strong>UX/UI Designer</strong> ou <strong>Designer Gráfico</strong>.</p>

              <p><S.PinkStrong>Aproveite</S.PinkStrong> este portifólio que fiz especialmente para você e conheça um pouco mais sobre mim.</p>
          </>
          ) : (
            <>
              <p>Born and raised in <strong>Brasília, <S.PinkStrong>Brazil</S.PinkStrong></strong>; on 2018 I've founded <strong>Gamifica.ai</strong>, SaaS platform for virtual events, wich has delievered virtual worlds and immersive experiences for more than <S.PinkStrong>86 thousand users</S.PinkStrong>, but ended activities in 2022.</p>
              
              <p>In the last years I've been working with companies such as <strong>World Health Organization (WHO)</strong>, <strong>Central Bank of Brazil (BACEN)</strong> and <strong>Getúlio Vargas Foundation (FGV)</strong>.</p>
              
              <p>I have a vast experience with design methodologies and Agile. Also, I feel very comfortable working in a product with thousands of users, since I've made international events and reached more than <S.PinkStrong>100 countries</S.PinkStrong> with my product.</p>

              <p>I'm looking forward to work on a scalable tech platform and/or tech team directly with the product; open to <strong>formal work</strong> (CLT) and to <strong>legal person (PJ) contract</strong>, <strong>remote</strong> or <strong>hybrid</strong>.</p>
              
              <p>I'll contribute with my <strong>8 years</strong> experience as a <S.PinkStrong>Designer</S.PinkStrong> and <strong>4 years</strong> as a <S.PinkStrong>startup founder</S.PinkStrong> and <S.PinkStrong>CEO</S.PinkStrong>. Time in wich I've lead the product team and actively worked with customer experience, live debugging, front-end development and AWS management.</p>

              <p>Now I'm seeking for an opportunity as <S.PinkStrong>front-end web developer</S.PinkStrong> (javascript). But I'm also open for activities as <strong>Product Manager, Technical Suport Specialist, UX/UI Designer and Graphic Designer</strong>.</p>

              <p><S.PinkStrong>Enjoy</S.PinkStrong> this portfolio I made for you. And feel <strong>welcome</strong> to see more stuff about me.</p>
            </>
          )}
          </S.ProfileIntroContainer>
      </S.ProfileContent>
    </Style.ColumnCard>
  )
}