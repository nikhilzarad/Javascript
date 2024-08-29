const capitalFirstLetter = function(str){
    const result = str.split(' ').map((word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    return result
}
console.log (capitalFirstLetter('i am a good Person'))