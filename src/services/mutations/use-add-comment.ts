import { useMutation } from 'react-query';
import request from '../request';
import queryClient from '../../configs/react-query.config';

interface ReqBody {
    postId: number | string;
    body: string;
}

export const useAddComment = () =>
    useMutation((data: ReqBody) => request.post('/comments', data), {
        onSuccess(res, vars) {
            queryClient.invalidateQueries(['posts', vars.postId.toString()]);
        },
    });
