import styled from 'styled-components';

export const PreviewContainer = styled.div`
    width: 60%;
    p{
        width: 80%;
        margin: auto;
        margin-bottom: 20px;
        text-align: justify;
        letter-spacing: 1px;
        &:nth-child(1){
            text-align: right;
        }

        &:nth-child(3){
            text-align: center;
        }
    }
`;