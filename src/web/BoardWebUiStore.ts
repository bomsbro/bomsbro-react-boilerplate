import { makeObservable, observable } from 'mobx';
/**
 * This store is for global ui state
 */
class BoardWebUiStore {
  private rootStore: { BoardWebUiStore: BoardWebUiStore };

  language = 'en_US';

  constructor(rootStore: { BoardWebUiStore: BoardWebUiStore }) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }

  get getLanguage() {
    return this.language;
  }
}

export default BoardWebUiStore;
