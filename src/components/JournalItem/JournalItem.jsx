import './JournalItem.css';


const JournalItem = () => {
  return (
    <div className="journal-item">
        <h2 className="journal-item__heading">Some notes here</h2>

        <div className="journal-item__content">
            <p className="journal-item__date">23/11/2023</p>
            <p className="journal-item__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illo!</p>
        </div>

    </div>
  );
};

export default JournalItem;