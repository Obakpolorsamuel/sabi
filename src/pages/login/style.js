import styled from 'styled-components'

export const MainContainer = styled.div`
    /* border:1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    .main_container{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height:100%;
        width:32%;
        /* border: 1px solid; */
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
        /* border:1px solid red; */
        display: flex;
        flex-direction: column;
        gap:20px;
        width:100%;

        @media screen and (max-width:1000px){
          width:100%;
          margin-top:10%;
          margin-bottom:10%;
        }

        input[type='email']{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            background:#E8F0FE;
            border:1px solid #B2BEC3;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            @media screen and (max-width:1000px){
                background: #fff;
                /* font-size: 20px; */
            }                               
        }
        input[type='email']:focus{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            background:transparent;
            border:1px solid #23BE6E;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            @media screen and (max-width:1000px){
                background: #fff;
                /* font-size: 20px; */
            }                               
        }
        input[type='email']::placeholder{
            @media screen and (max-width:1000px){
                /* background: #6BABA3; */
                font-size: 20px;
            }
            color: #0A1919;
        }
        input[type='password']{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            background:#E8F0FE;
            border:1px solid #B2BEC3;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            @media screen and (max-width:1000px){
                background: #fff;
                /* font-size: 20px; */
            }
        }
        input[type='password']:focus{
            outline: none;
            padding-left: 3%;
            padding-right: 3%;
            padding-top:3%;
            padding-bottom:3%;
            background:transparent;
            border:1px solid #23BE6E;
            border-radius:7px;
            font-size: 15px;
            color: #0A1919;
            @media screen and (max-width:1000px){
                background: #fff;
                /* font-size: 20px; */
            }
        }
        input[type='password']::placeholder{
            @media screen and (max-width:1000px){
                /* background: #6BABA3; */
                font-size: 20px;
            }
            color: #0A1919;
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
        .forgot_password{
            @media screen and (max-width:1000px){
                display: none;
            }
        }
    }
    .register{
        /* border: 1px solid; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        h2{
            color: #CBE1EF;
            font-size: 17px;
        }
        .spans{
            display: flex;
            gap:10px;
            justify-content: center;
        }
    }
`