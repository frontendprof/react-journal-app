import s from './Header.module.css';



const Header = () => {
	return (
		<div>
			<img className={s.logo} src="/logo.svg" alt="Company logo" />
		</div>
	);
};

export default Header;