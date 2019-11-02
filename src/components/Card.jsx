import React, { useState, useRef, useEffect } from 'react';
import Clipboard from 'react-clipboard.js';
import styled from 'styled-components';
import { MdKeyboardArrowDown, MdTextFields, MdShortText } from 'react-icons/md';

const NewsContent = styled.div`
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    padding: 10px;
    flex: 45%;
    margin-bottom: 1.3em;
    position: relative;
    overflow: hidden;
    transition: all ease .4s;

    h1 {
        color: #333;
        font-weight: bold;
        font-size: 23px;
        margin: 0;
    }

    button {
        border: none;
        background: transparent;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;

        &.copy-title,
        &.copy-desc {
            border: 1px solid #a72424;
            color: #a72424;
            width: 30px;
            height: 20px;
            border-radius: 30px;
            margin-left: 5px;
        }
    }

    .desc {
        color: #5A5A5A;
    }

    .expanded {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
        margin: auto;
        background: linear-gradient(to top, white, white 45%, transparent);
        border: none;
        font-size: 1.2em;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2.5em;
        outline: none;

        &.true {
            svg {
                transform: rotateZ(180deg);
            }
        }

        svg {
            margin-bottom: -20px;
            transition: all ease .4s;
        }
    }
`;

export default function Card(props) {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.height = active ? `${contentRef.current.scrollHeight}px` : '125px';
    }, [contentRef, active]);

    const toogleActive = () => {
        setActive(!active)
    }

    return (
        <>
            <NewsContent ref={contentRef} className="newsContent">
                <h1>
                    {props.title}
                    <Clipboard className="copy-title" data-clipboard-text={props.title}>
                        <MdTextFields />
                    </Clipboard>
                    <Clipboard className="copy-desc" data-clipboard-text={props.body}>
                        <MdShortText />
                    </Clipboard>
                </h1>
                <div
                    className="desc"
                >
                    {props.body}
                </div>
                <button className={`expanded ${active}`} onClick={toogleActive}>
                    <MdKeyboardArrowDown />
                </button>
            </NewsContent>
        </>
    );
}