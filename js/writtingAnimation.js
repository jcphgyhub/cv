

setTimeout(function(){
        $(".element0").typed({
            strings: [" > Hola Mundo !<br><br>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            contentType: 'html'
             // call function after typing is done
        });
    }, 0);

setTimeout(function(){
        $(".element1").css("display", "inherit");
        $(".element1").typed({
            strings: [" > Soy Juan Carlos P&eacute;rez Hern&aacute;ndez :D"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ } // call function after typing is done
        });
    }, 2000);

setTimeout(function(){
        $(".element2").css("display", "inherit");
        $(".element2").typed({
            strings: [" > Desarrollador Java Sr.<br><br>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ dale();} // call function after typing is done
        });

    }, 5000);

setTimeout(function(){
        $(".element3").css("display", "inherit");
        $(".element3").typed({
            strings: [" > Tengo experiencia en :"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){dale(); } // call function after typing is done
        });
    }, 7900);

setTimeout(function(){
        $(".element4").css("display", "inherit");
        $(".element4").typed({
            strings: [" > Desarrollo de software incluyendo el an&aacute;lisis, diseño y desarrollo de aplicaciones basadas en Web y Cliente Servidor.<br><br>"],
            typeSpeed: 30, // typing speed
            backDelay: 750, // pause before backspacing
            loop: false, // loop on or off (true or false)
            loopCount: false, // number of loops, false = infinite
            callback: function(){ dale();} // call function after typing is done
        });
    }, 11000);

    setTimeout(function(){
            $(".element5").css("display", "inherit");
            $(".element5").typed({
                strings: [" > Aprende  mas sobre mi en la secci&oacute;n 'Conoceme' <br><br>"],
                typeSpeed: 10, // typing speed
                backDelay: 750, // pause before backspacing
                loop: false, // loop on or off (true or false)
                loopCount: false, // number of loops, false = infinite
                callback: function(){ } // call function after typing is done
            });
        }, 21200);

        setTimeout(function(){
                $(".element6").css("display", "inherit");
                $(".element6").typed({
                    strings: [" > Gracias por visitarme n.n <br><br>"],
                    typeSpeed: 30, // typing speed
                    backDelay: 750, // pause before backspacing
                    loop: false, // loop on or off (true or false)
                    loopCount: false, // number of loops, false = infinite
                    callback: function(){dale(); } // call function after typing is done
                });
            }, 25200);

            setTimeout(function(){
                    $(".element7").css("display", "inherit");
                    $(".element7").typed({
                        strings: [" <p class='dark-grey' style='font-size:.5em;padding:5px;padding-left:8px;'> 2017/Todos los derechos reservados por &copy; Juan Carlos Perez Hernandez/ Revisar los términos y condiciones de uso <a href='#' style='color:#fff;text-decoration:none;'>aqui</a></p>"],
                        typeSpeed: 30, // typing speed
                        backDelay: 750, // pause before backspacing
                        loop: false, // loop on or off (true or false)
                        loopCount: false, // number of loops, false = infinite
                        callback: function(){dale(); } // call function after typing is done
                    });
                }, 27000);

                $('#sonido').bind('canplay', function() {
                    this.currentTime = 29; // jumps to 29th secs
                });
