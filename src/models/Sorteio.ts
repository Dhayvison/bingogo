import { getStorage, setStorage } from '../utils/storage';
import { getNumeros } from '../utils/utils';

export default class Sorteio {
  public id: number;
  public titulo: string;
  public numeros: string[];
  public numerosChamados: string[];
  static nextId: number = getStorage('nextId') ?? 0;

  constructor(titulo: string) {
    this.id = Sorteio.nextId;
    this.titulo = titulo;
    this.numeros = getNumeros(75);
    this.numerosChamados = [];

    setStorage('nextId', ++Sorteio.nextId);
  }

  public static getSorteioVazio() {
    return {
      id: -1,
      titulo: 'Vamos começar!',
      numeros: getNumeros(75),
      numerosChamados: [],
    };
  }
}
