function friend(friends) {
    const MyFriends = friends.filter((names) => names.length === 4)
    return MyFriends
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))