import React from 'react'
import { motion } from 'framer-motion'

import styled from 'styled-components'
const Wrapper = (props: any) => {
  const WordWarpper = styled.span`
    white-space: nowrap;
    overflow: 'hidden';
  `
  return <WordWarpper>{props.children}</WordWarpper>
}

const AnimatedCharacters = (props: { text: string }) => {
  const item = {
    hidden: {
      y: '100%',
      color: '#000000',
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      color: '#ffffff',
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.35,
      },
    },
  }

  const splitWords = props.text.split(' ')

  // Create storage array
  const words: any[] = []

  for (const item of splitWords) {
    words.push(item.split(''))
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push('\u00A0')
  })

  return (
    <h1>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element: any) => {
              return (
                <Alphabet key={index}>
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </Alphabet>
              )
            })}
          </Wrapper>
        )
      })}
    </h1>
  )
}

export default AnimatedCharacters

const Alphabet = styled.span`
  overflow: hidden;
  display: inline-block;
`
