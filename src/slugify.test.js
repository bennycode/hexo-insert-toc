const {slugify} = require('./slugify');

describe('slugify', () => {
  it('handles an ampersand', () => {
    expect(slugify('Algorithms & Functions')).toBe('Algorithms-amp-Functions');
  });

  it('handles multiple dashes', () => {
    expect(slugify('Template literal string')).toBe('Template-literal-string');
  });

  it('handles colons', () => {
    expect(slugify('Bonus: TypeScript everything!')).toBe('Bonus-TypeScript-everything');
  });

  it('handles forward slashes', () => {
    expect(slugify('Type Argument / Type Parameter')).toBe('Type-Argument-x2F-Type-Parameter');
  });
});
