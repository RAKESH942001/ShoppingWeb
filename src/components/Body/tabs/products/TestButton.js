/* eslint-disable no-mixed-spaces-and-tabs */
import { Button, CircularProgress } from '@mui/material';
import React from 'react';

const LoginButton = ({ children, loading, ...rest }) =>
	<Button { ...rest }>
		{children}
		{
			loading
			&& <CircularProgress
				size={ 30 }
				color="secondary"
				style={ { position: 'absolute' } }
			   />

		}
	</Button>;

export default LoginButton;
