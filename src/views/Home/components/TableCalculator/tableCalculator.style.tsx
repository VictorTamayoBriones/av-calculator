import { theme } from '@/theme';
import styled from 'styled-components';


export const TableCalculatorContainer = styled.div`
    width: 40%;
    height: calc(100vh - 150px);

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        img{
            max-width: 40%;
        }
    }
    .table-body{
        display: flex;
        flex-direction: column;
        padding: 5px 10px;
        div{
            width: 100%;
        }
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        a{
            color: ${theme.colors.white};
        }
        button{
            width: 48%;
            height: 27px;
            color: ${theme.colors.white} !important;
            &:disabled{
                background: #ccc;
                color: var(--black) !important;
                border: none;
                cursor: not-allowed;
            }
        }
    }

    @media (max-width: 1400px){
        flex-direction: row;
        min-width: 400px;
        justify-content: space-between;
        gap: 5px;
        div{
            &:has(div){
                &:nth-child(1), &:nth-child(2){
                    width: 100%;
                }
                &:not(&:nth-child(1)):not(&:nth-child(2)){
                    width: calc(50% - 5px);
                }
            }
        }
    }

    @media (max-width: 800px){
        width: 100%;
        min-width: 0;
        height: max-content;
        div{
            &:has(div){
                &:nth-child(1), &:nth-child(2){
                    width: 100%;
                }
                &:not(&:nth-child(1)):not(&:nth-child(2)){
                    width: 100%;
                }
            }
        }
    }
`;