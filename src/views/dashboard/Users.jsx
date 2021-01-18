import React, { useState, useEffect } from "react";
import clsx from "clsx";
// import moment from "moment";
// import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  // TableSortLabel,
  // Tooltip,
  makeStyles,
  TablePagination,
  TableContainer,
  Typography,
  Link,
} from "@material-ui/core";
import {
  userlistFetchRequest,
  userlistFetchSuccess,
  userlistFetchFailure,
  fetchUserlist,
  userDetailRequest,
  userDetailSuccess,
  userDetailFailure,
  userDetailFetch,
} from "../../redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader";
import DialogBox from "../../components/DialogBox";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import axios from "axios";
import ModalBox from "../../components/Modal";

const useStyle = makeStyles((theme) => ({
  root: {},
  actions: {
    justifyContent: "flex-end",
  },
  avatar: {
    width: 45,
    height: 45,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    minWidth: 700,
  },
  tablerow: {
    cursor: "pointer",
  },
  deleteIcon: {
    color: theme.palette.primary.color1,
  },
  editIcon: {
    color: theme.palette.primary.color2,
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  label: {
    color: theme.palette.primary.main,
  },
}));

const User = (props, { className, ...rest }) => {
  const classes = useStyle();
  const [page, setPage] = useState(0);
  const [openDialogue, setOpenDialogue] = useState(false);
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setOpenDialogue(false);
  };
  // const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchList(page);
  }, [page]);

  const fetchList = (page) => {
    setPage(page);
    props.userlistFetchRequest();
    props
      .getUserList(page + 1)
      .then((response) => {
        props.userlistFetchSuccess(response.data.data, response.data.total);
      })
      .catch((error) => {
        props.userlistFetchFailure(error.message);
      });
  };

  const handleChangePage = (event, newPage) => {
    fetchList(newPage);
  };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const handleRowClick = (event, userId) => {
    props.userDetailRequest();
    props
      .userDetailFetch(userId)
      .then((response) => {
        props.userDetailSuccess(response.data.data, response.data.support);
        setOpenDialogue(true);
      })
      .catch((error) => {
        props.userDetailFailure(error.message);
      });
  };
  const deleteUser = (userId) => {
    axios
      .delete(`https://reqres.in/api/users/${userId}`)
      .then((response) => {
        if (response.status === 204) {
          setModal(true);
          setMessage("Successfully deleted user");
        }
      })
      .catch((error) => {
        setModal(true);
        setMessage("Something went wrong while deleting user");
      });
  };
  const closeModal = () => {
    setModal(false);
  };

  const ContentSection = () => {
    return (
      <>
        <Typography gutterBottom>
          <Box component="span" className={classes.label}>
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
      </>
    );
  };
  const ActionSection = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <>
      <ModalBox message={message} modal={modal} closeModal={closeModal} />
      <DialogBox
        handleClose={handleClose}
        open={openDialogue}
        userDetailData={props.userDetailData}
        dialogHead="User Details"
        content={<ContentSection />}
        actionsec={<ActionSection />}
      ></DialogBox>
      <Card className={clsx(className)} {...rest}>
        <CardHeader title="Our Users" />
        <Divider />
        <PerfectScrollbar>
          <Box minHeight={400}>
            {props.loading && <Loader />}
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>User ID</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell sortDirection="asc">
                      {/* <Tooltip enterDelay={100} title="Sort">
                      <TableSortLabel active direction="asc"> */}
                      Second Name
                      {/* </TableSortLabel>
                    </Tooltip> */}
                    </TableCell>
                    <TableCell>Photo </TableCell>
                    <TableCell>Delete </TableCell>
                    <TableCell>Edit </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.userlistData
                    // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((user) => (
                      <TableRow
                        hover
                        key={user.id}
                        tabIndex={-1}
                        className={classes.tablerow}
                      >
                        <TableCell
                          onClick={(event) => handleRowClick(event, user.id)}
                        >
                          {user.id}
                        </TableCell>
                        <TableCell
                          onClick={(event) => handleRowClick(event, user.id)}
                        >
                          {user.first_name}
                        </TableCell>
                        <TableCell
                          onClick={(event) => handleRowClick(event, user.id)}
                        >
                          {user.last_name}
                          {/* {moment(user.createdAt).format("DD/MM/YYYY")} */}
                        </TableCell>
                        <TableCell
                          onClick={(event) => handleRowClick(event, user.id)}
                        >
                          <Avatar
                            className={classes.avatar}
                            src={user.avatar}
                          />
                          {/* <Chip
                          color="primary"
                          label={user.status}
                          size="small"
                        /> */}
                        </TableCell>
                        <TableCell>
                          <DeleteRoundedIcon
                            className={classes.deleteIcon}
                            onClick={() => deleteUser(user.id)}
                          />
                        </TableCell>
                        <TableCell className={classes.deleteIcon}>
                          <EditRoundedIcon className={classes.editIcon} />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              // rowsPerPageOptions={[5, 10, 25]}
              rowsPerPageOptions={6}
              component="div"
              count={props.totalUser}
              // rowsPerPage={rowsPerPage}
              rowsPerPage={6}
              page={page}
              onChangePage={handleChangePage}
              // onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Box>
        </PerfectScrollbar>
      </Card>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userlistData: state.listRed.userList,
    totalUser: state.listRed.totalUser,
    loading: state.listRed.loading,
    userDetailData: state.userDetailRed,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (currentPage) => dispatch(fetchUserlist(currentPage)),
    userlistFetchRequest: () => dispatch(userlistFetchRequest()),
    userlistFetchSuccess: (userList, totalUser) =>
      dispatch(userlistFetchSuccess(userList, totalUser)),
    userlistFetchFailure: (error) => dispatch(userlistFetchFailure(error)),

    userDetailRequest: () => dispatch(userDetailRequest()),
    userDetailFetch: (userId) => dispatch(userDetailFetch(userId)),
    userDetailSuccess: (userData, userSupport) =>
      dispatch(userDetailSuccess(userData, userSupport)),
    userDetailFailure: (errorMessage) =>
      dispatch(userDetailFailure(errorMessage)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default User;
