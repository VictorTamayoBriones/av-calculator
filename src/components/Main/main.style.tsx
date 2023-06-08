import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    
    @media (max-width: 800px){
        overflow: scroll;
        flex-direction: column;
    }
`;