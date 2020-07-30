const contractAddress = 'TATurv1eaoYes3ruLS8yRDJnCBc7DnBpbp'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;