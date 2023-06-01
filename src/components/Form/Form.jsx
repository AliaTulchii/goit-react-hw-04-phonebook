import { useState } from "react";
import css from './Form.module.css'
import shortid from "shortid";



 const Form = ({onAdd}) => {
     const [name, setName] = useState('');
     const [number, setNumber] = useState('');

    
     const handleChange = (e) => {
         
         const { name, value } = e.currentTarget;
        
         switch (name) {
             case 'name':
                 setName(value);
                 break;
      
             case 'number':
                 setNumber(value);
                 break;
      
             default:
                 break;
         
         }
     }

    const handleSubmit = e => {
        e.preventDefault();
        
        const person = {
            id: shortid.generate(),
            name,
            number,
        }

        const isValidate = validateForm();
        if (!isValidate) return;
        
        onAdd( person);
    
        reset();
    };

    const validateForm = () => {
        
        if (!name || !number) {
            alert('This field empty!');
            return false;
        }

        return true;
    }
    
    const reset = () => {
        setName('');
        setNumber('');
};
    
    
        
        return (
            <form onSubmit={handleSubmit} className={css.Form}>

                <label  className={css.Form__inputLabel}>
                    <p>Name:</p>
                <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                value={name}
                onChange={handleChange}
                className={css.Form__input}
                    />
            </label>
                
                <label  className={css.Form__inputLabel}>
                    <p>Number:</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Enter phone number"
                    value={number}
                    onChange={ handleChange} 
                    className={css.Form__input}
                    />
                </label>
                
                <button type="submit" className={css.Form__button}> Add contact</button>
            </form>
        )
    }






export default Form;