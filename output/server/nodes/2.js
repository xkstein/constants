

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.zN7X1OF5.js","_app/immutable/chunks/scheduler.k512rgSQ.js","_app/immutable/chunks/index.5X1g6PYS.js"];
export const stylesheets = [];
export const fonts = [];
