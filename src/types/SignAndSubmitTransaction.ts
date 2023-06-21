
import { TransactionPayload_EntryFunctionPayload } from "aptos/src/generated";

export type SignAndSubmitTransaction = (payload: TransactionPayload_EntryFunctionPayload) => Promise<{ hash: string }>;