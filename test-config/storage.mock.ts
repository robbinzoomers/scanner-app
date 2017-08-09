
export class MockLocalstorage {

  storage = {};

  setItem(key: string, value: any) {
    this.storage[key] = value || '';
  }

  getItem(key: string) {
    return key in this.storage ? this.storage[key] : null;
  }

}

