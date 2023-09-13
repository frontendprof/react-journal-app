
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

function App() {

	return (
		<>
			<h1>Heading</h1>
			<p>SOme random text</p>
			<Button />
			<CardButton>
        New Reminder
			</CardButton>
			<CardButton>
				<JournalItem />
			</CardButton>
		</>
	);
}

export default App;
