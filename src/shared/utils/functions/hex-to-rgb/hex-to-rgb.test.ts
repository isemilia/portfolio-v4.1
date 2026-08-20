import { describe, expect, it } from "vitest";
import hexToRgb from "./hex-to-rgb";

describe('hexToRgb function', () => {
    it('converts hex value to rgb', () => {
        expect(hexToRgb('1d05fc')).toBe('29, 5, 252');
        expect(hexToRgb('#78cc87')).toBe('120, 204, 135');
    })
});