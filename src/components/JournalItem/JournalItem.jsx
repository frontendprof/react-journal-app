import './JournalItem.css';


const JournalItem = () => {

	const formatDate=new Intl.DateTimeFormat('ru-RU').format(new Date());
	return (
		<>
			<h2 className="journal-item__heading">Have to finish at least two courses.</h2>

			<div className="journal-item__content">
				<p className="journal-item__date">{formatDate}</p>
				<p className="journal-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo!</p>
			</div>

		</>
	);
};

export default JournalItem;