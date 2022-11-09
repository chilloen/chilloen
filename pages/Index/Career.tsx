import styled from 'styled-components'
import CareerImg from '../../public/images/job_bg.png'
import Image from 'next/image'
import { SlArrowRightCircle } from 'react-icons/sl'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { block } from 'styles/container'

const Career = () => {
  const careerScreenRef = useRef(null)
  const screenRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: careerScreenRef,
    offset: ['end end', 'start start'],
  })
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setViewportWidth(latest * 100)
    })
  }, [])

  return (
    <Container ref={careerScreenRef}>
      <LeftBlock containerWidth={viewportWidth > 50 ? 50 : viewportWidth} />
      <Image src={CareerImg} alt="Career Image" />
      <Texts ref={screenRef}>
        <h1>새로운 도전을,</h1>
        <h1>칠로엔과 함께 하고 싶지 않으신가요?</h1>
        <p>새로운 예술을, 위대한 창조를, 삶을 표현할 꿈을 펼쳐주세요</p>

        <GrLinkNextIcon
          onClick={() => window.open('https://chilloen.oopy.io/')}
        >
          <SlArrowRightCircle className="icon" />
        </GrLinkNextIcon>
      </Texts>

      <RightBlock containerWidth={viewportWidth > 50 ? 50 : viewportWidth} />
    </Container>
  )
}
export default Career

const LeftBlock = styled.div<{ containerWidth: number }>`
  ${block};
  transform: translate3d(
    ${({ containerWidth }) => -(containerWidth * 2) + '%'},
    0px,
    0px
  );
  left: 0;
`
const RightBlock = styled.div<{ containerWidth: number }>`
  ${block};
  transform: translate3d(
    ${({ containerWidth }) => containerWidth * 2 + '%'},
    0px,
    0px
  );
  right: 0;
`
const Container = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100vw;
  height: 540px;
  overflow: hidden;

  span {
    filter: blur(1px);
  }
`
const Texts = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column')};
  color: ${({ theme }) => theme.colors.white500};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  transition: all 0.5s;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.titleSize};
  }
  p {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media ${({ theme }) => theme.device.mobileM} {
    transform: translate(-50%, -50%);
    h1 {
      font-size: 2rem;
    }
    p {
      margin-top: 0.5rem;
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
`

const GrLinkNextIcon = styled.div<{ marginLeft?: string }>`
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  margin: 3rem;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  @media ${({ theme }) => theme.device.tabletL} {
    margin: 2.5rem;
  }
  @media ${({ theme }) => theme.device.mobileM} {
    margin: 1.5rem;
  }
  cursor: pointer;
  .icon path {
    stroke: #fff;
  }
`
