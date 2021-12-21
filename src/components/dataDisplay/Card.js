import { Button, Card as MuiCard, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function Card(props) {
    const { title, description, imagePath, actions } = props;

  return (
        <MuiCard sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={imagePath}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
              {actions.map(action => <Button onClick={action.onClick} size="small" variant="outlined">{action.name}</Button>)}
          </CardActions>
        </MuiCard>
  );
}
