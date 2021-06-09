import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
`

export const BannerWrapper = styled.div`

    position:relative;

    width: 100%;
    height: 186px;

    margin-top: 20px;
    padding: 26px 30px;
    
    background-color: #f5f5f5;
    border: 1px solid #fff;

    .banner-box{
        margin: 0 auto;
        display: flex !important;
        justify-content: space-between;
    }

    .control-left,
    .control-right {
        position: absolute;
        top: 70px;

        width: 20px;
        height: 20px;

        cursor: pointer;
    }
    .control-left{
        background-position: -260px -75px;
        left: 10px;
    }
    .control-right{
        background-position: -300px -75px;
        right: 10px;
    }
`