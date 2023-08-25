import { Box } from '@mui/material';
import { Header } from '../components/header';
import { WeatherInfo } from '../components/weather_info';
import { ForecastCarousel } from '../components/carousel';

function MainPage() {
	return (
		<Box
			sx={{
				padding: '0 30px',
			}}
		>
			<Header />
			<WeatherInfo />
			<ForecastCarousel />
		</Box>
	);
}
export { MainPage };
