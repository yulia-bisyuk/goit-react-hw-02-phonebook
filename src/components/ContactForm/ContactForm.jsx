import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const nameLabelId = nanoid();
const numberLabelId = nanoid();

const ContactForm = ({ onSubmit}) => (

<form onSubmit={onSubmit}>
        <label htmlFor={nameLabelId}>
           Name
          <input
              type="text"
              name="name"          
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
/>
          </label>
          <label htmlFor={numberLabelId}>
           Number
          <input
              type="tel"
              name="number"
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
    
export default ContactForm;