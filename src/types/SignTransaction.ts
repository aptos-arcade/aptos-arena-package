import {TransactionPayload} from "./TransactionPayload";

export type SignTransaction = (payload: TransactionPayload) => Promise<Uint8Array>;