// Cara membuat objeck pada javascript
// 1. Object literal
// let mahasiswa = {
//     nama : 'Harun',
//     energi : 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan`);
//     }
// }

// 2. function decleration
// const  methodMahasiswa = {
//     makan : function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     },

//     main : function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     },

//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur`);
//     }
// }

// function mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let harun = mahasiswa('Harun',10);

// 3. construct function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }
// }

// let harun = new Mahasiswa('Harun',10);

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan`;
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur`;
}

let harun = new Mahasiswa('Harun',10);