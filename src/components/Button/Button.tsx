import React from 'react'

type ButtonPropsType = {
	title: string
	disabled: boolean
	callback: () => void
}

function Button(props: ButtonPropsType) {
	return (
		<>
			<button
				onClick={() => {
					props.callback()
				}}
				disabled={props.disabled}>
				{props.title}
			</button>
		</>
	)
}

export default Button
