import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as logosSite from './Logos';

const logos = {
    'g1': logosSite.g1,
    'cgn': logosSite.cgn,
    'terra': logosSite.terra,
    'globoesporte': logosSite.globoesporte,
    'ig': logosSite.ig,
    'catv': logosSite.catv,
    'yahoo': logosSite.yahoo,
    'uol': logosSite.uol,
    'noticiasaominuto': logosSite.noticiasaominuto,
    'motor1': logosSite.motor1,
    'tecmundo': logosSite.tecmundo,
    'papogula': logosSite.papogula,
    'ofuxico': logosSite.ofuxico,
    'opresente': logosSite.opresente,
    'oparana': logosSite.oparana,
    'r7': logosSite.r7,
    'camaradetoledo': logosSite.camaratoledo,
    'lance': logosSite.lance,
    'canalrural': logosSite.canalrural,
    'tudointeressante': logosSite.tudointeressante,
    'gazetadopovo': logosSite.gazetadopovo,
    'correiodolago': logosSite.correiodolago,
    'sonoticiaboa': logosSite.sonoticiaboa,
    'agenciabrasil': logosSite.agenciabrasil,
    'aquiagoranet': logosSite.aquiagoranet,
}

const Btn = styled.button`
    background: #fff;
    border: none;
    padding: 1em;
    cursor: pointer;
    outline: none;

        img {
            width: 45px;
            height: 45px;
        }
`;

export default function Button(props) {
    function returnData(site) {
        props.loader('block');

        let path = window.location.host === 'localhost' ? 'http://localhost:3003/' : 'https://newscrawler-backend.herokuapp.com/';

        axios.get(`${path}api/${site}`)
            .then(res => {
                return res.data;
            })
            .then(data => {
                props.click(data);
                props.loader('none');
            })
            .catch(error => {
                console.log(error);
                props.click({ state: 'initial' });
            })
    }

    return (
        <Btn onClick={() => returnData(props.site)}>
            <img src={logos[props.site]} alt="" />
        </Btn>
    )
}