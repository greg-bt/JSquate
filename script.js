
String.prototype.replaceAt = function (index, replacement, len) {
    return this.substr(0, index) + replacement + this.substr(index + len );
}

function JSquate() {
    console.log(document.getElementsByTagName("equ"));
    for (i = 0; i < document.getElementsByTagName("equ").length; i++) {

        var equ = "<span class='foo'>" + document.getElementsByTagName("equ")[i].innerHTML;

        console.log(equ);


            // Indicies

        while (equ.includes("^{")) {
            for (j = equ.indexOf("^{"); j < equ.length; j++) {
                if (equ[j] == "}") break;
            }
            equ = equ.replaceAt(j, "</sup>", 1);
            equ = equ.replace("^{", "<sup>");
        }

            // Fractions

        while (equ.includes("\\frac{")) {
            for (j = equ.indexOf("\\frac{"); j < equ.length; j++) {
                if (equ[j] == "}") break;
            }
            equ = equ.replaceAt(j, "</span>", 1);

            for (j = equ.indexOf("\\frac{")+6; j < equ.length; j++) {
                if (equ[j] == "{") break;
            }
            equ = equ.replaceAt(j, "<p class='deno'>", 1);

            for (j = equ.indexOf("\\frac{"); j < equ.length; j++) {
                if (equ[j] == "}") break;
            }
            equ = equ.replaceAt(j, "</p></span><span class='foo'>", 1);

            equ = equ.replace("\\frac{", "</span><span class='frac'><span class='neum'>");
        }

            // Roots

        while (equ.includes("\\sqrt{")) {
            for (j = equ.indexOf("\\sqrt{"); j < equ.length; j++) {
                if (equ[j] == "}") break;
            }
            equ = equ.replaceAt(j, "</span>", 1);
            equ = equ.replace("\\sqrt{", "√</span><span class='sqrt'>");
        }

        document.getElementsByTagName("equ")[i].innerHTML = equ + "<sup> </sup></span>";//<sup> </sup>
    }
}