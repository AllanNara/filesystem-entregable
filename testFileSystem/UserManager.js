const fs = require('fs')

class UserManager {
  constructor(path) {
    this.path = path
  };
  
  async getUsers() {
    try {
      const users = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(users)
    } catch(error) {
      // console.log(error)
      console.log("Archivo no existente, creando...")
      await fs.promises.writeFile(this.path, "[]").catch(err => console.log(err));
      return []
    }
  };

  async addUser(nombre, edad, correo, nickname) {
    try {
      if(!nombre || !edad || !correo || !nickname) return "Faltan campos obligatorios"
      const allUsers = await this.getUsers();
      const findNick = allUsers.find(user => user?.nickname === nickname)
      if(findNick) return "Nickname ya en uso"
      allUsers.push({ nombre, edad, correo, nickname })

      const usersStr = JSON.stringify(allUsers, null, 2)
      await fs.promises.writeFile(this.path, usersStr)
      return "Usuario añadido"

    } catch (error) {
      console.log(error)
    }
  };

};



//// EJECUCION DEL CODIGO CREADO

const manager = new UserManager("./usuarios.json");

async function main() {
  // const allUsers = await manager.getUsers()
  // console.log(allUsers)

  const result1 = await manager.addUser("usuario1")
  // const result2 = await manager.addUser("usuario2", 32, "a@h.co", "usr2")
  // const result3 = await manager.addUser("usuario3", 18,  "e@m.co", "usr3")

  console.log({result1})
  // console.log({result2})
  // console.log({result3})
}


main()