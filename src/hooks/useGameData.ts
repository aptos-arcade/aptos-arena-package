import { useEffect, useCallback } from "react";

import { useUnityContext } from "react-unity-webgl";

import useAptosTransaction from "./useAptosTransaction";

import {SignAndSubmitTransaction, SignTransaction, SetConnectModalOpen} from "../types";
import {ReactUnityEventParameter} from "react-unity-webgl/distribution/types/react-unity-event-parameters";

const useGameData = (
    signAndSubmitTransaction: SignAndSubmitTransaction,
    signTransaction: SignTransaction,
    setConnectModalOpen: SetConnectModalOpen,
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


    const handleTransactionRequest = async (func: string, args: string, typeArgs: string) => {
        const success = await submitTransaction({
            type: "entry_function_payload",
            function: func,
            arguments: args ? args.split(",") : [],
            type_arguments: typeArgs ? typeArgs.split(",") : []
        })
        sendMessage("TransactionHandler", "SendTransactionResult", success ? 1 : 0);
    }

    const onTransactionRequest = useCallback( (func: ReactUnityEventParameter, args: ReactUnityEventParameter, typeArgs: ReactUnityEventParameter) => {
        handleTransactionRequest(func as string, args as string, typeArgs as string);
        return undefined;
    }, [sendMessage, submitTransaction])

    const onSetConnectModalOpen = useCallback( (isOpen: ReactUnityEventParameter) => {
        setConnectModalOpen((isOpen as number) > 0);
        return undefined;
    }, [setConnectModalOpen])

    useEffect(() => {
        addEventListener("OnTransactionRequest", onTransactionRequest);
        addEventListener("SetConnectModalOpen", onSetConnectModalOpen);
        return () => {
            removeEventListener("OnTransactionRequest", onTransactionRequest);
            removeEventListener("SetConnectModalOpen", onSetConnectModalOpen);
        };
    }, [addEventListener, onTransactionRequest, onSetConnectModalOpen, removeEventListener]);

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