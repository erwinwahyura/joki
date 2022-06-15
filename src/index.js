import { Grid, ChakraProvider, Box, theme, ColorModeScript, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// user panel
import About from "./routes/about";
import Order from "./routes/order";
import MyOrder from "./routes/myorder";

// admin panel
import Admin from "./routes/admin";
import AdminOrderList from "./routes/adminOrderList";

import { ColorModeSwitcher } from './ColorModeSwitcher';


const container = document.getElementById('root')
const root = createRoot(container)
console.log("sds", window.location.pathname)
root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={10}>
          {
            window.location.pathname !== "/admin-panel" && 
            window.location.pathname !== "/admin-order-list"  ? 
              <Breadcrumb separator=''>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='/order'>Order</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='/my-order'>My Order</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href='/about'>About</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb> : 

              <Breadcrumb separator=''>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/admin-panel'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href='/admin-order-list'>Order</BreadcrumbLink>
                </BreadcrumbItem>

              </Breadcrumb>
          }
          <Grid m={1}>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/my-order" element={<MyOrder />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/order/" element={<Order />}>
                <Route path=":type" element={<Order />}/> 
              </Route> 
              <Route path="/admin-panel" element={<Admin />}/>
              <Route path="/admin-order-list" element={<AdminOrderList />}/>
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter> 
  </ChakraProvider>
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
