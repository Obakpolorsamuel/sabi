import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .card{
        width:60%;
        margin-top: 2%;
        /* border:1px solid; */
        padding-top:4%;
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom:4%;
        display: flex;
        flex-direction: column;
        gap:20px;
        background:#fff;
        border-radius: 15px;

        nav{
            width: 100%;

            input[type='text']{
                outline: none;
                padding-left: 3%;
                padding-right: 3%;
                padding-top:1%;
                padding-bottom:1%;
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
        .details{
            display: flex;
            gap:10px;
        }
    }
`