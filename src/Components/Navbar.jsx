import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SeeBiz Logo.svg';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#6E3CBC',
                color: '#fff',
                zIndex: 1000
            }}

        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={logo} alt="Company Logo" style={{ width: '80px', marginRight: '16px' }} />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    User Management System
                </Typography>
                <Button color="inherit" onClick={() => handleNavigation('/')}>Home</Button>
                <Button color="inherit" onClick={() => handleNavigation('/read')}>Read</Button>
                <Button color="inherit" onClick={() => handleNavigation('/create')}>Create</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
