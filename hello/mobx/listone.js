import{observable,computed,action} from 'mobx';


class myapp{
    @observable user_name = "";
    @observable user_roomdatabase = [];
    @observable user_relation = [];



    @action
    set_name = (name) =>{
        this.user_name =name;
    }
    @action
    set_user_roomdatabase= (data)=>{
        this.user_roomdatabase = data;
    }
    @action
    set_user_relation=(data) =>{
        this.user_relation = data;
    }
}


export default myapp;