//latihan asyncronous

// async function getusers() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users");

//         if (!data.ok) {
//             throw new Error("Gagal mengambil data");
//         }

//         const hasil = await data.json();//mengubah string ke json
//         hasil.forEach(hasil2 => {
//             console.log(hasil2.name);
//         });
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getusers();


//soal 2

async function getUserById(id) {
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!data.ok) {
            throw new Error("user tidak ditemukan");
        }

        const hasil = await data.json();
        console.log(hasil.name);
        console.log(hasil.username);
    } catch (error) {
        console.log(error.message);
    }
}

getUserById(4);