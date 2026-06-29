/*Write a function cleanGuestList(rawGuests) that:

Takes an array of names (strings).

Normalizes them so only the first letter is capitalized (e.g., "aLiCe" becomes "Alice").

Eliminates all duplicates.

Uses a Map to assign a unique, sequential ID number to each unique guest (starting from 1).

Returns the final Map.*/
function cleanGuestList(rawGuests){
    const normal=[]
    for(const guest of rawGuests){
       // const normal=(guest[0].toUpperCase+guest[1].toLowerCase)
        normalized.push(guest[0].toUpperCase+guest[1].toLowerCase)
    return normal
}
console.log(cleanGuestList(['aLice','Keza']))