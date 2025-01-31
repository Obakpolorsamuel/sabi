import styled from "styled-components";

export const MainContainer = styled.div`

    h1{
        font-size: 20px;
    }
    .down{
        display: flex;
        flex-direction: column;
        width: 80%;
        padding-left: 30px;
        /* height: 100vh; */
        padding-top: 5%;
        /* gap:12px; */

        .down_partt{
            display: flex;
            flex-direction: column;
            gap:20px;
        }
        .business{
            div{
                display: flex;
                width:100%;
                /* gap:50px; */
                justify-content: space-between;
                align-items: center;
                text-align: start;
                margin-top: 3%;

                h2{
                    font-weight: 600;
                    font-size: 18px;
                    color: #636E72;
                }

                p{
                    /* border:1px solid; */
                    width:50%;
                }
            }
        }
        .description{
            margin-top: 2%;
            border-top:1px solid #DFE6E9;
            padding-top: 3%;

            p{
                color: #6D787B;
            }
        }
    }
`