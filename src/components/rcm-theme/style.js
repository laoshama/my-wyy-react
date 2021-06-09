import styled from 'styled-components'

export const ThemeWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    color: #333;
    height: 35px;

    border-bottom: 2px solid #C10D0C;

    .theme{
        display: flex;
        font-size: 20px;
        margin-right: 20px;

        .logo {
            height: 30px;
            width: 35px;
            background-position: -225px -156px;
        }
    }

    .title{
        display: flex;
        align-items: center;

        .title-item {
            margin: 0 10px;
            border-right: 1px solid rgba(0,0,0,0.3);
            padding-right: 20px;

            :nth-last-child(1){
                border-right:none;
            }
        }

        
    }

    .more{
        position: absolute;
        right: 10px;
        width: 40px;

        .logo{
            display: inline-block;
            height: 10px;
            width: 10px;
            background-position: 0 -240px;
            margin-left: 6px;
        }
    }
`