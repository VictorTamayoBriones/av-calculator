import styled from 'styled-components';


export const TableCalculatorContainer = styled.div`
    width: 40%;
    height: calc(100vh - 150px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        img{
            max-width: 40%;
        }
    }

    footer{
        display: flex;
        justify-content: space-between;
        button{
            width: 48%;
            margin-top: 2px;
            height: 27px;
            
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