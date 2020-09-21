import React, { useState, useEffect } from 'react'
import CounterDisplay from './components/CounterDisplay/CounterDisplay'
import SetUpDisplay from './components/SetUpDisplay/SetUpDisplay'
import './App.css'
import { Grid, Paper, makeStyles, ThemeProvider, Button } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/theme'

const useStyles = makeStyles({
	grid: {
		height: '250px',
		marginTop: '15vh',
	},
	paper: {
		width: '300px',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	wrapper: {
		height: '60%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
})

function App() {
	const [count, setCount] = useState(0)
	const [startValue, setStartValue] = useState(0)
	const [maxValue, setMaxValue] = useState(0)
	const [error, setError] = useState('enter values and press "set"')
	const [disabled, setDisabled] = useState(true)
	const [mainWindow, setMainWindow] = useState(true)

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
			setMainWindow(!mainWindow)
		}
	}

	const localStorageHandler = () => {
		localStorage.setItem('startValue', startValue + '')
		localStorage.setItem('maxValue', maxValue + '')
	}

	const getLocalStorage = () => {
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

	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container className={classes.grid} spacing={5} direction="row" justify="center" alignItems="stretch">
				<Paper className={classes.paper} elevation={3}>
					<div className={classes.wrapper}>
						{mainWindow ? (
							<SetUpDisplay
								setStartValue={setStartValue}
								setMaxValue={setMaxValue}
								startValue={startValue}
								maxValue={maxValue}
								error={error}
							/>
						) : (
							<CounterDisplay value={count} maxValue={maxValue} error={error} />
						)}
					</div>
					<div>
						<Button
							style={{ marginRight: '20px' }}
							disableRipple
							variant="contained"
							color="primary"
							onClick={() => {
								setHandler()
								localStorageHandler()
							}}
							disabled={disabled}>
							Set
						</Button>
						<Button
							style={{ marginRight: '20px' }}
							variant="contained"
							color="primary"
							onClick={() => countHandler()}
							disableRipple
							disabled={!!(count < startValue || count === maxValue || error)}>
							Increase
						</Button>
						<Button
							variant="contained"
							color="primary"
							onClick={() => reset()}
							disableRipple
							disabled={!!(count <= startValue || error)}>
							Reset
						</Button>
					</div>
				</Paper>
			</Grid>
		</ThemeProvider>
	)
}

export default App
