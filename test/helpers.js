export const ETHER_ADDRESS = '0x0000000000000000000000000000000000000000'

export const EVM_REVERT = 'VM Exception while processing transaction: revert'

export const ether = (n) => {
  var res = new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  )
  return res;
}

// Same as ether
export const tokens = (n) => ether(n)
