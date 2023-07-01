import React from 'react'

import { Unity } from 'react-unity-webgl';

import useGameData from "../../hooks/useGameData";
import {Connect, SignAndSubmitTransaction, SignTransaction} from "../../types";

interface Props {
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    connect: Connect,
    accountAddress?: string
}

const Game: React.FC<Props> = ({ signAndSubmitTransaction, signTransaction, connect, accountAddress }) => {

    const { unityProvider } = useGameData(signAndSubmitTransaction, signTransaction, connect, accountAddress);

    return (
        <Unity
            unityProvider={unityProvider}
            style={{
                width: '100%',
                aspectRatio: '16/9'
            }}
        />
    )
}

export default Game