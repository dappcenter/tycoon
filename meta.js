var tronWeb;
var currentAddr;


async function main() {

        tronWeb = window.tronWeb;
        tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");
         
        currentAddr = tronWeb.defaultAddress['base58'];
        console.log(currentAddr);
        getRvFromUnit(1);
}

function getRvFromUnit(unit) {
        tycoon.myrv(unit).call().then(result => {
                console.log("myrv", result);
                var data = (result.toString())/2e6;
                var myrv = data.toFixed(3);
                //document.getElementById("rv" ).textContent = myrv;
        });
}


main();
