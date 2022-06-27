import { helloTsc, helloWord } from './hello-tsc';

describe('helloTsc', () => {
  it('should work', () => {
    expect(helloTsc()).toEqual('hello-tsc');
  });
});

describe('helloWord', () => {
  it('should work', () => {
    expect(helloWord()).toEqual('hello-word');
  });
});
