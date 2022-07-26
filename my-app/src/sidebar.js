import React from 'react';
import {link} from 'react-router-dom';
import {Drawer, Box, Typography, IconButton} from '@mui/material';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/menu';

export default function MuiDrawer(){
    const [isDrawerOpen, setDrawerOpen] = useState(false)
    return (
        <div>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
            <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer 
            anchor = 'left'
            open = {isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
            >
            <Box  p={2} width = '250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>
                    Side Panel
                </Typography>
            </Box>
        </Drawer>
        </div>
    )
}