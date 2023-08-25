import { Box } from "@mui/material";
import { IWeatherData } from "../../types/weatherData";

function Details({ cityInfo }: { cityInfo: IWeatherData }) {
  console.log(cityInfo);
  const speedWind = cityInfo ? Math.round(cityInfo.wind.speed) : null;
  const gustWind = cityInfo ? Math.round(cityInfo.wind.gust) : null;
  const humidity = cityInfo ? cityInfo.main.humidity : null;
  const feelsLike = cityInfo ? Math.round(cityInfo.main.feels_like) : null;
  return (
    <Box
      sx={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "20px",
        maxWidth: "435px",
        color: "#000",
        bgcolor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "30px",
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          columnGap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "10px 8px",
            backgroundColor: "#7668e5",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "32px",
            }}
            alt=""
            src="/src/r.webp"
          />
        </Box>
        {speedWind && `Wind ${speedWind}km/h`}
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "10px 8px",
            backgroundColor: "#7668e5",
            borderRadius: "10px",
          }}
        >
          <img
            style={{
              width: "32px",
            }}
            alt=""
            src="/src/r.webp"
          />
        </Box>
        {speedWind && `Gust ${gustWind}km/h`}
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "10px 8px",
            backgroundColor: "#7668e5",
            borderRadius: "10px",
          }}
        >
          <img alt="" src="/src/w.webp" />
        </Box>
        {humidity && `Humidity: ${humidity}%`}
      </Box>
      <Box
        sx={{
          display: "flex",
          columnGap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "10px 8px",
            backgroundColor: "#7668e5",
            borderRadius: "10px",
          }}
        >
          <img alt="" src="/src/w.webp" />
        </Box>
       {feelsLike && feelsLike}
      </Box>
    </Box>
  );
}
export { Details };
