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
	setter: () => void
	errorHandler: () => void
	setDisabled: (disabled: boolean) => void
}

function SetupDisplay(props: SetUpDisplayPropsType) {
	const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setStartValue(Number.parseInt(event.currentTarget.value))
		props.errorHandler()
	}

	const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setMaxValue(Number.parseInt(event.currentTarget.value))
		props.errorHandler()
		props.setDisabled(false)
	}

	return (
		<>
			<Grid container direction='column' justify='center' alignItems='center'>
				<FormControl error={props.error === 'Incorrect value' ? true : false}>
					<OutlinedInput
						className={'label'}
						label='Max value'
						type={'number'}
						style={{ margin: '20px' }}
						value={props.maxValue}
						onChange={onChangeMaxValueHandler}
					/>
				</FormControl>

				<FormControl error={props.error === 'Incorrect value' ? true : false}>
					<OutlinedInput
						className={'label'}
						label='Start value'
						type={'number'}
						style={{ margin: '20px' }}
						value={props.startValue}
						onChange={onChangeStartValueHandler}
					/>
				</FormControl>

				<Button variant='contained' color='primary' onClick={() => props.setter()} disabled={props.disabled}>
					Set
				</Button>
			</Grid>
		</>
	)
}

export default SetupDisplay
