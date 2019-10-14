var tronWeb;
var currentAddr;

tronWeb = window.tronWeb;
tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");
currentAddr = tronWeb.defaultAddress['base58'];
