const { Container, Box, CssBaseline, ThemeProvider, createTheme } = require('@mui/material');
const { AppBar } = require('Components/Navigation/AppBar');
const { Outlet } = require('react-router-dom');
const theme = createTheme()

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <CssBaseline />
      <Container component="main">
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Outlet />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Layout;
