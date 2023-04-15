// Proqram baslayir ve fayla yazilmis butun studentleri oxuyur ve saxlayir. Daha sonra en sonuncu id ni goturur ki ID yaradanda Primary key kimi islede bilsin. product yaradanda hem arraya hem de fayla elave edir. silende fayli da sifirlayir ve s. 
const { log } = require("console")
const readline  = require("readline-sync")
const fs =require("fs")
const choices = ["Create Product","Delete Product","Get All Products","Get Product By ID","Get All Products which price is Bigger than N","Delete all Prorducts"]

let intProductIDPK = 0;
let products =[]

readproductdata()
intProductIDPK= Number(products[products.length-1].id)

Main()
function Main(){
let answer = readline.keyInSelect(choices);
answer++;
switch(answer){
    case 1:
        createproduct();
        saveproductstofile()
        break;
    case 2:
        deleteProduct();
        saveproductstofile()
        break;
    case 3:
        getAllProducts();
        break;
    case 4:
        getProductbyID(id);
        break;
    case 5:
        getProductBiggerThanPriceN()
        break;
    case 6:
        deleteall();
        saveproductstofile();
        break;
    case 0:
        log("Program Finished")
        break;

    default:
        log("Please select a valid operation ")

        break;

        

}
if(answer != 0){
    setTimeout(()=>{
        Main()
    },1500);

}
}
function createproduct(){
    let id = GenerateId()
    let title = readline.question("Enter the title of Product: ")
    let price = readline.questionFloat("Enter the price of Product: ")
    let description =  readline.question("Enter the description of Product: ")
    let newProduct = {
        id: id,
        title: title.trim(),
        price: price,
        description:description.trim()
    }
    products.push(newProduct)
}

function deleteProduct(){
    let id = readline.questionInt("Enter the product id to delete: ")
    products = products.filter(product => product.id != id);

    // let deletedproduct = products.filter(product=> product.id ==id);

    // log(deletedproduct)
    // log(Boolean(deleteProduct.id))
    // if((Boolean(deletedproduct.title) || Boolean(deleteProduct.id))){
    //     let deletedproductquestionyn = `Do you wanna to delete product with id: ${deletedproduct.id} ?`;
    //     let yn = readline.keyInYN(deletedproductquestionyn);
    //     if(yn){
    //     products = products.filter(product => product.id != id);
    //     log(`Product with ID: ${id} has been deleted!`);
    // }
    // }
    // else{
    //     log(`There is no product with ID: ${id}`)
    // }
    
    

}

function getAllProducts(){
    console.log("Products: \n")
    products.forEach(product=>{
        log(`ID: ${product.id}, Title: ${product.title}, Price ${product.title}, Desc: ${product.description} \n`)
    })
    return products
}

function GenerateId(){
    intProductIDPK+=1;
    return intProductIDPK;
}
function getProductbyID(){
    let enteredID = readline.questionInt("Enter the Question ID to show: ")
    const FProduct = products.filter(product=>{
        product.id == enteredID
    })

    if(!(FProduct.title || FProduct.description || FProduct.id)){
        log(`There is no Product with ID: ${enteredID}`)
        return ;
    } 
    log(`Product Details: ID: ${FProduct.id}, Title: ${FProduct.title}, Price: ${FProduct.price}, Description: ${FProduct.description} `)
}

function getProductBiggerThanPriceN(){
    let minprice = readline.questionFloat("Enter the minimum price to get Products: ")
    let maxproducts = products.filter(product=>
        product.price >= minprice)
    // I'm returning max products beacause we can use this function to return products price bigger than n
    maxproducts.forEach(product=>{
        log(`ID: ${product.id}, Title: ${product.title}, Price ${product.price}, Desc: ${product.description} \n`)
    });
        return maxproducts;
}

function saveproductstofile(){
    let data =""
    products.forEach(product=>{
        let pstring=`${product.id} ${product.title} ${product.price} ${product.description}\n`
        data+=pstring;
    })
    data= data.slice(0,-2)
    fs.writeFileSync("Products.txt",data,"utf-8")
    
}

function deleteall(){
    products= []
}
function readproductdata(){
    
    fs.readFileSync("Products.txt","utf-8").split('\n').forEach(line=>{
    let productdata= line.split(" ");
    let newProduct = {
        id: productdata[0],
        title: productdata[1],
        price: productdata[2],
        description: productdata[2]
    }
    products.push(newProduct)

})
}
