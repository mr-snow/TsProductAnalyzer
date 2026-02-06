export interface Item {
  id: string;
  item: string;
  checked: boolean;
}
export default class ListItem implements Item {
  constructor( //constructor -initialize the object
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false
  ) {}
  get id(): string { // get - let us to read private value
    return this._id; // this - new instance 
  }
  set id(id: string) { // set - let us to update private value
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}
