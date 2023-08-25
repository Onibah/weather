import { Box, Typography } from '@mui/material';
import { IWeatherData } from '../../types/weatherData';

function getDate(timeStamp?: number) {
	const date = timeStamp ? new Date(timeStamp) : new Date();
	const dateNow = date.toDateString();
	const dateTime = date.toLocaleTimeString();
	const timeWithoutSeconds = dateTime.slice(0, 5);
	return [dateNow, timeWithoutSeconds];
}
function CurrentInfo({
	cityInfo,
	startedTime,
}: {
	cityInfo: IWeatherData;
	startedTime: number;
}) {
	const { name } = cityInfo;
	const [dateNow, timeWithoutSeconds] = getDate(startedTime);

	return (
		<>
			<Typography
				sx={{
					position: 'relative',
					fontSize: '76px',
					fontWeight: '500',
				}}
			>
				{name || 'City'}
			</Typography>
			<Box
				sx={{
					position: 'relative',
					display: 'flex',
					columnGap: '85px',
					mb: '35px',
				}}
			>
				<Typography>{dateNow}</Typography>
				<Typography>
					{startedTime
						? `Search Time: ${timeWithoutSeconds}`
						: `Time now: ${timeWithoutSeconds}`}
				</Typography>
			</Box>
		</>
	);
}
export { CurrentInfo, getDate };
