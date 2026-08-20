import { describe, expect, it } from "vitest";
import formatDate from "./format-date";

describe('formatDate', () => {
    it('returns the date in dd.mm.yyyy format', () => {
        expect(formatDate({ date: new Date(1787067054023) })).toBe('18.08.2026');
        expect(formatDate({ date: '15 Aug 2023' })).toBe('15.08.2023');
        expect(formatDate({ date: '08.25.18' })).toBe('25.08.2018');
    });

    it('returns the \'Invalid Date\' if the date is invalid', () => {
        expect(formatDate({ date: '28.08.2026' })).toBe('Invalid Date');
        expect(formatDate({ date: 'foo' })).toBe('Invalid Date');
    })
})