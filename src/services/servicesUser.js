class userService{

    constructor(userModel){
        this.user = userModel
    }

    async getUser(){
        const userList = await this.user.findAll()
        return userList
    };
    async CreateUser(userDTO){
        try{
        await this.user.create(userDTO)
        }catch (erro) {
        console.erro(erro.message) }
    }
}

module.exports = userService