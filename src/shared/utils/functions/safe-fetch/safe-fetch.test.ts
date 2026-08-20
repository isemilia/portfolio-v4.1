import { afterEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import safeFetch from "./safe-fetch";

describe('safeFetch function', () => {
    afterEach(() => {
        vi.restoreAllMocks();
    })

    it('returns parsed data when the request succeeds', async () => {
        const schema = z.object({
            name: z.string()
        });
        const data = { name: 'Emilia' }
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
})