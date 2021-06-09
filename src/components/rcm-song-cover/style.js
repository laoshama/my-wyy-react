import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
    width: 140px;
    height: 204px;

    .pic{
        position: relative;
        height: 140px;
        width: 140px;
        background-position: 120px 60px;

        .cover {
            position: absolute;
            width: 100%;
            height: 100%;
            background-position: 0 0;
        }

        img{
            width: 100%;
            height: 100%;
        }

        .btn-desc{
            position: absolute;
            bottom: 0;
            height: 27px;
            width: 100%;
            background-position: 0 -537px;

            display: flex;
            align-items: center;

            .logo {
                width: 14px;
                height: 11px;
                margin: 0 5px 0 10px;
                background-position: 0 -24px;
            }

            span {
                width: 85px;
                color: #ccc;
            }

            .play-btn {
                width: 16px;
                height: 17px;
                background-position: 0 -60px;
                cursor: pointer;
            }
        }
    }

    .desc{
        height: 49px;
        width: 140px;
        margin-top: 6px;
        font-size: 14px;
        color: #000;

        display:-webkit-box; 
        -webkit-box-orient:vertical;
        overflow: hidden;
        -webkit-line-clamp:2; 
    }
`