import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import request from '../request';
import queryClient from '../../configs/react-query.config';

export const useDeletePost = () => {
    const navigate = useNavigate();

    return useMutation((id: string) => request.delete(`/posts/${id}`), {
        onSuccess() {
            queryClient.invalidateQueries('posts');
            navigate('/');
        },
    });
};
