function make_shirt (size: string = "Large", printMessage:string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`)
}
make_shirt();

make_shirt("Medium")

make_shirt("Small" , "i_coder")