const { Order } = require('../models');
const order = require('../models/order');
// const { Customer } = require('../models');
const Util = require('../util');


class Rent{

    // Métodos controladores
    async newOrder(body){
        let ordersFind = await Order.findAll({
            where: {customerId: body.customerId, movieId: body.movieId}
        });
        console.log(ordersFind, "ordersFind")
        if (ordersFind==''){
        return Order.create(body);
        } else {
            console.log("ya hay peli")
        }
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