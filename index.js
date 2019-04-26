// XsChat 8 Client
// (c) speedyplane2247 2019
// Version: 8.1.3
var $xsui = new Object()
var $enc = new Object()
var $xs = new Object()
$xs.version = "XsChat 8.1.3\nEngine: 9.0.0\nUI: 2.0\nKeychain: 1.3.1"
$xs.cver = "813"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if (xhttp.responseText.indexOf($xs.cver) == -1) {
            alert("Notice: You are using an unsupported version of XsChat. Please upgrade. If you need help upgrading, message me for the latest version!")
        }
    }
};
xhttp.open("GET", "https://raw.githubusercontent.com/speedyplane2247/speedyplane2247.github.io/master/xs/support.x", true);
xhttp.send();


$xs.x800 = new Object()
$xs.x800.encrypt = function (data, channel) {
    $enc.encs1 = split("###\nBEGIN ENCRYPTED HEADER\nClient=8.1.3\nLegacy=TRUE\nEND ENCRYPTED HEADER\n###\nBEGIN ENCRYPTED MESSAGE\n###\n" + data + "\n###\nEND ENCRYPTED MESSAGE\n##LEGACY\n#XSCHAT8COMPATMODE=TRUE\n###\nEND FULL TEXT\npass***!="+channel)
    $enc.encs20 = btoa($enc.encs1)
    $enc.encs21 = btoa($enc.encs20)
    $enc.encs2 = btoa($enc.encs21)

    //
    alert($enc.encs2)
}
$xs.x800.decrypt = function (data, channel) {
    try {
        $enc.dencs2 = atob(data)
        $enc.dencs10 = atob($enc.dencs2)
        $enc.dencs11 = atob($enc.dencs10)
        
        $enc.dencs4 = join($enc.dencs11)
        if ($enc.dencs4.indexOf("pass***!="+channel) == -1) {
        alert("Invalid Password!")
        } else {
        $enc.dencs5 = $enc.dencs4.split("pass***!=")
        alert($enc.dencs5[0 ])
        }
    } catch (e) {
        alert("An error occured while decrypting. This may be because you are missing a letter, the message contains invalid characters, or a programming error. See the console for details.")
        Console.warn("XsChat ran into error: " + e)
    }
}

$xs.x711 = new Object()
$xs.x711.encrypt = function(data) {
    try {
        $enc.encs1 = split("###\nBEGIN ENCRYPTED HEADER\nClient=8.1.3\nLegacy=TRUE\nEND ENCRYPTED HEADER\n###\n###\nBEGIN ENCRYPTED MESSAGE\n" + data + "\n###\nEND ENCRYPTED MESSAGE\n##LEGACY\n#XSCHAT8COMPATMODE=TRUE\n###\nEND FULL TEXT")
        $enc.encs2 = btoa($enc.encs1)
        alert($enc.encs2)
        // $enc.dencs2 = atob($enc.encs2)
        // $enc.dencs4 = join($enc.dencs2)

    } catch (e) {
        alert("An error occured while encrypting. This may be because of invalid characters in your statement. See the console for details.")
        Console.warn("XsChat ran into error: " + e)
    }
}
$xs.x711.decrypt = function(data) {
    try {
        $enc.dencs2 = atob(data)
        $enc.dencs4 = join($enc.dencs2)
        alert($enc.dencs4)
    } catch (e) {
        alert("An error occured while decrypting. This may be because you are missing a letter, the message contains invalid characters, or a programming error. See the console for details.")
        Console.warn("XsChat ran into error: " + e)
    }
}
$xs.x712 = new Object();
$xs.x712.encrypt = function(data) {
    try {
        $enc.encs1 = split("###\nBEGIN ENCRYPTED HEADER\nClient=8.0.0\nLegacy=TRUE\nEND ENCRYPTED HEADER\n###\n###\nBEGIN ENCRYPTED MESSAGE\n" + data + "\n###\nEND ENCRYPTED MESSAGE\n##LEGACY\n###\n#XSCHAT8COMPATMODE=TRUE\nEND FULL TEXT")
        $enc.encs2 = btoa($enc.encs1)
        $enc.encs3 = btoa($enc.encs2)

        return $enc.encs3
        // $enc.dencs2 = atob($enc.encs2)
        //  $enc.dencs4 = join($enc.dencs2)

    } catch (e) {
        alert("An error occured while encrypting. This may be because of invalid characters in your statement. See the console for details.")
        Console.warn("XsChat ran into error: " + e)
    }
}
$xs.x712.decrypt = function(data) {
    try {
        $enc.dencs3 = atob(data)
        $enc.dencs2 = atob($enc.dencs3)
        $enc.dencs4 = join($enc.dencs2)
        return $enc.dencs4
    } catch (e) {
        alert("An error occured while decrypting. This may be because you are missing a letter, the message contains invalid characters, or a programming error. See the console for details.")
        alert("XsChat ran into error: " + e)
    }
}
$xs.msg = "ExampleData"
$xs.data = "ExampleData"
$xs.chan = "ExampleData"
function init() {
    $xs.msg = document.getElementById("xs_datainput").value
    $xs.data = document.getElementById("xsx").value
    $xs.ver = "x800"
    $xs.eord = "x"
    $xs.chan = document.getElementById("xs8_chan").value
    $xs.channel = $xs.chan // improve later
}

function e() {
    $xs.eord = "e"
}

function d() {
    $xs.eord = "d"
}

function erun() {
    if ($xs.data == "x711") {
        $xs.ver = "x711"
        //if ($xs.eord == "e") {
        $xs.x711.encrypt($xs.msg)

    }
    if ($xs.data == "x712") {
        $xs.ver = "x712"
        // if ($xs.eord == "e") {
      $xs.x712.encrypt($xs.msg)
        //  }
        //  if ($xs.eord == "d") {
        //     alert($xs.x712.decrypt($xs.msg))
        //  }

    }
    if ($xs.data == "x800") {
        $xs.ver = "x800"
        // if ($xs.eord == "e") {
        $xs.x800.encrypt($xs.msg, $xs.channel)
        //  }
        //  if ($xs.eord == "d") {
        //     alert($xs.x712.decrypt($xs.msg))
        //  }

    }
    
}

function drun() {
    if ($xs.data == "x711") {
        $xs.ver = "x711"
        //if ($xs.eord == "e") {
        $xs.x711.decrypt($xs.msg)

    }
    if ($xs.data == "x712") {
        $xs.ver = "x712"
        // if ($xs.eord == "e") {
        $xs.x712.decrypt($xs.msg)
        //  }
        //  if ($xs.eord == "d") {
        //     alert($xs.x712.decrypt($xs.msg))
        //  }

    }
    if ($xs.data == "x800") {
        $xs.ver = "x800"
        // if ($xs.eord == "e") {
        $xs.x800.decrypt($xs.msg, $xs.channel)
        //  }
        //  if ($xs.eord == "d") {
        //     alert($xs.x712.decrypt($xs.msg))
        //  }

    }
}

const split = (text) => {
    let n = Math.floor(text.length / 2)
    return text.split('').reduce((a, v, i) => {
        a[i % 2 ? (i - 1) / 2 : n + (i / 2)] = v
        return a
    }, []).join('')
}

const join = (text) => {
    let n = Math.floor(text.length / 2)
    return text.split('').reduce((a, v, i) => {
        a[i < n ? (i + 1) * 2 - 1 : (i - n) * 2] = v
        return a
    }, []).join('')
}

const encrypt = (text, n) => {
    if (text == null) {
        return null
    }

    for (let i = 0; i < n; i++) {
        text = split(text)
    }

    return text
}

const decrypt = (text, n) => {
    if (text == null) {
        return null
    }

    for (let i = 0; i < n; i++) {
        text = join(text)
    }
}
var xhttpx = new XMLHttpRequest()
xhttpx.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        if (xhttpx.responseText.indexOf($xs.cver) == -1) {
            alert("You cannot continue using this version of XsChat due to a major vulnerability detected.")
            $xs = null // destroy window
        }
    }
};
xhttpx.open("GET", "https://raw.githubusercontent.com/speedyplane2247/speedyplane2247.github.io/master/xs/supported.x", true);
xhttpx.send();