import { formatName } from './utils';

describe('functions', () => {
   describe('function literals', () => {
       it('has a few kinds', () => {

        // Named functions
        // expect(add(3, 2)).toBe(15);

        // (function add(a: number, b: number) {
        //     return a + b;
        // }
        // (function() {
        //     console.log('In the IIFE');
        //     const name = 'Petel';
        // })();

        // const multiply = (function());
       });
   });
});
describe('higher order functions', () => {
    it('an example', () => {
        expect(formatName('Han', 'Solo')).toBe('Solo, Han');

        const makeNameUpper = (s: string) => s.toUpperCase();

        expect(
      formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');

        const makeFlashy = (s: string) => `***${s}***`;

        expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    // const doBoth = (s: string) => makeFlashy(makeNameUpper(s));
        const doBoth = compose(makeNameUpper, makeFlashy);

        expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');
    });
});
describe('practical', () => {
    interface Payments {
        date: string;
        amount: number;
        customer: string;
    }
    const payments: Payments[] = [
        { date: '1/1/2018', amount: 300, customer: 'Bob' },
        { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
        { date: '1/19/2018', amount: 10082, customer: 'Sue' },
        { date: '2/2/2018', amount: 12, customer: 'Bob' },
      ];
    it('your practice', () => {
          // write some code here that gives me the answer
          // the total of all the payments by bob
          const answer: {total: number} = payments
          .filter(x => x.customer === 'Bob')
          .reduce((prev, next) => ({ total: prev.total + next.amount}), { total: 0});
          // {console.log({prev, next});
          expect(answer.total).toBe(927.23);


      });

});
