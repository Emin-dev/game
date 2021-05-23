


$(document).ready(function () {

    let me = 0;
    let ai = 0;
    let balance = 1000;
    let tempme = me;
    let tempai = ai;
    $("#run").click(function (e) {
        e.preventDefault();
        me = 0;
        ai = 0;

        me = Math.floor(Math.random() * 99) + 1;
        tempme = me;

        ai = Math.floor(Math.random() * 99) + 1;
        tempai = ai;

        $("#ai").html(" ")
        $("#me").html(" ")
        $("#ai").addClass("spinner");
        $("#me").addClass("spinner");
        setTimeout(() => {
            $("#me").html("$" + me);
            $("#me").removeClass("spinner");
        }, 1500);


    });


    $("#open").click(function (e) {
        e.preventDefault();

        if ($("#ai").hasClass("spinner")) {
            $("#ai").html("$" + tempai)
            $("#ai").removeClass("spinner");
        }

        if (tempme == tempai) {
            $("#ai").html("$0")
            $("#me").html("$0")

        }
        if (tempme > tempai) {
            let i = 0;
            let randomClicks =  Math.floor(Math.random() * 3 ) ;
            let stopme = setInterval(() => {
                console.log("randomClicks = " + randomClicks)
                console.log(i)
                
                if (i >= randomClicks) {
                    clearInterval(stopme);
                    myif();
                }else{

                    i++;




                let num = Math.floor(Math.random() * 99);
            tempai += num;


            if (tempai > 100) {
                ai = tempai
                balance += ai;
                $("#bln").html("My balance: $" + balance);
                let aihtml = $("#ai").html()

                setTimeout(() => {
                    $("#ai").html(" ")
                    $("#ai").addClass("spinner");
                }, 1000);
                setTimeout(() => {
                    $("#ai").html(aihtml + " +   $" + num)
                    $("#ai").removeClass("spinner")
                }, 2000);
            }
            else {
                ai = tempai

                let aihtml = $("#ai").html()

                setTimeout(() => {
                    $("#ai").html(" ")
                    $("#ai").addClass("spinner");
                }, 1000);
                setTimeout(() => {
                    $("#ai").html(aihtml + " +   $" + num)
                    $("#ai").removeClass("spinner")
                }, 2000);



            }

                }
                



               
            }, 3300);

            


            


        }else{
            myif();
        }
       function myif() {
           console.log("myif")
        if (tempme < tempai) {
            balance -= tempme;
            $("#bln").html("My balance: $" + balance)
        }
        if (tempme > tempai) {
            balance += ai;
            $("#bln").html("My balance: $" + balance);
        }
           
       }

    });



    $("#add").click(function (e) {
        e.preventDefault();
        let num = Math.floor(Math.random() * 99);
        tempme += num
        if (tempme > 100) {
            $("#me").html($("#me").html() + " +   $" + num);
            balance -= tempme;
            $("#bln").html("My balance: $" + balance)
        }
        else {
            tempme += num
            $("#me").html($("#me").html() + " +   $" + num);
        }


    });






});