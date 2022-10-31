import { Fragment } from 'react'
import Screen from 'components/Screen'
import { CategoryTitle, CategoryText, textAnimate, imageAnimate } from 'pages'
import Image from 'next/image'
import CreditLine from '../../public/images/investor_creditLine.png'
import Davich from '../../public/images/investor_davich.png'
import Metabuild from '../../public/images/investor_metabuild.png'
import styled from 'styled-components'
import EmailSendForm from 'components/EmailSendForm'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <Fragment>
      <Screen
        styleProps={{
          bg: '#F6F6F6',
          screenHeight: 50,
        }}
        id="contact-us"
      >
        <CategoryTitle
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          Investor
        </CategoryTitle>
        <ContactUsCardContainer
          variants={imageAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={CreditLine}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />

          <Image
            src={Davich}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />

          <Image
            src={Metabuild}
            alt="About Img"
            placeholder="blur"
            width={280}
            height={100}
          />
        </ContactUsCardContainer>
      </Screen>
      <Screen styleProps={{ bg: '#F6F6F6', screenHeight: 50 }}>
        <CategoryTitle
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          Contact Us
        </CategoryTitle>
        <CategoryText
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true, amount: 0.8 }}
        >
          칠로엔의 예술에 동참해보세요
        </CategoryText>
        <ContactUsFormWrapper>
          <EmailSendForm />
        </ContactUsFormWrapper>
      </Screen>
    </Fragment>
  )
}
export default ContactUs

const ContactUsCardContainer = styled(motion.div)`
  display: flex;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
  }
`
const ContactUsFormWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 44px 0;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 460px;
  border-radius: 8px;
  padding: 2rem 2rem;
  @media screen and (max-width: 480px) {
    height: 420px;
  }
`
