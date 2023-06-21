import {TransactionPayload} from "./TransactionPayload";

export type SignAndSubmitTransaction = (payload: TransactionPayload) => Promise<{ hash: string }>;