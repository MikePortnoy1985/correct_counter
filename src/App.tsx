import React, { useState, useEffect } from 'react'
import CounterDisplay from './components/CounterDisplay/CounterDisplay'
import SetUpDisplay from './components/SetUpDisplay/SetUpDisplay'
import './App.css'
import { Grid, Paper } from '@material-ui/core'

function App() {
	const [count, setCount] = useState(0)
	const [startValue, setStartValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [error, setError] = useState('enter values and press "set"')
	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		errorHandler()
		getLocalStorage()
	}, [startValue, maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

	const countHandler = () => {
		if (count < maxValue) setCount(count + 1)
	}

	const errorHandler = () => {
		if (startValue < 0 || (startValue > 0 && startValue === maxValue) || maxValue < startValue) {
			setError('Incorrect value')
			setDisabled(true)
		} else {
			setError('enter values and press "set"')
			maxValue === 0 && startValue === 0 ? setDisabled(true) : setDisabled(false)
		}
	}

	const setHandler = () => {
		if (startValue >= 0 && maxValue > startValue) {
			setCount(startValue)
			setError('')
		}
		setDisabled(true)
	}

	const localStorageHandler = () =>{
		localStorage.setItem('startValue', startValue + '')
		localStorage.setItem('maxValue', maxValue + '')
	}

	const getLocalStorage = () =>{
		if (startValue === 0 && maxValue === 0) {
			const sV = localStorage.getItem('startValue')
			const mV = localStorage.getItem('maxValue')
			sV && setStartValue(+sV)
			mV && setMaxValue(+mV)
			localStorage.clear()
		}
	}

	const reset = () => {
		setCount(startValue)
	}

	return (
		<Grid container style={{ marginTop: '15vh' }} spacing={10} direction='row' justify='center' alignItems='center'>
			<Grid item xs={3} key={1}>
				<Paper elevation={3}>
					<SetUpDisplay
						setStartValue={setStartValue}
						setMaxValue={setMaxValue}
						startValue={startValue}
						maxValue={maxValue}
						setHandler={setHandler}
						localStorageHandler={localStorageHandler}
						disabled={disabled}
						error={error}
					/>
				</Paper>
			</Grid>
			<Grid item xs={3} key={2}>
				<Paper elevation={3}>
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
	)
}

export default App
