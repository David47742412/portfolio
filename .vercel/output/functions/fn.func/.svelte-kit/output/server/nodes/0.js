

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.X99eFLUw.js","_app/immutable/chunks/scheduler.m2oT1KzE.js","_app/immutable/chunks/index.KaB6U251.js"];
export const stylesheets = [];
export const fonts = [];
