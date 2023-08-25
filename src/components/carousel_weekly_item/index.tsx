import { Box, Typography } from '@mui/material';
import { getDate } from '../current_info';
import { IWeather, IMain } from '../../interfaces/forecast';

function CarouselWeeklyItem({
	dt,
	weather,
	mainData,
}: {
	dt: number;
	weather: IWeather[];
	mainData: IMain;
}) {
	const secondsToMs = dt * 1000;
	const [date, time] = getDate(secondsToMs);
	const [weatherInfo] = weather;

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'grab',
					padding: '20px',
					maxWidth: '400px',
					borderRadius: '30px',
					background: '#d9d9db',
					transition: 'all 0.3s ease 0s',
					'&:hover': {
						background: '#7668e5',
					},
				}}
			>
				<img
					src={`http://openweathermap.org/img/wn/${weatherInfo.icon}@4x.png`}
					alt=''
				/>
				<Box sx={{ textAlign: 'center' }}>
					<Typography>{`${date} ${time}`}</Typography>
					<Typography>{Math.round(mainData.temp)}°C</Typography>
					<Typography>{weatherInfo.main}</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export { CarouselWeeklyItem };
