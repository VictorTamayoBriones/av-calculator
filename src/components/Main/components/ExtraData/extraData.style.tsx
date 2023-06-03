import styled from 'styled-components';

export const ExtraDataContainer = styled.div`
    width: 50%;
    height: 68vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .firma{
        width: 50%;
        max-width: 500px;
        min-width: 300px;
        border-top: solid 1px #000;
        margin: auto;
        
        p{
            width: 100%;
            text-align: center;
            font-weight: bold;
        }
    }

    .message{
        p{
            color: #1686e8;
            font-weight: bold;
        }
    }

    @media (max-width: 800px){
        display: none;
    }

`;
