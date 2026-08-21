function readFileCallback(path, callback) {
  setTimeout(() => {
    if (path === "missing.txt") {
      callback(new Error("File not found"));
    } else {
      callback(null, `Contents of ${path}`);
    }
  }, 500);
}
function readPromise(path){
    return new Promise((resolve,reject)=>{
        readFileCallback(path,(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(data)
            }
        })
    })
}
async function main() {
    try{
       const material=await readPromise("note.txt")
        console.log(material)
    }catch(err){
        console.log("Error",err)
    }
}
main()
