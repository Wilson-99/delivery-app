import { Product } from "../types";
import pizza from "../../../assets/images/pizza.jpg"
import hamburger from "../../../assets/images/hamburger.jpg"
import hotDog from "../../../assets/images/hot_dog.jpeg"

export const products: Product[] = [
  {
    id: "1",
    name: "Pizza Margherita",
    description: "Clássica com molho de tomate e queijo.",
    price: 1200,
    image: pizza,
  },
  {
    id: "2",
    name: "Hambúrguer",
    description: "Pão brioche, carne angus e queijo cheddar.",
    price: 1500,
    image: hamburger,
  },
  {
    id: "3",
    name: "Cachorro Quente",
    description: "Combo com 20 peças variadas.",
    price: 3000,
    image: hotDog,
  },
];
