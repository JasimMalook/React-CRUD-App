import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6694bf424bd61d8314c8706a.mockapi.io/Crud-Assignment', formData)
            .then(() => {
                navigate('/read');
            });
    };

    return (
        <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
                    backgroundColor: '#f9f9f9',
                    width: '100%',
                    maxWidth: '600px'
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#6E3CBC' }}>
                    Create New User
                </Typography>
                <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{ width: '100%' }}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2, backgroundColor: '#6E3CBC', '&:hover': { backgroundColor: '#532a94' } }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Create;
