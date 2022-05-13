import { useMutation } from 'react-query';
import { IPost } from '../../types/models';
import request from '../request';
import queryClient from '../../configs/react-query.config';

export const useEditPost = () =>
    //
    useMutation(
        (data: IPost) =>
            request.put(`/posts/${data.id}`, {
                title: data.title,
                body: data.body,
            }),
        {
            onSuccess(data, vars) {
                queryClient.invalidateQueries(['posts', vars.id]);
            },
        }
    );
