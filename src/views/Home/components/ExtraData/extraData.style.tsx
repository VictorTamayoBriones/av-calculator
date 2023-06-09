import styled from 'styled-components';

export const ExtraDataContainer = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .firma{
        width: 30vw;
        min-width: 300px;
        border-top: solid 1px #000;
             
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
`;
