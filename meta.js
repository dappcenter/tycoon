var tronWeb;
var currentAddr;
var waiting = 0;


async function main() {
        
        if (typeof(window.tronWeb) === 'undefined') {
                console.log('Waiting for tronWeb...');
                waiting += 1;
          
                setTimeout(main, 1000);
        } else {
                tronWeb = window.tronWeb;
                tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");

                currentAddr = tronWeb.defaultAddress['base58'];
                console.log(currentAddr);
                getRvFromUnit(1);
                
                /*setTimeout(function() {}, 2000);
                setInterval(function() {
                        mainloop();
                }, 2000);*/
        }
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
