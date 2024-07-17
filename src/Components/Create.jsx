import React, { useState } from 'react'
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Create = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const Data = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://6694bf424bd61d8314c8706a.mockapi.io/Crud-Assignment', formData)
            .then(() => {
                Data('/read')
            })
    };
    return (
        <div>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 5,
                        p: 3,
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
                        backgroundColor: '#f9f9f9'
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create
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
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    )
}

export default Create
