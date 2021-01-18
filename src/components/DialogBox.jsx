import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import {
  makeStyles,
  Typography,
  IconButton,
  Dialog,
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
          <Typography variant="h2">{props.dialogHead}</Typography>
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
          {props.content}
        </DialogContent>
        <DialogActions>{props.actionsec}</DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogBox;
