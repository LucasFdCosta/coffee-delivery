export type Coffee = {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
};

export const dataSource = [
  {
    id: 1,
    image: "./src/assets/Expresso-Tradicional.png",
    tags: ["Tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    image: "./src/assets/Expresso-Americano.png",
    tags: ["Tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    image: "./src/assets/Expresso-Cremoso.png",
    tags: ["Tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    image: "./src/assets/Expresso-Gelado.png",
    tags: ["Tradicional", "Gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: 5,
    image: "./src/assets/Café-com-leite.png",
    tags: ["Tradicional", "Com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    image: "./src/assets/Latte.png",
    tags: ["Tradicional", "Com leite"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    image: "./src/assets/Capuccino.png",
    tags: ["Tradicional", "Com leite"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    image: "./src/assets/Macchiato.png",
    tags: ["Tradicional", "Com leite"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    image: "./src/assets/Mocaccino.png",
    tags: ["Tradicional", "Com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    image: "./src/assets/Chocolate-Quente.png",
    tags: ["Especial", "Com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    image: "./src/assets/Cubano.png",
    tags: ["Especial", "Alcoólico", "Gelado"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    image: "./src/assets/Havaiano.png",
    tags: ["Especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 13,
    image: "./src/assets/Árabe.png",
    tags: ["Especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    image: "./src/assets/Irlandês.png",
    tags: ["Especial"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
] as Coffee[];
