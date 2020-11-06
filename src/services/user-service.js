export default class UserService {
    _url = 'https://jsonplaceholder.typicode.com/users';
    async getUsers() {
        return (await fetch(this._url)).json()
    }
    async getUserById(id){
        if(id && id<= 10){
            return await ( (await fetch(this._url + `/${id}`)).json())
        }else return null

    }
}
