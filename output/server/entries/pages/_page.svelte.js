import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../chunks/ssr.js";
const constants = {
  "natural unit of action": {
    nickname: "hbar",
    values: {
      "J s": 1054571817e-43,
      "eV s": 6582119569e-25
    }
  },
  "vacuum electric permittivity": {
    nickname: "epsilon_0",
    values: {
      "F m^-1": 88541878128e-22
    }
  },
  "Bohr radius": {
    nickname: "a_0",
    values: {
      m: 529177210903e-22
    }
  },
  "electron mass": {
    nickname: "m_e",
    values: {
      kg: 91093837015e-41,
      J: 81871057769e-24,
      MeV: 0.51099895,
      u: 548579909065e-15
    }
  },
  "elementary charge": {
    nickname: "e_c",
    values: {
      C: 1602176634e-28,
      "A J^-1": 1519267447e6
    }
  },
  "speed of light in vacuum": {
    nickname: "c",
    values: {
      "m s^-1": 299792458
    }
  }
};
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let output = "";
  const state = {};
  Object.entries(constants).forEach((entry) => {
    let units = Object.keys(entry[1].values)[0];
    state[entry[0]] = { units, "checked": false };
  });
  return `<fieldset><legend data-svelte-h="svelte-qeyyll">Choose your constants</legend> ${each(Object.entries(constants), ([name, data]) => {
    return `<div><input type="checkbox"${add_attribute("checked", state[name].checked, 1)}> <label>${escape(name)} (${escape(data.nickname)})</label> ${escape(expo(data.values[state[name].units], 2))} <select>${each(Object.keys(data.values), (unit) => {
      return `<option${add_attribute("value", unit, 0)}>${escape(unit)}</option>`;
    })}</select> </div>`;
  })}</fieldset> <select><option value="desmos" data-svelte-h="svelte-kntbxp">desmos</option><option value="python" data-svelte-h="svelte-1fk3146">python</option><option value="mathematica" data-svelte-h="svelte-h2fes2">mathematica</option></select> <pre contenteditable="true">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(output)}</pre>`;
});
export {
  Page as default
};
