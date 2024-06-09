import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import CustomDatepicker from "../comonents/CustomDatepicker";
import axios from "axios";
import LocationAutoComplete from "../comonents/LocationAutoComplete";
import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { months } from "moment";
import { Months } from "../utility/GeneralUtility";
import dayjs from "dayjs";
import classes from "./dashboard.module.css";
import weather_img from "../assets/images/cloudy.png"; 

export default function DashboardApp() {
  const { logout } = useAuth0();
  const [selectedDate, setSelectedDate] = useState({
    date: null,
    month: null,
    year: null,
  });
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = "Chennai";

  const fetchData = async () => {
    try {
      // Fetch coordinates for the location from Azure Maps
      const locationResponse = await axios.get(
        `Azure_Maps_API_Endpoint?query=${location}&subscription-key=Your_Azure_Maps_Subscription_Key`
      );
      const { latitude, longitude } = locationResponse.data.results[0].position;

      // Fetch weather data using coordinates from Azure Weather Services
      const weatherResponse = await axios.get(
        `Azure_Weather_API_Endpoint?lat=${latitude}&lon=${longitude}&subscription-key=Your_Azure_Weather_API_Key`
      );
      setWeatherData(weatherResponse.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };


  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        <Grid item lg={12}>
          <LocationAutoComplete />
        </Grid>
        <Grid item lg={3}>
          <CustomDatepicker
            onChange={(value) => {
              setSelectedDate((pre) => ({ ...pre, month: value }));
              console.log(value, "value");
            }}
            views={["month"]}
            value={selectedDate?.month}
          />
        </Grid>
        <Grid item lg={3}>
          <CustomDatepicker
            onChange={(value) => {
              setSelectedDate((pre) => ({ ...pre, date: value }));
              console.log(value, "value");
            }}
            views={["day"]}
            value={selectedDate?.date}
          />
        </Grid>
        <Grid item lg={3}>
          <CustomDatepicker
            onChange={(value) => {
              setSelectedDate((pre) => ({ ...pre, year: value }));
              console.log(value, "value");
            }}
            views={["year"]}
            value={selectedDate?.year}
          />
        </Grid>
        <Grid item lg={3}>
<Button sx={{
  margin:"auto"
}} variant="contained">View</Button>
        </Grid>
      </Grid>

      <Grid style={{
        maxWidth: "500px",
        margin:"auto",
        padding : "40px 0px",
        display : "flex",
        alignItems:"center",
        justifyContent : "space-around"
      }}>
        <Grid className={classes.weathercontainer}>
          <Typography className={classes.prevlabel}>{`-- :${70}`} <span
              style={{
                verticalAlign: "super",
                fontSize: "15px",
        
              }}
            >
              0
            </span></Typography>
          <Typography className={`${classes.label}`}>
            {`${75}`}
            <span
              style={{
                verticalAlign: "super",
                fontSize: "18px",
        
              }}
            >
              0
            </span>
            <span >C</span>
          </Typography>
          <Typography style={{
            fontSize : "17px"
          }} className={`${classes.label} ${classes.nextlabel}`}>
            <span style={{
              color : "black"
            }}>LIKE</span>&ensp;
            {`${98}`}
            <span
              style={{
                verticalAlign: "super",
                fontSize: "14px",
        
              }}
            >
              0
            </span>
           
          </Typography>
        </Grid>
        <img src={weather_img} style={{
          width : "100px"
        }} />
      </Grid>
    </div>
  );
}
