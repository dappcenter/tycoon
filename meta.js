var tronWeb;
var currentAddr;
var tycoon;


window.onload = function() {
          if (!window.tronWeb) {
                    const HttpProvider = TronWeb.providers.HttpProvider;
                    const fullNode = new HttpProvider('https://api.trongrid.io');
                    const solidityNode = new HttpProvider('https://api.trongrid.io');
                    const eventServer = 'https://api.trongrid.io/';

                    const tronWeb = new TronWeb(
                        fullNode,
                        solidityNode,
                        eventServer,
                    );

                window.tronWeb = tronWeb;
          }
          
          main();
};

async function main() {
        tronWeb = window.tronWeb;
                tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");

                currentAddr = tronWeb.defaultAddress['base58'];
                console.log(currentAddr);
                //getRvFromUnit(1);
                //getAllMyRv();
                
                var txs = tronWeb.trx.getTransactionsToAddress("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN", 30, 0); 
                console.log(txs);
                
                
                /*setTimeout(function() {}, 2000);
                setInterval(function() {
                        mainloop();
                }, 2000);*/
}

function nFormatter(num) {
    isNegative = false
    if (num < 0) {
        isNegative = true
    }
    num = Math.abs(num)
    if (num >= 1000000000) {
        formattedNumber = (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    } else if (num >= 1000000) {
        formattedNumber = (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1000) {
        formattedNumber = (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else {
        formattedNumber = num;
    }
    if (isNegative) {
        formattedNumber = '-' + formattedNumber
    }
    return formattedNumber;
}

function getRvFromUnit(unit) {
        tycoon.myrv(unit).call().then(result => {
                var data = (result.toString())/2e6;
                var myrv = data.toFixed(3);
                
                console.log("myrv ", myrv);
                //document.getElementById("rv" ).textContent = myrv;
        });
}

function getAllMyRv() {
        tycoon.AllmyRv().call().then(result => {
                console.log("User", result);
                var all = result.toString();

                var AllmyRv = (all / 2e6);
                AllmyRv = nFormatter(AllmyRv);
                console.log(AllmyRv);
        });
}
