import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import chilloenLogo from '../public/images/logo.png'
import chilloenWhiteLogo from '../public/images/logo_wh.png'
import useScroll from 'hooks/UseScroll'

const Navigator = () => {
  const { scrollY } = useScroll()

  const handleFoucsContactView = () => {
    const contactScreen = document.getElementById('contant-us') as HTMLElement
    contactScreen.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Container scrollY={scrollY}>
      <Header>
        <Image
          src={scrollY > 60 ? chilloenLogo : chilloenWhiteLogo}
          alt="chilloen logo"
          width={100}
          height={40}
        />
        <div>
          <span>KR</span>
          <Bar scrollY={scrollY} />
          <span>EN</span>
          <ContactButton scrollY={scrollY} onClick={handleFoucsContactView}>
            contact us
          </ContactButton>
        </div>
      </Header>
    </Container>
  )
}

export default Navigator

const Container = styled.div<{ scrollY: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 60px;

  color: ${({ theme, scrollY }) =>
    scrollY > 60 ? theme.colors.black : theme.colors.white500};
  background-color: ${({ theme, scrollY }) =>
    scrollY > 60 ? theme.colors.white500 : 'rgba(255, 255, 255, 0)'};
  -webkit-box-shadow: 0px 2px 4px 0 rgb(0 0 0 / 7%);
  -moz-box-shadow: 0px 2px 4px 0 rgb(0 0 0 / 7%);
  box-shadow: 0px 2px 4px 0
    rgb(0 0 0 / ${(props) => (props.scrollY > 25 ? '7%' : '0%')});
  padding: 10px 0;
  transition: all 0.5s;
  @media screen and (max-width: 1200px) {
    padding: 10px 1rem;
  }
`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  @media screen and (max-width: 1200px) {
    padding: 10px 1rem;
  }
  @media screen and (max-width: 1280px) {
    width: 100%;
  }
`
const Bar = styled.span<{ scrollY: number }>`
  background: ${({ scrollY }) =>
    scrollY > 60 ? 'rgba(59, 72, 89, 0.2)' : 'rgb(255, 255, 255)'};
  width: 1px;
  height: 10px;
  display: inline-block;
  line-height: 10px;
  margin: 0px 6px;
  vertical-align: baseline;
`

const ContactButton = styled.button<{ scrollY: number }>`
  width: 100px;
  height: 40px;
  padding: 10px 12px;
  color: #ffffff;
  border: 1px solid ${({ scrollY }) => (scrollY > 60 ? '#313553' : '#ffffff')};
  background-color: ${({ scrollY }) => (scrollY > 60 ? '#313553' : 'none')};
  border-radius: 8px;
  margin-left: 2.4rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`
