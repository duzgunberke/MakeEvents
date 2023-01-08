import {makeObservable,observable} from "mobx";

export default class ActivityStore{
    title="Hello MobX";

    constructor(){
        makeObservable(this,{
            title:observable
        })
    }
}