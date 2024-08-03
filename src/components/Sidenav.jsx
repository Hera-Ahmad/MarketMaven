import React from 'react';
import { MdDashboard } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { Box, HStack, Icon, Image, Stack, Text, Flex } from '@chakra-ui/react';
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {

  const location = useLocation();
  const isActiveLink= (link)=>{
    return location.pathname ===link;
  };


  const navLinks = [
    {
      icon: MdDashboard,
      text: 'Dashboard',
      link: '/'
    },
    {
      icon: GrTransaction,
      text: 'Transactions',
      link: '/transaction'
    },

  ];

  return (
    <Stack justify="space-between" bg="white" boxShadow={{ base: "none", lg: "lg" }} W={{ base: "full", lg: "60rem" }} h="100vh" p="0"

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
            <Link to={nav.link} key={nav.text} >

              <HStack
               bg={isActiveLink("nav.link")? "#F3F3F7":"transparent"}
               color= {isActiveLink ("nav.link")? "#171717":"#797E82"}
                borderRadius="10px"
                py="1.5"
                px="4"

                bg={isActiveLink("/support")? "#F3F3F7":"transparent"}
                color= {isActiveLink ("/support")? "#171717":"#797E82"}

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
            </Link>
          ))}
        </Box>
      </Box>


    
      <Box mb="8" mx="3">
      <Link to="/support" >
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
        </Link>
      </Box>
   
    </Stack >
  );
};

export default Sidenav;
