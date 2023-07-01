import { useEffect, useCallback } from "react";

import {useUnityContext} from "react-unity-webgl";

import useAptosTransaction from "./useAptosTransaction";

import {SignAndSubmitTransaction, SignTransaction, Connect} from "../types";

const useGameData = (
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    connect: Connect,
    accountAddress: string | undefined,
) => {

    const { submitTransaction } = useAptosTransaction(signAndSubmitTransaction);

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

    useEffect(() => {
        if(isLoaded) {
            sendMessage("WalletManager", "SetAccountAddress", accountAddress || "");
        }
    }, [accountAddress, isLoaded, sendMessage]);

    const onTransactionRequest = useCallback(async (func: string, args: string, typeArgs: string) => {
        const success = await submitTransaction({
            type: "entry_function_payload",
            function: func,
            arguments: args ? args.split(",") : [],
            type_arguments: typeArgs ? typeArgs.split(",") : []
        })
        sendMessage("TransactionHandler", "SendTransactionResult", success ? 1 : 0);
    }, [sendMessage, submitTransaction])

    const onWalletConnect = useCallback(async (walletName: string) => connect(walletName), [connect])

    useEffect(() => {
        // @ts-ignore
        addEventListener("OnTransactionRequest", onTransactionRequest);
        // @ts-ignore
        addEventListener("ConnectWalletRequest", onWalletConnect);
        return () => {
            // @ts-ignore
            removeEventListener("OnTransactionRequest", onTransactionRequest);
            // @ts-ignore
            removeEventListener("ConnectWalletRequest", onWalletConnect);
        };
    }, [addEventListener, onTransactionRequest, onWalletConnect, removeEventListener]);

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