import React from 'react';
import { QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import queryClient from './configs/react-query.config';
import { GlobalStyles } from './configs/styles.config';
import PostsView from './views/posts-view';
import PostView from './views/post-view';

const globalStyles = <GlobalStyles />;

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            {globalStyles}
            <Container maxWidth="md">
                <Routes>
                    <Route element={<PostsView />} path="/" />
                    <Route element={<PostView />} path="/:id" />
                </Routes>
            </Container>
        </QueryClientProvider>
    );
}

export default App;
