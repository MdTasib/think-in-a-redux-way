import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
import {
	increment as dynamicIncrement,
	decrement as dynamicDecrement,
} from "../redux/dynamicCounter/actions";

function VariableCounter({ count, increment, decrement }) {
	return (
		<div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
			<div className='text-2xl font-semibold'>{count}</div>
			<div className='flex space-x-3'>
				<button
					className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
					onClick={() => increment(2)}>
					Increment
				</button>
				<button
					className='bg-red-400 text-white px-3 py-2 rounded shadow'
					onClick={() => decrement(2)}>
					Decrement
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		increment: ownProps.dynamic
			? value => dispatch(dynamicIncrement(5))
			: () => dispatch(increment(2)),
		decrement: ownProps.dynamic
			? value => dispatch(dynamicDecrement(2))
			: () => dispatch(decrement(2)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
