import type { NextPage } from 'next'
import { Fragment, useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import Intro from 'pages/Index/Intro'
import AboutUs from 'pages/Index/About'
import Product from 'pages/Index/Product'
import News from 'pages/Index/News'
import Career from 'pages/Index/Career'
import ContactUs from 'pages/Index/Contact'
import { calcRem } from 'styles/theme'
import { motion } from 'framer-motion'
import MobileIntro from './Index/MobileIntro'

const Home: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  console.log(windowWidth)
  return (
    <Fragment>
      {windowWidth > 480 ? <Intro /> : <MobileIntro />}
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
  opacityOffscreen: { opacity: 0 },
  opacityOnscreen: {
    opacity: 1,
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
  text-align: center;
`
export const CategoryText = styled(motion.div)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.titleSize};
  line-height: 48px;
  text-align: center;
`

export const SubTexts = styled(motion.p)<{ marginTop?: number }>`
  margin-top: ${({ marginTop }) => calcRem(marginTop || 0)};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 30px;
  text-align: center;

  @media ${({ theme }) => theme.device.tabletL} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 20px;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 20px;
  }
`
