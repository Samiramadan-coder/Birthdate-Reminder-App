import './App.css';
import CardItem from './components/CardItem';
import { useState } from 'react';
import { items } from './items';

function getUsers() {
  const newItems = items.filter(item => {
    return item.birthdate === new Date().toLocaleDateString();
  });

  return newItems;
};

function App() {
  const [users, setPersons] = useState(getUsers());

  return (
    <div className='parent'>
      <section className='card'>
        <h3>{users.length} birthdays today</h3>
        <div className='card-items'>
          {
            users.map(user => (
              <CardItem key={user.id} {...user} />
            ))
          }
        </div>
        <button onClick={() =>setPersons([])}>Clear All</button>
      </section>
    </div>
  );
};

export default App;
