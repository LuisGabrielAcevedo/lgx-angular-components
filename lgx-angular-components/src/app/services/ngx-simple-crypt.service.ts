import { Injectable } from '@angular/core';
import { SimpleCrypt } from 'ngx-simple-crypt';

@Injectable({
  providedIn: 'root'
})
export class NgxSimpleCryptService {
  private key = 'itaú';
  protected simpleCrypt: SimpleCrypt;
  constructor() {
    this.simpleCrypt = new SimpleCrypt();
  }

  encode(value: string): string {
    return this.simpleCrypt.encode(this.key, value);
  }

  encodeObject(obj: any): string {
    return SimpleCrypt.encodeDefault(this.key, obj);
  }

  decode(code: string): string {
    return this.simpleCrypt.decode(this.key, code);
  }

  decodeObject(code: string): object {
    return SimpleCrypt.decodeDefault(this.key, code);
  }
}
