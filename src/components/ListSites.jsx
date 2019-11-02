import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Display from './Display';
import Button from './Button';

const Sites = styled.div`
    button.left,
    button.right {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1.5em;
    }
`;

export default function ListSites() {
    const [content, updateContent] = useState([
        { state: 'initial' }
    ]);

    const [loaderState, setLoaderState] = useState(false);

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const sites = [
        'g1',
        'cgn',
        'terra',
        'globoesporte',
        'ig',
        'catv',
        'yahoo',
        'uol',
        'noticiasaominuto',
        'motor1',
        'tecmundo',
        'papogula',
        'ofuxico',
        'opresente',
        'oparana',
        'r7',
        'camaradetoledo',
        'lance',
        'canalrural',
        'tudointeressante',
        'gazetadopovo',
        'correiodolago',
        'sonoticiaboa',
        'agenciabrasil',
        'aquiagoranet',
    ]

    async function handleClick(data) {
        await updateContent(data);
    }

    function loaderFunc(state) {
        setLoaderState(state);
    }

    return (
        <>
            <Sites className="sites" style={{ padding: `0 ${chevronWidth}px` }}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={10}
                    gutter={20}
                    leftChevron={<button className="left"><FaAngleLeft /></button>}
                    rightChevron={<button className="right"><FaAngleRight /></button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {sites.map((e, index) => (
                        <Button key={index++} site={e} click={handleClick} loader={loaderFunc} />
                    ))}
                </ItemsCarousel>
            </Sites>
            <Display content={content} loader={loaderState} />
        </>
    );
}