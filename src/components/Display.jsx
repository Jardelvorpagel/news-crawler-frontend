import React from 'react';
import '@lottiefiles/lottie-player';
import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2em;

    h2 {
        text-align: center;
        width: 100%;
    }

    .loader {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    > .newsContent {
        &:nth-child(even) {
            margin-right: 10px;
        }

        &:nth-child(odd) {
            margin-left: 10px;
        }
    }
`;

let visible = 'none';

export default function Display(props) {
    if (props.loader === 'block') {
        visible = 'block'
    } else {
        visible = 'none';
    }

    return (
        <>
            <Container>
                <div className="loader">
                    <lottie-player
                        autoplay
                        loop
                        mode='normal'
                        src='https://assets7.lottiefiles.com/datafiles/40aX5db74VvGPWw/data.json'
                        style={{ width: '320px', display: visible }}
                    >
                    </lottie-player>
                </div>
                {
                    props.content[0].state === 'initial' ?
                        visible == 'none' ? <h2>Selecione um site</h2> : <h2>Aguarde...</h2> :
                        visible == 'none' ?
                            props.content.map((c, index) => (
                                <Card key={index++} id={index++} title={c.title} body={c.body} />
                            )) : <h2>Aguarde...</h2>
                }
            </Container>
        </>
    );
}