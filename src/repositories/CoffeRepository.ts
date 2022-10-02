import expressoTradicionalCoffeImg from '../assets/coffes/expresso.svg';
import expressoAmericanoCoffeImg from '../assets/coffes/americano.svg';
import expressoCremosoCoffeImg from '../assets/coffes/expresso-cremoso.svg';
import arabeCoffeImg from '../assets/coffes/arabe.svg';
import cafeComLeiteCoffeImg from '../assets/coffes/cafe-com-leite.svg';
import expressoGeladoCoffeImg from '../assets/coffes/cafe-gelado.svg';
import chocolateQuenteCoffeImg from '../assets/coffes/chocolate-quente.svg';
import cubanoCoffeImg from '../assets/coffes/cubano.svg';
import havaianoCoffeImg from '../assets/coffes/havaiano.svg';
import irlandesCoffeImg from '../assets/coffes/irlandes.svg';
import latteCoffeImg from '../assets/coffes/latte.svg';
import capuccinoCoffeImg from '../assets/coffes/capuccino.svg';
import macchiatoCoffeImg from '../assets/coffes/macchiato.svg';
import mocaccinoCoffeImg from '../assets/coffes/mochaccino.svg';
import { Coffe } from '../pages/Home/components/CoffeList';

class CoffeRepository {
  public getAllCoffes(): Coffe[] {
    return [
      {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        image: expressoTradicionalCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL'],
      },
      {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        image: expressoAmericanoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL'],
      },
      {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        image: expressoCremosoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL'],
      },
      {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        image: expressoGeladoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'GELADO'],
      },
      {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        image: cafeComLeiteCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'COM LEITE'],
      },
      {
        name: 'Latte',
        description:
          'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        image: latteCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'COM LEITE'],
      },
      {
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses iguais de café, leite e espuma',
        image: capuccinoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'COM LEITE'],
      },
      {
        name: 'Macchiato',
        description:
          'Café expresso misturado com um pouco de leite quente e espuma',
        image: macchiatoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'COM LEITE'],
      },
      {
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        image: mocaccinoCoffeImg,
        price: 9.9,
        tags: ['TRADICIONAL', 'COM LEITE'],
      },
      {
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        image: chocolateQuenteCoffeImg,
        price: 9.9,
        tags: ['ESPECIAL', 'COM LEITE'],
      },
      {
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        image: cubanoCoffeImg,
        price: 9.9,
        tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
      },
      {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        image: havaianoCoffeImg,
        price: 9.9,
        tags: ['ESPECIAL'],
      },
      {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        image: arabeCoffeImg,
        price: 9.9,
        tags: ['ESPECIAL'],
      },
      {
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        image: irlandesCoffeImg,
        price: 9.9,
        tags: ['ESPECIAL', 'ALCOÓLICO'],
      },
    ];
  }
}

const instance = new CoffeRepository();
export { instance as CoffeRepository };
