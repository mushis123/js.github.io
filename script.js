// ============================================================
//  Ejercicios JavaScript – Básico
//  Cada ejercicio devuelve { codigo, resultado }
// ============================================================

const ejercicios = [

  {
    titulo: "Declarar una variable nombre y mostrarla en consola",
    codigo: `<span class="kw">let</span> nombre <span class="op">=</span> <span class="str">"Ana"</span>;
console.log(nombre);`,
    run() {
      let nombre = "Ana";
      return nombre;
    }
  },

  {
    titulo: "Declarar dos variables a y b y mostrar su suma",
    codigo: `<span class="kw">let</span> a <span class="op">=</span> <span class="num">5</span>;
<span class="kw">let</span> b <span class="op">=</span> <span class="num">3</span>;
console.log(a <span class="op">+</span> b);`,
    run() {
      let a = 5, b = 3;
      return a + b;
    }
  },

  {
    titulo: "Declarar una variable edad e imprimir un mensaje con ella",
    codigo: `<span class="kw">let</span> edad <span class="op">=</span> <span class="num">20</span>;
console.log(<span class="str">"Mi edad es: "</span> <span class="op">+</span> edad);`,
    run() {
      let edad = 20;
      return "Mi edad es: " + edad;
    }
  },

  {
    titulo: "Convertir un número a cadena usando .toString()",
    codigo: `<span class="kw">let</span> numero <span class="op">=</span> <span class="num">42</span>;
<span class="kw">let</span> cadena <span class="op">=</span> numero.<span class="fn">toString</span>();
console.log(cadena, <span class="kw">typeof</span> cadena);`,
    run() {
      let numero = 42;
      let cadena = numero.toString();
      return cadena + " (tipo: " + typeof cadena + ")";
    }
  },

  {
    titulo: "Declarar una constante PI y mostrar su valor",
    codigo: `<span class="kw">const</span> PI <span class="op">=</span> <span class="num">3.1416</span>;
console.log(PI);`,
    run() {
      const PI = 3.1416;
      return PI;
    }
  },

  {
    titulo: "Calcular el área de un rectángulo (base × altura)",
    codigo: `<span class="kw">let</span> base <span class="op">=</span> <span class="num">8</span>;
<span class="kw">let</span> altura <span class="op">=</span> <span class="num">5</span>;
<span class="kw">let</span> area <span class="op">=</span> base <span class="op">*</span> altura;
console.log(area);`,
    run() {
      let base = 8, altura = 5;
      return base * altura;
    }
  },

  {
    titulo: "Calcular el residuo de una división usando %",
    codigo: `<span class="kw">let</span> resultado <span class="op">=</span> <span class="num">17</span> <span class="op">%</span> <span class="num">5</span>;
console.log(resultado); <span class="cmt">// 2</span>`,
    run() {
      return 17 % 5;
    }
  },

  {
    titulo: "Incrementar una variable con ++",
    codigo: `<span class="kw">let</span> contador <span class="op">=</span> <span class="num">0</span>;
contador<span class="op">++</span>;
contador<span class="op">++</span>;
console.log(contador);`,
    run() {
      let contador = 0;
      contador++;
      contador++;
      return contador;
    }
  },

  {
    titulo: "Comparar dos números usando operadores (>, <, ==)",
    codigo: `<span class="kw">let</span> x <span class="op">=</span> <span class="num">10</span>, y <span class="op">=</span> <span class="num">7</span>;
console.log(x <span class="op">></span> y);   <span class="cmt">// true</span>
console.log(x <span class="op"><</span> y);   <span class="cmt">// false</span>
console.log(x <span class="op">==</span> y);  <span class="cmt">// false</span>`,
    run() {
      let x = 10, y = 7;
      return `${x} > ${y}: ${x > y} | ${x} < ${y}: ${x < y} | ${x} == ${y}: ${x == y}`;
    }
  },

  {
    titulo: "Evaluar si un número es mayor que 10",
    codigo: `<span class="kw">let</span> n <span class="op">=</span> <span class="num">15</span>;
<span class="kw">if</span> (n <span class="op">></span> <span class="num">10</span>) {
  console.log(<span class="str">"Es mayor que 10"</span>);
}`,
    run() {
      let n = 15;
      if (n > 10) return "Es mayor que 10";
      return "No es mayor que 10";
    }
  },

  {
    titulo: "Determinar si un número es par o impar",
    codigo: `<span class="kw">let</span> n <span class="op">=</span> <span class="num">7</span>;
<span class="kw">if</span> (n <span class="op">%</span> <span class="num">2</span> <span class="op">===</span> <span class="num">0</span>) {
  console.log(<span class="str">"Par"</span>);
} <span class="kw">else</span> {
  console.log(<span class="str">"Impar"</span>);
}`,
    run() {
      let n = 7;
      return n % 2 === 0 ? "Par" : "Impar";
    }
  },

  {
    titulo: "Verificar si una persona es mayor de edad (≥ 18)",
    codigo: `<span class="kw">let</span> edad <span class="op">=</span> <span class="num">16</span>;
<span class="kw">if</span> (edad <span class="op">>=</span> <span class="num">18</span>) {
  console.log(<span class="str">"Mayor de edad"</span>);
} <span class="kw">else</span> {
  console.log(<span class="str">"Menor de edad"</span>);
}`,
    run() {
      let edad = 16;
      return edad >= 18 ? "Mayor de edad" : "Menor de edad";
    }
  },

  {
    titulo: "Comparar dos números usando if...else",
    codigo: `<span class="kw">let</span> a <span class="op">=</span> <span class="num">9</span>, b <span class="op">=</span> <span class="num">12</span>;
<span class="kw">if</span> (a <span class="op">></span> b) {
  console.log(<span class="str">"a es mayor"</span>);
} <span class="kw">else if</span> (a <span class="op"><</span> b) {
  console.log(<span class="str">"b es mayor"</span>);
} <span class="kw">else</span> {
  console.log(<span class="str">"Son iguales"</span>);
}`,
    run() {
      let a = 9, b = 12;
      if (a > b) return "a es mayor";
      else if (a < b) return "b es mayor";
      else return "Son iguales";
    }
  },

  {
    titulo: "Clasificar una nota (0–20) como aprobado o desaprobado",
    codigo: `<span class="kw">let</span> nota <span class="op">=</span> <span class="num">13</span>;
<span class="kw">if</span> (nota <span class="op">>=</span> <span class="num">11</span>) {
  console.log(<span class="str">"Aprobado"</span>);
} <span class="kw">else</span> {
  console.log(<span class="str">"Desaprobado"</span>);
}`,
    run() {
      let nota = 13;
      return nota >= 11 ? "Aprobado ✓" : "Desaprobado ✗";
    }
  },

  {
    titulo: "Usar switch para mostrar el día de la semana",
    codigo: `<span class="kw">let</span> dia <span class="op">=</span> <span class="num">3</span>;
<span class="kw">switch</span> (dia) {
  <span class="kw">case</span> <span class="num">1</span>: console.log(<span class="str">"Lunes"</span>); <span class="kw">break</span>;
  <span class="kw">case</span> <span class="num">2</span>: console.log(<span class="str">"Martes"</span>); <span class="kw">break</span>;
  <span class="kw">case</span> <span class="num">3</span>: console.log(<span class="str">"Miércoles"</span>); <span class="kw">break</span>;
  <span class="kw">default</span>: console.log(<span class="str">"Otro día"</span>);
}`,
    run() {
      let dia = 3;
      const dias = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
      return dias[dia] || "Otro día";
    }
  },

  {
    titulo: "Imprimir números del 1 al 10 con for",
    codigo: `<span class="kw">for</span> (<span class="kw">let</span> i <span class="op">=</span> <span class="num">1</span>; i <span class="op"><=</span> <span class="num">10</span>; i<span class="op">++</span>) {
  console.log(i);
}`,
    run() {
      let lista = [];
      for (let i = 1; i <= 10; i++) lista.push(i);
      return lista.join(", ");
    }
  },

  {
    titulo: "Sumar los números del 1 al 100",
    codigo: `<span class="kw">let</span> suma <span class="op">=</span> <span class="num">0</span>;
<span class="kw">for</span> (<span class="kw">let</span> i <span class="op">=</span> <span class="num">1</span>; i <span class="op"><=</span> <span class="num">100</span>; i<span class="op">++</span>) {
  suma <span class="op">+=</span> i;
}
console.log(suma);`,
    run() {
      let suma = 0;
      for (let i = 1; i <= 100; i++) suma += i;
      return suma;
    }
  },

  {
    titulo: "Mostrar la tabla de multiplicar de un número",
    codigo: `<span class="kw">let</span> n <span class="op">=</span> <span class="num">5</span>;
<span class="kw">for</span> (<span class="kw">let</span> i <span class="op">=</span> <span class="num">1</span>; i <span class="op"><=</span> <span class="num">10</span>; i<span class="op">++</span>) {
  console.log(n <span class="op">+</span> <span class="str">" x "</span> <span class="op">+</span> i <span class="op">+</span> <span class="str">" = "</span> <span class="op">+</span> (n <span class="op">*</span> i));
}`,
    run() {
      let n = 5, tabla = [];
      for (let i = 1; i <= 10; i++) tabla.push(`${n} x ${i} = ${n * i}`);
      return tabla.join(" | ");
    }
  },

  {
    titulo: "Contar del 10 al 1 usando while",
    codigo: `<span class="kw">let</span> i <span class="op">=</span> <span class="num">10</span>;
<span class="kw">while</span> (i <span class="op">>=</span> <span class="num">1</span>) {
  console.log(i);
  i<span class="op">--</span>;
}`,
    run() {
      let i = 10, lista = [];
      while (i >= 1) { lista.push(i); i--; }
      return lista.join(", ");
    }
  },

  {
    titulo: "Recorrer un arreglo e imprimir sus elementos",
    codigo: `<span class="kw">let</span> frutas <span class="op">=</span> [<span class="str">"manzana"</span>, <span class="str">"pera"</span>, <span class="str">"uva"</span>];
<span class="kw">for</span> (<span class="kw">let</span> i <span class="op">=</span> <span class="num">0</span>; i <span class="op"><</span> frutas.length; i<span class="op">++</span>) {
  console.log(frutas[i]);
}`,
    run() {
      let frutas = ["manzana", "pera", "uva"];
      return frutas.join(", ");
    }
  }

];

// ============================================================
//  Renderizar las tarjetas
// ============================================================

const contenedor = document.getElementById("ejercicios");

ejercicios.forEach((ej, index) => {
  const num = String(index + 1).padStart(2, "0");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-header">
      <span class="num">${num}</span>
      <span class="card-title">${ej.titulo}</span>
      <span class="toggle-icon">▼</span>
    </div>
    <div class="card-body">
      <code class="code-block">${ej.codigo}</code>
      <span class="result-label">Resultado en consola:</span>
      <div class="result-box">${ej.run()}</div>
    </div>
  `;

  card.querySelector(".card-header").addEventListener("click", () => {
    card.classList.toggle("open");
  });

  contenedor.appendChild(card);
});
