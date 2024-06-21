function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

let magicians_names = ["Harry Potter" , "Alishh" , "Zehhra"]

let copy_magician_names = magicians_names.slice()

let copy_great_magicians = make_great(copy_magician_names);

console.log("Original Arrays\n")
show_magicians(magicians_names);

console.log("\nCopied Arrays\n")
show_magicians(copy_great_magicians)