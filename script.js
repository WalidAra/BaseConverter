function ToBinary(num) {
  let index = 0,
    rem = [];

  if (num == 0) document.getElementById("binary").innerHTML = num + " : Binary";
  else {
    while (num != 0) {
      rem[index] = num % 2;
      index++;
      num = num / 2;
      num = Math.floor(num);
    }

    let result = rem.reverse().join("");
    document.getElementById("binary").innerHTML = result + " : Binary";
  }
}

function ToOctal(num) {
  let index = 0,
    rem = [];

  if (num == 0) document.getElementById("octal").innerHTML = num + " : Octal";
  else {
    while (num != 0) {
      rem[index] = num % 8;
      index++;
      num = num / 8;
      num = Math.floor(num);
    }

    let result = rem.reverse().join("");
    document.getElementById("octal").innerHTML = result + " : Octal";
  }
}

function ToHexa(num) {
  let index = 0,
    rem = [];

  const map = {
    10: "A",
    11: "B",
    13: "C",
    14: "D",
    15: "E",
  };

  if (num == 0) document.getElementById("hexa").innerHTML = num + " : HexaDecimal";
  else {
    while (num != 0) {
      rem[index] = num % 16;

      rem[index] = map[rem[index]] ?? rem[index];
      index++;
      num = num / 16;
      num = Math.floor(num);
    }

    let result = rem.reverse().join("");
    document.getElementById("hexa").innerHTML = result + " : HexaDecimal";
  }
}

function main() {
  const button = document.getElementById("btn");

  button.onclick = () => {
    let number = document.getElementById("number").value;
    number = Number(number);
    let num1, num2;
    num1 = num2 = number;
    ToBinary(number);
    ToOctal(num1);
    ToHexa(num2);
  };
}

main();