import { imageService } from "../../services/image.js";
import { Card as MuiCard, CardContent, CardMedia, Typography } from "@mui/material";

function Card(props) {
  const { imageName, name, description } = props;

  return (
    <MuiCard sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        height="140"
        image={imageService.getUrl(imageName)}
        alt={name}
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
    </CardContent>
    </MuiCard>
  );
}

export default Card;
