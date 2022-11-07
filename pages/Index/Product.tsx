import Screen from 'components/Screen'
import Image from 'next/image'
import { CategoryTitle, CategoryText, SubTexts, textAnimate } from 'pages'
import styled from 'styled-components'
import oddYardIcon from '../../public/images/oddyard_icon.png'
import keeneatIcon from '../../public/images/keeneat_icon.png'
import { SlArrowRightCircle } from 'react-icons/sl'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Product = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <Screen
      styleProps={{
        bg: '#EBEBEB',
        textColor: 'black',
        screenHeight: 50,
        justifyContent: 'flex-start',
      }}
    >
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <CategoryTitle variants={textAnimate}>Product</CategoryTitle>
        <CategoryText variants={textAnimate}>칠로엔은 제시합니다</CategoryText>
        <SubTexts marginTop={16} variants={textAnimate}>
          창조를 위한 또 다른 창조를 꿈 꿉니다.
        </SubTexts>

        {windowWidth > 460 ? (
          <SubTexts variants={textAnimate}>
            칠로엔은 그 누구보다 창작자들의 시선에서 바라보고 새로운 패러다임을
            제시합니다.
          </SubTexts>
        ) : (
          <>
            <SubTexts variants={textAnimate}>
              칠로엔은 그 누구보다 창작자들의 시선에서 바라보고
            </SubTexts>
            <SubTexts variants={textAnimate}>
              새로운 패러다임을 제시합니다.
            </SubTexts>
          </>
        )}
      </motion.div>

      <Icons
        initial={'offscreen'}
        whileInView={'onscreen'}
        transition={{ staggerChildren: 0.5, delayChildren: 0.7 }}
        viewport={{ once: true, amount: 1 }}
      >
        <IconCard variants={textAnimate}>
          <ImgWrapper>
            <Image
              src={oddYardIcon}
              alt="oddYard Icon"
              // layout="fixed"
              width={124}
              height={124}
            />
          </ImgWrapper>
          <IconCardTexts>
            <p>또 다른 예술 세계</p>
            <h2>ODDYARD</h2>
          </IconCardTexts>
          <GrLinkNextIcon marginLeft="62px">
            <SlArrowRightCircle />
          </GrLinkNextIcon>
        </IconCard>
        <IconCard variants={textAnimate}>
          <ImgWrapper>
            <Image
              src={keeneatIcon}
              alt="keeneat Icon"
              // layout="fixed"
              width={124}
              height={124}
            />
          </ImgWrapper>
          <IconCardTexts>
            <p>무한한 가치의 인공지능 음악 파트너</p>
            <h2>KEENEAT</h2>
          </IconCardTexts>
          <GrLinkNextIcon marginLeft="62px">
            <SlArrowRightCircle />
          </GrLinkNextIcon>
        </IconCard>
      </Icons>
    </Screen>
  )
}

export default Product

const Icons = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.paddings.xxxl} 0px;
  margin: ${({ theme }) => theme.margins.xxxl} 0px;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`

const IconCard = styled(motion.div)`
  width: 500px;
  display: flex;
  align-items: center;
  margin: 0 100px;
  @media screen and (max-width: 1280px) {
    margin: 2rem 0;
  }
  @media screen and (max-width: 480px) {
    width: 320px;
  }
`
const ImgWrapper = styled.div`
  min-width: 124px;
  min-height: 124px;
  @media screen and (max-width: 480px) {
    max-width: 62px;
    max-height: 62px;
    min-width: 0px;
    min-height: 0px;
  }
`
const IconCardTexts = styled.div`
  width: 100%;
  min-width: 270px;
  padding: 1rem 1rem 1rem 1.5rem;
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 19px;
  }
  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 41px;
  }
  @media screen and (max-width: 480px) {
    min-width: 210px;
  }
`

const GrLinkNextIcon = styled.div<{ marginLeft?: string }>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  margin: 3rem;
  color: #606060;
  font-size: 3rem;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    margin: 2.5rem;
  }
  @media screen and (max-width: 480px) {
    margin: 1rem;
  }
`
