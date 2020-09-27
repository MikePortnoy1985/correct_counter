import React, { ChangeEvent } from 'react'
import { Button, TextField, Theme } from '@material-ui/core'
import { ActionsType, ReducerStateType, setHandlerAC, setMaxValueAC, setStartValueAC } from '../../store/reducer'
import { Dispatch } from 'redux'
import { ClassesType } from '../../App'

type SetUpDisplayPropsType = {
	classes: ClassesType
	localState: ReducerStateType
	dispatch: Dispatch<ActionsType>
	localStorageHandler: () => void
}

function SetupDisplay({ localState, dispatch, localStorageHandler, classes }: SetUpDisplayPropsType) {
	const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setStartValueAC(Number.parseInt(event.currentTarget.value)))
	}

	const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(setMaxValueAC(Number.parseInt(event.currentTarget.value)))
	}
	const style = {
		backgroundColor: 'white',
		padding: '0 6px',
		borderRadius: '4px',
		transform: 'translate(11px, -6px) scale(0.75)',
	}

	return (
		<>
			<TextField
				className={classes.textField}
				variant="outlined"
				error={localState.error === 'Incorrect value'}
				label="Max value"
				type="number"
				InputLabelProps={{ style: style }}
				value={localState.maxValue}
				onChange={onChangeMaxValueHandler}
			/>
			<TextField
				className={classes.textField}
				variant="outlined"
				error={localState.error === 'Incorrect value'}
				label="Start value"
				type="number"
				InputLabelProps={{ style: style }}
				value={localState.startValue}
				onChange={onChangeStartValueHandler}
			/>
			<Button
				disableRipple
				variant="contained"
				color="primary"
				onClick={() => {
					dispatch(setHandlerAC())
					localStorageHandler()
				}}
				disabled={localState.disabled}>
				Set
			</Button>
		</>
	)
}

export default SetupDisplay
