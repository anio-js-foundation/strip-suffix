export default function stripSuffix(str, suffix) {
	// make sure `str` begins with `suffix`
	if (!str.startsWith(suffix)) {
		throw new Error(`Cannot strip '${suffix}' string '${str}' does not start with '${suffix}'.`)
	}

	return str.slice(suffix.length)
}
