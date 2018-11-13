export class LogHelper {
    constructor(private instance: any) {
    }
    public log(args: Object[]) {
        console.log(new Date() + " " + this.instance.constructor.name + " " + args.join(" "));
    }
}