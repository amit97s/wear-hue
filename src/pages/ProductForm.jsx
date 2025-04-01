import React, { useState, useEffect } from 'react';
import {
  Box, Container, Typography, TextField, Button,
  Paper, Grid, MenuItem, Snackbar, Alert, Input
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKEND_URL } from '../config/config.url';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    colors: [],
    availableOn: '',
    images: []
  });

  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/products/${id}`);
      setFormData({
        ...data.product,
        availableOn: new Date(data.product.availableOn).toISOString().split('T')[0]
      });
    } catch (err) {
      setError('Failed to fetch product');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'price' || name === 'stock') {
      if (value < 0) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };

  const handleColorChange = (e) => {
    const colors = e.target.value.split(',').map(color => color.trim());
    setFormData({ ...formData, colors });
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length > 100) {
      setError('Name is required and cannot exceed 100 characters');
      return false;
    }
    if (!formData.price || formData.price.toString().length > 5) {
      setError('Price is required and cannot exceed 5 digits');
      return false;
    }
    if (!formData.description) {
      setError('Description is required');
      return false;
    }
    if (!formData.category) {
      setError('Category is required');
      return false;
    }
    if (!formData.availableOn) {
      setError('Available date is required');
      return false;
    }
    if (!formData.colors.length) {
      setError('At least one color is required');
      return false;
    }
    if (!id && !imageFiles.length) {
      setError('At least one image is required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'colors') {
          formDataToSend.append(key, JSON.stringify(formData[key]));
        } else if (key !== 'images') {
          formDataToSend.append(key, formData[key]);
        }
      });

      imageFiles.forEach(file => {
        formDataToSend.append('images', file);
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };

      if (id) {
        await axios.put(`${BACKEND_URL}/products/${id}`, formDataToSend, config);
        setSuccess('Product updated successfully');
      } else {
        await axios.post(`${BACKEND_URL}/products`, formDataToSend, config);
        setSuccess('Product created successfully');
      }

      setTimeout(() => navigate('/dashboard/admin/products'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" mb={4}>
          {id ? 'Edit Product' : 'Add New Product'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                error={formData.name.length > 100}
                helperText={formData.name.length > 100 ? "Name cannot exceed 100 characters" : ""}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                inputProps={{ min: 0, max: 99999 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                inputProps={{ min: 0 }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                select
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <MenuItem value="t-shirts">T-Shirts</MenuItem>
                <MenuItem value="hoodies">Hoodies</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Available On"
                name="availableOn"
                value={formData.availableOn}
                onChange={handleChange}
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Colors (comma-separated)"
                name="colors"
                value={formData.colors.join(', ')}
                onChange={handleColorChange}
                required
                helperText="Enter colors separated by commas (e.g., Red, Blue, Green)"
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                type="file"
                inputProps={{ multiple: true, accept: 'image/*' }}
                onChange={handleImageChange}
                fullWidth
              />
              <Typography variant="caption" color="textSecondary">
                {id ? "Upload new images to replace existing ones" : "Please select product images"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                fullWidth
              >
                {loading ? 'Saving...' : (id ? 'Update Product' : 'Create Product')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>

      <Snackbar open={!!success} autoHideDuration={6000} onClose={() => setSuccess('')}>
        <Alert severity="success">{success}</Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductForm;