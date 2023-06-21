import React from 'react'

import { Unity } from 'react-unity-webgl';

import useGameData from "../../hooks/useGameData";
import {SignAndSubmitTransaction, SignTransaction} from "../../types";

interface Props {
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    accountAddress: string
}

const Game: React.FC<Props> = ({ signAndSubmitTransaction, signTransaction, accountAddress }) => {

    const { unityProvider } = useGameData(signAndSubmitTransaction, signTransaction, accountAddress);

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