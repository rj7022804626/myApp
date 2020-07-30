const contractAddress = 'THPpnYs4NfquDKZq5F3JaLQwm3BZYegGrN'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;