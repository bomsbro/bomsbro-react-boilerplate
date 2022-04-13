import { makeObservable, observable } from 'mobx';
/**
 * This is for DomainStore for Board
 * Only getters are possible
 */
class BoardStore {
  private rootStore: { BoardStore: BoardStore };

  language = 'en_US';

  constructor(rootStore: { BoardStore: BoardStore }) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }


}

export default BoardStore;
