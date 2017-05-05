export class DocumentStyle {
  marginLeft: number = 20;
  marginBottom: number;
  marginTop: number;
  fontName: string;
  fontType: string;
  fontSize: number;
  r: number;
  g: number;
  b: number;
  lineHeight: number = 5;

  public constructor(init?: Partial<DocumentStyle>) {
    Object.assign(this, init);
  }

  public static HeaderStyle: DocumentStyle = new DocumentStyle({
    marginTop: 10,
    marginBottom: 10,
    fontName: "verdana",
    fontType: "bold",
    fontSize: 20,
    r: 32,
    g: 148,
    b: 241
  });

  public static HeaderTwoStyle: DocumentStyle = new DocumentStyle({
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 25,
    fontName: "verdana",
    fontType: "bold",
    fontSize: 14,
    r: 32,
    g: 148,
    b: 241
  });

  public static SubtitleStyle: DocumentStyle = new DocumentStyle({
    marginTop: 0,
    marginBottom: 10,
    fontName: "verdana",
    fontType: "normal",
    fontSize: 14,
    r: 0,
    g: 0,
    b: 0
  });

  public static SubheaderStyle: DocumentStyle = new DocumentStyle({
    marginLeft: 25,
    marginTop: 0,
    marginBottom: 10,
    fontName: "verdana",
    fontType: "normal",
    fontSize: 10,
    r: 78,
    g: 78,
    b: 78
  });

  public static BodyStyle: DocumentStyle = new DocumentStyle({
    marginLeft: 25,
    marginTop: 0,
    marginBottom: 10,
    fontName: "georgia",
    fontType: "normal",
    fontSize: 14,
    r: 0,
    g: 0,
    b: 0
  });
}