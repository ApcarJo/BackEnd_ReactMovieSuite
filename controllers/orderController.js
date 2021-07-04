const { Order } = require('../models');
// const { Customer } = require('../models');
const Util = require('../util');


class Rent{

    // Métodos controladores
    async newOrder(body){
        return Order.create(body);
    }

    async allOrders(){

        return Order.findAll();

    }

    async orderId(body){

        return Order.findByPk(body.id);

    }

    async allOrderCustomerId(id){
        return Order.findAll({
            where: {customerId: id} 
        });

    }

    async allCities(){

        let ordersFind = await Order.findAll();
        return Util.findCity(ordersFind);
    }

    async byCity(city){
        let ordersFind = await Order.findAll();
        return Util.findByCity(ordersFind, city);
    }


    async deleteOrder(id){
        return Order.destroy({
            where: {id}
        })
    }
}

let orderController = new Rent();
module.exports = orderController;