"use strict";
// Q15
let guest_list = ['Zehra', 'Ruha', 'Zainab', 'Almirah', 'Maryam'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n');
}
let not_present = 'Zainab';
let new_guest = 'Laiba';
guest_list[2] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n');
}
console.log(`Miss ${not_present} will not coming tomorrow dinner.`);
