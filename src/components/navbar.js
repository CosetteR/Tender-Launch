import * as React from 'react'
import {
  Box,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Box px={4} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex h={16} alignItems={'center'}>
        <Box pl={5} fontFamily="Vollkorn" color={'orange.100'} fontSize={'20px'}> <b> Tender </b> </Box>
      </Flex>
    </Box>
  )
}

export default NavBar
