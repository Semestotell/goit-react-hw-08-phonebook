import { setFilter } from 'redux/contacts/reduxSlices';
import { useDispatch } from 'react-redux';
import { Box, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <TextField
          margin="normal"
          size="small"
          id="filter"
          label="Find contacts by name"
          name="filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
        </Box>
      </Container>
    </>
  );
};
