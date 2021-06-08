import styled from 'styled-components'

import sprite_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
    height: 70px;
    background-color: #242424;

    .content{
        height: 70px;

        display: flex;
        justify-content: space-between;
    }

    .divider{
        height: 5px;
        background-color: #C20C0C;;
    }
`

export const HeaderLeft = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    font-size: 14px;

    .logo{
        display: block;
        width: 157px;
        height: 100%;
        text-indent: -9999px;
        background-position: 0 0;
        margin-right: 20px;
    }

    .link-item {
        position: relative;
        line-height: 70px;
        padding: 0 19px;
        text-decoration:none;
    }

    .link-item-active {
        background-color: #000000;
        color: #ffffff;
    }

    .link-item-active::after {
        content: '';
        width: 12px;
        height: 7px;

        position: absolute;
        left: 50%;
        bottom: -1px;
        transform: translateX(-50%);
        background: url(${sprite_01}) no-repeat -226px 0;
    }

    a:nth-last-child(1)::before {
        content: '';
        width: 28px;
        height: 19px; 

        position: absolute;
        right: -20px;
        top: 21px;
        background: url(${sprite_01}) no-repeat -190px 0;
    }
`


export const HeaderRight = styled.div`
    display: flex;
    position: relative;
    height: 70px;
    align-items: center;

    .search .search-logo{
        position: absolute;
        top: 18px;
        width: 25px;
        height: 25px;
        background-position: 2px -99px;
    }

    .search>input{
        width: 158px;
        height: 32px;
        border-radius: 32px;
        color: #9b9b9b;
        font-size: 12px;
        text-indent: 30px;
    }

    .creators{
        width: 90px;
        height: 32px;
        border:1px solid #4f4f4f;
        border-radius: 20px;
        line-height: 32px;
        color: #ccc;
        text-align: center;
        margin-left: 20px;
    }

    .creators:hover{
        cursor: pointer;
        color: #ffffff;
        border: 1px solid #ccc
    }

    .login{
        color: #787878;
        width: 28px;
        margin-left: 20px;
    }

    .login:hover{
        cursor: pointer;
        color: #999999;
        text-decoration: underline;
    }
`