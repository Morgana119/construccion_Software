const db = require('../util/database');

const plantas = [{nombre: 'Orquídea'}, {nombre: 'Cilantro'}];

module.exports = class Planta {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //plantas.push(this.nombre);
        //Guardar todo el objeto
        //plantas.push(this); 
        return db.execute('INSERT INTO plantas(nombre) VALUES (?)', [this.nombre]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM plantas');
    }
    static fetchOne(id) {
        return db.execute('SELECT * FROM plantas WHERE id = ?', [id]);
    }

    static fetch(id){
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    };
}