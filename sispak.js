class SAW {
  tabelRating = [];
  tabelBobotKriteria = [];

  vektorNormalisasi = [];
  bobotC = [];
  nilaiV = [];
  hasilAkhir = [];

  constructor(tabelRating, tabelBobotKriteria) {
    this.tabelRating = tabelRating;
    this.tabelBobotKriteria = tabelBobotKriteria;
  }

  getMaxRating(cIndex) {
    let maxRating = 0;
    this.tabelRating.forEach((item) => {
      if (item.rating[cIndex] > maxRating) {
        maxRating = item.rating[cIndex];
      }
    });

    return maxRating;
  }

  normalisasi() {
    let vektor = [];

    this.tabelRating.forEach((item, i) => {
      let tmp = [];
      item.rating.forEach((rating, j) => {
        // console.log(
        //   `r${i + 1}${j + 1} = ${rating / getMaxRating(j, tabelRating)}`
        // );
        tmp.push(Number(rating / this.getMaxRating(j)).toFixed(3));
      });
      vektor.push(tmp);
    });

    this.vektorNormalisasi = vektor;
    return vektor;
  }

  hitungBobotKriteria() {
    let hasil = [];

    let totalBobot = 0;
    this.tabelBobotKriteria.forEach((item) => {
      totalBobot += item.bobot;
    });
    this.tabelBobotKriteria.forEach((item, i) => {
      hasil.push(tabelBobotKriteria[i].bobot / totalBobot);
    });

    this.bobotC = hasil;
    return hasil;
  }

  hitungNilaiV() {
    let hasil = [];

    this.vektorNormalisasi.forEach((item, i) => {
      let tmp = 0;
      item.forEach((num, j) => {
        tmp += num * this.bobotC[j];
      });
      hasil.push(tmp.toFixed(3));
    });

    this.nilaiV = hasil;
    return hasil;
  }

  mapNilaiV() {
    let hasil = [];
    this.tabelRating.forEach((item, i) => {
      hasil.push({
        alternatif: item.alternatif,
        nilaiV: this.nilaiV[i],
      });
    });
    this.hasilAkhir = hasil;
    return hasil;
  }

  start() {
    let sawVektorNormalisasi = this.normalisasi();
    let sawBobotC = this.hitungBobotKriteria();
    let sawNilaiV = this.hitungNilaiV();
    let sawHasilAkhir = this.mapNilaiV();

    console.log("============== SAW ==============");
    console.log("Matrix Normalisasi: ", sawVektorNormalisasi);
    console.log("");
    console.log("Bobot C: ", sawBobotC);
    console.log("");
    console.log("Nilai V", sawNilaiV);
    console.log("");
    console.log("Hasil Akhir: ", sawHasilAkhir);
  }
}

class WP {
  tabelRating = [];
  tabelBobotKriteria = [];

  vektorNormalisasi = [];
  bobotC = [];
  nilaiV = [];
  hasilAkhir = [];

  constructor(tabelRating, tabelBobotKriteria) {
    this.tabelRating = tabelRating;
    this.tabelBobotKriteria = tabelBobotKriteria;
  }

  getMaxRating(cIndex) {
    let maxRating = 0;
    this.tabelRating.forEach((item) => {
      if (item.rating[cIndex] > maxRating) {
        maxRating = item.rating[cIndex];
      }
    });

    return maxRating;
  }

  normalisasi() {
    let vektor = [];

    this.tabelRating.forEach((item, i) => {
      let tmp = [];
      item.rating.forEach((rating, j) => {
        // console.log(
        //   `r${i + 1}${j + 1} = ${rating / getMaxRating(j, tabelRating)}`
        // );
        tmp.push(Number(rating / this.getMaxRating(j)).toFixed(3));
      });
      vektor.push(tmp);
    });

    this.vektorNormalisasi = vektor;
    return vektor;
  }

  hitungBobotKriteria() {
    let hasil = [];

    let totalBobot = 0;
    this.tabelBobotKriteria.forEach((item) => {
      totalBobot += item.bobot;
    });
    this.tabelBobotKriteria.forEach((item, i) => {
      hasil.push(tabelBobotKriteria[i].bobot / totalBobot);
    });

    this.bobotC = hasil;
    return hasil;
  }

  hitungNilaiV() {
    let hasil = [];

    this.vektorNormalisasi.forEach((item, i) => {
      let tmp = [];
      item.forEach((num, j) => {
        tmp.push(Math.pow(num, this.bobotC[j]).toFixed(3));
      });
      hasil.push(tmp);
    });

    this.nilaiV = hasil;
    return hasil;
  }

  mapNilaiV() {
    let hasil = [];

    this.nilaiV.forEach((item, i) => {
      let total = 0;
      item.forEach((num) => {
        total += Number(num);
      });
      hasil.push({
        alternatif: this.tabelRating[i].alternatif,
        nilaiV: total.toFixed(3),
      });
    });

    this.hasilAkhir = hasil;
    return hasil;
  }

  start() {
    let wpVektorNormalisasi = wp.normalisasi();
    let wpBobotC = wp.hitungBobotKriteria();
    let wpNilaiV = wp.hitungNilaiV();
    let wpHasilAkhir = wp.mapNilaiV();

    console.log("");
    console.log("");
    console.log("============== WP ==============");
    console.log("Matrix Normalisasi: ", wpVektorNormalisasi);
    console.log("");
    console.log("Bobot C: ", wpBobotC);
    console.log("");
    console.log("Nilai V: ", wpNilaiV);
    console.log("");
    console.log("Hasil Akhir: ", wpHasilAkhir);
  }
}

// Ubah ubah yang ini
const tabelBobotKriteria = [
  {
    namaKriteria: "Health Care Environment", // C1
    bobot: 18,
  },
  {
    namaKriteria: "Emotional Support", // C2
    bobot: 15,
  },
  {
    namaKriteria: "Business Economy", // C3
    bobot: 21,
  },
  {
    namaKriteria: "Social Change", // C4
    bobot: 21,
  },
  {
    namaKriteria: "Psychological Stress", // C5
    bobot: 25,
  },
];

const tabelRating = [
  {
    alternatif: "Positif", // R1
    rating: [80, 67, 89, 87, 111], // [C1, C2, C3, C4, C5]
  },
  {
    alternatif: "Netral",
    rating: [36, 24, 42, 41, 44],
  },
  {
    alternatif: "Negatif",
    rating: [50, 48, 59, 58, 66],
  },
];

let saw = new SAW(tabelRating, tabelBobotKriteria);
saw.start();

let wp = new WP(tabelRating, tabelBobotKriteria);
wp.start();
