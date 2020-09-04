import React, { useState, useEffect } from 'react'
import CounterDisplay from './components/CounterDisplay/CounterDisplay'
import SetUpDisplay from './components/SetUpDisplay/SetUpDisplay'
import './App.css'
import { Container, Grid, Paper } from '@material-ui/core'

function App() {
	const [count, setCount] = useState(0)
	const [startValue, setStartValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [error, setError] = useState('enter values and press "set"')
	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		errorHandler()
	}, [startValue]) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		errorHandler()
	}, [maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (startValue === 0) {
			const sV = localStorage.getItem('startValue')
			sV && setStartValue(+sV)
		}
	}, [startValue]) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (maxValue === 0) {
			const mV = localStorage.getItem('maxValue')
			mV && setMaxValue(+mV) 
			localStorage.clear()
		}
	}, [maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

	const countHandler = () => {
		if (count < maxValue) setCount(count + 1)
	}

	const errorHandler = () => {
		if (startValue < 0 || (startValue > 0 && startValue === maxValue) || maxValue < startValue) {
			setError('Incorrect value')
			setDisabled(true)
		} else {
			setError('enter values and press "set"')
			setDisabled(false)
		}
	}

	const setter = () => {
		if (startValue >= 0 && maxValue > startValue) {
			setCount(startValue)
			setError('')
			localStorage.setItem('startValue', startValue + '')
			localStorage.setItem('maxValue', maxValue + '')
		}
		setDisabled(true)
	}

	const reset = () => {
		setCount(startValue)
	}

	return (
		<Container>
			<Grid container style={{ marginTop: '10%' }} spacing={10} direction='row' justify='center' alignItems='center'>
				<Grid item key={1}>
					<Paper
						style={{ backgroundColor: '#06BAC5', padding: '20px', width: '300px', height: '250px' }}
						elevation={3}>
						<SetUpDisplay
							setStartValue={setStartValue}
							setMaxValue={setMaxValue}
							startValue={startValue}
							maxValue={maxValue}
							setter={setter}
							errorHandler={errorHandler}
							disabled={disabled}
							setDisabled={setDisabled}
							error={error}
						/>
					</Paper>
				</Grid>
				<Grid item key={2}>
					<Paper
						style={{ backgroundColor: '#06BAC5', padding: '20px', width: '300px', height: '250px' }}
						elevation={3}>
						<CounterDisplay
							value={count}
							countHandler={countHandler}
							startValue={startValue}
							maxValue={maxValue}
							reset={reset}
							error={error}
						/>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default App
