import styled from "styled-components";

export const SongListWrapper = styled.div`
        height: 400px;

        .songWrapper {
                display: flex;
                flex-wrap: wrap;

                .song-item{
                        width: 150px;
                        height: 40px;
                        margin: 20px;
                        background-color: #ff0;
                        text-align: left;
                        cursor: pointer;

                        span{
                                display: inline-block;
                                width: 80px;
                        }

                }
        }
`