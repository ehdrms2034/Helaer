import{observable,action, autorun} from 'mobx';


class mystate{
    @observable state=false;
    @observable isinroom=false;
    @observable rank=[];
    @observable mission=[];
    @observable mission_balance_time = 60;
    @observable relayList = [];
    @observable days = 0;
    @observable hours = 0;
    @observable min = 0;
    @observable sec = 0;
    
    constructor(){
        setInterval(()=>{
            this.sec--;

            if(this.hours<=0){
                this.days--;
                this.hours =24;
            }
            
            if(this.min<=0){
                this.hours--;
                this.min=60;
            }

            if(this.sec<=0){
                this.min--;
                this.sec=60;
            }
            
            

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
        this.days = Math.floor(data/1000/60/60/24);
        this.hours = Math.floor(((data-this.days)-1000*60*60*24*this.days)/1000/60/60);
        this.min = Math.floor(((data-this.days)-1000*60*60*24*this.days-1000*60*60*this.hours)/1000/60);
        this.sec = Math.floor(((data-this.days)-1000*60*60*24*this.days-1000*60*60*this.hours-1000*60*this.min)/1000);
    }
    @action
    set_relayList(data){
        this.relayList=data;
    }




}


export default mystate;