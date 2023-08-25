/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { extendedWeatherApi } from '../../weather_api/urls';
import { useAppSelector } from '../../hooks/store-hooks';
import { IList } from '../../interfaces/forecast';
import { getDate } from '../current_info';
import { CarouselTodayItem } from '../carousel_today_item';
import { CarouselWeeklyItem } from '../carousel_weekly_item';

const tabsName = {
	today: 'today',
	weekly: 'weekly',
};

const settings = (cardsCount: number) => ({
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: cardsCount,
	slidesToScroll: 1,
});
function ForecastCarousel() {
	const [tab, setTab] = useState(tabsName.weekly);
	const searchSelector = useAppSelector((state) => state.searchSlice);
	const getForecastInfoResult =
		extendedWeatherApi.endpoints.getCityInfoForecast.useQueryState(
			searchSelector
		);
	const { data, startedTimeStamp } = getForecastInfoResult;
	console.log(data, startedTimeStamp);
	const shorterData = () => data.list.slice(0, 19);
	function tabButtonClickHandler(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	): void {
		const getName = e.currentTarget.getAttribute('name');
		if (getName) {
			setTab(getName);
		}
	}
	return (
		<Box sx={{padding:'0 0 50px 0'}}>
			<Box sx={{ mb: '30px' }}>
				<Button
					onClick={tabButtonClickHandler}
					sx={{ color: tab === tabsName.today ? '#7668e5' : 'gray' }}
					name={tabsName.today}
				>
					Today
				</Button>

				<Button
					onClick={tabButtonClickHandler}
					sx={{ color: tab === tabsName.weekly ? '#7668e5' : 'gray' }}
					name={tabsName.weekly}
				>
					Weekly
				</Button>
			</Box>
			<Slider {...settings(4)}>
				{data &&
					shorterData().map((item: IList) => {
						const secondsToMs = item.dt * 1000;
						const [date] = getDate(secondsToMs);
						const [dateNow] = getDate();
						const isToday = date === dateNow;
						switch (tab) {
							case tabsName.today: {
								return (
									isToday && (
										<CarouselTodayItem
											key={item.dt}
											dt={item.dt}
											weather={item.weather}
											mainData={item.main}
										/>
									)
								);
							}
							case tabsName.weekly: {
								return (
									!isToday && (
										<CarouselWeeklyItem
											key={item.dt}
											dt={item.dt}
											weather={item.weather}
											mainData={item.main}
										/>
									)
								);
							}
							default: {
								return (
									<CarouselTodayItem
										key={item.dt}
										dt={item.dt}
										weather={item.weather}
										mainData={item.main}
									/>
								);
							}
						}
					})}
			</Slider>
		</Box>
	);
}

export { ForecastCarousel };
