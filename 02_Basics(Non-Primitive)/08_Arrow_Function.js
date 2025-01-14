const user = {
    username : "Pawan",
    price : 560,
    welcomeMessage : function () {
        return `Hi ${this.username}, welcome to userpanel`
    }
}

// Returns answer correctly
console.log(user.welcomeMessage())