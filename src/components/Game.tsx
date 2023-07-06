import React from 'react'

import { Unity } from 'react-unity-webgl';

import useGame from "../hooks/useGame";

import {GameProps} from "../types";

const Game: React.FC<GameProps> = (gameProps) => {

    const { unityProvider } = useGame(gameProps);

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