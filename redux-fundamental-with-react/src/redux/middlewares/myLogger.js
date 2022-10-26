// middleware
const myLogger = store => next => action => {
	console.log(`Action: ${JSON.stringify(action)}`);
	console.log(`Before: ${JSON.stringify(store.getState())}`);

	return next(action);
};

export default myLogger;
