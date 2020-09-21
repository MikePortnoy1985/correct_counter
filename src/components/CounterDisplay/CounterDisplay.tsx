import React from 'react'
import { TextField } from '@material-ui/core'
import './../../App.css'

type CounterDisplayPropsType = {
	maxValue: number
	value: number
	error: string
}

function CounterDisplay({ maxValue, value, error }: CounterDisplayPropsType) {
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
		</>
	)
}

export default CounterDisplay
