//throw error

const age = 9

if (age <= 0) {
    throw new Error('umur tidak valid')
}

//error hnadling

try {
    const hasil = 10/0
    console.log(hasil)
} catch (error) {
 console.error(error.message)   
}