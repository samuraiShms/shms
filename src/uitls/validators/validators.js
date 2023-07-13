export const required = (value) => {
	return (value ? null : "Field required")
}

export const maxLengthCreator = (maxLength) => {
	return (value) => {
		if (value && value.length > maxLength) {
			return `max length: ${maxLength}`
		} else {
			return null
		}
	}
}