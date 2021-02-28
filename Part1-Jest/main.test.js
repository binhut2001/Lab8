const formatVolumeIconPath = require('../assets/scripts/main');

test("volume greater than 66 test", () => {
    expect(formatVolumeIconPath(70)).toBe(`./assets/media/icons/volume-level-3.svg`)
});

test("volume greater than 33 test", () => {
    expect(formatVolumeIconPath(40)).toBe(`./assets/media/icons/volume-level-2.svg`)
});

test("volume greater than 0 test", () => {
    expect(formatVolumeIconPath(10)).toBe(`./assets/media/icons/volume-level-1.svg`)
});

test("volume 0 test", () => {
    expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`)
});
