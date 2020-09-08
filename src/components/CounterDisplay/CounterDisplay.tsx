import React from 'react'
import { OutlinedInput, FormControl, Button, Grid } from '@material-ui/core'
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
		<Grid container direction='column' justify='space-between' alignItems='center' spacing={3}>
			<Grid item key={'a'} xs={12}>
				{error ? (
					error
				) : (
					<FormControl>
						<OutlinedInput
							className={'label'}
							label='Counter'
							value={value === maxValue ? 'Maximum value reached' : value}
							type='text'
						/>
					</FormControl>
				)}
			</Grid>
			<Grid item key={'b'} xs={12} container direction='row' justify='center' alignItems='center'>
				<Grid item key={111} xs={3}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => countHandler()}
						disabled={value < startValue || value === maxValue || error ? true : false}>
						Increse
					</Button>
				</Grid>
				<Grid item key={112} xs={3}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => reset()}
						disabled={value <= startValue || error ? true : false}>
						Reset
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default CounterDisplay
