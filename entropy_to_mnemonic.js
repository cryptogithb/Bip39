const bip39 = require('bip39')

const entropy = '1808d35318ac7cb98b69ff9779b699d6a631f15e0b353ac89b7c4020774832ed'
const mnemonic = bip39.entropyToMnemonic(entropy)
console.log(mnemonic) // cotton mistake fringe vapor trophy gloom coral chimney bargain tribe super coast morning nothing afraid wise dilemma diagram vendor carry spike patrol hello physical
