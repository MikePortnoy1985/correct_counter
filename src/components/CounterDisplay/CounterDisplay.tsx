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
		<Grid container justify='space-around'>
			<Grid item key={'a'} style={{ width: '260px', height: '190px', textAlign: 'center', verticalAlign: 'center' }}>
				{props.error ? (
					props.error
				) : (
					<FormControl>
						<OutlinedInput
							className={'label'}
							label='Counter'
							value={props.value === props.maxValue ? 'Maximum value reached' : props.value}
							style={{ margin: '20px' }}
							type='text'
						/>
					</FormControl>
				)}
			</Grid>
			<Grid item key={'b'}>
				<Grid container>
					<Grid item key={1} style={{ marginRight: '20px' }}>
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
					<Grid item key={2}>
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
		</Grid>
	)
}

export default CounterDisplay
