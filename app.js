


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
        }, Math.floor(Math.random() * 3000));


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
            let randomClicks = Math.floor(Math.random() * 3);


            let aihtml = $("#ai").html()

            setTimeout(() => {
                $("#ai").html(" ")
                $("#ai").addClass("spinner");
            }, Math.floor(Math.random() * 1000) + 500);
            setTimeout(() => {
                $("#ai").html(aihtml)
                $("#ai").removeClass("spinner")
            }, Math.floor(Math.random() * 2000) + 2000);

            let stopme = setInterval(() => {
                console.log("randomClicks = " + randomClicks)
                console.log(i)

                if (i >= randomClicks) {
                    clearInterval(stopme);
                    myif();
                } else {

                    i++;



                    console.log("tempai = " + tempai)
                    let num = Math.floor(Math.random() * 99);
                    console.log("num = " + num)
                    tempai += num;

                    console.log("tempai + = " + tempai)
                    if (tempai > 100) {
                        console.log("ai = " + ai)
                        ai = tempai
                        balance += ai;
                        console.log("ai=temp = " + ai)



                        $("#bln").html(" ")
                        $("#bln").addClass("spinner");
                        setTimeout(() => {
                            $("#bln").html("My balance: $" + balance);
                            $("#bln").removeClass("spinner");
                        }, 5000);

                        let aihtml = $("#ai").html()

                        setTimeout(() => {
                            $("#ai").html(" ")
                            $("#ai").addClass("spinner");
                        }, Math.floor(Math.random() * 1000) + 500);
                        setTimeout(() => {
                            $("#ai").html(aihtml + " +   $" + num)
                            $("#ai").removeClass("spinner")
                        }, Math.floor(Math.random() * 1000) + 2000);
                        clearInterval(stopme);
                    }
                    else {
                        ai = tempai

                        let aihtml = $("#ai").html()

                        setTimeout(() => {
                            $("#ai").html(" ")
                            $("#ai").addClass("spinner");
                        }, Math.floor(Math.random() * 1000) + 500);
                        setTimeout(() => {
                            $("#ai").html(aihtml + " +   $" + num)
                            $("#ai").removeClass("spinner")
                        }, Math.floor(Math.random() * 1000) + 2000);



                    }

                }





            }, 4000);







        } else {
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
        console.log("my num = " + num)
        console.log("my tempme = " + tempme)
        tempme += num
        if (tempme > 100) {
            if ($("#ai").hasClass("spinner")) {
                $("#ai").html("$" + tempai)
                $("#ai").removeClass("spinner");
            }
            $("#me").html($("#me").html() + " +   $" + num);
            balance -= tempme;
            $("#bln").html("My balance: $" + balance)
        }
        else {
            $("#me").html($("#me").html() + " +   $" + num);
        }


    });






});