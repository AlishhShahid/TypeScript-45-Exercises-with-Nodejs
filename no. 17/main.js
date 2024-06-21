"use strict";
// Q17
let guest_list = ['Zehra', 'Ruha', 'Zainab', 'Almirah', 'Maryam'];
let not_present = 'Zainab';
let new_guest = 'Laiba';
guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n')
// }
guest_list.unshift('Maimoona', 'Ambreen', 'Daniya');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow. Now we found bigger table that is why we invite three more guest.\n')
// }
console.log('\nUnfortunately we can not arrange big table, Only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry dear ${remove_guest} we are not invited you for tomorrow dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('\nAssalamualaikum ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner.\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
