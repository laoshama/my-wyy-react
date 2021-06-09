import styled from 'styled-components'
import banner_sprite from '@/assets/img/banner_sprite.png'
import download_img from '@/assets/img/download.png'

export const TopBannerWrapper = styled.div`
    position: relative;
    height: 285px;
    width: 100%;
    background: url(${props => props.imageUrl}) center/6000px;
`

export const Banner = styled.div`
    position: relative;
    display: flex;
    height: 285px;
    background-color: #f00;

    .left{
        width: 10px;
        flex: 1;

        .banner{
            height: 285px;

            .banner-img-box img{
                width: 100%;
                height: 285px;
            }
        }
    }

    .right{
        width: 254px;
        height: 285px;
        background: url(${download_img}) no-repeat;

        .download-btn{
            width: 215px;
            height: 56px;
            margin: 185px 19px;
            text-indent: -9999px;

            :hover{
                width: 215px;
                height: 56px;
                background: url(${download_img}) no-repeat 0px -289px;
            }
        }
    }

    .left-control,
    .right-control{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 37px;
        height: 63px;
        cursor:pointer;
    }
    .right-control{
        right: -68px;
        background:url(${banner_sprite}) no-repeat 0 -508px
    }
    .left-control{
        left: -68px;
        background:url(${banner_sprite}) no-repeat 0 -360px
    }
`