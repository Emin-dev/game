


$(document).ready(function () {

    Howler.volume(10);

    // var sound = new Howl({
    //     src: ['i.mp3'],
    //     autoplay: true,
    //     loop: true
    // });

    // sound.play();



    var btnmp3 = new Howl({
        src: ['btn.wav']
    });
    var pulGeldimp3 = new Howl({
        src: ['pulGeldi.wav']
    });
    var pulGetdiimp3 = new Howl({
        src: ['pulGetdii.wav']
    });
    var hmmmmp3 = new Howl({
        src: ['hmmm.mp3']
    });
    var btnOlmazmp3 = new Howl({
        src: ['btnOlmaz.wav']
    });





    let runYes = true;
    let addYes = false;
    let openYes = false;




    let me = 0;
    let ai = 0;
    let balance = 1000;
    let tempme = me;
    let tempai = ai;


    $("#run").click(function (e) {
        e.preventDefault();
        if (runYes) {
            btnmp3.play();
            runYes = false

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
                btnmp3.play();
                $("#me").html("$" + me);
                $("#me").removeClass("spinner");
                openYes = true
                addYes = true
            }, 4000);
        }
        else {
            btnOlmazmp3.play();
        }



    });


    $("#open").click(function (e) {
        e.preventDefault();
        if (openYes) {
            addYes = false
            btnmp3.play();

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
                    hmmmmp3.play();
                    $("#ai").html(" ")
                    $("#ai").addClass("spinner");
                }, Math.floor(Math.random() * 500) + 500);
                setTimeout(() => {
                    hmmmmp3.stop();
                    $("#ai").html(aihtml)
                    $("#ai").removeClass("spinner")
                }, Math.floor(Math.random() * 1500) + 2000);

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
                                pulGeldimp3.play();
                                $("#bln").html("My balance: $" + balance);
                                openYes = false
                                addYes = false
                                runYes = true
                                $("#bln").removeClass("spinner");
                            }, 3900);

                            let aihtml = $("#ai").html()

                            setTimeout(() => {
                                hmmmmp3.play();
                                $("#ai").html(" ")
                                $("#ai").addClass("spinner");
                            }, Math.floor(Math.random() * 500) + 500);
                            setTimeout(() => {
                                hmmmmp3.stop();
                                $("#ai").html(aihtml + " +   $" + num)
                                $("#ai").removeClass("spinner")
                            }, Math.floor(Math.random() * 900) + 2000);
                            clearInterval(stopme);
                        }
                        else {
                            ai = tempai

                            let aihtml = $("#ai").html()

                            setTimeout(() => {
                                hmmmmp3.play();
                                $("#ai").html(" ")
                                $("#ai").addClass("spinner");
                            }, Math.floor(Math.random() * 500) + 500);
                            setTimeout(() => {
                                hmmmmp3.stop();
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
                    $("#bln").html(" ")
                    $("#bln").addClass("spinner");
                    setTimeout(() => {
                        pulGetdiimp3.play();
                        $("#bln").html("My balance: $" + balance);
                        openYes = false
                        addYes = false
                        runYes = true
                        $("#bln").removeClass("spinner");
                    }, Math.floor(Math.random() * 1000) + 1000);
                }
                if (tempme > tempai) {
                    balance += ai;
                    $("#bln").html(" ")
                    $("#bln").addClass("spinner");
                    setTimeout(() => {
                        pulGeldimp3.play();
                        $("#bln").html("My balance: $" + balance);
                        openYes = false
                        addYes = false
                        runYes = true
                        $("#bln").removeClass("spinner");
                    }, Math.floor(Math.random() * 1000) + 1000);
                }

            }

        }
        else {
            btnOlmazmp3.play();
        }


    });



    $("#add").click(function (e) {
        e.preventDefault();
        if (addYes) {

            btnmp3.play();

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
                $("#bln").html(" ")
                $("#bln").addClass("spinner");
                setTimeout(() => {
                    pulGetdiimp3.play();
                    $("#bln").html("My balance: $" + balance);
                    openYes = false
                    addYes = false
                    runYes = true
                    $("#bln").removeClass("spinner");
                }, Math.floor(Math.random() * 1000) + 1000);
            }
            else {
                $("#me").html($("#me").html() + " +   $" + num);
            }

        }
        else {
            btnOlmazmp3.play();
        }



    });






});