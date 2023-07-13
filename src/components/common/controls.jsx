export const Textarea = ({ input, meta, ...props }) => {
	// debugger
	const hasError = meta.error && meta.active
	return (
		<div className={hasError ? "error" : ""}>
			<textarea {...input} {...props} />
			{hasError && <div><span className="error">{meta.error}</span></div>}
		</div>
	)
}

export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.error && meta.touched
	return (
		<>
			<div>
				{/* Здесь мы забираем input чтобы передать в тег input его методы (onBlur, onFocus ...) */}
				<input className={hasError ? "error" : ""} {...input} {...props} />
				{hasError && <div><span className="error">{meta.error}</span></div>}
			</div>
		</>
	)
}





