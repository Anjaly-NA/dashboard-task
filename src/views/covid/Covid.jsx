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
  Box,
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
  list:{
    color:theme.palette.primary.color3
  }
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
        // setData(objectArray);
        // objectArray.map((item) => {
        //   console.log(item, "item");
        //   const objectArray2 = Object.entries(item[1].districtData);
        //   objectArray2.map((i) => {
        //     console.log(i[0], "i");
        //   });
        // });
      });
  }, []);
  return (
    <Page className={classes.root} title="Covids">
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
                    {Object.entries(states[1].districtData).map((districts) => (
                      <Box component="div">
                        <Typography variant="caption" className={classes.list}>
                          {districts[0]}
                        </Typography>
                        <br />
                      </Box>
                    ))}
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
