import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  TableContainer,
  Card,
  CardHeader,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import clsx from "clsx";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { editUserList } from "../../constant/constant";
import { connect } from "react-redux";
import {
  userEditSuccess,
  userEditFailure,
  userEditRequest,
  editUser,
} from "../../redux/userEdit/userEditAction";
import DialogBox from "../../components/DialogBox";
import ModalBox from "../../components/Modal";
import * as Yup from "yup";
import { Formik } from "formik";
import { setModal, unsetModal } from "../../redux/common/modal/modalAction";

const initialValues = {
  name: "",
  job: "",
};
const signInSchema = Yup.object().shape({
  name: Yup.string()
    .max(255)
    .required("Name is required"),
  job: Yup.string()
    .max(255)
    .required("Job is required"),
});

const useStyle = makeStyles((theme) => ({
  root: {},
  table: {
    minWidth: 200,
  },

  editIcon: {
    color: theme.palette.primary.color2,
    cursor: "pointer",
  },
  container: {
    position: "relative",
  },
}));
const EditUser = (props, { className, ...rest }) => {
  const classes = useStyle();
  const [openDialogue, setOpenDialogue] = useState(false);
  const [userId, setUserId] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [userDetail, setUserDetail] = useState({ name: "edf", job: "dsa" });

  const closeModal = () => {
    // setModal(false);
    props.unsetModal();
  };

  const editUser = (event, userIdPassed, name, job) => {
    setOpenDialogue(true);
    setUserId(userIdPassed);
    setUserDetail({ name: name, job: job });
  };
  const onSubmitedit = () => {
    props.userEditRequest();
    props
      .editUser(userId)
      .then((response) => {
        props.userEditSuccess(response.data.data);
        setOpenDialogue(false);
        props.setModal("Edited successfully");
        // setModal(true);
        // setMessage("Edited successfully");
      })
      .catch((error) => {
        props.userEditFailure(error.message);
        setOpenDialogue(false);
        props.setModal("Something went wrong");
        // setModal(true);
        // setMessage("Something went wrong");
      });
  };
  const handleClose = () => {
    setOpenDialogue(false);
  };

  const ContentSection = () => {
    return (
      <>
        <Formik
          initialValues={userDetail || initialValues}
          signInSchema={signInSchema}
          onSubmit={onSubmitedit}
        >
          {(formik) => {
            const {
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
              handleBlur,
              isValid,
              dirty,
            } = formik;
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.job && errors.job)}
                  fullWidth
                  helperText={touched.job && errors.job}
                  label="Job"
                  margin="normal"
                  name="job"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.job}
                  variant="outlined"
                />
                <Button
                  color="primary"
                  disabled={!(dirty && isValid)}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Edit
                </Button>
              </form>
            );
          }}
        </Formik>
      </>
    );
  };

  return (
    <>
      {/* <ModalBox message={message} modal={modal} closeModal={closeModal} /> */}
      <ModalBox
        message={props.modalData.modalMessage}
        modal={props.modalData.openModal}
        closeModal={closeModal}
      />
      <DialogBox
        handleClose={handleClose}
        open={openDialogue}
        dialogHead="User Edit"
        content={<ContentSection />}
      ></DialogBox>
      <Card className={clsx(className)} {...rest}>
        <CardHeader title="Edit Users" />
        <Divider />
        <Box height={500} className={classes.container} overflow="scroll">
          {/* {(loader || props.loading) && <Loader />} */}
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Job </TableCell>
                  <TableCell>Edit </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {editUserList.map((item, index) => (
                  <TableRow hover key={index + 1} tabIndex={-1}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.job}</TableCell>
                    <TableCell>
                      <EditRoundedIcon
                        className={classes.editIcon}
                        onClick={(event) =>
                          editUser(event, index + 1, item.name, item.job)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    editData: state.userEditRed,
    modalData: state.modalRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userEditRequest: () => dispatch(userEditRequest()),
    userEditSuccess: (editData) => dispatch(userEditSuccess(editData)),
    userEditFailure: (errorMessage) => dispatch(userEditFailure(errorMessage)),
    editUser: (userId) => dispatch(editUser(userId)),

    setModal: (message) => dispatch(setModal(message)),
    unsetModal: () => dispatch(unsetModal()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
