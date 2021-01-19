import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: theme.palette.border.primary,
  },
}));

const ModalBox = (props) => {
  const classes = useStyles();

  return (
    <Modal
      open={props.modal}
      onClose={props.closeModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={classes.paper}>
        <Typography color="textPrimary" gutterBottom variant="body2">
          {props.message}
        </Typography>
        <Button
          color="primary"
          size="small"
          type="submit"
          variant="contained"
          onClick={props.closeModal}
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};
export default ModalBox;
