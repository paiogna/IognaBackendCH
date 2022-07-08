class Usuario {
    constructor (nombre, apellido, librosNombre, librosAutor, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = [{librosNombre: librosNombre , librosAutor: librosAutor}] 
        this.mascotas = [mascotas]
    }

    getFullName() { console.log(`El mombre y apellido es ${this.nombre}, ${this.apellido}`) }

    addMascotas() {
        this.mascotas.push()
    }

    countMascotas() {
        console.log(this.mascotas.length)
    }

    addBook() {
        this.libros.push()
    }

    getBookNames() {
        for (let i = 0; i < this.libros.length; i++) {
            console.log(this.libros[i].librosNombre)
        }
    }
}

const Usuario1 = new Usuario ("Patricia", "Iogna", "El señor de los anillos" , "J.R.R. Tolkien", "Perro")

console.log(Usuario1)
Usuario1.getFullName()
Usuario1.countMascotas()
Usuario1.getBookNames()