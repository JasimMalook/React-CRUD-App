import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/SeeBiz Logo.svg'; // Correct the import path

const Home = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: '#f9f9f9', // Light background color
                color: '#333', // Dark text color
                textAlign: 'center',
                padding: '20px'
            }}
        >
            <Container maxWidth="md">
                <img src={logo} alt="Company Logo" style={{ width: '120px', marginBottom: '24px' }} />
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to User Management System
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Manage your users effectively and efficiently.
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            mr: 2,
                            padding: '10px 20px',
                            fontSize: '16px',
                        }}
                        onClick={() => navigate('/read')}
                    >
                        View Users
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            padding: '10px 20px',
                            fontSize: '16px',
                        }}
                        onClick={() => navigate('/create')}
                    >
                        Add User
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
