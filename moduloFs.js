const fs = require("fs");

// METODO SINCRONICO
// try {
//   const resultSync = fs.readFileSync("./ejemploSync.json", "utf-8")
//   console.log({resultSync})
// } catch (error) {
//   console.log(error)
//   try {
//     fs.writeFileSync("./ejemploSync.json", "[]")
//   } catch (error) {
//     console.log(error)
//   }
//   console.log("Archivo creado con exito utilizando SYNC")
// }

// // // METODO CALLBACK
// fs.readFile("./ejemploCb.json", "utf-8", (err, resultCB) => {
//   if (err) {
//     console.log(err)
//     fs.writeFile("./ejemploCb.json", "[]", (err) => {
//       if(err) {
//         console.log(err)
//         return
//       }
//       console.log("Archivo creado con exito utilizando CB")
//     })
//     return
//   };
//   console.log({resultCB});
// });


// METODO ASINCRONICO
async function leerYEscribirAsync() {
  try {
    const resultAsync = await fs.promises.readFile("./ejemploAsync.json", "utf-8")
    console.log({resultAsync})
  } catch (error) {
    console.log(error)
    await fs.promises.writeFile("./ejemploAsync.json", "[]").catch(err => console.log(err))
    console.log("Archivo creado con exito utilizando ASYNC")
  }
}

leerYEscribirAsync()