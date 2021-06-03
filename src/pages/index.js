import * as React from 'react'
import theme from '../@chakra-ui/gatsby-plugin/theme.js'
import {ChakraProvider, Text} from '@chakra-ui/react'
import Hero from '../components/hero.js'
import NavBar from '../components/navbar.js'
import Analogy from '../components/analogy.js'
import Grid from '../components/grid.js'
import Contact from '../components/contact.js'

const IndexPage = () => {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <title>Tender</title>
        <NavBar />
        <Hero />
        <div id="analogy"> <Analogy /> </div>
        <Grid />
        <div id="contact"> <Contact /> </div>
      </main>
    </ChakraProvider>
  )
}
export default IndexPage
