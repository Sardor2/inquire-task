import { useMutation } from 'react-query';
import request from '../request';
import { IPost } from '../../types/models';
import queryClient from '../../configs/react-query.config';

export const useCreatePost = () =>
    useMutation(
        (post: Omit<IPost, 'comments' | 'id'>) =>
            request.post('/posts', post).then((res) => res.data),
        {
            onSuccess() {
                queryClient.invalidateQueries('posts');
            },
        }
    );
