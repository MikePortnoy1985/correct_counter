import React, { ChangeEvent } from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'
import './../../App.css'

type SetUpDisplayPropsType = {
	startValue: number
	maxValue: number
	error: string
	setStartValue: (value: number) => void
	setMaxValue: (value: number) => void
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

	error,
	setStartValue,
	setMaxValue,
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
		</>
	)
}

export default SetupDisplay
