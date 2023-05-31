import { Component, Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input()
    products: any[] = [];
 productList = [
  {image: '../assets/addidas.jpeg' ,name:"Addidas Shower Gel", subtitle:"Gel", stock:"IN STOCK", price:99},
  {image: '../assets/axe.jpeg' ,name:"Axe Body Spray", subtitle:"Perfume", stock:"IN STOCK", price:199},
  {image: '../assets/detox.jpeg' ,name:"Detox Serum", subtitle:"Face essentials", stock:"IN STOCK", price:350},
  {image: '../assets/herbalsham.jpeg' ,name:"Shampoo", subtitle:"Herbal Shampoo", stock:"IN STOCK", price:500},
  {image: '../assets/perfume.jpeg' ,name:"GIO Perfume", subtitle:"Strong Perfume", stock:"IN STOCK", price:1700},
  {image: '../assets/gel.jpeg' ,name:"Set Wet", subtitle:"Premium Gel for Men", stock:"OUT OF STOCK", price:99},
  {image: '../assets/olay.jpeg' ,name:"Olay Creme", subtitle:"For Women", stock:"IN STOCK", price:499},
  {image: '../assets/bbbb.jpeg' ,name:"Gliss Klir", subtitle:"Premium Shampoo", stock:"IN STOCK", price:1999},
  {image: '../assets/facewash.jpeg' ,name:"Garnier Men", subtitle:"Facewash", stock:"OUT OF STOCK", price:199}
  ];
  cartProductList: CartProduct[] = [];

 addProductToCart(product: { name: any; price: number; }) {
  const productExistInCart = this.cartProductList.find(({name}) => name === product.name); 
  if (!productExistInCart) {
    this.cartProductList.push({...product}); 
    return;
  }

}

  removeProduct(product: { name: any; }) {
   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }

  calcTotal() {
    this.calcprice();
    return this.cartProductList.length;
  }
  calcprice(){
    let total = 0;
    for (const product of this.cartProductList) {      
      total += product.price;
    }
    return total;
  }
}


interface CartProduct {
  name: string;
  price: number;
}