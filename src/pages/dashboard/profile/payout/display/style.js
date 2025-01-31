import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .header{
        width:100%;

        .header_links{
            width:100%;
            display: flex;
            gap:50px;
            /* border-bottom: 1px solid; */
            /* padding-bottom: 1%; */

            li{
                list-style: none;
                a{
                    padding: 10%;
                    font-size: 18px;

                    &:focus{
                        border-left: 1px solid ;
                        border-top: 1px solid ;
                        border-bottom: none;
                        border-right: 1px solid ;
                    }
                }
            }
        }
    }
    
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
                /* width:100%; */
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
        button{
            padding: 2%;
            width:100px;
            border:none;
            background: #23BE6E;
            color:#fff;
            border-radius:10px;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
        }
    }
`