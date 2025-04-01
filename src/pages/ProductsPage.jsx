import React, { useState, useEffect } from 'react';
import { 
  Box, Container, Typography, Button, 
  Paper, IconButton, Snackbar, Alert 
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Edit, Delete, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config/config.url';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/products`);
      setProducts(data.data || []);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`${BACKEND_URL}/products/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        fetchProducts();
      } catch (err) {
        setError('Failed to delete product');
      }
    }
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <Box>
          <IconButton onClick={() => navigate(`/products/edit/${params.row._id}`)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.row._id)}>
            <Delete />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" mb={3}>
        <Typography variant="h4">Products</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate('add')} 
        >
          Add Product
        </Button>
      </Box>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <DataGrid
          rows={products}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableSelectionOnClick
          loading={loading}
          autoHeight
        />
      </Paper>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductsPage;