import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { ReducerStateType, countHandlerAC, resetAC, ActionsType } from '../../store/reducer'
import { Dispatch } from 'redux'
import { ClassesType } from '../../App'

type CounterDisplayPropsType = {
	classes: ClassesType
	localState: ReducerStateType
	dispatch: Dispatch<ActionsType>
}

function CounterDisplay({ localState, dispatch, classes }: CounterDisplayPropsType) {
	console.log('counter')
	const style = {
		backgroundColor: 'white',
		padding: '0 6px',
		borderRadius: '4px',
		transform: 'translate(11px, -6px) scale(0.75)',
	}

	return (
		<>
			<div>
				{localState.error ? (
					localState.error
				) : (
					<TextField
						className={classes.textField}
						variant="outlined"
						label="Counter"
						InputLabelProps={{ style: style }}
						value={localState.count === localState.maxValue ? 'Maximum value reached' : localState.count}
						type="text"
					/>
				)}
			</div>
			<div>
				<Button
					style={{ marginRight: '20px' }}
					variant="contained"
					color="primary"
					onClick={() => {
						dispatch(countHandlerAC())
					}}
					disableRipple
					disabled={
						!!(
							localState.count < localState.startValue ||
							localState.count === localState.maxValue ||
							localState.error
						)
					}>
					Increase
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => dispatch(resetAC())}
					disableRipple
					disabled={!!(localState.count <= localState.startValue || localState.error)}>
					Reset
				</Button>
			</div>
		</>
	)
}

export default CounterDisplay
