import React from "react";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import {
  makeStyles,
  Typography,
  IconButton,
  Dialog,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content: {
    padding: theme.spacing(2),
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
        <MuiDialogTitle disableTypography className={classes.root}>
          <Typography variant="h5"> User Details</Typography>
          {props.handleClose ? (
            <IconButton
              aria-label="close"
              onClick={props.handleClose}
              className={classes.closeButton}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
        <MuiDialogContent className={classes.content}>
          {" "}
          user details
        </MuiDialogContent>
      </Dialog>
    </div>
  );
};
export default DialogBox;
