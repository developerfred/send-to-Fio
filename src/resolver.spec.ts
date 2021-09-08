// resolver.spec.ts
import { getFioAddress, getPublicAddress } from "./resolver";
import { ResponseGetAllPublicAddress } from './interfaces';

// constants

const fio_address = "codingsh@fiotestnet";
const public_address = "FIO6WG7V1pkxqxGARb7AQs1ZSwCQwTTWTVdj91SQ2e84gd7nyQTGr";


test("getFioAddress(public_key)", () => {
  return getFioAddress(public_address).then((data) => {
    expect(data.fio_addresses[0].fio_address).toBe(fio_address);
  });
});

test("getFuseAddress(fio_address)",()=>{
    return getPublicAddress(fio_address).then((data) => {
        expect(data.public_address).toBe(public_address);
      });

});