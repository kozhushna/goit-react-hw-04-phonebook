import PropTypes from 'prop-types';
import './ContactListItem.css';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="contact-item">
      {name}: {number}
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        className="contact-button"
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
