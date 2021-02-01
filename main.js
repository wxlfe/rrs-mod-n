const inputBox = $("input-box");
let mod = inputBox.val();
let crs = [];
let rrs = [];

$(document).ready(function(){
    $("#input-box").on("input",function(){
        mod = $(this).val();
        if(mod > 0 || mod === ""){
            $("#crs-output").text(constructCRS(mod));
            $("#rrs-output").text(constructRRS(mod));
        } else {
            alert("Only integers greater than 1 are permitted");
            $(this).val('');
        }
    })
})

function gcd(a, b){
    let c;
    while(b !== 0){
        c = a;
        a = b;
        b = c % b;
    }
    return a;
}

function constructCRS(mod){
    crs = [];
    for(i = 1; i < mod; i++){
        crs.push(i);
    }
    return "{" + crs.toString() + "}";
}

function constructRRS(mod){
    rrs = [];
    for(j = 0; j < crs.length; j++){
        if(gcd(mod, crs[j]) === 1){
            rrs.push(crs[j]);
        }
    }
    return "{" + rrs.toString() + "}";
}