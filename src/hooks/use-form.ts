import { ChangeEvent, useState } from 'react';

type SubmitHandler<T> = (data: T) => void;

export const useForm = <
    T = {
        [key: string]: unknown;
    }
>(
    initialState: T
) => {
    const [values, setValues] = useState<T>(initialState);
    const handleChange =
        (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
            setValues((newValues) => ({
                ...newValues,
                [name]: e.target.value,
            }));
        };

    const handleSubmit =
        (onSubmit: SubmitHandler<T>) => (e: React.SyntheticEvent) => {
            e.preventDefault();
            onSubmit(values);
        };

    const clear = () => {
        setValues(initialState);
    };

    return { values, handleChange, setValues, clear, handleSubmit };
};
