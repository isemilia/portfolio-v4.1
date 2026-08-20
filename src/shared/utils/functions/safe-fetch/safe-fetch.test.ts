import { afterEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import safeFetch from "./safe-fetch";

const schema = z.object({
    name: z.string()
});
const failSchema = z.object({
    firstName: z.string()
});
const data = { name: 'Emilia' }

describe('safeFetch function', () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('returns parsed data when the request succeeds', async () => {
        const response = {
            ok: true,
            json: vi.fn().mockResolvedValue({ data })
        }

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response))

        const result = await safeFetch({
            url: '/api/users',
            schema
        })

        expect(result).toEqual({ data, status: 'success' });
    })

    it('returns error status if request fails', async () => {
        const response = { ok: false };

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));

        const result = await safeFetch({
            url: '/api/users',
            schema
        })

        expect(result).toEqual({ message: 'Failed to fetch data', status: 'error' });
    });

    it('returns error if schema parsing fails', async () => {
        const response = {
            ok: true,
            json: vi.fn().mockResolvedValue({ data })
        }

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(response));

        const result = await safeFetch({
            url: '/api/users',
            schema: failSchema
        });

        expect(result).toEqual({
            status: 'error',
            message: 'Something went wrong',
        });
    });

    it('returns error if fetch fails', async () => {
        const error = new Error('Network error');

        vi.stubGlobal('fetch', vi.fn().mockRejectedValue(error));

        const result = await safeFetch({
            url: '/api/users',
            schema
        });

        expect(result).toEqual({
            status: 'error',
            message: 'Something went wrong',
        })
    });
});