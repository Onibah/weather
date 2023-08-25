import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { InputTargetValue } from '../../types/input';
// import { useGetCityInfoQuery } from '../../weather-api/urls';
import { addSearchValue } from '../../slices/search-slice';
import { useAppDispatch } from '../../hooks/store-hooks';
import {
	useLazyGetCityInfoQuery,
	useLazyGetCityInfoForecastQuery,
} from '../../weather_api/urls';
import { FormEvent } from '../../types/form';

function Search() {
	const dispatch = useAppDispatch();

	const [searchInput, setSearchUnput] = useState('');
	const [weatherTriggerFunction] = useLazyGetCityInfoQuery();

	const [forecastTriggerFunction] = useLazyGetCityInfoForecastQuery();

	//   console.log(weatherResult.data, weatherResult.isLoading);
	//   console.log(forecastResult.data, forecastResult.isLoading);

	function handleInputChange(e: InputTargetValue) {
		setSearchUnput(e.target.value);
	}
	function handleFormSubmit(e: FormEvent) {
		e.preventDefault();
		weatherTriggerFunction(searchInput);
		dispatch(addSearchValue(searchInput));
		forecastTriggerFunction(searchInput);
	}
	return (
		<Box
			onSubmit={handleFormSubmit}
			component='form'
			noValidate
			autoComplete='on'
			sx={{ position: 'relative', margin: '20px 0', display: 'flex' }}
		>
			<TextField
				id='standard-basic'
				label='City'
				onChange={handleInputChange}
				value={searchInput}
				sx={{
					flex: '1 1 auto',
					'>div': {
						borderRadius: '20px',
						border: 0,
					},
				}}
			/>
			<Button
				sx={{
					position: 'absolute',
					height: '100%',
					right: 0,
					border: '1px solid #7668e5',
					borderRadius: '20px',
					background: '#7668e5',
					padding: '0px 20px',
					color: '#fff',
					'&:hover': {
						background: '#fff',
						color: '#7668e5',
					},
				}}
				type='submit'
			>
				SEARCH
			</Button>
		</Box>
	);
}

export { Search };
