import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IPost } from '../../types/models';
import Button from '../button';
import { useDeletePost } from '../../services/mutations/use-delete-post';

const DeleteButton: React.FC<{ id: string }> = ({ id }) => {
    const { mutate, isLoading } = useDeletePost();
    return (
        <Button
            loading={isLoading}
            sx={{ ml: 2 }}
            onClick={() => mutate(id)}
            color="warning"
        >
            Delete
        </Button>
    );
};

const Post: React.FC<IPost> = ({ id, body, title }) => (
    <Paper sx={{ p: 2 }}>
        <Typography marginBottom={2} variant="h5">
            {title}
        </Typography>
        <Typography component="p" variant="subtitle2">
            {body}
        </Typography>
        <Link to={`/${id}`}>More</Link>
        <DeleteButton id={id} />
    </Paper>
);

export default Post;
