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
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Page from "../../components/Page";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
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
        //     console.log(i, "i");
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
                    <Typography variant="h6" color="textSecondary">
                      {states[0]}
                    </Typography>
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

                    {/* {Object.entries(states[1].districtData).map((districts) => (
                      <Box component="div">
                        <Typography variant="caption" className={classes.list}>
                          {districts[0]}
                        </Typography>
                        <br />
                      </Box>
                    ))} */}
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
