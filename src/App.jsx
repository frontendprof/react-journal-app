
import { useState } from 'react';
import './App.css';
// import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddBtn from './components/JournalAddBtn/JournalAddBtn';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import RightPanel from './layouts/RightPanel/RightPanel';

function App() {

	const [inputData,setInputData]=useState('');

	const inputChange=e=>{
		setInputData(e.target.value);
	};

	const data=[
		{title:'Have to finish at least two courses',
			text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo!',
			date:new Date()},

		{title:'Continue PHP project',
			text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			date:new Date()},

		{title:'Find mistake in MERN crud project and continue',
			text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo!',
			date:new Date()}
	];

	return (
		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddBtn/>

				<JournalList>
					<CardButton>
						<JournalItem 
							title={data[0].title} 
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>

					<CardButton>
						<JournalItem 
							title={data[1].title} 
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>

					<CardButton>
						<JournalItem 
							title={data[2].title} 
							text={data[2].text}
							date={data[2].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<RightPanel>
				<input type="text" value={inputData} onChange={inputChange} />
			</RightPanel>
			
			
			
		</div>
	);
}

export default App;
