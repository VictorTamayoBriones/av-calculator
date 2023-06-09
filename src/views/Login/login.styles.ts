import { theme } from '@/theme';
import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 60%;
    height: 50vh;
    min-height: 500px;
    margin: auto;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: ${theme.colors.shadow}, 5px 5px 6px rgba(0,0,0,0.2);

    .brand {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.primary};

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    };
    

    h1{
        color: ${theme.colors.primary};
        text-align: center;
    }

    form {
        width: 50%;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        position: relative;

        h1, input, button{
            width: 100%;
        }

        h1{
            position: absolute;
            top: 50px;
        }
    }
`