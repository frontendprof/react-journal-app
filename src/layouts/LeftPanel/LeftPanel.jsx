import s from './LeftPanel.module.css';

const LeftPanel = ({children}) => {
	return (
		<div className={s['left-panel']}>{children}</div>
	);
};

export default LeftPanel;