export type ReducerStateType = {
	startValue: number
	maxValue: number
	count: number
	error: 'enter values and press "set"' | 'Incorrect value' | ''
	disabled: boolean
}

enum Actions {
	COUNT_HANDLER = 'COUNT-HANDLER',
	RESET = 'RESET',
	SET_HANDLER = 'SET-HANDLER',
	SET_START_VALUE = 'SET-START-VALUE',
	SET_MAX_VALUE = 'SET-MAX-VALUE',
	SET_ERROR = 'SET-ERROR',
	SET_DISABLED = 'SET-DISABLED',
}

type countHandlerACType = {
	type: Actions.COUNT_HANDLER
}

type resetACType = {
	type: Actions.RESET
}

type setStartValueACType = {
	type: Actions.SET_START_VALUE
	startValue: number
}
type setMaxValueACType = {
	type: Actions.SET_MAX_VALUE
	maxValue: number
}

type setHandlerACType = {
	type: Actions.SET_HANDLER
}
type setErrorACType = {
	type: Actions.SET_ERROR
	error: 'enter values and press "set"' | 'Incorrect value' | ''
}

type setDisabledACType = {
	type: Actions.SET_DISABLED
	disabled: boolean
}

export type ActionsType =
	| countHandlerACType
	| resetACType
	| setStartValueACType
	| setMaxValueACType
	| setHandlerACType
	| setErrorACType
	| setDisabledACType

const initialState: ReducerStateType = {
	startValue: 0,
	maxValue: 0,
	count: 0,
	error: 'enter values and press "set"',
	disabled: true,
}

const reducer = (state = initialState, action: ActionsType): ReducerStateType => {
	switch (action.type) {
		case Actions.COUNT_HANDLER: {
			if (state.count < state.maxValue) {
				return {
					...state,
					count: state.count + 1,
				}
			} else {
				return state
			}
		}
		case Actions.RESET: {
			return {
				...state,
				count: state.startValue,
			}
		}
		case Actions.SET_START_VALUE: {
			return {
				...state,
				startValue: action.startValue,
			}
		}
		case Actions.SET_MAX_VALUE: {
			return {
				...state,
				maxValue: action.maxValue,
			}
		}
		case Actions.SET_HANDLER: {
			if (state.startValue >= 0 && state.maxValue > state.startValue) {
				return {
					...state,
					count: state.startValue,
					error: '',
				}
			} else {
				return state
			}
		}
		case Actions.SET_ERROR: {
			return {
				...state,
				error: action.error,
			}
		}
		case Actions.SET_DISABLED: {
			return {
				...state,
				disabled: action.disabled,
			}
		}
		default:
			return state
	}
}

export const countHandlerAC = (): countHandlerACType => {
	return { type: Actions.COUNT_HANDLER }
}

export const resetAC = (): resetACType => {
	return { type: Actions.RESET }
}
export const setStartValueAC = (startValue: number): setStartValueACType => {
	return { type: Actions.SET_START_VALUE, startValue }
}

export const setMaxValueAC = (maxValue: number): setMaxValueACType => {
	return { type: Actions.SET_MAX_VALUE, maxValue }
}

export const setHandlerAC = (): setHandlerACType => {
	return { type: Actions.SET_HANDLER }
}

export const setErrorAC = (error: 'enter values and press "set"' | 'Incorrect value' | ''): setErrorACType => {
	return { type: Actions.SET_ERROR, error }
}

export const setDisabledAC = (disabled: boolean): setDisabledACType => {
	return { type: Actions.SET_DISABLED, disabled }
}

export default reducer
