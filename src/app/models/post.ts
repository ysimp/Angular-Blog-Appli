export class Post {

    constructor ( public id: number,
                  public title: string,
                  public contenu: string,
                  public loveIts: number,
                  public created_at : Date ){}
}