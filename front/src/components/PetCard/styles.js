import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: flex;
    border-radius: 5px;
    position: relative;
    max-width: 380px;
    min-width: 270px;

    img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
        /* border: 1px solid #7a77ff; */
        box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034),
                    0 6.7px 5.3px rgba(0,0,0,0.048),
                    0 12.5px 10px rgba(0,0,0,0.06),
                    0 22.3px 17.9px rgba(0,0,0,0.072),
                    0 41.8px 33.4px rgba(0,0,0,0.086),
                    0 100px 80px rgba(0,0,0,0.12);
    }
    .box {
        position: absolute;
        z-index: 2;
        top: 290px;
        left: 0;
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        border-radius: 10px 10px 5px 5px;
        background: #fff;
        padding: 5px 10px;
        /* border: 1px solid #7a77ff; */
        box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034),
                    0 6.7px 5.3px rgba(0,0,0,0.048),
                    0 12.5px 10px rgba(0,0,0,0.06),
                    0 22.3px 17.9px rgba(0,0,0,0.072),
                    0 41.8px 33.4px rgba(0,0,0,0.086),
                    0 100px 80px rgba(0,0,0,0.12);

        .box-top {
            display: flex;
            flex: 1;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-size: 17px;
            }
            .circleGreen {
                padding: 5px 10px;
                background: green;
                color: #fff;
                border-radius: 50%;
            }
            .circleRed {
                padding: 5px 10px;
                background: red;
                color: #fff;
                border-radius: 50%;
            }
        }
        .box-bottom {
            margin-top: 5px;
            height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        svg {
            font-size: 40px;
            color: #ccc;
            cursor: pointer;

            &:hover {
                color: red;
            }
        }
        p {
            font-size: 14px;
        }
    }
`;
