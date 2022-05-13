import MuiButton, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import { CircularProgress, styled } from '@mui/material';
import { css } from 'styled-components';
import Spinner from '../loaders/spinner';

interface Props extends ButtonProps {
    loading?: boolean;
}

const StyledSpinner = styled(Spinner)`
    .spinner-progress {
        color: white;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledMuiButton = styled(MuiButton)<{ loading?: boolean }>`
    padding-top: 10px;
    padding-bottom: 10px;

    ${(props) => {
        if (props.loading) {
            return css`
                color: transparent;
            `;
        }
        return '';
    }}
`;

const Button: React.FC<Props> = ({ loading, children, ...props }) => (
    <StyledMuiButton loading={loading} {...props}>
        {loading ? (
            <StyledSpinner height="1em" loaderSize="1.4em" loading />
        ) : null}
        {children}
    </StyledMuiButton>
);

Button.defaultProps = {
    loading: false,
};

export default Button;
