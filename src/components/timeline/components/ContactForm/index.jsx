import * as S from './style'
import * as Style from '../../../../pages/Home/style'
import sendEmail from '../../../../api/Sendgrid'

export function ContactForm() {
  // const sendEmail = sendEmail(userEmail = userEmail)
  //fazer getValue ?
  return (
    <S.TimelineTitleCard >
      {/* <form > */}
      <S.FormWrapper>
        <S.Logo src="logo_main_color.png" alt="logo" />
        {/* <input type="email" name="email" placeholder='Email' />
        <input type="text" name="subject" placeholder='Subject' />
        <input type="text" name="content" placeholder='Content' />
        <Style.Button name="button" onClick={() => console.lo('Send e-mail to me')}>
          Enviar
        </Style.Button> */}
      </S.FormWrapper>
      {/* </form> */}
    </S.TimelineTitleCard>
  )
}
