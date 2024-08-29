import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../app/models/product";
interface Props {
  Products: Product;
}
export default function ProductCard({ Products }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {Products.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={Products.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
          bgcolor: "primary.light",
        }}
        image={Products.pictureUrl}
        title={Products.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(Products.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Products.brand} / {Products.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
