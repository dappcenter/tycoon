var tronWeb;
var currentAddr;

tronWeb = window.tronWeb;
tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");
currentAddr = tronWeb.defaultAddress['base58'];

async function main() {

        tronWeb = window.tronWeb;
        wax = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");
         
        currentAddr = tronWeb.defaultAddress['base58'];
  console.log(currentAddr);
}

main();
