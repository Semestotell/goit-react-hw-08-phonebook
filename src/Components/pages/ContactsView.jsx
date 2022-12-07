import { ContactForm } from 'Components/ContactForm';
import { Filter } from 'Components/Filter';
import { ContactList } from 'Components/ContactList';
import { useFetchContactsQuery } from 'redux/contacts/conntactsApi';
import { Box, Container, Typography } from '@mui/material';

export const ContactsView = () => {
  const { data } = useFetchContactsQuery();

  return (
    <Container>
      <ContactForm />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Contacts
        </Typography>
        {data && data.length > 1 && <Filter />}
        {data && data.length > 0 ? (
          <ContactList />
        ) : (
          <div>This is no contacts in Phonebook</div>
        )}
      </Box>
    </Container>
  );
};
