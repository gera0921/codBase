var aux = 0;
var signo = 0;
var b = 0;
var resultado = 0;

var Calculadora = {
  init: function () {
    this.uno();
    this.dos();
    this.tres();
    this.cuatro();
    this.cinco();
    this.seis();
    this.siete();
    this.ocho();
    this.nueve();
    this.cero();
    this.on();
    this.sign();
    this.dividir();
    this.por();
    this.menos();
    this.mas();
    this.igual();
    this.punto();
    this.raiz();

  },
  uno: function() {
    var uno = document.getElementById('1');

    uno.addEventListener("mousedown", function(){
      this.style.transform="scale(0.9)"
      escribi(1);
    });
    uno.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
  },
  dos: function() {
    var dos = document.getElementById('2');

    dos.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("2");
    });

    dos.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  tres: function() {
    var tres = document.getElementById('3');

    tres.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("3");
    });

    tres.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  cuatro: function() {
    var cuatro = document.getElementById('4');

    cuatro.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("4");
    });

    cuatro.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  cinco: function() {
    var cinco = document.getElementById('5');

    cinco.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("5");
    });

    cinco.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  seis: function() {
    var seis = document.getElementById('6');

    seis.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("6");
    });

    seis.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  siete: function() {
    var siete = document.getElementById('7');

    siete.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("7");
    });

    siete.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  ocho: function() {
    var ocho = document.getElementById('8');

    ocho.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("8");
    });

    ocho.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  nueve: function() {
    var nueve = document.getElementById('9');

    nueve.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("9");
    });

    nueve.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  cero: function() {
    var cero = document.getElementById('0');
    var display = document.getElementById("display")

    cero.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi("0");
    });

    cero.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  on: function() {
    var on = document.getElementById('on');

    on.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    display = document.getElementById("display").innerHTML="0"
    });

    on.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  sign: function() {
    var sign = document.getElementById('sign');
    var display =document.getElementById('display');

    sign.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    display.innerHTML = display.innerHTML * -1;
    });

    sign.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  dividir: function() {
    var dividir = document.getElementById('dividido');
    var display =document.getElementById('display');

    dividir.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    aux = display.innerHTML;
    signo = "/";
    console.log(aux);
    console.log(signo);
    display.innerHTML="";
    });

    dividir.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  por: function() {
    var por = document.getElementById('por');
    var display =document.getElementById('display');

    por.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    aux = display.innerHTML;
    signo = "*";
    console.log(aux);
    console.log(signo);
    display.innerHTML="";
    });

    por.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  menos: function() {
    var menos = document.getElementById('menos');
    var display =document.getElementById('display');

    menos.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    aux = display.innerHTML;
    signo = "-";
    console.log(aux);
    console.log(signo);
    display.innerHTML="";
    });

    menos.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  mas: function() {
    var mas = document.getElementById('mas');
    var display =document.getElementById('display') ;

    mas.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    aux = display.innerHTML;
    signo = "+";
    console.log(aux);
    console.log(signo);
    display.innerHTML="";
    });

    mas.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  punto: function() {
    var punto = document.getElementById('punto');

    punto.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    escribi(".");
    });

    punto.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  raiz: function() {
    var punto = document.getElementById('raiz');

    punto.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
    });

    punto.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  },
  igual: function() {
    var igual = document.getElementById('igual');
    var display = document.getElementById("display");

    igual.addEventListener('mousedown', function() {
    this.style.transform="scale(0.9)"
     if(signo == "+"){
          b = display.innerHTML;
          console.log(b);
          resultado = parseFloat(aux) + parseFloat(b);
          console.log(resultado);
        display.innerHTML = resultado;
        signo="+=";
      }else if (signo == "+=") {
        b = b;
        console.log(b);
        aux = resultado;
        resultado = 0;
        resultado = parseFloat(aux) + parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="+=";
      }else if (signo == "-") {
        b = display.innerHTML;
        console.log(b);
        resultado = parseFloat(aux) - parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="-=";
      }else if (signo == "-=") {
        b = b;
        console.log(b);
        aux = resultado;
        resultado = 0;
        resultado = parseFloat(aux) - parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="-=";
      }else if (signo == "*") {
        b = display.innerHTML;
        console.log(b);
        resultado = parseFloat(aux) * parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="*=";
      }else if (signo == "*=") {
        b = b;
        console.log(b);
        aux = resultado;
        resultado = 0;
        resultado = parseFloat(aux) * parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="*=";
      }else if (signo == "/") {
        b = display.innerHTML;
        console.log(b);
        resultado = parseFloat(aux) / parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="/=";
      }else if (signo == "/=") {
        b = b;
        console.log(b);
        aux = resultado;
        resultado = 0;
        resultado = parseFloat(aux) / parseFloat(b);
        console.log(resultado);
        display.innerHTML = resultado;
        signo="/=";
      }
    });

    igual.addEventListener('mouseup', function() {
    this.style.transform="scale(1)"
    });
  }
}
function escribi(dato) {
  var display = document.getElementById('display');
  if(display.innerHTML == "0"){
    display.innerHTML = dato;
  }else if (dato==".") {
    if(display.innerHTML.indexOf(".")==-1){
      display.innerHTML += dato;
    }
  }else if(display.innerHTML.length != 8){
      display.innerHTML += dato;
  }
}
/*function suma(dato,operacion){
  var x = dato;
  var y = operacion
}*/
Calculadora.init();
