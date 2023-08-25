import { Box, Container } from '@mui/material';
import { Details } from '../details';
import { MainInfo } from '../main_info';
import { useAppSelector } from '../../hooks/store-hooks';
import { extendedWeatherApi } from '../../weather_api/urls';
import { CurrentInfo } from '../current_info';

function WeatherInfo() {
	const searchSelector = useAppSelector((state) => state.searchSlice);
	const getCityInfoResult =
		extendedWeatherApi.endpoints.getCityInfo.useQueryState(searchSelector);
	const { data, startedTimeStamp } = getCityInfoResult;

	return (
		<Box
			sx={{
				position: 'relative',
				padding: '100px 10px',
				color: '#fff',
				mb: '30px',
			}}
		>
			<img
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: '0',
					left: '0',
					objectFit: 'cover',
					borderRadius: '25px',
				}}
				alt=''
				src='/src/mainbg.png'
			/>
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
				disableGutters
			>
				<Box>
					<CurrentInfo
						startedTime={startedTimeStamp || 0}
						cityInfo={data || ''}
					/>
					<Details cityInfo={data || ''} />
				</Box>
				<MainInfo cityInfo={data || ''} />
			</Container>
		</Box>
	);
}
export { WeatherInfo };
