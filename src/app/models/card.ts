export class Card {
  constructor(public name: string,
              public card: string,
              public mm: string,
              public yyyy: string,
              public cvv: string,
              public isDefault?: boolean) {}
}
