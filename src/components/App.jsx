import { useEffect, useState} from 'react';
import Form from './Form/Form';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css'


const initialState = [
  { id: 'id-1', name: 'Jerry Simpson', number: '459-12-56', avatar: "https://randomuser.me/api/portraits/men/52.jpg" },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79', avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
];


const App=()=>{
  const [contacts, setContatcs] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialState;
  })
  const [filter, setFilter] = useState('');
  

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  const handleAddContact = (person) => {
    // const person = {
    //   name,
    //   number,
    // }

    const exist = contacts.find(({ name }) => name === person.name);

    if (exist) {
      alert(`${person.name} is already in contacts list`);
      return;
    }
    
    setContatcs((prevState) => [person, ...prevState],
    )
  }

  

  // const handleCheckContact = (name) => {
    

  //   const isContact = contacts.find(contact => contact.name === name);

  //   isContact && alert('Contact is already found!');

  //   return !isContact;
  // }

  const handleDelete = (id) => {
    setContatcs((prevState) => (prevState.filter(contact => contact.id !== id)))
  }

  const handleFilterChange = (filter) => {
    const { value } = filter.currentTarget;
    setFilter(value);
  }

 

  const getVisibleContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  

 

 
    const visibleContacts = getVisibleContacts();
    return (
    <div className={css.ContactsList}>
        <h1 className={css.ContactList__titleWhite}>Phonebook</h1>
        <div className={css.ContactList__style}>
        <Form  onAdd={handleAddContact}  />

        <h2 className={css.ContactList__titleBlue}>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange}/>
        <ContactList contacts={visibleContacts} onDelete={handleDelete}/>
        </div>
        
    </div>
  )
  }


export default App;








