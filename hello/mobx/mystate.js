import{observable,action, autorun} from 'mobx';


class mystate{
    @observable state=false;
    @observable isinroom=false;
    @observable rank=[];
    @observable mission=[];
    @observable mission_balance_time = 60;


    constructor(){
        setInterval(()=>{
            this.mission_balance_time--;
        },1000);
    }
    @action
    set_state(text){
        this.state = text;
    }
    @action
    set_isinroom(bool){
        this.isinroom= bool;
    }
    @action
    set_rank(data){
        this.rank = data;
    }
    @action
    set_mission(data){
        this.mission=data;
    }
    @action
    set_mission_balance_time(data){
        this.mission_balance_time=data;
    
    }

    

}


export default mystate;