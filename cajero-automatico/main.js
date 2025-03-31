const disponible = {
  100: 3,
  50: 6,
  20: 10,
  10: 50,
  1: 50,
};

const billetes = Object.keys(disponible);

const totalDisponible = () => {
  let total = 0;
  for (let i = 0; i < billetes.length; i++) {
    total += billetes[i] * disponible[billetes[i]];
  }
  return total;
};

const calcularBilletes = (saldoRetirar, denominacion) => {
  let contador = saldoRetirar / denominacion;
  if (contador > disponible[denominacion]) {
    contador = disponible[denominacion];
  }
  disponible[denominacion] -= contador;
  return contador;
};

const procesar = (valorRetirar) => {
  if (valorRetirar > totalDisponible()) {
    console.log("Error, no hay suficiente saldo");
    return;
  }

  let saldoRetirar = valorRetirar;
  while (saldoRetirar > 0) {
    let contador = 0;
    for (let i = 0; i < billetes.length; i++) {
      contador = calcularBilletes(saldoRetirar, billetes[i]);
      console.log(`${contador} billetes de ${billetes[i]}`);
      saldoRetirar -= contador * billetes[i];
    }
  }
};

procesar(150);
