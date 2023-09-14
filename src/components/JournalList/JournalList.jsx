import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';



import './JournalList.css';



const JournalList = ({items}) => {

	const sortItem=(a,b)=>{
		if(a.date<b.date){
			return 1;
		}else{
			return -1;
		}
	};

	let list=<p>No reminders yet, add the first one	</p>;
	if(items.length){
		list=items.sort(sortItem).map(el=>(
			<CardButton key={el.id}>
				<JournalItem 
					
					title={el.title} 
					text={el.text}
					date={el.date}
				/>
			</CardButton>
		));
	}

	return (
		<div className="journal-list">
			{list}
		</div>
	);
};

export default JournalList;