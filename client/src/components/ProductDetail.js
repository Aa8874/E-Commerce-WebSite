import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        };

        fetchProduct();
    }, [id]);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>${product.price}</h2>
        </div>
    );
};

export default ProductDetail;