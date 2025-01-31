import styled from "styled-components";

export const MainContainer = styled.div`

    width:100%;
    padding-right: 4%;

    .links{
        /* border:1px solid; */
        width:auto;
        padding-top:4%;
        
        li{
            /* border:1px solid; */
            list-style: none;
            display: flex;
            align-items: center;
            gap:20px;
            padding-top: 4%;
            padding-bottom: 4%;
            padding-right: 2%;
            padding-left: 4%;
            width:160px;
            cursor: pointer;
            margin-top: 5%;
            border-radius: 10px;

            a{
                font-size: 18px;
                &:hover{
                    color: #23BE6E;
                }
            }
            &:focus{
                background-color: #EBFAFA;
                border-right:#0010F7;
            }

        }
    }

    .main_container{
        width: 100%;
        /* border:1px solid; */
    }

    .card{
        /* width:60%; */
        margin-top: 2%;
        /* border:1px solid; */
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom:4%;
        display: flex;
        justify-content: space-between;
        /* flex-direction: column; */
        gap:20px;
        background:#fff;
        border-radius: 15px;
        height:80vh;

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
            align-items: center;
            gap:10px;
            border-bottom:1px solid #DFE6E9;
            /* padding-top: 2%; */
            padding-bottom: 4%;
        }
        
        button{
            padding: 1%;
            /* width:100px; */
            border:none;
            background: #23BE6E;
            color:#fff;
            border-radius:10px;
            font-size: 18px;
            font-weight: 400;
            cursor: pointer;
        }
        .zmw{
            padding: 2%;
            width:70px;
            border:1px solid #B2BEC3;
            background: #fff;
            color:#000;
            border-radius:10px;
            font-size: 14px;
            font-weight: 400;
        }
    }
    .button_container{
        width:100%;
        /* border:1px solid; */
    }
    button{
        width: 160px;
        padding: 1%;
        border:none;
        background: #23BE6E;
        color:#fff;
        font-size:15px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:2%;
        cursor: pointer;
        gap:8px;
    }
    .down_part{
        width:75%;
        border-left:1px solid #DFE6E9;
    }
`