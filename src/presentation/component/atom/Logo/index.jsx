const Logo = (props) => {
	const { filename, name } = props;
	return <img {...props} src={`asset/image/logo/${filename}`} alt={name} />;
};

export default Logo;
