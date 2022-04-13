import { makeObservable, observable } from 'mobx';
/**
 * This store is for global ui state
 */
class BoardMobileUiStore {
  private rootStore: { BoardMobileUiStore: BoardMobileUiStore };

  language = 'en_US';

  constructor(rootStore: { BoardMobileUiStore: BoardMobileUiStore }) {
    this.rootStore = rootStore;
    makeObservable(this, {
      language: observable,
    });
  }

  get getLanguage() {
    return this.language;
  }
}

export default BoardMobileUiStore;
