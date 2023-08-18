import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes, Box } from '@mui/material';



// import pages
import LandingPage from './pages/LandingPage';
// import ToolsPage from './pages/ToolsPage';
import Error404Page from './pages/Error404Page';
// import ChallengePage from './pages/ChallengePage';

import Header from './components/layout/General/Header';
import Footer from './components/layout/General/Footer/Footer';


let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00203F",
    },
    secondary: {
      main: "#47D68F",
    },
    text: {
      primary: "#00203F",
    },
    info: {
      main: "#2E5994",
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join("", ""),
    body1: {
      fontFamily: "Inter",
      fontSize: 18,
      fontWeight: 400,
      letterSpacing: -0.3,
    },
    body2: {
      fontFamily: "Inter",
    },
    h6: {
      letterSpacing: -0.3,
      lineHeight: 1.4,
    },
    caption: {
      fontFamily: "Inter",
    },
  },
});

const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};

theme = responsiveFontSizes(theme);


// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header />
          <Box sx={styles.container}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/tools" element={<ToolsPage />} />
              <Route path="/challenges" element={<ChallengePage />} /> */}
              <Route path="*" element={<Error404Page />} />
            </Routes>   
          </Box>
          <Footer />       
        </Fragment>
      </ThemeProvider>
    </main>
  );
}

