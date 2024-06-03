// aaj kl 95% yeah method use hoti hai baki properties_get_set wali method use hoti hai. 

class user{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value.toUpperCase();
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}
const chai = new user("a@chat.ai", "abcd")
console.log(chai.email)
console.log(chai.password)