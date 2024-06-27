class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Length must be a string');
    }

    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newLength) {
    if (typeof newLength !== 'string') {
      throw new TypeError('Length must be a string');
    }
    this._code = newLength;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
