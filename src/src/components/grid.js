import * as React from 'react';
import { Heading, Container, Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { BsFillPeopleFill, BsPencilSquare } from 'react-icons/bs';
import {GiOpenTreasureChest} from 'react-icons/gi';


const Feature = (title, text, icon) => {
  return (
    <Stack align={'center'} textAlign={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

// <Feature
//   icon={<Icon as={FcAssistant} w={10} h={10} />}
//   title={'Lifetime Support'}
//   text={
//     'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//   }
// />
// <Feature
//   icon={<Icon as={FcDonate} w={10} h={10} />}
//   title={'Unlimited Donations'}
//   text={
//     'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//   }
// />
// <Feature
//   icon={<Icon as={FcInTransit} w={10} h={10} />}
//   title={'Instant Delivery'}
//   text={
//     'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
//   }
// />

export default function SimpleThreeColumns() {
  return (
    <Container maxW={'5xl'} py={{ base: 20, md: 36 }}>
      <Box p={4}>
        <Heading textAlign={'center'} fontWeight={600} color="black" pb={'1rem'}> Why <Heading as={'span'} color={'orange.100'} fontWeight={600}> Tender </Heading> </Heading>
        <Text textAlign={'center'} color="grey" pb={'3rem'}> In addition to being <b> 100% free</b>. </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {Feature(
            'Made for Beginners',
            `Discover 10+ beginner-friendly recipes in your account when you register. They are easy, delicious and perfect for beginners to start learning how to cook.`,
            <Icon as={BsPencilSquare} w={10} h={10} color='orange.100'/>
          )}
          {Feature(
            'Everything in One Place',
            'Add, bookmark, and save any recipes in custom collections. Whether you are planning a workday lunch or a family feast, you can refer to your saved recipes and skip the time searching.',
            <Icon as={GiOpenTreasureChest} w={10} h={10} color='orange.100'/>
          )}
          {Feature(
            'Social by Nature',
            'Share your recipes and collections with loved ones to inspire each other, communicate your preferences or learn their favorites ahead of any get-togethers.',
            <Icon as={BsFillPeopleFill} w={10} h={10} color='orange.100'/>
          )}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
