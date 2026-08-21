// 1.2

function getUser(id) {
  return new Promise(res => setTimeout(() => res({ id, name: "Ada" }), 1000));
}
function getSettings(id) {
  return new Promise(res => setTimeout(() => res({ theme: "dark" }), 1000));
}
function getNotifications(id) {
  return new Promise(res => setTimeout(() => res([]), 1000));
}
// Sequencial
async function main(){
    try{
    const user=await(getUser(id))
    const settings=await(getSettings(id))
    const notifications=await(getNotifications("Notif"))
    }catch(err){
        console.log("Error",err.message)
    }
    return {user,settings,notifications}
}
main()
