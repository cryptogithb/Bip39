const bip39 = require('bip39')

const entropy = '30d1bd7478be8ec6cc094012bd0b669668ff2d8127e33e279fc8917d1d425ab5'
const mnemonic = await bip39.entropyToMnemonic(entropy)
console.log(mnemonic) // cotton mistake fringe vapor trophy gloom coral chimney bargain tribe super coast morning nothing afraid wise dilemma diagram vendor carry spike patrol hello physical