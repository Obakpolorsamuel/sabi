import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:40px;
    
    .header{
        border-bottom:1px solid #DFE6E9;
        /* padding-top: 2%; */
        padding-bottom: 4%;
    }
    .columns{
        display: flex;
        flex-direction: column;
        width: 100%;
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

    .cards{
        width:60%;
        margin-top: 2%;
        /* border:1px solid; */
        padding-top:4%;
        padding-left: 3%;
        padding-right: 3%;
        padding-bottom:4%;
        display: flex;
        flex-direction: column;
        /* gap:20px; */
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
            align-items: center;
            gap:10px;
            border-bottom:1px solid #DFE6E9;
            /* padding-top: 2%; */
            padding-bottom: 4%;
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
            align-items: center;
            gap:10px;
            border-bottom:1px solid #DFE6E9;
            /* padding-top: 2%; */
            padding-bottom: 4%;
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
    .head_part{
        display: flex;
        justify-content: space-between;
        padding-top: 6%;
        padding-bottom: 6%;
        padding-left: 3%;
        background-color: #F7FAFC;
        border-bottom: 1px solid #DFE6E9;

        .writeup{
            width: 50%;
        }
    }
    .bottom{
        width: 100%;
        /* border: 1px solid; */
        text-align: center;
        padding-top: 4%;
        padding-bottom: 4%;
        background-color: #FCFCFC;
    }
`