let guest_list: string[] = ['Zehra' , 'Ruha' , 'Zainab' , 'Almirah' , 'Maryam'];
let not_present: string = 'Zainab';
let new_guest: string = 'Laiba';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow.\n')
}
guest_list.unshift('Maimoona' , 'Ambreen' , 'Daniya');
for(let i=0; i<guest_list.length; i++){
    console.log('Assalamualaikum ' + guest_list[i] + ',\nWe are invited you on dinner tomorrow. Now we found bigger table that is why we invite 3 more guest\n')
}