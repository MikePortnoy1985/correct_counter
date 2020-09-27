import React, { useEffect } from 'react'
import CounterDisplay from './components/CounterDisplay/CounterDisplay'
import SetUpDisplay from './components/SetUpDisplay/SetUpDisplay'
import './App.css'
import { Grid, Paper, makeStyles, ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './styles/theme'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from './store/store'
import { ReducerStateType, setDisabledAC, setErrorAC, setMaxValueAC, setStartValueAC } from './store/reducer'

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
	textField: {
		backgroundColor: 'white',
		borderRadius: '4px',
	},
})

export type StylesType = typeof useStyles

export type ClassesType = ReturnType<StylesType>

function App() {
	const localState = useSelector<StoreType, ReducerStateType>((state) => state.reducer)
	const dispatch = useDispatch()

	useEffect(() => {
		errorHandler()
		getLocalStorage()
	}, [localState.startValue, localState.maxValue]) // eslint-disable-line react-hooks/exhaustive-deps

	const errorHandler = () => {
		if (
			localState.startValue < 0 ||
			(localState.startValue > 0 && localState.startValue === localState.maxValue) ||
			localState.maxValue < localState.startValue
		) {
			dispatch(setErrorAC('Incorrect value'))
			dispatch(setDisabledAC(true))
		} else {
			dispatch(setErrorAC('enter values and press "set"'))
			localState.maxValue === 0 && localState.startValue === 0
				? dispatch(setDisabledAC(true))
				: dispatch(setDisabledAC(false))
		}
	}

	const localStorageHandler = () => {
		localStorage.setItem('startValue', localState.startValue + '')
		localStorage.setItem('maxValue', localState.maxValue + '')
	}

	const getLocalStorage = () => {
		if (localState.startValue === 0 && localState.maxValue === 0) {
			const sV = localStorage.getItem('startValue')
			const mV = localStorage.getItem('maxValue')
			sV && dispatch(setStartValueAC(+sV))
			mV && dispatch(setMaxValueAC(+mV))
			localStorage.clear()
		}
	}

	const classes = useStyles()

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid container className={classes.grid} spacing={5} direction="row" justify="center" alignItems="stretch">
				<Grid item xs={3} key={1}>
					<Paper className={classes.paper} elevation={3}>
						<SetUpDisplay
							localState={localState}
							dispatch={dispatch}
							localStorageHandler={localStorageHandler}
							classes={classes}
						/>
					</Paper>
				</Grid>
				<Grid item xs={3} key={2}>
					<Paper className={classes.paper} elevation={3}>
						<CounterDisplay localState={localState} dispatch={dispatch} classes={classes} />
					</Paper>
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}

export default App
