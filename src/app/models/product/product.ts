export class Product{ 
  /**
   * Esta clase Representa un producto
   */
  constructor(
    public id:string,
    public title:string,
    public price:number,
    public category:string,
    public description:string,
    public image:string)
    {}
}