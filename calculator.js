//var test = math.divide(math.multiply(30, math.PI), 180);

function sin() {
    var txt1 = document.getElementById("in").value
    var txt2 = document.getElementById("out").value
    txt1.toString()
    txt2.toString()
    lngt1 = txt1.length
    lngt2 = txt2.length
    newTxt1 = txt1.slice(lngt1-1, lngt1)
    newTxt2 = txt2.slice(lngt2-1, lngt2)
    if (newTxt1 == "") {
        document.getElementById('in').value+='sin('; document.getElementById('out').value+='Math.sin(Math.PI/180*'
    }
    else{
        document.getElementById('in').value+='sin('; document.getElementById('out').value+='*Math.sin(Math.PI/180*'
    }
    
}

document.getElementById("sin").onclick = sin

function cos() {
    var txt1 = document.getElementById("in").value
    var txt2 = document.getElementById("out").value
    txt1.toString()
    txt2.toString()
    lngt1 = txt1.length
    lngt2 = txt2.length
    newTxt1 = txt1.slice(lngt1-1, lngt1)
    newTxt2 = txt2.slice(lngt2-1, lngt2)
    if (newTxt1 == "") {
        document.getElementById('in').value+='cos('; document.getElementById('out').value+='Math.cos(Math.PI/180*'
    }
    else{
        document.getElementById('in').value+='cos('; document.getElementById('out').value+='*Math.cos(Math.PI/180*'
    }
    
}

document.getElementById("cos").onclick = cos

function tan() {
    var txt1 = document.getElementById("in").value
    var txt2 = document.getElementById("out").value
    txt1.toString()
    txt2.toString()
    lngt1 = txt1.length
    lngt2 = txt2.length
    newTxt1 = txt1.slice(lngt1-1, lngt1)
    newTxt2 = txt2.slice(lngt2-1, lngt2)
    if (newTxt1 == "") {
        document.getElementById('in').value+='tan('; document.getElementById('out').value+='Math.tan(Math.PI/180*'
    }
    else{
        document.getElementById('in').value+='tan('; document.getElementById('out').value+='*Math.tan(Math.PI/180*'
    }
    
}

document.getElementById("tan").onclick = tan

    function equal_to() {
            var txt1 = document.getElementById("in").value
            var txt2 = document.getElementById("out").value
            txt1.toString()
            txt2.toString()
            lngt1 = txt1.length
            lngt2 = txt2.length
            newTxt1 = txt1.slice(lngt1-1, lngt1)
            newTxt2 = txt2.slice(lngt2-1, lngt2)
        if ( txt1.includes("--") || txt1.includes("++") || txt1.includes("××") || txt1.includes("÷÷") || txt1.includes("^^")) {
            alert("Maths Error")
        }
        else {
                
            if ((txt1.includes("sin(") || txt1.includes("cos(") || txt1.includes("tan(")) && newTxt1 != ")" && newTxt2 != ")") {
                document.getElementById("out").value+=")"
            }
                var text = document.getElementById("out").value
                var answer = text.toString()
            if(answer.length == 0){}
            else{
                var ans = eval(answer)
                document.getElementById("in").value = ans
                document.getElementById("out").value = ans
                localStorage.setItem("ans", ans);
            }
        }
    }

        document.getElementById("eval").onclick = equal_to

    function del() {
            var red= document.getElementById("in").value
            var re= document.getElementById("out").value
            var shown = red.toString()
            var hidden = re.toString()
            var length_1 = shown.length
            var length_2 = hidden.length
            var amntSlice = shown.slice(length_1-2, length_1)
            var amnt_Slice = shown.slice(length_1-1, length_1)
            if ((amntSlice == "n(" || amntSlice == "s(" || amntSlice == "n(") && length_1 == 4) {
                shown = shown.slice(0, length_1-4)
                hidden = hidden.slice(0, length_2-21)
            }
            else if ((amntSlice == "n(" || amntSlice == "s(" || amntSlice == "n(") && length_1 > 4) {
                shown = shown.slice(0, length_1-4)
                hidden = hidden.slice(0, length_2-22)
            }
            else if (amnt_Slice == "^") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-2)
            }
            else if ((amntSlice != "n(" || amntSlice != "s(" || amntSlice != "n(") && amnt_Slice == "(") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == ")") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == ".") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == "+") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == "-") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == "×") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == "÷") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }
            else if ( amnt_Slice == "1" || amnt_Slice == "2" || amnt_Slice == "3" || amnt_Slice == "4" || amnt_Slice == "5" || amnt_Slice == "6" || amnt_Slice == "7" || amnt_Slice == "8" || amnt_Slice == "9" || amnt_Slice == "0") {
                shown = shown.slice(0, length_1-1)
                hidden = hidden.slice(0, length_2-1)
            }

            document.getElementById("in").value = shown 
            document.getElementById("out").value = hidden
    }

        document.getElementById("del").onclick=del

    function clear() {
        var red= document.getElementById("in").value
            var re= document.getElementById("out").value
            var shown = red.toString()
            var hidden = re.toString()
            shown = shown.slice(0, 0)
            hidden = hidden.slice(0, 0)

            document.getElementById("in").value = shown 
            document.getElementById("out").value = hidden
    }

    document.getElementById("clear").onclick=clear

    function crnt_ans() {
        var crntAns = localStorage.getItem("ans");
        document.getElementById("in").value = crntAns
        document.getElementById("out").value = crntAns
    }

    document.getElementById("ans").onclick = crnt_ans

    document.addEventListener("keypress", (e)=>{
        if (e.key === "Enter") {
            equal_to();
        }
        if (e.key === "1") {
            document.getElementById('in').value+='1'; document.getElementById('out').value+='1'
        }
        if (e.key === "2") {
            document.getElementById('in').value+='2'; document.getElementById('out').value+='2'
        }
        if (e.key === "3") {
            document.getElementById('in').value+='3'; document.getElementById('out').value+='3'
        }
        if (e.key === "4") {
            document.getElementById('in').value+='4'; document.getElementById('out').value+='4'
        }
        if (e.key === "5") {
            document.getElementById('in').value+='5'; document.getElementById('out').value+='5'
        }
        if (e.key === "6") {
            document.getElementById('in').value+='6'; document.getElementById('out').value+='6'
        }
        if (e.key === "7") {
            document.getElementById('in').value+='7'; document.getElementById('out').value+='7'
        }
        if (e.key === "8") {
            document.getElementById('in').value+='8'; document.getElementById('out').value+='8'
        }
        if (e.key === "9") {
            document.getElementById('in').value+='9'; document.getElementById('out').value+='9'
        }
        if (e.key === "0") {
            document.getElementById('in').value+='0'; document.getElementById('out').value+='0'
        }
    })

