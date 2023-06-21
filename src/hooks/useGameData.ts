import {useUnityContext} from "react-unity-webgl";

import {SignAndSubmitTransaction, SignTransaction} from "../types";

const useGameData = (
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    accountAddress: string | undefined,
) => {

    const {
        unityProvider,
        isLoaded,
        requestFullscreen,
        sendMessage,
        addEventListener,
        removeEventListener
    } = useUnityContext({
        loaderUrl: `https://www.aptosarcade.com/build/arena/Web.loader.js`,
        dataUrl: `https://www.aptosarcade.com/build/arena/Web.data`,
        frameworkUrl: `https://www.aptosarcade.com/build/arena/Web.framework.js`,
        codeUrl: `https://www.aptosarcade.com/build/arena/Web.wasm`
    });

    return {
        unityProvider,
        isLoaded,
        requestFullscreen,
        sendMessage,
        addEventListener,
        removeEventListener
    }
}

export default useGameData;