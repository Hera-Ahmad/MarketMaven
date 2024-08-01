import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { Box, HStack, Icon, Image, Stack, Text, Flex } from '@chakra-ui/react';
import { BiSupport } from "react-icons/bi";


const Sidenav = () => {
    const navLinks = [
        {
            icon: MdDashboard,
            text: 'Dashboard',
            link: '/'
        },
        {
            icon: GrTransaction,
            text: 'Transactions',
            link: '/transactions'
        }
    ];

    return (
    <Stack justify="space-between" bg="white" boxShadow={{base:"none", lg:"lg"}} W={{base:"full", lg:"60rem" }} h="100vh" p="0"
   
    >
      <Box>
      <Box pt="1rem">
        <Flex alignItems="center" justifyContent="left" mx="3">
          <Image src="markemarvel.png" alt="MarketMaven Logo" maxW="70px" mr="2" />
          <Text fontSize="18px" color="#6021b4" fontWeight="bold">
            MARKETMAVEL
          </Text>
        </Flex>
      </Box>
      <Box mt="5" mx="3">
        {navLinks.map((nav) => (
          <HStack
          borderRadius="10px"
          py="1.5"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium" color="#797E82">
              {nav.text}
            </Text>
          </HStack>
        ))}
      </Box>
      </Box>

<Box mb="8" mx="3">
      <HStack
          borderRadius="10px"
          py="1.5"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
             <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium" color="#797E82">
             SUPPORT
            </Text>
          </HStack>
          </Box>
    </Stack >
  );
};

export default Sidenav;
