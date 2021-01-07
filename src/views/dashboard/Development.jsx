import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Development = () => {
  const theme = useTheme();
  const classes = useStyles();
  const data = {
    datasets: [
      {
        backgroundColor: theme.palette.primary.color2,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: "This year",
      },
      {
        backgroundColor: theme.palette.primary.light,
        data: [11, 20, 12, 29, 30, 25, 13],
        label: "Last year",
      },
      {
        backgroundColor: theme.palette.primary.color5,
        data: [21, 20, 12, 29, 30, 25, 13],
        label: "Coming year",
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
  };
  const options = {
    animation: false,
    cornerRadius: 20,
    responsive: true,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          barThickness: 10,
          maxBarThickness: 7,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.primary.color3,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.primary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [5],
            borderDashOffset: [5],
            color: theme.palette.primary.color3,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.primary.color4,
          },
        },
      ],
    },
    // tooltips: {
    //   backgroundColor: theme.palette.background.default,
    //   bodyFontColor: theme.palette.text.secondary,
    //   borderColor: theme.palette.divider,
    //   borderWidth: 1,
    //   enabled: true,
    //   footerFontColor: theme.palette.text.secondary,
    //   intersect: false,
    //   mode: "index",
    //   titleFontColor: theme.palette.text.primary,
    // },
  };
  return (
    <Card>
      <CardHeader
        action={
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select range</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Last 7 days</MenuItem>
              <MenuItem value={20}>Last 1 month</MenuItem>
              <MenuItem value={30}>Year</MenuItem>
            </Select>
          </FormControl>
        }
        title="Latest Development"
      />
      <Divider />
      <CardContent>
        <Box height={400} position="relative">
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button> */}
      </Box>
    </Card>
  );
};
export default Development;
