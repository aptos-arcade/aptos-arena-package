import {Transaction_UserTransaction, TransactionPayload_EntryFunctionPayload} from "aptos/src/generated";

import {SignAndSubmitTransaction} from "../types";
import {Network, Provider} from "aptos";

const useAptosTransaction = (signAndSubmitTransaction: SignAndSubmitTransaction) => {

    const submitTransaction = async (transaction: TransactionPayload_EntryFunctionPayload): Promise<boolean> => {
        return signAndSubmitTransaction(transaction)
            .then(async ({hash}) => {
                const { aptosClient } = new Provider(Network.MAINNET);
                return aptosClient.waitForTransactionWithResult(hash)
                    // @ts-ignore
                    .then(async (transaction: Transaction_UserTransaction) => {
                        return transaction.success;
                    })
            })
            .catch((_) => {
                return false;
            })
    }

    return {
        submitTransaction
    }
}

export default useAptosTransaction;