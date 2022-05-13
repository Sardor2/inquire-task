import { useQuery } from 'react-query';
import request from '../request';
import { IPost } from '../../types/models';

export const usePostById = (id?: string) =>
    useQuery(['posts', id], () =>
        request
            .get<IPost>(`/posts/${id}?_embed=comments`)
            .then((res) => res.data)
    );
