import styled from 'styled-components';

export const TableCalculatorContainer = styled.div`
    width: 50%;

    .aproxValue{
        display: none;
    }

    .firma{
        display: none;
    }

    .message{
        display: none;
    }

    @media (max-width: 800px) {
        width: 100%;

        .aproxValue, .firma, .message{
            display: block;
        }

        .firma{
            width: 50%;
            border-top: solid 1px #000;
            margin: 70px auto 30px auto;
            p{
                width: 100%;
                text-align: center;
            }
        }

        .message{
            p{
                color: #1686e8;
                font-weight: bold;
                text-align: center;
            }
        }
    }
`;