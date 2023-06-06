import styled from 'styled-components';

export const TableCalculatorContainer = styled.div`
    width: 40%;
    height: calc(100vh - 150px);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

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
`;