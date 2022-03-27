import React from 'react';

const ContactForm = ({onSubmit, onChange, name, number}) => (

<form onSubmit={onSubmit}>
        <label>
           Name
          <input
              type="text"
              name="name"  
            //   value={name}
            //   onChange={onChange}            
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
/>
          </label>
          <label>
           Number
          <input
              type="tel"
              name="number"
            //    value={number}
            //   onChange={onChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
/>
          </label>
          <button type="submit">
            Add contact
          </button>
        </form>

)
    
export default ContactForm;