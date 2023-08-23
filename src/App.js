import { Fragment } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';


// import pages
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import ToolsPage from './pages/ToolsPage';
import DataPage from './pages/DataPage';
import Error404Page from './pages/Error404Page';

import Header from './components/layout/General/Header/Header';
import Footer from './components/layout/General/Footer/Footer';


// let theme = createTheme({
//   palette: {
//     type: "light",
//     primary: {
//       main: "#00203F",
//     },
//     secondary: {
//       main: "#47D68F",
//     },
//     text: {
//       primary: "#00203F",
//     },
//     info: {
//       main: "#2E5994",
//     },
//   },
//   typography: {
//     fontFamily: ["Montserrat"].join("", ""),
//     body1: {
//       fontFamily: "Inter",
//       fontSize: 18,
//       fontWeight: 400,
//       letterSpacing: -0.3,
//     },
//     body2: {
//       fontFamily: "Inter",
//     },
//     h6: {
//       letterSpacing: -0.3,
//       lineHeight: 1.4,
//     },
//     caption: {
//       fontFamily: "Inter",
//     },
//   },
// });

const styles = {
  container: {
    width: { xs: "90%", sm: "80%" },
    maxWidth: "1300px",
    margin: "2.5rem auto",
  },
};

// theme = responsiveFontSizes(theme);


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
  
  const [theme, colorMode] = useMode();

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Fragment>
              <Header />
              <Box sx={styles.container}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/tools" element={<ToolsPage />} />
                  <Route path="/data" element={<DataPage />} />
                  <Route path="*" element={<Error404Page />} />
                </Routes>   
              </Box>
              <Footer />       
            </Fragment>
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}


