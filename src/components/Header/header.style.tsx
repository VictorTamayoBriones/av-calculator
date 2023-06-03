import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media (max-width: 800px){
        height: 60px;
        img{
            width: 100px;
            height: 50px;
            object-fit: contain;
        }
    }
`