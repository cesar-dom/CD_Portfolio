import styled from '@emotion/styled'

export const Logo = styled.img`
 width: 12rem;
 height: auto;
 @media (min-width: 1600px) {
  margin: 20rem 0 0 4rem;
  }
`

export const FormWrapper = styled.div`
 display: flex;
 width: 24rem;
 flex-direction: column;
 gap: 1rem;
`
export const TimelineTitleCardH2 = styled.h2`
 margin: 1rem;
`
export const TimelineTitleCard = styled.div`
  height: 32rem;
  padding: 1rem 4rem;
  background: url("contact-form-bg-dogo-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 1.25rem;
  box-shadow: 1px 1px 5px #000;
  display: flex;
  align-items: center;
  margin: 1rem;
  @media (min-width: 1600px) {
  background-position: top;
  }
`