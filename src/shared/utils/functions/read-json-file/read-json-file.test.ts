// @vitest-environment node
import * as fs from 'node:fs';
import { describe, vi, it, expect, beforeEach } from "vitest";
import readJsonFile from "./read-json-file";

const parsedJson = { name: 'Emilia' };
const jsonString = '{"name":"Emilia"}';
const invalidJson = '{name: Emilia}';

vi.mock('node:fs', () => {
    return {
        existsSync: vi.fn(),
        promises: {
            readFile: vi.fn()
        }
    }
});

describe('readJsonFile function', () => {
    beforeEach(() => {
        // to avoid existSync returning false after some tests
        vi.mocked(fs.existsSync).mockReturnValue(true);
        vi.mocked(fs.promises.readFile).mockResolvedValue(jsonString)
    });

    it('returns parsed JSON', async () => {
        // vi.spyOn(fs, 'existsSync').mockReturnValue(true);
        const result = await readJsonFile('/path');

        expect(result).toEqual(parsedJson);
    });

    it('throws error if file could not be found', async () => {
        vi.mocked(fs.existsSync).mockReturnValue(false);

        const promise = readJsonFile('/path');

        await expect(promise).rejects.toThrow('File could not be read');
    });

    it('throws error if JSON is invalid', async () => {
        vi.mocked(fs.promises.readFile).mockResolvedValue(invalidJson);
        const promise = readJsonFile('/path');

        await expect(promise).rejects.toThrow('File contains invalid JSON');
    })
});