import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Typography,
    IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";

const Read = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`https://6694bf424bd61d8314c8706a.mockapi.io/Crud-Assignment/${id}`)
            .then(() => {
                setData(data.filter((item) => item.id !== id));
            })
            .catch((err) => {
                console.error("Failed to delete data:", err);
            });
    };

    const handleEdit = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        navigate("/update");
    };

    useEffect(() => {
        axios
            .get("https://6694bf424bd61d8314c8706a.mockapi.io/Crud-Assignment")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch data:", err);
            });
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0',
                p: 2,
            }}
        >
            <Paper
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
                    maxWidth: '1200px',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#6E3CBC' }}>
                    Users
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((acc) => (
                                <TableRow key={acc.id}>
                                    <TableCell>{acc.name}</TableCell>
                                    <TableCell>{acc.email}</TableCell>
                                    <TableCell>
                                        <IconButton color="primary" onClick={() => handleEdit(acc.id, acc.name, acc.email)}>
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={() => handleDelete(acc.id)}>
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
};

export default Read;
