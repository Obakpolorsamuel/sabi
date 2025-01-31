import styled from "styled-components";

export const MainContainer = styled.div`
    /* border:1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110vh;
    padding-top: 4%;
    padding-bottom: 8%;

    .main_container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height:100%;
        width:40%;
        /* border: 1px solid; */
    }
    .paragraph{
        margin-top: 4%;
        p{
            color:#B2CCDE;
        }
    }
    .input_container{
        display: flex;
        flex-direction: column;
        gap:50px;
        /* width: 100%; */

        .header{
            display: flex;
            flex-direction: column;
            gap:4px;   
        }
    }
    .inputs{
        display: flex;
        flex-direction: column;
        gap:20px;
        width:100%;

        .seperation_container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap:20px;
        }
        label{
            font-size: 18px;
        }
        .full_width{
            width: 100%;
        }
        input[type='text'],input[type='email'],input[type='password'],input[type='number'],select{
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            /* height:5vh; */
            /* background:#E8F0FE; */
            border:1px solid #B2BEC3;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            outline: none;

            &:focus{
                border:1px solid #23BE6E;
            }
        }
    }
    select{
        -webkit-appearance: none;  /* For Safari and Chrome */
        -moz-appearance: none;     /* For Firefox */
        appearance: none;
        width:99%;
    }
    input[type='number']{
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
    input[type='submit']{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            background:#23BE6E;
            border:none;
            border-radius:7px;
            font-size: 15px;
            color: #fff;
            cursor: pointer;
            @media screen and (max-width:1000px){
                background: #6BABA3;
                font-size: 20px;
            }
    }
    .register{
        text-align: center;
        margin-top: 2%;
    }
`