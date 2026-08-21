// const data = {
//   users: [
//     { id: 1, name: "Regis" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "John" }
//   ],

//   orders: [
//     { id: 101, userId: 1, product: "Laptop", price: 1200 },
//     { id: 102, userId: 1, product: "Mouse", price: 25 },
//     { id: 103, userId: 2, product: "Phone", price: 800 },
//     { id: 104, userId: 2, product: "Headphones", price: 100 },
//     { id: 105, userId: 3, product: "Keyboard", price: 70 }
//   ]
// };
// function getUser(id) {
//   const user = data.users.find(user => user.id === id);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   return Promise.resolve(console.log("User",user));
// }

// function getOrders(userId) {
//   const orders = data.orders.filter(order => order.userId === userId);

//   if (orders.length === 0) {
//     throw new Error("No orders found");
//   }

//   return Promise.resolve("Order",orders);
// }

// function getOrderDetails(orderId) {
//   const order = data.orders.find(order => order.id === orderId);

//   if (!order) {
//     throw new Error("Order not found");
//   }

//   return Promise.resolve(console.log("Order",order));
// }
// async function main(id,orderId) {
//     try{
//         const user= await getUser(id)
//         const orders=await getOrderDetails(orderId)
//         return {user,orders}
//     }catch(err){
//         console.log("Error",err)
//     }
// }
// main(2,103)
//2

const user = Promise.resolve("User loaded");
const orders = Promise.reject("Orders failed");
const notifications = Promise.resolve("Notifications loaded");
async function main() {
    try{
        const result=await Promise.allSettled([
            user,orders,notifications
        ])
        return console.log(result)
    }catch(err){
        console.log(err)
    }
}
main()

//3
//https://jsonplaceholder.typicode.com/users
// async function main() {
//     const data=await fetch(" https://jsonplaceholder.typicode.com/users")
//     if(!data.ok){
//         console.log("Error",data.status)   
//     }
//     console.log("The data are available")
// }