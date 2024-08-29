// // Convert a string in abbreviated form console.log(abbrev_name("Robin Singh"));
//  output "Robin S."

function abbreviated(str){
    let string_names = str.trim().split(' ');
    if(string_names.length > 1){
        return (string_names[0] + ' ' + string_names[1].charAt(0) + '.')
    }else
    return string_names[0];


}
console.log(abbreviated("Robin singh"))