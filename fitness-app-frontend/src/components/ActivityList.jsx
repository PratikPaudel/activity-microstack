import { Card, CardContent, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { getActivities } from '../services/api';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();

    const fetchActivities = async () => {
        try {
            const response = await getActivities();
            setActivities(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchActivities();
    }, []);

    return (
        <Grid container spacing={2}>
            {activities.map((activity) => (
                <Grid key={activity.id} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Card sx={{ cursor: 'pointer' }} onClick={() => navigate(`/activities/${activity.id}`)}>
                        <CardContent>
                            <Typography variant="h5">{activity.type}</Typography>
                            <Typography>Duration: {activity.duration}</Typography>
                            <Typography>Calories: {activity.caloriesBurned}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

export default ActivityList