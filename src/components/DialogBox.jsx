import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  makeStyles,
  Typography,
  IconButton,
  Dialog,
  Avatar,
  Box,
  Link,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.white,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    // top: theme.spacing(1),
    color: theme.palette.primary.color4,
    top: "2px",
  },
  content: {
    padding: theme.spacing(2),
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  box: {
    display: "flex",
    justifyContent: "center",
  },
  label: {
    color: theme.palette.primary.main,
  },
}));

const DialogBox = (props) => {
  const classes = useStyle();
  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle disableTypography className={classes.root}>
          <Typography variant="h2"> User Details</Typography>
          {props.handleClose ? (
            <IconButton
              aria-label="close"
              onClick={props.handleClose}
              className={classes.closeButton}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent className={classes.content} dividers>
          <Typography gutterBottom>
            <Box component="span" className={classes.label}>
              {" "}
              Name :{" "}
            </Box>
            {props.userDetailData.userDetail.first_name}{" "}
            {props.userDetailData.userDetail.last_name}
          </Typography>
          <Typography gutterBottom>
            <Box component="span" className={classes.label}>
              {" "}
              Email :{" "}
            </Box>
            {props.userDetailData.userDetail.email}
          </Typography>
          <Box component="div" mx="auto" className={classes.box}>
            <Avatar
              alt="Remy Sharp"
              src={props.userDetailData.userDetail.avatar}
              className={classes.image}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Typography gutterBottom>
            For more details :{" "}
            <Link
              href={props.userDetailData.userSupport.url}
              target="_blank"
              color="textSecondary"
            >
              {props.userDetailData.userSupport.url}
            </Link>
          </Typography>
          <Typography gutterBottom variant="caption" color="primary">
            {props.userDetailData.userSupport.text}
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogBox;
