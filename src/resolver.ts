import fetch from "cross-fetch";

import { FIO_TESTNET_API } from "./api";
import { ResponseGetPublicAddress, ResponsePublicAddress, ErrorResponse } from "./interfaces";

export function getFioAddress(
  publicKey: string
): Promise<ResponseGetPublicAddress> {
  const url = FIO_TESTNET_API + "/get_fio_addresses";

  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify({
      fio_public_key: publicKey,
      limit: 100,
      offset: 0,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res as ResponseGetPublicAddress;
    })
    .catch((error) => {
      error as ErrorResponse;
      return error;
    });
}

export function getPublicAddress(fioAddress: string): Promise<ResponsePublicAddress> {
  const url = FIO_TESTNET_API + "/get_pub_address";

  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Accept: "application/json",
    },
    body: JSON.stringify({
      fio_address: fioAddress,
      chain_code: "FIO",
      token_code: "FIO",
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res as ResponsePublicAddress;
    })
    .catch((error) => {
      error as ErrorResponse;
      return error;
    });
}
