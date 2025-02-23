const inquirer = require("inquirer");
const chalk = require("chalk");
const {
  tambah,
  kurang,
  kali,
  bagi,
  pangkat,
  faktorial,
  isPrima,
  modulus,
  absolut,
  maksimum,
  minimum,
  bulatkan,
} = require("./solution");

async function main() {
  console.clear();
  console.log(chalk.blue.bold("\n=== KALKULATOR SEDERHANA ===\n"));

  while (true) {
    const { operasi } = await inquirer.prompt([
      {
        type: "list",
        name: "operasi",
        message: "Pilih operasi yang ingin dilakukan:",
        choices: [
          "Tambah",
          "Kurang",
          "Kali",
          "Bagi",
          "Pangkat",
          "Faktorial",
          "Cek Bilangan Prima",
          "Modulus",
          "Absolut",
          "Maksimum",
          "Minimum",
          "Bulatkan",
          "Keluar",
        ],
      },
    ]);

    if (operasi === "Keluar") {
      console.log(chalk.green("Terima kasih telah menggunakan kalkulator!"));
      break;
    }

    let angka1, angka2, hasil;
    
    if (["Faktorial", "Cek Bilangan Prima", "Absolut", "Bulatkan"].includes(operasi)) {
      const { inputAngka } = await inquirer.prompt({
        type: "input",
        name: "inputAngka",
        message: "Masukkan satu angka:",
        validate: (input) => !isNaN(input) || "Masukkan angka yang valid!",
      });
      angka1 = parseFloat(inputAngka);
    } else {
      const input = await inquirer.prompt([
        {
          type: "input",
          name: "angka1",
          message: "Masukkan angka pertama:",
          validate: (input) => !isNaN(input) || "Masukkan angka yang valid!",
        },
        {
          type: "input",
          name: "angka2",
          message: "Masukkan angka kedua:",
          validate: (input) => !isNaN(input) || "Masukkan angka yang valid!",
        },
      ]);
      angka1 = parseFloat(input.angka1);
      angka2 = parseFloat(input.angka2);
    }

    switch (operasi) {
      case "Tambah":
        hasil = tambah(angka1, angka2);
        break;
      case "Kurang":
        hasil = kurang(angka1, angka2);
        break;
      case "Kali":
        hasil = kali(angka1, angka2);
        break;
      case "Bagi":
        hasil = bagi(angka1, angka2);
        break;
      case "Pangkat":
        hasil = pangkat(angka1, angka2);
        break;
      case "Faktorial":
        hasil = faktorial(angka1);
        break;
      case "Cek Bilangan Prima":
        hasil = isPrima(angka1) ? "Bilangan prima" : "Bukan bilangan prima";
        break;
      case "Modulus":
        hasil = modulus(angka1, angka2);
        break;
      case "Absolut":
        hasil = absolut(angka1);
        break;
      case "Maksimum":
        hasil = maksimum(angka1, angka2);
        break;
      case "Minimum":
        hasil = minimum(angka1, angka2);
        break;
      case "Bulatkan":
        hasil = bulatkan(angka1);
        break;
    }

    console.log(chalk.yellow.bold(`\nHasil: ${hasil}\n`));
  }
}

main();
