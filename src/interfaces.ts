export interface TransferResponse {
  status: string;
  fee_collected: number;
}

export interface ErrorResponse {
  type: string;
  message: string;
  fields: [
    {
      name: string;
      value: string;
      error: string;
    }
  ];
}

export interface ResponseGetAllPublicAddress {
  fio_address: string;
  limit: number;
  offset: number;
}

export interface ResponseGetPublicAddress {
  fio_addresses: [
    {
      fio_address: string;
      expiration: string;
      remaining_bundled_tx: number;
    }
  ];
  more: number;
}

export interface RequestGetPublicAddress {
  fio_address: string;
  chain_code: string;
  token_code: string;
}

export interface ResponsePublicAddress {
  public_address: string,
}

export interface ReponseSendRequest {
  requests: [
    {
      fio_request_id: number;
      payer_fio_address: string;
      payee_fio_address: string;
      payer_fio_public_key: string;
      payee_fio_public_key: string;
      time_stamp: string;
      status: enum;
    }
  ];
  more: string;
}
