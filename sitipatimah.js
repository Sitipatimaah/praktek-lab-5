var waktu = require('readline-sync');
var jam = waktu.question("input jam= ");
var menit = waktu.question("inpuut menit=");
if (isNaN(jam && menit)){
console.log("ini bukan angka");
}
console.log("tampilkan detik")
var detik = (jam*3600) + (menit*60)
console.log(detik)