import { TransactionPayload_EntryFunctionPayload } from "aptos/src/generated";

export type SignTransaction = (payload: TransactionPayload_EntryFunctionPayload) => Promise<Uint8Array>;