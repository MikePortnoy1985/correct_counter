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

function CounterDisplay(props: CounterDisplayPropsType) {
	return (
		<Grid container direction='column' justify='space-between' alignItems='center' spacing={3}>
			<Grid	item	key={'a'} xs={12}>
				{props.error ? (
					props.error
				) : (
					<FormControl>
						<OutlinedInput
							className={'label'}
							label='Counter'
							value={props.value === props.maxValue ? 'Maximum value reached' : props.value}
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
						onClick={() => props.countHandler()}
						disabled={
							props.value < props.startValue || props.value === props.maxValue || props.error ? true : false
						}>
						Increse
					</Button>
				</Grid>
				<Grid item key={112} xs={3}>
					<Button
						variant='contained'
						color='primary'
						onClick={() => props.reset()}
						disabled={props.value <= props.startValue || props.error ? true : false}>
						Reset
					</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default CounterDisplay
