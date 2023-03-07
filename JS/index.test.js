const shuffle = require('./index.js');
const Tile = require('./index.js');

test("shuffle function should shuffle the array in place", () => {
        const original = [1, 2, 3, 4, 5];
        const actual = new shuffle(original);
        expect(actual).not.toBe(original);
      });

test("sets the type and number properties correctly",() => {
    const tile=new Tile('wood',5);
    expect(tile.type).toBe('wood');
    expect(tile.number).toBe(5);
})


