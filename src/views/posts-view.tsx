import React from 'react';
import { Stack, styled, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Post from '../components/post/Post';
import CreatePost from '../components/create-post';
import { usePostList } from '../services/queries/use-post-list';
import Spinner from '../components/loaders/spinner';

const PostsView = () => {
    const { isLoading, data: posts } = usePostList();
    return (
        <Box>
            <Typography variant="h3" textAlign="center">
                Posts
            </Typography>
            <Spinner loading={isLoading}>
                <Stack spacing={2} margin="20px auto 0" maxWidth="60%">
                    {posts?.map((post) => (
                        <Post key={post.id} {...post} />
                    ))}
                </Stack>
            </Spinner>
            <CreatePost />
        </Box>
    );
};

export default PostsView;
