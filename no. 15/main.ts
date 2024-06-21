// Q15
let guest_list: string[] = ['Zehra' , 'Ruha' , 'Zainab' , 'Almirah' , 'Maryam'];
for(let i=0; i<guest_list.length; i++){
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n');
}
let not_present: string = 'Zainab';
let new_guest: string = 'Laiba';
guest_list[2] = new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n');
}
console.log(`Miss ${not_present} will not coming tomorrow dinner.`)