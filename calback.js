//apa itu callback?
//callback adalah proses memanggil funcation lain
//sifatnya asynchronous, jadi tidak menunggu proses selesai


function ambilData(callback, errorCallback) {
    setTimeout(() => {
        const sukses = true; 

        if (sukses) {
            callback("Data berhasil diambil"); // panggil callback
        } else {
            errorCallback("Gagal ambil data"); // panggil error callback
        }

    }, 3000);
}

function sukses(data) {
    console.log(`sukses: ${data}`); // jalan terakhir
}

function error(error) {
    console.log(`error: ${error}`); // jalan terakhir
}

ambilData(sukses, error);

//contoh real case callback (GET API)

function getUser(callback, errorCallback) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=> res.json())
    .then((data) => callback(data))
    .catch((err) => errorCallback(err))

}

function tampilkanUser(data) {
    console.log(`Nama user: ${data}`); // jalan terakhir
}

function handleError(error) {
    console.log(`Errorcuy: ${error}`); // jalan terakhir
}

getUser(tampilkanUser, handleError);