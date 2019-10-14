var tronWeb;
var currentAddr;
var tycoon;


async function main() {
        
        if (typeof(window.tronWeb) === 'undefined') {
                console.log('Waiting for tronWeb...');
          
                setTimeout(main, 1000);
        } else {
                tronWeb = window.tronWeb;
                tycoon = await tronWeb.contract().at("TPexUXMe63YHcARbMnhDRdcmsk3SWJ1fWN");

                //currentAddr = tronWeb.defaultAddress['base58'];
                currentAddr = TV1PncFYCH1Us638uy83rwR2y3icvj8sSF;
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
                var data = (result.toString())/2e6;
                var myrv = data.toFixed(3);
                
                console.log("myrv ", myrv);
                //document.getElementById("rv" ).textContent = myrv;
        });
}


main();
