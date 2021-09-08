import fetch from "cross-fetch";

import { FIO_TESTNET_API } from "./api";
import {TransferResponse} from './interfaces'

export function sendToFio(
    payee: string, 
    amount: string, 
    maxFee: number,
    tpid: string,
    actor: string,
    ): TransferResponse{
        return payee
}
export function sendToPublicKey(){}