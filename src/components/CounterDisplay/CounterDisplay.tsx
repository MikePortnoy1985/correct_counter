import React from 'react'
import { TextField, Button } from '@material-ui/core'
import './../../App.css'

type CounterDisplayPropsType = {
	startValue: number
	maxValue: number
	value: number
	error: string
	countHandler: () => void
	reset: () => void
}

function CounterDisplay({ startValue, maxValue, value, error, countHandler, reset }: CounterDisplayPropsType) {
	return (
		<>
			<div>
				{error ? (
					error
				) : (
					<TextField
						variant="outlined"
						label="Counter"
						value={value === maxValue ? 'Maximum value reached' : value}
						type="text"
					/>
				)}
			</div>
			<div>
				<Button
					style={{ marginRight: '20px' }}
					variant="contained"
					color="primary"
					onClick={() => countHandler()}
					disableRipple
					disabled={!!(value < startValue || value === maxValue || error)}>
					Increase
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={() => reset()}
					disableRipple
					disabled={!!(value <= startValue || error)}>
					Reset
				</Button>
			</div>
		</>
	)
}

export default CounterDisplay
