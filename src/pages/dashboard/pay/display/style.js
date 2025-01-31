import styled from "styled-components";

export const MainContainer = styled.div`
    width:100%;
    /* border:1px solid red; */
    padding-right:10%;

    .outlet{
        width:100%;
    }
    .main_container{
        display: flex;
        flex-direction: column;
        gap:100px;
    }
    
    .header{
        display:flex;
        align-items: center;
        gap:20px;
    }
    .content{
        width:100%;

        .content_list{
            width: 100%;
            /* border:1px solid; */
            display: flex;
            gap:40px;
            padding: 5px;
            padding-left: 5%;
            background:#fff;
            border-radius:5px;
            /* justify-content: space-around; */
            li{
                list-style: none;
                padding: 1%;
                a{
                    font-size: 16px;
                    font-weight: 600;
                }
                transition: all 1s ease-in;
                /* padding-left: 3%;
                padding-right: 3%; */
                &:hover{
                    /* padding-left: 3%;
                    padding-right: 3%; */
                    background-color: #23BE6E;
                    padding: 1%;
                    border-radius: 8px;
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }
`