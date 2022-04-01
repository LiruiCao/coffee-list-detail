import * as fromCoffee from './coffee.reducer';
import { selectCoffeeState } from './coffee.selectors';

describe('Coffee Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCoffeeState({
      [fromCoffee.coffeeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
