import { g as getContext, c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const error = $page;
  $$unsubscribe_page();
  return `${error.status === 404 ? `<div data-svelte-h="svelte-fftctf">Not Found</div>` : `${error.status === 500 ? `<div data-svelte-h="svelte-iy0qo0">Internal error server</div>` : ``}`}`;
});
export {
  Error$1 as default
};
