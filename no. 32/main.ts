let current_users = ["anoosha", "Anshara", "Anabia", "Saimoon", "Afnan"];

let new_users = ["Alishh", "Zehra", "Anoosha", "Emad", "Saimoon"];

new_users.forEach((new_one_user) => {
  let our_condition = current_users.some(
    (current_one_user) =>
      current_one_user.toLowerCase() === new_one_user.toLowerCase()
  );
  if (our_condition) {
    console.log(`Sorry ${new_one_user} is already taken!`);
  } else {
    console.log(`This username ${new_one_user} is available`);
  }
});