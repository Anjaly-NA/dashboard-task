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
} from "@material-ui/core";
import {
  userlistFetchRequest,
  userlistFetchSuccess,
  userlistFetchFailure,
  fetchUserlist,
} from "../../redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader";

// const datas = [
//   {
//     id: uuid(),
//     ref: "CDD1049",
//     amount: 30.5,
//     customer: {
//       name: "Ekaterina Tankova",
//     },
//     createdAt: 1555016400000,
//     status: "pending",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1048",
//     amount: 25.1,
//     customer: {
//       name: "Cao Yu",
//     },
//     createdAt: 1555016400000,
//     status: "delivered",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1047",
//     amount: 10.99,
//     customer: {
//       name: "Alexa Richardson",
//     },
//     createdAt: 1554930000000,
//     status: "refunded",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1046",
//     amount: 96.43,
//     customer: {
//       name: "Anje Keizer",
//     },
//     createdAt: 1554757200000,
//     status: "pending",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1045",
//     amount: 32.54,
//     customer: {
//       name: "Clarke Gillebert",
//     },
//     createdAt: 1554670800000,
//     status: "delivered",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1044",
//     amount: 16.76,
//     customer: {
//       name: "Adam Denisov",
//     },
//     createdAt: 1554670800000,
//     status: "delivered",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1044",
//     amount: 16.76,
//     customer: {
//       name: "Adam Denisov",
//     },
//     createdAt: 1554670800000,
//     status: "delivered",
//   },
//   {
//     id: uuid(),
//     ref: "CDD1044",
//     amount: 16.76,
//     customer: {
//       name: "Adam Denisov",
//     },
//     createdAt: 1554670800000,
//     status: "delivered",
//   },
// ];
const useStyle = makeStyles(() => ({
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
}));

const User = (props, { className, ...rest }) => {
  const classes = useStyle();
  const [page, setPage] = useState(0);
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

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {props.userlistData
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((user) => (
                    <TableRow hover key={user.id} tabIndex={-1}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.first_name}</TableCell>
                      <TableCell>
                        {user.last_name}
                        {/* {moment(user.createdAt).format("DD/MM/YYYY")} */}
                      </TableCell>
                      <TableCell>
                        <Avatar className={classes.avatar} src={user.avatar} />
                        {/* <Chip
                          color="primary"
                          label={user.status}
                          size="small"
                        /> */}
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
  );
};

const mapStateToProps = (state) => {
  return {
    userlistData: state.listRed.userList,
    totalUser: state.listRed.totalUser,
    loading: state.listRed.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (currentPage) => dispatch(fetchUserlist(currentPage)),
    userlistFetchRequest: () => dispatch(userlistFetchRequest()),
    userlistFetchSuccess: (userList, totalUser) =>
      dispatch(userlistFetchSuccess(userList, totalUser)),
    userlistFetchFailure: (error) => dispatch(userlistFetchFailure(error)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
// export default User;
