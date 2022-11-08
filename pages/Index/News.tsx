import Screen from 'components/Screen'
import { CategoryTitle, CategoryText, SubTexts, textAnimate } from 'pages'
import NewsSlider from 'components/NewsSlider'
import { motion } from 'framer-motion'

const News = () => {
  return (
    <Screen
      styleProps={{
        bg: 'F6F6F6',
        textColor: 'black',
        screenHeight: 50,
        justifyContent: 'flex-start',
      }}
    >
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.7 }}
      >
        <CategoryTitle variants={textAnimate}>News</CategoryTitle>
        <CategoryText variants={textAnimate}>칠로엔은 행동합니다</CategoryText>
        <SubTexts marginTop={16} variants={textAnimate}>
          창작을 위해 발전하는 칠로엔의 모습을 지켜보세요
        </SubTexts>
      </motion.div>

      <NewsSlider />
    </Screen>
  )
}

export default News
