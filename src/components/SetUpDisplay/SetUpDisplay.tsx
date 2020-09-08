import React, { ChangeEvent } from 'react'
import { OutlinedInput, FormControl, Button, Grid } from '@material-ui/core'
import './../../App.css'

type SetUpDisplayPropsType = {
	startValue: number
	maxValue: number
	disabled: boolean
	error: string
	setStartValue: (value: number) => void
	setMaxValue: (value: number) => void
	setHandler: () => void
	errorHandler: () => void
	setDisabled: (disabled: boolean) => void
}

function SetupDisplay(props: SetUpDisplayPropsType) {
	const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setStartValue(Number.parseInt(event.currentTarget.value))
	}

	const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setMaxValue(Number.parseInt(event.currentTarget.value))
	}

	return (
		
			<Grid container direction='column' justify='space-between' alignItems='center' spacing={3}>
				<Grid item xs={12} key={11}>
					<FormControl error={props.error === 'Incorrect value' ? true : false}>
						<OutlinedInput
							className={'label'}
							label='Max value'
							type={'number'}						
							value={props.maxValue}
							onChange={onChangeMaxValueHandler}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} key={12}>
					<FormControl error={props.error === 'Incorrect value' ? true : false}>
						<OutlinedInput
							className={'label'}
							label='Start value'
							type={'number'}						
							value={props.startValue}
							onChange={onChangeStartValueHandler}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} key={1}>
					<Button variant='contained' color='primary' onClick={() => props.setHandler()} disabled={props.disabled}>
						Set
					</Button>
				</Grid>
			</Grid>
		
	)
}

export default SetupDisplay
