import { Contract } from '@algorandfoundation/tealscript';

// eslint-disable-next-line no-unused-vars
class ARC54 extends Contract {
  /*
   * Sends an inner transaction to opt the contract account into an ASA.
   * Will fail if the contract is already opted in to the asset.
   * The fee for the inner transaction must be covered by the caller.
   *
   * @param asa The ASA to opt in to
   */
  optIntoASA(asa: Asset): void {
    assert(!globals.currentApplicationAddress.hasAsset(asa));

    sendAssetTransfer({
      assetReceiver: globals.currentApplicationAddress,
      xferAsset: asa,
      assetAmount: 0,
      fee: 0,
    });
  }
}
