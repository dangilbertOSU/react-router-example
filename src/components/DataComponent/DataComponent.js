import PropTypes from "prop-types";

const DataComponent = (props) => {
	const { className, data } = props;
	const { name, value } = data;

	return (
		<div className={className}>
			<p>name: {name}</p>
			<p>value: {value}</p>
		</div>
	);
};

DataComponent.defaultProps = {
	className: "data-component",
};

DataComponent.propTypes = {
	className: PropTypes.string,
};

export default DataComponent;
