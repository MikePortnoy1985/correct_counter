import React, { ChangeEvent } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import './../../App.css'

type SetUpDisplayPropsType = {
	startValue: number
	maxValue: number
	disabled: boolean
	error: string
	setStartValue: (value: number) => void
	setMaxValue: (value: number) => void
	setHandler: () => void
	localStorageHandler: () => void
}

const useStyles = makeStyles({
	textField: {
		backgroundColor: 'white',
		borderRadius: '4px',
	},
})
function SetupDisplay({
	startValue,
	maxValue,
	disabled,
	error,
	setStartValue,
	setMaxValue,
	setHandler,
	localStorageHandler,
}: SetUpDisplayPropsType) {
	const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setStartValue(Number.parseInt(event.currentTarget.value))
	}

	const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setMaxValue(Number.parseInt(event.currentTarget.value))
	}

	const classes = useStyles()
	return (
		<>
			<TextField
				className={classes.textField}
				variant="outlined"
				error={error === 'Incorrect value'}
				label="Max value"
				type="number"
				value={maxValue}
				onChange={onChangeMaxValueHandler}
			/>
			<TextField
				className={classes.textField}
				variant="outlined"
				error={error === 'Incorrect value'}
				label="Start value"
				type="number"
				value={startValue}
				onChange={onChangeStartValueHandler}
			/>
			<Button
				disableRipple
				variant="contained"
				color="primary"
				onClick={() => {
					setHandler()
					localStorageHandler()
				}}
				disabled={disabled}>
				Set
			</Button>
		</>
	)
}

export default SetupDisplay
