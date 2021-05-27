


$(document).ready(function () {
    Howler.volume(0.1);
    let btnmp3 = new Howl({
        src: ['btn.wav']
    });
    let pulGeldimp3 = new Howl({
        src: ['pulGeldi.wav']
    });
    let pulGetdiimp3 = new Howl({
        src: ['pulGetdii.wav']
    });
    let hmmmmp3 = new Howl({
        src: ['hmmm.mp3']
    });
    let btnOlmazmp3 = new Howl({
        src: ['btnOlmaz.wav']
    });
    let memp3 = new Howl({
        src: ['me.wav']
    });
    hmmmmp3.volume(1);
    memp3.volume(0.08)
    let runYes = false;
    let addYes = false;
    let openYes = false;
    let me = 0;
    let ai = 0;
    let balance = 1000;
    let tempme = me;
    let tempai = ai;
    let addMe3 = true;
    let addMe3temp = 0;
    $("#bln").html(" ")
    $("#bln").addClass("spinner");
    $("#play").click(function (e) {
        e.preventDefault();
        $(this).css("display", "none")
    });
    setTimeout(() => { checkCookie() }, Math.floor(Math.random() * 1000) + 1000)
    $("#run").click(function (e) {
        e.preventDefault();
        if (runYes) {
            btnmp3.play();
            setTimeout(() => { memp3.play() }, 100)
            runYes = false
            addMe3 = true;
            addMe3temp=0;
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
                memp3.stop();
                $("#me").html("$" + me);
                $("#me").removeClass("spinner");
                openYes = true
                addYes = true
                btnmp3.play();
            }, Math.floor(Math.random() * 3000) + 2000);
        }
        else {
            btnOlmazmp3.play();
        }
    });
    $("#open").click(function (e) {
        e.preventDefault();
        if (openYes) {
            addYes = false
            openYes = false
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
                $("#bln").html(" ")
                $("#bln").addClass("spinner");
                let i = 0;
                let randomClicks = Math.floor(Math.random() * 3);
                let aihtml = $("#ai").html()
                let myram = Math.floor(Math.random() * 10000)
                setTimeout(() => {
                    hmmmmp3.play();
                    $("#ai").html(" ")
                    $("#ai").addClass("spinner");
                }, 500);
                setTimeout(() => {
                    $("#ai").html(aihtml)
                    $("#ai").removeClass("spinner")
                }, myram);
                let stopme = setInterval(() => {
                    if (i >= randomClicks) {
                        clearInterval(stopme);
                        myif();
                    } else {
                        i++;
                        let num = Math.floor(Math.random() * 99);
                        tempai += num;
                        if (tempai > 100) {
                            ai = tempai
                            balance += ai;
                            setCookie("username", balance, 365);

                            setTimeout(() => {
                                pulGeldimp3.play();
                                $("#bln").html("My balance: $" + balance);
                                $("#blnaction").html(`(+${ai})`)
                                setTimeout(()=>{$("#blnaction").html(" ")},3000)
                                openYes = false
                                addYes = false
                                runYes = true
                                $("#bln").removeClass("spinner");
                            }, myram);
                            let aihtml = $("#ai").html()
                            setTimeout(() => {
                                hmmmmp3.play();
                                $("#ai").html(" ")
                                $("#ai").addClass("spinner");
                            }, 500);
                            setTimeout(() => {
                                $("#ai").html(aihtml + " +   $" + num)
                                $("#ai").removeClass("spinner")
                            }, myram);
                            clearInterval(stopme);
                        }
                        else {
                            ai = tempai
                            let aihtml = $("#ai").html()
                            setTimeout(() => {
                                hmmmmp3.play();
                                $("#ai").html(" ")
                                $("#ai").addClass("spinner");
                            }, 500 );
                            
                            setTimeout(() => {
                                $("#ai").html(aihtml + " +   $" + num)
                                $("#ai").removeClass("spinner")
                            }, myram);
                        }
                    }
                }, myram + 1000);
            } else {
                $("#bln").html(" ")
                $("#bln").addClass("spinner");
                myif();
            }
            function myif() {
                if (tempme < tempai) {
                    balance -= tempme;
                    setCookie("username", balance, 365);
                    setTimeout(() => {
                        pulGetdiimp3.play();
                        $("#bln").html("My balance: $" + balance);
                        $("#blnaction").html(`(-${tempme})`)
                        setTimeout(()=>{$("#blnaction").html(" ")},3000)
                        openYes = false
                        addYes = false
                        runYes = true
                        $("#bln").removeClass("spinner");
                    }, 500 );
                }
                if (tempme > tempai) {
                    balance += ai;
                    setCookie("username", balance, 365);
                    setTimeout(() => {
                        pulGeldimp3.play();
                        $("#bln").html("My balance: $" + balance);
                        $("#blnaction").html(`(+${ai})`)
                        setTimeout(()=>{$("#blnaction").html(" ")},3000)
                        openYes = false
                        addYes = false
                        runYes = true
                        $("#bln").removeClass("spinner");
                    }, 500 );
                }
            }
        }
        else {
            btnOlmazmp3.play();
        }
    });
    $("#add").click(function (e) {
        e.preventDefault();
        if (addYes && addMe3) {
            addMe3temp++;
            if (addMe3temp >= 3) {
                addMe3 = false
                addMe3temp=0;
            }
            btnmp3.play();
            let num = Math.floor(Math.random() * 99);
            tempme += num
            if (tempme > 100) {
                if ($("#ai").hasClass("spinner")) {
                    $("#ai").html("$" + tempai)
                    $("#ai").removeClass("spinner");
                }
                $("#me").html($("#me").html() + " +   $" + num);
                balance -= tempme;
                setCookie("username", balance, 365);
                $("#bln").html(" ")
                $("#bln").addClass("spinner");
                setTimeout(() => {
                    pulGetdiimp3.play();
                    $("#bln").html("My balance: $" + balance);
                    $("#blnaction").html(`(-${tempme})`)
                        setTimeout(()=>{$("#blnaction").html(" ")},3000)
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
    $("#reset").click(function (e) {
        e.preventDefault();
        let user = getCookie("username");
        setCookie("username", user, 0);
        btnmp3.play();
        location.reload();
    });
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    function checkCookie() {
        let user = getCookie("username");
        if (user != "") {
            $("#bln").html("My balance: $" + user);
            openYes = false
            addYes = false
            runYes = true
            $("#bln").removeClass("spinner");
        } else {
            user = balance;
            $("#bln").html("My balance: $" + balance);
            openYes = false
            addYes = false
            runYes = true
            $("#bln").removeClass("spinner");
            if (user != "" && user != null) {
                setCookie("username", user, 365);
            }
        }
    }

    console.log('%c Mumber Game', 'color: #ffa889;  font-size: xx-large; text-align: center;')
    console.log('%c By Emin', 'color: #ffa889;  font-size: xx-large; text-align: center;')
});