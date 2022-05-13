import React, { FormEventHandler } from 'react';
import Box from '@mui/material/Box';
import { Stack, TextField } from '@mui/material';
import { useCreatePost } from '../../services/mutations';
import { useForm } from '../../hooks/use-form';
import Button from '../button';

const formValues = {
    title: '',
    body: '',
};

const CreatePost = () => {
    const { isLoading, mutate } = useCreatePost();
    const { handleSubmit, handleChange, values } =
        useForm<typeof formValues>(formValues);

    const onSubmit = (data: typeof formValues) => {
        // eslint-disable-next-line no-useless-return
        if (!data.title || !data.body) return;
        mutate(data);
    };

    return (
        <Box marginTop={2} maxWidth="300px" margin="20px auto">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <TextField
                        onChange={handleChange('title')}
                        value={values.title}
                        size="small"
                        label="Name"
                        name="title"
                    />
                    <TextField
                        name="body"
                        onChange={handleChange('body')}
                        value={values.body}
                        size="small"
                        label="Body"
                        multiline
                    />
                    <Button
                        loading={isLoading}
                        type="submit"
                        disableElevation
                        variant="contained"
                    >
                        Create New Post
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default CreatePost;
