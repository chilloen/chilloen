import Screen from 'components/Screen'
import styled from 'styled-components'
import chilloenLogo from '../public/images/logo_wh.png'
import Image from 'next/image'
import useView from 'hooks/useView'
import { useRef } from 'react'

const Footer = () => {
  const screenRef = useRef(null)
  const [target, view] = useView(screenRef)

  return (
    <Screen
      styleProps={{ screenHeight: 25, bg: '#333333', textColor: '#9E9E9E' }}
    >
      <Container ref={screenRef}>
        {view.width > 1080 ? (
          <>
            <LogoImage>
              <Image
                src={chilloenLogo}
                alt="chilloen logo"
                width={150}
                height={60}
              />
            </LogoImage>
            <FooterTexts>
              <span className="bold-text">주식회사 칠로엔</span> <Bar />
              <span>대표이사 조성인</span>
            </FooterTexts>
          </>
        ) : (
          <MobileContainer>
            <LogoImage>
              <Image
                src={chilloenLogo}
                alt="chilloen logo"
                width={150}
                height={60}
              />
            </LogoImage>
          </MobileContainer>
        )}

        <hr></hr>
        {view.width > 1080 ? (
          <FooterTexts>
            <span>주소 서울특별시 서초구 서초중앙로 87, 예성빌딩 6층 </span>{' '}
            <Bar />
            <span>전화번호 02-6952-8716 </span> <Bar />
            <span>이메일 info@chilloen.com </span>
            <span className="copy-right">COPYRIGHT(C) 2021 CHILLOEN.inc</span>
          </FooterTexts>
        ) : (
          <>
            <FooterTexts>
              <span className="bold-text">주식회사 칠로엔</span> <Bar />
              <span>대표이사 조성인</span>
            </FooterTexts>
            <FooterTexts>
              <span>주소 서울특별시 서초구 서초중앙로 87, 예성빌딩 6층 </span>{' '}
              <Bar />
              <span>전화번호 02-6952-8716 </span> <Bar />
              <span>이메일 info@chilloen.com </span>
              <span className="copy-right">COPYRIGHT(C) 2021 CHILLOEN.inc</span>
            </FooterTexts>
          </>
        )}
      </Container>
    </Screen>
  )
}

export default Footer

const Container = styled.footer`
  width: 100%;
`
const FooterTexts = styled.div`
  text-align: start;
  position: relative;
  margin: 1rem 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;

  .bold-text {
    font-weight: 700;
  }
  .copy-right {
    position: absolute;
    right: 0;
  }
  @media ${({ theme }) => theme.device.tabletM} {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
    * {
      line-height: 30px;
    }
    .copy-right {
      position: relative;
    }
  }
`
const LogoImage = styled.div`
  margin-right: 18px;

  @media ${({ theme }) => theme.device.tabletM} {
    padding: 1rem 0px;
  }
`

const MobileContainer = styled.div`
  display: flex;
`
const Bar = styled.span`
  background: #898989;
  width: 1px;
  height: 10px;
  display: inline-block;
  line-height: 10px;
  margin: 0px 6px;
  vertical-align: baseline;
  @media ${({ theme }) => theme.device.tabletM} {
    display: none;
  }
`
