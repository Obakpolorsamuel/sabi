import styled from "styled-components";

export const MainContainer = styled.div`
    /* border:1px solid; */
    background: #F0F3F5;
    display: flex;
    height: auto;
    
    .outlet{
        display: flex;
        width: 100%;
        padding-top: 5%;
    }
    
    aside{
        width:270px;
        height: 100vh;
        /* padding:15px; */
        padding-left:40px;
        padding-top:20px;
        padding-bottom: 3%;
        display: flex;
        flex-direction: column;
        gap:50px;
        /* justify-content: space-around; */
        background: #F0F3F5;
        border-right: #F0F3F5;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        /* For Firefox */
        scrollbar-width: none;

        /* For Internet Explorer and Edge (not fully supported) */
        -ms-overflow-style: none;

    }

    a{
        color:#677683;
        font-size: 16px;
        font-weight: 300;
    }
    .logo{
        width:15%;
        height:auto;
        display: flex;
        justify-content: space-between;
        img{
            width:100%;
        }
    }
    .links_container{
        display: flex;
        flex-direction: column;
        gap:20px;

        h2{
            color:#0067FA;
            font-weight: 600;
            font-size: 15px;
        }
        .lists{
            display: flex;
            flex-direction: column;
            gap:25px;
        }
        li{
            list-style: none;
            display: flex;
            align-items: center;
            gap:20px;
        }
    }
`