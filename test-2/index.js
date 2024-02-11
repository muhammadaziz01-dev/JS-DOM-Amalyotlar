let a = "Hello World";

function closer() {
    //let a = "GoodBay World"
    console.log(a);
    
    function test() {
        //let a ="GOOD";
        console.log(a);
    }
    test()
}

closer();