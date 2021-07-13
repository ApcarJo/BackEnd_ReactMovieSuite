const { Customer } = require('../models'); //No necesita indicarle el archivo, solo la carpeta, ya que lo desestructura desde index.js
const bcrypt = require('bcrypt');

class Client {

    async allCustomer(){

        return Customer.findAll();

    }

    async nameCustomer(name){
        return Customer.findOne({
            where: {name}
        })
    }

    async mailCustomer(mail){
        return Customer.findOne({
            where: {mail}
        })
    }

    async customerId(id){
        return Customer.findByPk(id);

    }

    async newCustomer(body){
        body.password = await bcrypt.hashSync(body.password, 10);
        return Customer.create(body);
    }


    async deleteCustomer(id){
        return Customer.destroy({
            where: {id}
        })
    }

    async modifyCustomer(attributes){
        return Customer.update(
            //Datos que cambiamos
            {phone: attributes.phone, address: attributes.address, city: attributes.city, postalcode: attributes.postalcode, surname1: attributes.surname1, surname2: attributes.surname2, dni: attributes.dni},
            //Donde..
            {where: {id: attributes.customerId}}
        )
    }
}

let customerController = new Client();
module.exports = customerController;