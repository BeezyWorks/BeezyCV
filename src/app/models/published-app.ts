export enum Platforms{
    Android,
    iOS,
    Xamarin,
    Pebble,
    AngularJS,
    Angular,
    dotNet,
    Node,
    Loopback,
    C,
    AndroidWear
}

export class PublishedApp{
    title: string;
    platform: Platforms[];
    description: string;
    gitHubLink: string;
}