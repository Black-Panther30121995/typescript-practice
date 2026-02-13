abstract class TakePhoto{
    constructor(public cameraMode: string,
        public filter:string
    ){}

    abstract getSepia():void;
}

class Instagram extends TakePhoto{
    constructor(cameraMode: string,
        filter:string,
        public burst:number){
            super(cameraMode,filter);
        }

        getSepia(): void {
            console.log("Sepia");
        }
}


const camera=new Instagram("test","Test",10);
