// @vitest-environment node
import * as fs from 'node:fs';
import { describe, vi, it, expect, beforeEach } from "vitest";
import readJsonFile from "./read-json-file";

const parsedJson = { name: 'Emilia' }

vi.mock('node:fs', () => {
    const jsonString = '{"name":"Emilia"}'

    return {
        existsSync: vi.fn(),
        promises: {
            readFile: vi.fn().mockResolvedValue(jsonString)
        }
    }
});

describe('readJsonFile function', () => {
    beforeEach(() => {
        // to avoid existSync returning false after some tests
        vi.mocked(fs.existsSync).mockReturnValue(true);
    });

    it('returns parsed JSON', async () => {
        // vi.spyOn(fs, 'existsSync').mockReturnValue(true);
        const result = await readJsonFile('/path');

        expect(result).toEqual(parsedJson);
    });

    it('throws error if file could not be found', async () => {
        vi.mocked(fs.existsSync).mockReturnValue(false);

        const promise = readJsonFile('/path');

        await expect(promise).rejects.toThrow('File could not be read.');
    });
});