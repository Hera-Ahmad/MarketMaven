import { Heading, MenuItem, MenuList, Menu, MenuButton, HStack, Box, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";


const TopNav = ({title, onOpen}) => {
    return (
        <Box px="4"bg="white">
            <HStack          
                maxW="70rem"
                h="16"               
                justifyContent="space-between"
                alignItems="center"
                mx="auto"   
            >
            <Icon as={IoMenu} onClick={onOpen} 
            display=
            {{base:"block", 
            lg:"none"}} />
                <Heading fontSize="28px" fontWeight="medium">Dashboard</Heading>
               {title}
                <Menu>
                    <MenuButton as={IconButton} icon={<FaCircleUser fontSize="1.6rem"/> } aria-label="Actions">
                        
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                      
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    );
};

export default TopNav;
