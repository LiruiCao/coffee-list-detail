import * as fromCoffee from './coffee.actions';

describe('nCoffees', () => {
  it('should return an action', () => {
    expect(fromCoffee.nCoffees().type).toBe('[Coffee] N Coffees');
  });
});
