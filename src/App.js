import { Fragment, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ChakraProvider } from '@chakra-ui/react'


// import pages
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';
import BlogPage from './pages/BlogPage';
import ToolsPage from './pages/ToolsPage';
import DashboardPage from './pages/DashboardPage';
import CommunityPage from './pages/CommunityPage';
import SubscribePage from './pages/SubscribePage';
import Error404Page from './pages/Error404Page';

import Header from './components/layout/General/Header/Header';
import Footer from './components/layout/General/Footer/Footer';

import WebFont from 'webfontloader';

import NetworkDetector from './Hoc/NetworkDetector';


// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
function App() {
  return <RouterProvider router={router} />;
}

export default NetworkDetector(App)

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  
  const [theme, colorMode] = useMode();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter']
      }
    });
   }, []);
 

  return (
    <ChakraProvider>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <main>
              <Fragment>
                <Header />
                {/* <Box sx={styles.container}> */}
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/subscribe" element={<SubscribePage />} />
                    <Route path="/roadmap" element={<RoadmapPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/tools" element={<ToolsPage />} />
                    <Route path="/data" element={<DashboardPage />} />
                    <Route path="/community" element={<CommunityPage />} />
                    <Route path="*" element={<Error404Page />} />
                  </Routes>   
                {/* </Box> */} 
                <Footer />       
              </Fragment>
            </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ChakraProvider>
  );
}


