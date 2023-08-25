import { Box, Typography } from "@mui/material";
import { IWeatherData } from "../../types/weatherData";

function convertKelvinToC(kelvin: number) {
  const difference = 273.15;
  return Math.round(kelvin - difference);
}

function MainInfo({ cityInfo }: { cityInfo: IWeatherData }) {
  const temp = cityInfo.main?.temp;
  const convertedTemp = convertKelvinToC(temp);
  const tempMax = cityInfo.main?.temp_max;
  const convertedTempMax = convertKelvinToC(tempMax);
  const tempMin = cityInfo.main?.temp_min;
  const convertedTempMin = convertKelvinToC(tempMin);
  const image = cityInfo
    ? `http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@4x.png`
    : "";
  return (
    <Box
      sx={{
        width: "300px",
			minHeight: '455px',
        position: "relative",
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(317.63deg,#353589 -7.42%,#9a9aff 120.45%)",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          padding: "4px 20px",
          bgcolor: "rgb(53, 53, 137)",
          borderRadius: "30px",
          alignSelf: "flex-start",
        }}
      >
        Today
      </Typography>
      {image && <img src={image} alt="weather" /> }
      <Typography
        sx={{
          fontSize: "76px",
          fontWeight: "500",
        }}
      >
        {temp && `${convertedTemp}℃`}
      </Typography>
      <Typography
        sx={{
          fontSize: "24px",
        }}
      >
        {temp && `${convertedTempMin}℃ - ${convertedTempMax}℃`}
      </Typography>
    </Box>
  );
}
export { MainInfo };
