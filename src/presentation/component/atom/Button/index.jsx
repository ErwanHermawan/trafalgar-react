// -- core
import { Link } from "react-router-dom";

// -- style
import style from "./style.module.scss";

// -- atom
import SystemIcon from "../SystemIcon";

const Button = (props) => {
	const { variant = "primary", ghost, children, type, icon } = props;

	const iconCont = icon && <SystemIcon name={icon} />;
	let variantStyle = style.btn;
	if (variant === "primary") {
		variantStyle += " " + style.btnPrimary;
	} else if (variant === "secondary") {
		variantStyle += " " + style.btnSecondary;
	} else if (variant === "tertiary") {
		variantStyle += " " + style.btnTertiary;
	}

	if (ghost) {
		variantStyle += " " + style.btnGhost;
	}

	if (type) {
		return (
			<Link {...props} className={variantStyle}>
				{children}
				{iconCont}
			</Link>
		);
	}

	return (
		<button {...props} className={variantStyle}>
			{children}
			{iconCont}
		</button>
	);
};

export default Button;
