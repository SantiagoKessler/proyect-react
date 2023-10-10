import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div>
            <Flex>
                <Box p='3' bg='blue'>
                    <h1>Abstract</h1>
                </Box>
                <Spacer />
                <Box>
                    <Menu>
                        <MenuButton >
                            Productos
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Remeras</MenuItem>
                            <MenuItem>Buzos</MenuItem>
                            <MenuItem>Pantalones</MenuItem>

                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='3' bg='blue'>
                    <CartWidget />
                </Box>
            </Flex>

        </div>

    )
}

export default Navbar