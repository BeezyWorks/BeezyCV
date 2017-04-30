export enum Platforms{
    Android,
    iOS,
    Xamarin,
    Pebble,
    AngularJS,
    Angular,
    dotNet,
    Node,
    Loopback
}

export class PublishedApp{
    title: string;
    platform: Platforms[];
    description: string;
    gitHubLink: string;
}