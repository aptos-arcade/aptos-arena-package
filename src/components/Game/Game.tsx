import React from 'react'

import { Unity } from 'react-unity-webgl';

import useGameData from "../../hooks/useGameData";
import {SetConnectModalOpen, SignAndSubmitTransaction, SignTransaction} from "../../types";

interface Props {
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    setConnectModalOpen: SetConnectModalOpen,
    accountAddress?: string
}

const Game: React.FC<Props> = ({ signAndSubmitTransaction, signTransaction, setConnectModalOpen, accountAddress }) => {

    const { unityProvider } = useGameData(signAndSubmitTransaction, signTransaction, setConnectModalOpen, accountAddress);

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