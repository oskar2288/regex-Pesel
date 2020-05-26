import $$ from 'f777';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'My App2', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },

    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function ()
 {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



$$(document).on('page:init', '.page[data-name="moja"]', function (e) {


$$('input[type="text"]').on('keyup change', function (e){ 
 var start = document.getElementById("pesel")
    start.addEventListener('keyup', function()
    {
        sprawdzpesel(start.value)
    })
    function sprawdzpesel(pesel)
    {
        var wzor = [9,7,3,1,9,7,3,1,9,7];
        var ostatnia = 0;
 
        for (var i=0; i<10; i++)
        {
            ostatnia += wzor[i] * pesel.charAt(i);
        }
        ostatnia %= 10;
        var sprawdzostatnia = pesel.charAt(10);
        var punktyX = document.getElementById("punkty")
        var punkty =0;
        if (pesel.match(/^[0-9]{4}[0-3]{1}[0-9]{1}/))
        {
            punkty +=1
        }  
        if (pesel.match(/[0-9]{4}/))
        {
            punkty +=0
        }
        if (ostatnia == sprawdzostatnia) {
            punkty +=1
        }        
        if (pesel.length ==11)
        {
            punkty +=1
        }
        if (pesel.match(/[a-zA-Z]/))
        {
            punkty -=10
        }
        if(punkty==1)
            {
            document.getElementById("myTable").style.backgroundColor="red";
            }
        if(punkty==2)
            {
            document.getElementById("myTable1").style.backgroundColor="orange";
            }
        if(punkty==3)
            {
            document.getElementById("myTable2").style.backgroundColor="green";
            }
    };            
                });
                
})


$$(document).on('page:init', '.page[data-name="moja"]', function(e) {
 
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("imie").value;
var patt = new RegExp("[A-Z]{1}[a-z]+");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("nazwisko").value;
var patt = new RegExp("[A-Z]{1}[a-z]+");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("kod").value;
var patt = new RegExp("[0-9]{2}-[0-9]{3}");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("miasto").value;
var patt = new RegExp("[A-Z]{1}[a-z]+");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("email").value;
var patt = new RegExp("[a-z]+@[a-z]+\.pl");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    $$('input[type="text"]').on('keyup change', () => {
        var tabelka = document.getElementById("myTable").value;
       var str = document.getElementById("telefon").value;
var patt = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{3}");
var res = patt.test(str);
      
        if(res==true)
            {
     document.getElementById("myTable").style.backgroundColor="green";
            }
        else
        {
          document.getElementById("myTable").style.backgroundColor="red";
        }
});
    
})

