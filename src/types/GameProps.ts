import {SignAndSubmitTransaction} from "./SignAndSubmitTransaction";
import {SetConnectModalOpen} from "./Connect";

export interface GameProps {
    signAndSubmitTransaction: SignAndSubmitTransaction,
    setConnectModalOpen: SetConnectModalOpen,
    accountAddress?: string
}