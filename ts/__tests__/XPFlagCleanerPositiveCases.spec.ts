import { clean } from '../src/main';
import * as fs from 'fs';
import * as path from 'path';

const SAMPLES_PATH = path.join(__dirname, '..', 'samples');

const getSample = (sampleName: string) => {
    return {
        actual: path.join(SAMPLES_PATH, sampleName, 'actual.ts'),
        expected: path.join(SAMPLES_PATH, sampleName, 'expected.ts')
    };
};

describe('Positive Cases', () => {
    it('conditional_contains_stale_flag', () => {
        const { actual, expected } = getSample('conditional_contains_stale_flag');
        expect(clean(actual)).toEqual(fs.readFileSync(expected).toString());
    });
});
