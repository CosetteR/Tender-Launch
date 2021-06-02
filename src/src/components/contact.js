import * as React from 'react';
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  Container,
  Box,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import {FaEnvelopeOpenText} from 'react-icons/fa'

export default function CardWithIllustration() {
  return (
    <Box w={"100%"} bgColor={'brown'}>
      <Container maxW={'5xl'} py={{ base: 20, md: 36 }}>
        <Flex
          align={'center'}
          justify={'center'}>
          <Stack
            boxShadow={'2xl'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            p={10}
            spacing={8}
            align={'center'}>
            <Icon as={FaEnvelopeOpenText} color={'brown'} w={24} h={24} />
            <Stack align={'center'} spacing={4}>
              <Heading
                fontSize={'3xl'}
                color={useColorModeValue('gray.800', 'gray.200')}>
                Thanks for your interest!
              </Heading>
              <Text fontSize={'lg'} color={'gray.500'}>
                Tender is currently in beta. Sign up to be alerted when it's launched 👀
              </Text>
            </Stack>
            <form method="post" action="https://getform.io/f/41c94960-f3a9-421d-afb3-11f2157c334f" style={{width: '100%'}}>
              <Stack spacing={3} direction={{ base: 'column', md: 'row' }} w={'full'}>
                <Input
                  type={"email"}
                  name={"email"}
                  placeholder={'john@doe.net'}
                  color={useColorModeValue('gray.800', 'gray.200')}
                  bg={useColorModeValue('gray.100', 'gray.600')}
                  rounded={'full'}
                  border={0}
                  _focus={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    outline: 'none',
                  }}
                />
                <Button
                  type={"submit"}
                  bg={'brown'}
                  rounded={'full'}
                  color={'white'}
                  flex={'1 0 auto'}
                  _hover={{ bg: 'brown' }}
                  _focus={{ bg: 'brown' }}>
                  Subscribe
                </Button>
              </Stack>
            </form>
            <Text style={{marginTop: '0.75rem'}} color={"grey"}>
              You won't receive any spam! ✌️
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
