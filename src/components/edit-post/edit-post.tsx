import React, { useMemo } from 'react';
import { Paper, Stack, TextField, Typography } from '@mui/material';
import Button from '../button';
import { useEditPost } from '../../services/mutations/use-edit-post';
import { useForm } from '../../hooks/use-form';
import { usePostById } from '../../services/queries';

const EditPost: React.FC<{ id: string; onEditFinish?: () => void }> = ({
    id,
    onEditFinish,
}) => {
    const { data } = usePostById(id);
    const formVals = useMemo(
        () => ({
            title: data?.title ?? '',
            body: data?.body ?? '',
        }),
        [data]
    );
    const { mutate: editPost, isLoading } = useEditPost();

    const { values, handleChange, handleSubmit } =
        useForm<typeof formVals>(formVals);

    const onSubmit = (newVals: typeof formVals) => {
        editPost(
            {
                id,
                ...newVals,
            },
            { onSuccess: onEditFinish }
        );
    };
    return (
        //
        <Paper sx={{ p: '30px 20px', minWidth: '300px' }}>
            <Typography variant="h5" marginBottom={3}>
                Edit your post
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <TextField
                        onChange={handleChange('title')}
                        value={values.title}
                        name="title"
                        label="Title"
                    />
                    <TextField
                        onChange={handleChange('body')}
                        value={values.body}
                        name="body"
                        label="Body"
                    />
                    <Button
                        disableElevation
                        variant="contained"
                        loading={isLoading}
                        type="submit"
                    >
                        Edit
                    </Button>
                </Stack>
            </form>
        </Paper>
    );
};

export default EditPost;
