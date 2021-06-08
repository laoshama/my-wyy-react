import styled from 'styled-components'

export const DiscoverWrapper = styled.div`

    .top{
        background-color: #c20c0c;

        .navbar{
            display: flex;
            justify-content: space-around;
            align-items: center;
            
            width: 560px;
            height: 35px;
            line-height: 35px;
            margin-left: 122px;

           a{
               display: inline-block;
               height: 20px;
               line-height: 20px;
               padding: 0 12px;
               border-radius: 30px;
               color: #ffffff;
               text-decoration: none;
            } 

            .active{
                background-color: #9B0909;
            }
        }
    }

`
