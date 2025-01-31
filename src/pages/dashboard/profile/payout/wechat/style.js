import styled from "styled-components";

export const MainContainer = styled.div`
        width: 100%;
    /* .columns_fold{
        border:1px solid
    } */
    .columns{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-top:2%;
        /* border: 1px solid; */
        gap:10px;

        input[type='text']{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:2%;
            padding-bottom:2%;
            background:#fff;
            border:1px solid #B2BEC3;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            @media screen and (max-width:1000px){
                background: #fff;
                /* font-size: 20px; */
            }
        }
    }
`