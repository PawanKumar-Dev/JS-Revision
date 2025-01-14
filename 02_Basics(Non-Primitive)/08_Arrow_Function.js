const user = {
    username : "Pawan",
    price : 560,
    welcomeMessage : function () {
        return `Hi ${this.username}, welcome to userpanel`
    }
}

console.log(user.welcomeMessage())