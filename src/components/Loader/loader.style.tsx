import { theme } from '@/theme';
import styled from 'styled-components';

export const LoaderContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader__spinner{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 5px solid ${theme.colors.white};
        border-top: 5px solid ${theme.colors.primary};
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;