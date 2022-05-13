import React from 'react';
import Box from '@mui/material/Box';
import { Stack, TextField } from '@mui/material';
import { useForm } from '../../hooks/use-form';
import Button from '../button';
import { useAddComment } from '../../services/mutations/use-add-comment';

const formVals = {
    body: '',
};

const AddComment: React.FC<{ postId: string }> = ({ postId }) => {
    const { handleChange, values, handleSubmit, clear } =
        useForm<typeof formVals>(formVals);
    const { mutate, isLoading } = useAddComment();
    return (
        <Box sx={{ p: '20px', marginTop: 10 }}>
            <form
                onSubmit={handleSubmit((data) => {
                    if (!data.body) return '';
                    return mutate(
                        {
                            postId: +postId,
                            body: data.body,
                        },
                        { onSuccess: clear }
                    );
                })}
            >
                <Stack spacing={2}>
                    <TextField
                        value={values.body}
                        onChange={handleChange('body')}
                        name="body"
                        label="Body"
                    />
                    <Button
                        type="submit"
                        loading={isLoading}
                        variant="outlined"
                    >
                        Leave a Comment
                    </Button>
                </Stack>
            </form>
        </Box>
    );
};

export default AddComment;
