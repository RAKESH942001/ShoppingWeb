/* eslint-disable max-lines-per-function */
import { React } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';

const Login = (context) => {
	const { state, setState } = context;

	const handleClickOpen = () => {
		setState({ ...state, isLogin: true });
	};

	const handleClose = () => {
		setState({ ...state, isLogin: false });
	};

	return (
		<div>
			<Button variant="standard" onClick={ handleClickOpen }>
				Login/Register
			</Button>
			<Dialog open={ state.isLogin }onClose={ handleClose }>
				<DialogTitle>Username or email</DialogTitle>
				<DialogContent><TextInput { ...context }/></DialogContent>
				<DialogTitle>Password</DialogTitle>
				<DialogContent><TextInput { ...context }/></DialogContent>
				<DialogActions>
					<Button onClick={ handleClose }>Cancel</Button>
					<Button onClick={ handleClose }>Login</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Login;
