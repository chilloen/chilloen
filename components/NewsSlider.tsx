import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import Image from 'next/image'
import news1 from '../public/images/new_1.png'
import news2 from '../public/images/new_2.png'
import news3 from '../public/images/new_3.png'
import news4 from '../public/images/new_4.png'
import Arrow, { Direction } from './Arrow'

const NEWS_DATA = [
  {
    pic: news1,
    title: '칠로엔, 음악 학습 인공지능 엔진 개발',
    content:
      '국내 최고 수준의 AI작곡 엔진 기술력을 갖춘 크리에이티브마인드와 지분교환 및 작곡 데이터 협업을 통해 세계 최고의 AI작곡(KEENEAT)서비스를 목표로 세웠다.',
    date: '2022.9.27',
    path: 'https://www.mk.co.kr/news/it/view/2022/09/850322',
  },
  {
    pic: news2,
    title: '칠로엔, 음악 학습 인공지능 엔진 개발',
    content:
      '인공지능(AI) 음악 창작플랫폼 오드야즈(OddYards)를 개발 중인 칠로엔이 안경체인 브랜드 "다비치안경"과 금융 IT서비스 전문기업 "크레디트라인" 등으로부터 20억원 투자를 유치했다.',
    date: '2022.07.12',
    path: 'https://www.etnews.com/20220712000124',
  },
  {
    pic: news3,
    title: 'AI 음악창작플랫폼 칠로엔, 20억원 투자 유치',
    content:
      '칠로엔은 보컬 데이터 4500곡을 창작·가공헤 AI 보컬시스템을 개발했다. 사용자가 간단한 특징을 입력하면 AI가 추천 코드를 선별하고 이를 기반으로 멜로디와 반주를 생성한다. K팝, 댄스 등 여러 장르에 사람의 가창이 포함된 음악을 생성할 수 있다.',
    date: '2022.07.13',
    path: 'https://www.sbiz.news/news/articleView.html?idxno=21694',
  },
  {
    pic: news4,
    title: '글로벌 AI음악·아티스트 네트워킹 콘텐츠 플랫폼 ‘ODD YARD’',
    content:
      '콘텐츠진흥원 ‘2021 콘텐츠산업 동향 분석’에 따르면 지난해 콘텐츠 시장은 136조 원으로 전년 대비 6.3% 성장했다.',
    date: '2022.08.31',
    path: 'http://www.itdaily.kr/news/articleView.html?idxno=209812',
  },
]

const NewsSlider = () => {
  const settings = {
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    nextArrow: <Arrow direction={Direction.Left} />,
    prevArrow: <Arrow direction={Direction.Right} />,
    responsive: [
      {
        breakpoint: 460,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: 'linear',
          centerPadding: '60px',
          pauseOnHover: true,
        },
      },
    ],
  }

  return (
    <Container>
      <CustomSlider {...settings}>
        {NEWS_DATA.map((el, idx) => {
          return (
            <Cards onClick={() => window.open(el.path)} key={`news-${idx}`}>
              <Image
                src={el.pic}
                width={370}
                height={202}
                objectFit="cover"
                objectPosition="center"
                alt={el.title}
              />
              <ArticleContents>
                <div className="title">{el.title}</div>
                <p>{el.content}</p>
                <span>{el.date}</span>
              </ArticleContents>
            </Cards>
          )
        })}
      </CustomSlider>
    </Container>
  )
}

export default NewsSlider

const Container = styled.div`
  width: 1200px;
  height: 400px;
  margin-top: 54px;
`

const ArticleContents = styled.article`
  padding: 30px 15px 17px 15px;
  div {
    font-size: 14px;
    line-height: 21px;
    color: #191919;
    -webkit-line-clamp: 1;
    margin-bottom: 2px;
  }
  p {
    -webkit-line-clamp: 2;
    font-size: 16px;
    line-height: 24px;
  }
  span {
    font-size: 16px;
    line-height: 24px;
    margin-top: 22px;
  }
  * {
    font-weight: 400;
    word-wrap: break-word;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
const CustomSlider = styled(Slider)`
  display: flex;
  height: 370px;
  .slick-prev:before,
  .slick-next:before {
    font-size: 48px;
    color: #d3d0d0;
  }
  .slick-list {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .slick-slide {
    display: flex;
    width: 380px;
    height: 350px;
    background: #ffffff;

    border-radius: 14px;
    margin: 0px 30px;
  }
  img {
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
  }
  .slick-track {
    display: flex;
    align-items: center;
    height: 100%;
    margin: auto;
  }

  .slick-slide > div {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`

const Cards = styled.div``
