import { returnTrue } from '../src/main';


describe('Positive Cases', () => {
    it('conditional_contains_stale_flag', () => {
        expect(returnTrue()).toBeTruthy();
    });
});
