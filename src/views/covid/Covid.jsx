import React, { useEffect, useState } from "react";
import {
  Container,
  makeStyles,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  CardHeader,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
  Avatar,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Page from "../../components/Page";
import axios from "axios";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  fontColor: {
    color: "white",
  },
  content: {
    flexDirection: "column",
  },
  row: {
    backgroundColor: theme.palette.primary.color5,
  },
  table: {
    minWidth: 650,
  },
  heading: {
    color: theme.palette.primary.main,
  },
  tablebody: {
    color: theme.palette.primary.color3,
  },
  activecases: { color: theme.palette.primary.color1 },
  active: {
    backgroundColor: theme.palette.primary.color6,
  },
  activeAvatar: {
    backgroundColor: theme.palette.primary.color1,
  },
  confirmed: {
    backgroundColor: theme.palette.primary.color7,
  },
  confirmedAvatar: {
    backgroundColor: theme.palette.primary.color4,
  },
  recovered: {
    backgroundColor: theme.palette.primary.color8,
  },
  recoveredAvatar: {
    backgroundColor: theme.palette.primary.color3,
  },
}));

const Covid = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        setData(response.data);
        // const objectArray = Object.entries(response.data);
        // objectArray.map((item) => {
        //   console.log(item, "item");
        //   const objectArray2 = Object.entries(item[1].districtData);
        //   objectArray2.map((i) => {
        //     console.log(i[1].active, "i", active);
        //   });
        // });
      });
  }, []);
  return (
    <Page className={classes.root} title="Covid Status">
      <Container maxWidth={false}>
        <Card>
          <CardHeader title="Covid status" />
          <CardContent>
            {data !== undefined &&
              Object.entries(data).map((states) => (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <Typography variant="h6" color="textSecondary">
                          {states[0]}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Chip
                          variant="outlined"
                          avatar={
                            <Avatar
                              className={clsx(
                                classes.activeAvatar,
                                classes.fontColor
                              )}
                            >
                              A
                            </Avatar>
                          }
                          label={Object.entries(states[1].districtData).reduce(
                            (totalActive, item) => totalActive + item[1].active,
                            0
                          )}
                          // color="secondary"
                          className={classes.active}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Chip
                          variant="outlined"
                          avatar={
                            <Avatar
                              className={clsx(
                                classes.confirmedAvatar,
                                classes.fontColor
                              )}
                            >
                              C
                            </Avatar>
                          }
                          label={Object.entries(states[1].districtData).reduce(
                            (totalActive, item) =>
                              totalActive + item[1].confirmed,
                            0
                          )}
                          className={classes.confirmed}
                          // color="secondary"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Chip
                          variant="outlined"
                          avatar={
                            <Avatar
                              className={clsx(
                                classes.recoveredAvatar,
                                classes.fontColor
                              )}
                            >
                              R
                            </Avatar>
                          }
                          label={Object.entries(states[1].districtData).reduce(
                            (totalActive, item) =>
                              totalActive + item[1].recovered,
                            0
                          )}
                          className={classes.recovered}
                        />
                      </Grid>
                    </Grid>
                    {/* <Typography variant="h6" color="textSecondary">
                      {states[0]}
                    </Typography> */}
                    {/* <Chip
                      avatar={<Avatar>A</Avatar>}
                      label={Object.entries(states[1].districtData).reduce(
                        (totalActive, item) => totalActive + item[1].active,
                        0
                      )}
                      color="secondary"
                    /> */}
                    {/* <Typography variant="h6" color="textSecondary">
                      {Object.entries(states[1].districtData).reduce(
                        (totalActive, item) => totalActive + item[1].active,
                        0
                      )}
                    </Typography> */}
                  </AccordionSummary>
                  <AccordionDetails className={classes.content}>
                    <TableContainer component={Paper}>
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow className={classes.row}>
                            <TableCell className={classes.heading}>
                              Districts
                            </TableCell>
                            <TableCell
                              className={classes.heading}
                              align="right"
                            >
                              Active
                            </TableCell>
                            <TableCell
                              className={classes.heading}
                              align="right"
                            >
                              Confirmed
                            </TableCell>
                            <TableCell
                              className={classes.heading}
                              align="right"
                            >
                              Deceased
                            </TableCell>
                            <TableCell
                              className={classes.heading}
                              align="right"
                            >
                              Recovered
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {Object.entries(states[1].districtData).map(
                            (districts) => (
                              <TableRow key={districts[1]}>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  className={classes.tablebody}
                                >
                                  {districts[0]}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className={classes.activecases}
                                >
                                  {districts[1].active}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className={classes.tablebody}
                                >
                                  {districts[1].confirmed}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className={classes.tablebody}
                                >
                                  {districts[1].deceased}
                                </TableCell>
                                <TableCell
                                  align="right"
                                  className={classes.tablebody}
                                >
                                  {districts[1].recovered}
                                </TableCell>
                              </TableRow>
                            )
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              ))}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default Covid;
