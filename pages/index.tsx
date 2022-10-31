import type { NextPage } from 'next'
import { Fragment } from 'react'
import styled from 'styled-components'
import Intro from 'pages/Index/Intro'
import AboutUs from 'pages/Index/About'
import Product from 'pages/Index/Product'
import News from 'pages/Index/News'
import Career from 'pages/Index/Career'
import ContactUs from 'pages/Index/Contact'
import { calcRem } from 'styles/theme'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Intro />
      <AboutUs />
      <Product />
      <News />
      <Career />
      <ContactUs />
    </Fragment>
  )
}

export default Home

export const textAnimate = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  delayOnscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.5,
    },
  },
}
export const imageAnimate = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const CategoryTitle = styled(motion.div)`
  color: ${({ theme }) => theme.colors.sub_title};
  font-size: ${({ theme }) => theme.colors.xxl};
  padding: 20px 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
`
export const CategoryText = styled(motion.div)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  line-height: 48px;
`

export const SubTexts = styled(motion.p)<{ marginTop?: number }>`
  margin-top: ${({ marginTop }) => calcRem(marginTop || 0)};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 30px;
  text-align: center;

  @media screen and (max-width: 1280px) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 20px;
  }
`
