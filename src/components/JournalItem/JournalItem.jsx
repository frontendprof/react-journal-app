import './JournalItem.css';


const JournalItem = ({title,text,date}) => {
	

	const formatDate=new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<>
			<h2 className="journal-item__heading">{title}</h2>

			<div className="journal-item__content">
				<p className="journal-item__date">{formatDate}</p>
				<p className="journal-item__text">{text}</p>
			</div>


		</>
	);
};

export default JournalItem;

