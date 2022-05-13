import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Modal, Paper, Stack, styled, Typography } from '@mui/material';
import { usePostById } from '../services/queries';
import Spinner from '../components/loaders/spinner';
import Button from '../components/button';
import useToggle from '../hooks/use-toggle';
import EditPost from '../components/edit-post';
import AddComment from '../components/add-comment';

const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PostView = () => {
    const params = useParams<{ id: string }>();
    const { isLoading, data } = usePostById(params.id);
    const modalState = useToggle();

    return (
        <Box paddingTop="100px">
            <StyledModal onClose={modalState.close} open={modalState.isOpen}>
                <EditPost
                    onEditFinish={modalState.close}
                    id={params.id ?? ''}
                />
            </StyledModal>
            <Spinner loading={isLoading}>
                <Paper
                    sx={{
                        p: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <h3>{data?.title}</h3>
                        <p>{data?.body}</p>
                    </Box>
                    <Box>
                        <Button onClick={modalState.open} color="info">
                            Edit
                        </Button>
                    </Box>
                </Paper>

                <Box marginTop={2}>
                    <Typography variant="h5" marginBottom={1}>
                        Comments:
                    </Typography>
                    <Stack spacing={2}>
                        {data?.comments?.map((c, i) => (
                            <Typography key={c.id} variant="body1">
                                {i + 1}.{c.body}
                            </Typography>
                        ))}
                    </Stack>
                </Box>

                <AddComment postId={params.id ?? ''} />
            </Spinner>
        </Box>
    );
};

export default PostView;
