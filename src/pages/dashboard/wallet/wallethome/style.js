import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 10%;
    /* justify-content: center; */
    /* align-items: center; */
    width:100%;
    gap:15px;
    padding-bottom: 5%;

    .heads_container{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3%;
        border-bottom: 1px solid #B2BEC3;

        .heads{
            h1{
                font-size: 30px;
            }
            button{

            }
        }
    }
    .with{
        margin-top:4%;
    }
    button{
        padding: 2%;
        width:140px;
        border:none;
        background: #23BE6E;
        color:#fff;
        border-radius:10px;
        font-size: 18px;
        font-weight: 400;
        cursor: pointer;
    }
    
    .card{
        width:100%;
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
    .cards{
        width:100%;
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
    .bottom{
        width: 100%;
        /* border: 1px solid; */
        text-align: center;
        padding-top: 1%;
        padding-bottom: 1%;
        border-bottom: 1px solid #DFE6E9;
        background-color: #FCFCFC;
    }
    th,td{
        /* border:1px solid; */
        text-align: start;
        padding-top: 1%;
        padding-bottom: 1%;
    }
    .bg{
        background-color: #F7FAFC;
    }
    .bgg{
        background-color: #FCFCFC;
        /* padding-top: 2%; */
    }
`