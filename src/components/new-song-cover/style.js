import styled from "styled-components";

export const LSNewSongCoevrWrapper = styled.div`
    width: ${props => (props.width + 'px')};
    
    .song-img {
        position: relative;
        width: ${props => (props.width + 'px')};
        height: ${props => (props.height + 'px')};
        box-shadow: 0 6px 10px -10px #000;

        .cover {
            position: absolute;
            width: 100%;
            height: 100%;
            background-position: 0 ${props => (props.bgp + 'px')};
        }

        &>img{
            width: ${props => (props.imgSize + 'px')};
            height: 100%;
        }
    }

    .desc {
        width: ${props => (props.width + 'px')};
        margin-top: 6px;
        font-size: 12px;

        .author {
            color: #666;
        }

        .title {
            color:#000;
        }
    }
`