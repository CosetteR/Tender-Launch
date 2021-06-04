import * as React from 'react'
import {
  Container,
  Box,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import SearchImg from '../images/Cooking-pana.svg'

// <Feature
//   icon={
//     <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
//   }
//   iconBg={useColorModeValue('yellow.100', 'yellow.900')}
//   text={'Business Planning'}
// />
// <Feature
//   icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
//   iconBg={useColorModeValue('green.100', 'green.900')}
//   text={'Financial Planning'}
// />
// <Feature
//   icon={
//     <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
//   }
//   iconBg={useColorModeValue('purple.100', 'purple.900')}
//   text={'Market Analysis'}
// />

const Analogy = () => {
  return (
    <Box w={"100%"} bgColor={'brown'}>
      <Container maxW={'5xl'} py={{ base: 20, md: 36 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'brown'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue("orange.100")}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Transforming Cooking
            </Text>
            <Heading color={'white'}>Cookbooks ≠ Chefs Only</Heading>
            <Text color={'white'} >
              Most traditional cookbooks are created by experienced chefs. They are informational, but not personal.
              People continue to create or follow their loved ones' recipes because the process of cooking is very personal.
              <Text as={'span'} color={'orange.100'} fontWeight={'bold'} > Anyone should be able to create their personal cookbooks –– and do so easily. </Text>
              With this belief, Tender was born.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>

            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={SearchImg}
              style={{height: '300px'}}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Analogy
