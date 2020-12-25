import { getStorage, setStorage } from '../utils/storage';
import { getNumeros } from '../utils/utils';

export default class Sorteio {
  public id: number;
  public titulo: string;
  public numeros: string[];
  static nextId: number = getStorage('nextId') ?? 0;

  constructor(titulo: string) {
    this.id = Sorteio.nextId;
    this.titulo = titulo;
    this.numeros = getNumeros(75);

    setStorage('nextId', ++Sorteio.nextId);
  }
}
