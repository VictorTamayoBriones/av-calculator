import styled from 'styled-components';


export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0;
    
    label{
        width: 60%;
        background: #0552a4;
        color: #fff;
        padding: 5px;
        text-align: right;
        border-radius: 3px 0 0 3px;
    }
    div{
        width: 40%;
        height: 40px;
        border: 1px solid #0552a4;
        padding: 5px;
        border-radius: 0 3px 3px 0;
        font-size: 16px;
        display: flex;
        
        span{
            width: 5%;
        }
        input{
            width: 95%;
            border: none;
            &:focus{
                outline: none;
            }
            &:disabled{
                background: #fff;
            }
        }
    }

    @media (max-width: 1400px){
        flex-direction: column;
        
        label{
            width: 100%;
            border-radius: 3px 3px 0 0;
            text-align: left;
        }
        div{
            width: 100%;
            border-radius: 0 0 3px 3px;
        }
    }
`