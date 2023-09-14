import { useState } from 'react';


import Header from './components/Header/Header';
import JournalAddBtn from './components/JournalAddBtn/JournalAddBtn';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import RightPanel from './layouts/RightPanel/RightPanel';

import './App.css';
import JournalForm from './components/JournalForm/JournalForm';


function App() {

	



	const INITIAL_DATA=[

		// {	id:1,
		// 	title:'Continue PHP project',
		// 	text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		// 	date:new Date()},

		// {	id:2,
		// 	title:'Find mistake in MERN crud project and continue',
		// 	text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo!',
		// 	date:new Date()}
	];

	const [items, setItems]=useState(INITIAL_DATA);

	const addItem=item=>{
		setItems(oldItems=>[...oldItems,{
			title:item.title,
			text:item.text,
			date:new Date(item.date),
			id: oldItems.length>0? (Math.max(...oldItems.map(i=>i.id))+1):1
		}]);
	};



	return (
		<div className='app'>

			<LeftPanel>
				<Header/>
				<JournalAddBtn/>

				<JournalList items={items}/>
			</LeftPanel>

			<RightPanel>
				<JournalForm onSubmit={addItem} />
			</RightPanel>
			
			
			
		</div>
	);
}

export default App;
