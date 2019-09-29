var nama = "Alex";
var peran ="Ksatria";

if(nama == "") {
  console.log("Nama harus diisi!");
}
else if (peran==""){
  console.log("Peran Harus diisi")
}
else if (peran=="Ksatria"){
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Ksatria "+ nama + " kamu dapat menyerang dengan senjatamu");
}
else if (peran=="Tabib"){
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Tabib "+ nama + " kamu akan membantu temanmu yang luka");
}
else if (peran=="Penyihir"){
  console.log("Selamat datang di Dunia Proxytia, "+nama);
  console.log("Halo Penyihir "+ nama + " ciptakan keajaiban yang membantu kemenanganmu");
}
