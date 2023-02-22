

let form=document.getElementById('form');

// let lineA = 380, lineB = 380, lineC = 380;
let containerHeight = 400, containerWidth = 400;
let height=200, width=200;
let h=20 ,w=30;

function Draw() {
    var x=60;
    var y=containerHeight - 60;
    const s=document.getElementById('svg_container');
    var lineA = Number(document.getElementById('lineA').value);
    var angleA=Number(document.getElementById('AngleA').value);
    //(x2,y2)=(x1 + l.cos(a),y1 + l.sin(a))

    var lineAX=x + lineA * (Math.cos(angleA*(3.14/180)));
    var lineAY=y + lineA * (Math.sin(angleA*(3.14/180)));
    //first line 
    var firstLine=`<line x1="${x}" y1="${y}" x2="${lineAX}" y2="${lineAY}" />`
    console.log(lineA * (Math.cos(angleA*(3.14/180))));
    console.log(lineAY);


    var lineB = Number(document.getElementById('lineB').value);
    var angleB=-Number(document.getElementById('AngleB').value);
    console.log('value of B' +lineB)
    console.log('value of angle b'+angleB)

    var lineBX=x + lineB * (Math.cos(angleB*(3.14/180)));
    var lineBY=y + lineB * (Math.sin(angleB*(3.14/180)));


    //line B
    var secondLine=`<line x1="${x}" y1="${y}" x2="${lineBX}" y2="${lineBY}"  style="animation-delay:3s;" />`

    console.log("secondLine",secondLine)

    //line c

    var lineC =Number(document.getElementById('lineC').value);
    var angleC=Number(document.getElementById('AngleC').value);

    var lineCX=lineBX+lineC*(Math.cos(angleC*(3.14/180)));
    var lineCY=lineBY + lineC * (Math.sin(angleC*(3.14/180)));

    var thirdLine=`<line x1="${lineBX}" y1="${lineBY}" x2="${lineCX}" y2="${lineCY}"  style="animation-delay:5s;"  />`

    console.log("third line"+thirdLine);



    //line D





    var fourthLine=`<line x1="${lineCX}" y1="${lineCY}" x2="${lineAX}" y2="${lineAY}" style="animation-delay:7s;" />`

    console.log("fourth line"+fourthLine);





    
    s.innerHTML=firstLine + secondLine + thirdLine + fourthLine;


}