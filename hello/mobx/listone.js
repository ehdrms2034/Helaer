import{observable,computed,action} from 'mobx';


class myapp{
    @observable user_name = "";
    @observable roomdatabase = {
        ...this.roomdatabase,
        room_people_list : []
    }
    @observable relation = [];
    @observable people_list =[];
    @observable mydata =[];


    @action
    set_name = (name) =>{
        this.user_name =name;
    }
    @action
    set_roomdatabase= (data)=>{
        this.roomdatabase = data;
    }
    @action
    set_relation=(data) =>{
        this.relation = data;
    }
    @action
    set_people_list=(data)=>{
        this.people_list=data;
    }
    @action
    set_mydata=(data)=>{
        this.mydata=data;
    }
}


export default myapp;