import { useDeleteContactMutation } from 'redux/contacts/conntactsApi';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import { Name, Number } from './ContactItem.styled';
import {
  Avatar,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
} from '@mui/material';

export const Contact = ({ contact }) => {
  const { name, number, id } = contact;
  const [deleteContact] = useDeleteContactMutation();
  const handleDelete = id => {
    deleteContact(id);
    toast.info(`Contact is deleted`);
  };

  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    let nameFirstLetters = '';
    if (name.includes(' ')) {
      nameFirstLetters = `${name.toUpperCase().split(' ')[0][0]}${
        name.toUpperCase().split(' ')[1][0]
      }`;
    } else {
      nameFirstLetters = `${name.toUpperCase().split(' ')[0][0]}`;
    }
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: nameFirstLetters,
    };
  }

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            id={id}
            onClick={() => handleDelete(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar {...stringAvatar(`${name}`)} />
        </ListItemAvatar>
        <Name>{name}:</Name>
        <Number>{number}</Number>
      </ListItem>
    </Grid>
  );
};
