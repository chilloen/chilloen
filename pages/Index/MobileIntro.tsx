import Screen from 'components/Screen'
import styled from 'styled-components'
import Image from 'next/image'
import title1Pic from '../../public/images/mobile_title_1.png'
import title2Pic from '../../public/images/mobile_title_2.png'
import title3Pic from '../../public/images/mobile_title_3.png'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { textAnimate } from 'pages'
const Intro = () => {
  const imagePosition = 'fixed'

  return (
    <>
      <Screen>
        <FirstPageContainer
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            ease: 'easeOut',
          }}
          viewport={{ once: false }}
        >
          <span className="artistic-value">Artistic</span>
          <ImageStyle
            src={title1Pic}
            alt="Artistic Value"
            placeholder="blur"
            layout={imagePosition}
            objectFit="cover"
            width={780}
            height={45}
          />
        </FirstPageContainer>
        <FirstPageContainer
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            ease: 'easeOut',
          }}
          viewport={{ once: false }}
        >
          <ImageStyle
            className={cn({ reveres: true })}
            src={title1Pic}
            alt="Artistic Value"
            placeholder="blur"
            layout={imagePosition}
            objectFit="cover"
            width={780}
            height={45}
          />
          <span className="value">Value</span>
        </FirstPageContainer>

        <FirstPageContainer
          initial={{ x: -300 }}
          whileInView={{ x: 0 }}
          transition={{
            ease: 'easeOut',
          }}
          viewport={{ once: false }}
        >
          <span className="challenge">Challenge</span>
          <ImageStyle
            src={title2Pic}
            alt="Challenge"
            placeholder="blur"
            layout={imagePosition}
            objectFit="cover"
            width={720}
            height={45}
          />
        </FirstPageContainer>
        <FirstPageContainer
          initial={{ x: 300 }}
          whileInView={{ x: 0 }}
          transition={{
            ease: 'easeOut',
          }}
          viewport={{ once: false }}
        >
          <ImageStyle
            src={title3Pic}
            alt="Experience"
            placeholder="blur"
            layout={imagePosition}
            objectFit="cover"
            width={620}
            height={45}
          />
          <span className="experience">Experience</span>
        </FirstPageContainer>
      </Screen>
      <Screen>
        <CraveContainer
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{
            ease: 'easeOut',
            staggerChildren: 0.2,
          }}
          viewport={{ once: false }}
        >
          <motion.span variants={textAnimate}>Crave, </motion.span>
          <motion.span variants={textAnimate}>Crave, </motion.span>
          <motion.span variants={textAnimate}>Crave</motion.span>
        </CraveContainer>

        <motion.h1
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{
            delay: 0.5,
            ease: 'easeOut',
            staggerChildren: 0.2,
          }}
          viewport={{ once: false }}
        >
          모든 창작이
        </motion.h1>
        <motion.h1
          variants={textAnimate}
          initial={'offscreen'}
          whileInView={'onscreen'}
          transition={{
            ease: 'easeOut',
            delay: 0.6,
            staggerChildren: 0.2,
          }}
          viewport={{ once: false }}
        >
          울려 퍼질 수 있는 세상을 만듭니다
        </motion.h1>
      </Screen>
    </>
  )
}

export default Intro

const ImageStyle = styled(Image)`
  @media screen and (max-width: 480px) {
    margin: 0 0.7rem;
    width: 340px;
    min-height: 37px;
  }
`
const CraveContainer = styled(motion.div)`
  margin-bottom: 7rem;
  span {
    font-weight: 700;
    line-height: 100%;
    font-size: 5rem;
    @media screen and (max-width: 540px) {
      font-size: 4rem;
    }
    @media screen and (max-width: 480px) {
      font-size: 3rem;
    }
  }
`

const FirstPagseContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const FirstPageContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 2vh 0;
  .reveres {
    transform: rotate(0.5turn);
  }
  .artistic-value {
    margin-right: 0.7rem;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 72px;
    @media screen and (max-width: 480px) {
      line-height: 48px;
    }
  }

  .challenge {
    margin-left: 0.7rem;
    font-weight: 700;
    font-size: 5rem;
    line-height: 95px;
    text-align: right;
    @media screen and (max-width: 480px) {
      line-height: 57px;
      margin-left: 0;
      margin-right: 0.7rem;
    }
  }

  .experience {
    margin-right: 0.7rem;
    font-weight: 700;
    font-size: 6.25rem;
    line-height: 119px;
    @media screen and (max-width: 480px) {
      line-height: 67px;
      margin-left: 0.7rem;
      margin-right: 0;
    }
  }
  .value {
    margin-left: 0.7rem;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 72px;
    @media screen and (max-width: 480px) {
      line-height: 48px;
    }
  }
  @media screen and (max-width: 480px) {
    span {
      font-size: 3.75rem !important;
    }
  }
`
