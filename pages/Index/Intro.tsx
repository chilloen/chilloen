import styled from 'styled-components'
import Image from 'next/image'
import title1Pic from '../../public/images/title_1.png'
import title2Pic from '../../public/images/title_2.png'
import title3Pic from '../../public/images/title_3.png'
import { motion } from 'framer-motion'
import AnimatedCharacters from 'components/AnimatedText'
import { textAnimate } from 'pages'

const Title = [
  {
    class: 'artistic-value',
    imageSrc: title1Pic,
    imageSize: { width: 780, height: 56 },
    text: 'Artistic Value',
  },
  {
    class: 'challenge',
    imageSrc: title2Pic,
    imageSize: { width: 780, height: 56 },
    text: 'Challenge',
  },
  {
    class: 'experience',
    imageSrc: title3Pic,
    imageSize: { width: 750, height: 80 },
    text: 'Experience',
  },
]

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
}

const Intro = () => {
  const imageLayout = 'fixed'

  return (
    <StickyContainer>
      <StickyWrapper>
        <Sticky>
          {Title.map((el, idx) => {
            return (
              <TitleRow
                key={`row-${idx}`}
                direction={idx === 1 ? 'row-reverse' : 'row'}
              >
                <motion.span
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.3 * idx + 1,
                    },
                  }}
                  viewport={{ once: true }}
                  className={el.class}
                >
                  {el.text}
                </motion.span>
                <ImageWrapper
                  src={el.imageSrc}
                  alt="Artistic Value"
                  placeholder="blur"
                  layout={imageLayout}
                  objectFit="cover"
                  width={el.imageSize.width}
                  height={el.imageSize.height}
                />
              </TitleRow>
            )
          })}
        </Sticky>
        <Sticky>
          <CraveContainer
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 1 }}
            transition={{ staggerChildren: 0.4, delayChildren: 2 }}
          >
            <motion.span variants={textAnimate}>Crave, </motion.span>
            <motion.span variants={textAnimate}>Crave, </motion.span>
            <motion.span variants={textAnimate}>Crave</motion.span>
          </CraveContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            transition={{
              ease: 'easeOut',
              delayChildren: 10,
            }}
            viewport={{ once: false }}
          >
            {[
              { text: '모든 창작이' },
              { text: '울려 퍼질 수 있는 세상을 만듭니다.' },
            ].map((el, idx) => {
              return (
                <AnimatedCharacters text={el.text} key={`alphabet-${idx}`} />
              )
            })}
          </motion.div>
        </Sticky>
      </StickyWrapper>
    </StickyContainer>
  )
}

export default Intro

const Sticky = styled(motion.div)``

const StickyContainer = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column')};
  min-height: 100vh;
  min-width: 100vw;
  padding: 10vh 2rem;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.black};
`

const StickyWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  width: 1200px;
  flex: 1;
  color: ${({ theme }) => theme.colors.white500};

  @media ${({ theme }) => theme.device.tabletL} {
    width: 100%;
    flex-direction: column;
  }
`

const ImageWrapper = styled(Image)`
  animation-name: fadeIn; /* 애니메이션 이름 */
  animation-fill-mode: both; /* 종료 후 위치 */
  animation-timing-function: ease-in; /* 속도곡선타입 */
  animation-delay: 1.7s; /* 딜레이 시간 */
  animation-duration: 0.5s; /* 재생 시간 (실행속도) */
  @keyframes fadeIn {
    from {
      opacity: 0;
      display: block !important;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      display: block !important;
      transform: none;
    }
  }
`

const CraveContainer = styled(motion.div)`
  margin-bottom: 7rem;
  span {
    font-weight: 700;
    line-height: 100%;
    font-size: 5rem;

    @media ${({ theme }) => theme.device.mobileL} {
      font-size: 4.5rem;
    }
    @media screen and (max-width: 540px) {
      font-size: 4rem;
    }
    @media ${({ theme }) => theme.device.mobileM} {
      font-size: 3rem;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    margin-top: 2rem;
  }
`

const TitleRow = styled.div<{ direction?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin: 2vh 0;

  span {
    font-weight: 700;
  }
  .artistic-value {
    margin-right: 3rem;
    font-size: 3.75rem;
    line-height: 72px;
    @media ${({ theme }) => theme.device.mobileL} {
      line-height: 48px;
      margin-right: 1rem;
    }
  }

  .challenge {
    margin-left: 3rem;
    font-size: 5rem;
    line-height: 95px;
    text-align: right;
    @media ${({ theme }) => theme.device.mobileL} {
      line-height: 57px;
      margin-left: 1rem;
    }
  }

  .experience {
    margin-right: 3rem;
    font-size: 6.25rem;
    line-height: 119px;
    @media ${({ theme }) => theme.device.mobileL} {
      line-height: 67px;
      margin-right: 1rem;
    }
  }

  @media ${({ theme }) => theme.device.mobileM} {
    span {
      font-size: 3.75rem !important;
    }
  }
`
