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
// function mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }

//     return mahasiswa;
// }

// let harun = mahasiswa('Harun',10);

// 3. construct function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain`);
    }
}

let harun = new Mahasiswa('Harun',10);