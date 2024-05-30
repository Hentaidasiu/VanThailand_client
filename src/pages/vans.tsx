import { useRouter } from 'next/router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Paper } from '@mui/material';

export default function vans() {
    const router = useRouter()

    const handleMoreInfo = (van: any) => {
        router.push(`/vans/${van.id}`);
    };

    const mock = [
        { id: 1, name: "toyota commuter(mam)", year: "2005", seat: 10, condition: "good", imageUrl: 'https://live.staticflickr.com/8788/16961109538_1f9f41f72a_h.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' },
        { id: 2, name: "toyota commuter(forth)", year: "2005", seat: 10, condition: "good", imageUrl: 'https://live.staticflickr.com/8788/16961109538_1f9f41f72a_h.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' },
        { id: 3, name: "toyota commuter(ken)", year: "2005", seat: 10, condition: "good", imageUrl: 'https://live.staticflickr.com/8788/16961109538_1f9f41f72a_h.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' },
        { id: 4, name: "toyota commuter(Roong)", year: "2005", seat: 10, condition: "good", imageUrl: 'https://live.staticflickr.com/8788/16961109538_1f9f41f72a_h.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.' }
    ]

    return (
        <Grid container rowSpacing={4}>
            {mock.map(van => (
                <Grid item xs={4}>
                    <Grid container justifyContent="center">
                        <Grid key={van.id} item>
                            <Card sx={{ maxWidth: 350 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={van.imageUrl}
                                    alt="Sample Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {van.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {van.description}
                                    </Typography>
                                    <Button variant="contained" onClick={() => handleMoreInfo(van)}>
                                        More Information
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}