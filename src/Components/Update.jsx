import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import axios from 'axios';


const Update = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));

    }, []);
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6694bf424bd61d8314c8706a.mockapi.io/Crud-Assignment/${id}`,
            {
                name: name,
                email: email
            })
            .then(() => {
                navigate('/read')
            })
            .catch((err) => {
                console.error("Failed to update data:", err);
            });
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
                        Update
                    </Typography>
                    <form onSubmit={handleUpdate} noValidate autoComplete="off" style={{ width: '100%' }}>
                        <TextField
                            label="Name"
                            name="name"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ mt: 2 }}
                        >
                            Update
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    )
}

export default Update
