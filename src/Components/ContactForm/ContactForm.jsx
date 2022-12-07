import React from 'react';
import { formattedNumber } from 'Helpers/formattedNumber';
import { toast } from 'react-toastify';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/conntactsApi';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';

export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const newContact = {
      name,
      number: formattedNumber(number),
    };
    if (contacts) {
      for (let i = 0; i < contacts.length; i++) {
        const normalizedName = contacts[i].name.toLowerCase();
        const oldNumber = contacts[i].number;

        if (newContact.name.toLowerCase() === normalizedName) {
          return toast.error(`Sorry, but ${name} is already in contacts!`);
        }
        if (newContact.number === oldNumber) {
          return toast.error(
            `Sorry, but ${number} belongs to ${contacts[i].name}!`
          );
        }
      }
    }

    try {
      createContact(newContact);
      toast.success(`Contact ${name} is added to Phoonebook!`);
    } catch (error) {
      console.log(error);
    }
    e.currentTarget.reset();
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddAltRoundedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Contact
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            size="small"
            name="number"
            label="Phone number"
            type="phone"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
