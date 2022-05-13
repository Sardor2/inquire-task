import { useQuery } from 'react-query';
import request from '../request';
import { IPost } from '../../types/models';

export const usePostList = () =>
    useQuery('posts', () =>
        request.get<IPost[]>('/posts').then((res) => res.data)
    );
