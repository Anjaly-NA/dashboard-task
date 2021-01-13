import React from "react";
import Page from "../../components/Page";
import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    width: "70%",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  point: {
    color: theme.palette.primary.color4,
  },
}));

const TermsConditions = (props) => {
  const classes = useStyles();
  return (
    <>
      <Page className={classes.page}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
          flexWrap="wrap"
          className={classes.root}
        >
          <Container maxWidth="sm">
            <Typography color="textPrimary" variant="h2" gutterBottom>
              Terms and Conditions
            </Typography>
            <Typography color="primary" variant="h4">
              Introduction
            </Typography>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, Webiste Name
              accessible at Website.com. These Terms will be applied fully and
              affect to your use of this Website. By using this Website, you
              agreed to accept all terms and conditions written in here. You
              must not use this Website if you disagree with any of these
              Website Standard Terms and Conditions. Minors or people below 18
              years old are not allowed to use this Website.
            </Typography>
            <Typography color="primary" variant="h4">
              Intellectual Property Rights
            </Typography>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Other than the content you own, under these Terms, Company Name
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website. You are granted limited
              license only for purposes of viewing the material contained on
              this Website.
            </Typography>
            <Typography color="primary" variant="h4">
              Restrictions
            </Typography>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              You are specifically restricted from all of the following:
            </Typography>
            <Typography
              //   color={}
              variant="h6"
              gutterBottom
              className={classes.point}
            >
              <ul>
                <li>publishing any Website material in any other media;</li>
                <li>
                  selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </li>
                <li>
                  publicly performing and/or showing any Website material;
                </li>
                <li>
                  using this Website in any way that is or may be damaging to
                  this Website;
                </li>
              </ul>
            </Typography>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Certain areas of this Website are restricted from being access by
              you and Company Name may further restrict access by you to any
              areas of this Website, at any time, in absolute discretion. Any
              user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well.
            </Typography>
            <Typography color="primary" variant="h4">
              Your Content
            </Typography>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              In these Website Standard Terms and Conditions, “Your Content”
              shall mean any audio, video text, images or other material you
              choose to display on this Website. By displaying Your Content, you
              grant Company Name a non-exclusive, worldwide irrevocable, sub
              licensable license to use, reproduce, adapt, publish, translate
              and distribute it in any and all media. Your Content must be your
              own and must not be invading any third-party's rights. Company
              Name reserves the right to remove any of Your Content from this
              Website at any time without notice.
            </Typography>
          </Container>
        </Box>
      </Page>
    </>
  );
};

export default TermsConditions;
