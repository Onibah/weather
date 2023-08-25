const debounce = (fn: Function, ms = 400) => {
	let timeoutId: ReturnType<typeof setTimeout>;
	return function (this: unknown, ...args: unknown[]) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => fn.apply(this, args), ms);
	};
};
export { debounce };
