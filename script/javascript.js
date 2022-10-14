// let a = "General Info";

// function genInfo() {
//     document.getElementById("demo").innerHTML = a;
// }



let a = "SHIPMENT STANDARD SHIPPING ON DOMESTIC ORDERS - PLEASE ALLOW 2-3 BUSINESS DAYS FOR YOUR ORDER TO PROCESS AND 3-5 DAYS TO SHIP.CHANGING SHIPPING ADDRESS SHIPPING ADDRESSES CANNOT BE CHANGED. WE WILL ONLY SHIP TO THE ADDRESS ENTERED WHEN THE ORDER WAS ORIGINALLY PLACED."
let b = "WHAT ARE THE TERMS AND CONDITIONS? LAST UPDATED: JUNE 29, 2021 \nWELCOME TO WWW.YEEZYSUPPLY.COM (WEB SITE)."
let c = "THIS POLICY DESCRIBES THE INFORMATION WE COLLECT AND HOW WE USE AND DISCLOSE IT. BY VISITING OUR WEBSITE OR USING OUR SERVICES, YOU ARE ACCEPTING THE PRACTICES DESCRIBED IN THIS POLICY. IF YOU DO NOT AGREE TO THE TERMS"


function myFunction1 (num) {
    alert(num +".   "+ a);
}

function myFunction3 (num) {
    alert(num+". " + c);
}
function myFunction4 (num) {
    alert(num+". " + b);
}

function buttonA (button) {
    var x = button.id;
    switch (x) {
        case '1':
            myFunction1(x);
            break;
        case '2':
            myFunction2(x);
            break;
        case '3':
            myFunction3(x);
            break;
        case '4':
            myFunction4(x);
            break;
        default:
            return false;
    }
}

btnBack.addEventListener('click', () =>{
    window.history.back();

});

function search_sneaker() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('sneaker');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function darkMode(){
    var element = document.body;
    element.classList.toggle("darkMode");
}

// LAST UPDATED: JUNE 29, 2021 WELCOME TO WWW.YEEZYSUPPLY.COM (WEB SITE).\n
// THIS WEB SITE IS OWNED BY YEEZY APPAREL LLC AND OPERATED BY ADIDAS AMERICA, INC. (COMPANY ADIDAS) (COLLECTIVELY WE AND US).\n
// IN ADDITION TO THE CONTENT ON THE WEB SITE, THE WEB SITE PROVIDES YOU WITH VARIOUS SHOPPING, E-COMMERCE AND COMMUNITY SERVICES (“SERVICES”).\n
// PLEASE READ THESE TERMS AND CONDITIONS OF USE (TERMS) CAREFULLY BEFORE USING OUR WEB SITE AND THE SERVICES. \n
// IF YOU CHOOSE TO CONTINUE TO USE OR ACCESS THIS WEB SITE AFTER HAVING THE OPPORTUNITY TO READ THESE TERMS, YOU RECOGNIZE THAT WE HAVE PROVIDED VALUABLE CONSIDERATION BY OFFERING THIS WEB SITE FREE OF CHARGE, \n
// AND IN EXCHANGE FOR THAT VALUABLE CONSIDERATION, YOU AGREE TO THE TERMS HEREOF. IF YOU DO NOT AGREE TO THESE TERMS, PLEASE DO NOT USE THE WEB SITE AND EXIT IMMEDIATELY.
// WE RESERVE THE RIGHT TO MODIFY OR AMEND THE TERMS FROM TIME TO TIME WITHOUT NOTICE.
// YOUR CONTINUED USE OF OUR WEB SITE FOLLOWING THE POSTING OF CHANGES TO THESE TERMS WILL MEAN YOU ACCEPT THOSE CHANGES.
// ADDITIONAL TERMS AND CONDITIONS MAY APPLY TO THE PURCHASE OF PRODUCTS, SUCH AS SHIPPING AND RETURN POLICIES. 
// BY USING THIS WEB SITE, YOU AGREE TO SUCH TERMS AND CONDITIONS, AS WELL AS THESE TERMS AND OUR PRIVACY POLICY (AVAILABLE HERE) (COLLECTIVELY, THE AGREEMENT).
// THESE TERMS INCLUDE AN AGREEMENT TO SUBMIT CLAIMS EXCLUSIVELY TO INDIVIDUAL (NON-CLASS) ARBITRATION. SEE BELOW.