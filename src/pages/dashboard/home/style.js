import styled from "styled-components";

export const MainContainer = styled.div`
    width:100%;
    /* border:1px solid; */
    .main_container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .button_container{
        display: flex;
        justify-content: end;
        width: 70%;
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
    }
    .left{
        display: flex;
        flex-direction: column;
        gap:30px;
        width: 50%;
    }
    .right{
        display: flex;
        flex-direction: column;
        gap:30px;
        width: 45%;
        /* border:1px solid; */

        .account_container{
            padding-left: 3%;
            h1{
                font-size: 24px;
            }
        }
    }
    nav{
        width:100%;
        gap:3px;
        h1{
            font-size: 30px;
        }
        p{
            font-size: 16px;
        }
    }
    .balance_container{
        display:flex;
        /* border:1px solid; */
        justify-content: space-between;
        align-items: center;
        
        h1{
            font-size: 30px;
        }
        h2{
            color:#768084;
            font-weight: 600;
        }
    }
    .graph_container{
        .menu{
            display: flex;
            width:100%;
            justify-content: end;
            /* padding-right: 10%; */
            
            img{
                cursor: pointer;
            }
        }
    }
    .left_side{
        display: flex;
        align-items: center;
        gap:12px;
    }
    .img_contain{
        /* border:1px solid; */
        width: 50px;
        height:50px;
        border-radius: 10px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button_contain{
        display: flex;
        align-items: end;
        justify-content: space-between;
        cursor: pointer;
        padding-left: 3%;
        padding-right: 3%;
        padding-top: 2%;
        padding-bottom: 2%;
        border-radius: 10px;
        width:70%;

        &:hover{
            background-color:rgb(204, 224, 224);
        }

        h3{
            color: #191C1D;
        }
    }
    .writeup{
        h3{

            font-size: 15px;
            font-weight: 500;
            color: #191C1D;
        }
        span{
            color: #BBC5CB;
            font-size: 14px;
        }
    }
    .right_down{
        display: flex;
        flex-direction: column;
        gap:15px;
        margin-top:4%;
    }
`