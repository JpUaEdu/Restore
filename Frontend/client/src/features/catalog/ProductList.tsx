import { Product } from '../../app/layout/models/product';
import {Grid} from '@mui/material';
import ProductCard from './ProductCard';
interface Props{
    Products: Product [];
  }
export default function ProductList({Products}:Props){
    return (
        <Grid container spacing={4}>
        {Products.map(product => (
            <Grid key={product.id} item xs={3}>
            <ProductCard  Products={product}/>
            </Grid>
        ))}
      </Grid>
    )
}