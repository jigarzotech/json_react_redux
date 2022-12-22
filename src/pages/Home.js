import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { loadUsers, deleteUsers } from '../Redux/actions';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.data)
    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const deleteDataHandler = (id) => {
        if (window.confirm("Are you sure wanted to delete the user")) {
            dispatch(deleteUsers(id))
        }
    }
    return (
        <div>
            <Button color='primary' variant="contained" style={{ paddingTop: '15px' }} onClick={() => navigate('/adduser')}>add user</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align='center'>Name</StyledTableCell>
                            <StyledTableCell align='center'>Email</StyledTableCell>
                            <StyledTableCell align='center'>Address</StyledTableCell>
                            <StyledTableCell align='center'>action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align='center'>
                                    {item.name}
                                </StyledTableCell>
                                <StyledTableCell align='center'>{item.email}</StyledTableCell>
                                <StyledTableCell align='center'>{item.address}</StyledTableCell>
                                <StyledTableCell align='center'>
                                    <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                        <Button style={{ marginRight: '5px' }} color='secondary' onClick={() => {
                                            deleteDataHandler(item.id)
                                            // setId(item.id)
                                        }}>delete</Button>
                                        <Button color='primary' onClick={() => {
                                            navigate('/edituser', { state: { item: item.id } })
                                        }}>edit</Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home;
