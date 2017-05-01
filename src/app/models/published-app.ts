export class Platforms {
    public static Android = "Android";
    public static iOS = "iOS";
    public static Pebble = "Pebble";
    public static Xamarin = "Xamarin";
    public static Node = "NodeJS";
    public static Loopback = "Loopback";
    public static Angular = "Angular";
    public static AndroidWear = "Android Wear";
    public static C = "C";
}

export class PublishedApp {
    title: string;
    platform: Platforms[];
    description: string;
    gitHubLink: string;
}