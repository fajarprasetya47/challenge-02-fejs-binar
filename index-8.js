function getInfoPenjualan(dataPenjualan) {
    if(dataPenjualan==null){
        return "Error: Parameter is empty. Please give the parameter";
    }else if(typeof dataPenjualan !== "object"){
        return "Error: Invalid data type";
    }else{
        let totalUntung = 0;
        let totalModal = 0;
        for (let i = 0; i < dataPenjualan.length; i++) {
            totalUntung += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
            totalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
        }
        
        const changeToRupiah = (uang) => {
            let uangNum = uang;
            let uangDec = "";
            let sisa, ribu;

            if(uang.includes(".")){
                const splitComma = uang.split(".");
                uangNum = splitComma[0];
                uangDec = `,${splitComma[1]}`;
            }
            if(uangNum.length<=3){
                return `Rp.${uangNum}${uangDec}`;
            }else{
                if(uangNum.length%3==0){
                    sisa = uangNum.slice(0,3);
                    ribu = uangNum.substring(3);
                }else if(uangNum.length%3==2){
                    sisa = uangNum.slice(0,2);
                    ribu = uangNum.substring(2);
                }else if(uangNum.length%3==1){
                    sisa = uangNum.slice(0,1);
                    ribu = uangNum.substring(1);
                }
                let ribuan = ribu.match(/\d{3}/gi);
                return `Rp.${sisa}.${ribuan.join(".")}${uangDec}`;
            }
        };
        const totalUntungStr = changeToRupiah(totalUntung.toString());
        const totalModalStr = changeToRupiah(totalModal.toString());
        const percentUntung = Math.round(totalUntung/totalModal*100).toString()+"%";

        const maxPenjualan = Math.max.apply(Math, dataPenjualan.map((item)=>item.totalTerjual));
        const bukuTop = dataPenjualan.filter((item)=>item.totalTerjual==maxPenjualan).map((value)=>value.namaProduk).toString();
        const penulisTop = dataPenjualan.filter((item)=>item.totalTerjual==maxPenjualan).map((value)=>value.penulis).toString();
        
        const arrDataPenjualan = {
            totalKeuntungan: totalUntungStr,
            totalModal: totalModalStr,
            presentaseKeuntungan: percentUntung,
            produkBukuTerlaris: bukuTop,
            penulisTerlaris: penulisTop
        };
        return arrDataPenjualan;
    }
}

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];


console.log(getInfoPenjualan(dataPenjualanNovel));