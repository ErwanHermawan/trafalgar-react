// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

const ButtonText = (props) => {
	const { className, type, children } = props;

	if (type) {
		return (
			<button {...props} className={className + " " + style.buttonText}>
				{children}
			</button>
		);
	}

	return (
		<Link {...props} className={className + " " + style.buttonText}>
			{children}
		</Link>
	);
};

export default ButtonText;