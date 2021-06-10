import styled from 'styled-components'

export const RankingItemWrapper = styled.div`
    width: 230px;
    height: 472px;

    .rank-top {
        position: relative;
        display: flex;


        height: 120px;

        .rank-left-img {
            position: absolute;
            top: 20px;
            left: 20px;

            :hover{
                cursor: pointer;
            }
        }

        .rank-top-right {
            position: absolute;
            top: 28px;
            left: 120px;
            height: 51px;
            width: 100px;

            .title{
                font-size: 14px;
                font-weight: bold;
                color: #333;
                
                :hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }

            .play-btn{
                width: 22px;
                height: 22px;
                background-position: -267px -205px;
                margin: 8px 10px 0 0;

                :hover{
                    background-position: -267px -235px;
                    cursor: pointer;
                }
            }

            .favor-btn{
                width: 22px;
                height: 22px;
                background-position: -300px -205px;

                :hover{
                    background-position: -300px -235px;
                    cursor: pointer;
                }
            }
        }
    }

    .rank-content-item {
        display: flex;
        padding-left: 6px;

        .left{
            display: flex;
            height: 32px;
            flex: 1;

            .order{
                width: 32px;
                height: 32px;
                line-height: 32px;
                color: #c10d0c;
                font-size: 16px;
                text-align: center;
            }
            
            .song-name {
                color:#000;
                line-height: 32px;
            }
        }

        :hover{
            .song-name{
                width: 100px;
                text-decoration: underline;
            }

            .oprate {
            display: flex;
            align-items: center;
            width: 80px;

            .play-btn,
            .favor-btn,
            .add-btn {
                    margin-right: 5px;
                    width: 17px;
                    height: 17px;
                    cursor: pointer;
                    background-position: -267px -268px;
                }
                .add-btn {
                    background-position: 0 -698px;
                }
                .favor-btn {
                    background-position: -297px -268px;
                }
            }
        }
    }
`