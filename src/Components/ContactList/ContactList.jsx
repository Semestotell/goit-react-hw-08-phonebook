import { Contact } from 'Components/ContactItem';
import React from 'react';

import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/conntactsApi';
import { Container, List } from './ContactList.styled';

export const ContactList = () => {
  const { data } = useFetchContactsQuery(); 
  const filter = useSelector(state => state.filter.value);
  const normalizedFilterName = filter.toLowerCase();
  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilterName)
  );

  return (

    <Container>
        <List>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
    </Container>
  );
};
