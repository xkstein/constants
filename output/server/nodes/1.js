

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8wGXGa8z.js","_app/immutable/chunks/scheduler.k512rgSQ.js","_app/immutable/chunks/index.5X1g6PYS.js","_app/immutable/chunks/entry.WwLR6591.js"];
export const stylesheets = [];
export const fonts = [];
