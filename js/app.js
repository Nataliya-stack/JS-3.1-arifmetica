function calculate() {
            let n1 = parseInt(document.getElementById('num1').value);
            let n2 = parseInt(document.getElementById('num2').value);
            let n3 = parseInt(document.getElementById('num3').value);

            let sum = n1 + n2 + n3;
            let diff = n1 - n2 - n3;
            let prod = n1 * n2 * n3;
            let quot = (n2 !==0 && n3 !== 0) ? (n1 / n2 / n3).toFixed(2) : "Error (no se puede dividir por 0)";

            document.getElementById('sum').innerHTML = `La suma de <span style="color: blue;">${n1}</span> + <span style="color: blue;">${n2}</span> + <span style="color: blue;">${n3}</span> es <span style="color: blue;">${sum}</span>`;
            document.getElementById('diff').innerHTML = `La resta de <span style="color: blue;">${n1}</span> - <span style="color: blue;">${n2}</span> - <span style="color: blue;">${n3}</span> es <span style="color: blue;">${diff}</span>`;
            document.getElementById('prod').innerHTML = `La multiplicación de <span style="color: blue;">${n1}</span> * <span style="color: blue;">${n2}</span> * <span style="color: blue;">${n3}</span> es <span style="color: blue;">${prod}</span>`; 
            document.getElementById('quot').innerHTML = `La división de <span style="color: blue;">${n1}</span> / <span style="color: blue;">${n2}</span> / <span style="color: blue;">${n3}</span> es <span style="color: blue;">${quot}</span>`;
        }
    
   