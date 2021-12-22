import { imageService } from "../../services/image.js";
import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

function Card(props) {
  const { imageName, name, description, actions } = props;

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
    <CardActions>
        {actions.map(a => <Button
              key={a.title}
              size="small" 
              variant="contained"
              onClick={a.onClick}
            >{a.title}
          </Button>
        )}
    </CardActions>
    </MuiCard>
  );
}

export default Card;
