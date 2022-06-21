import { initState } from "../observer";

export const keyList = ['a', 's', 'd', 'j', 'k', 'l'];
export const keyStateList = keyList.map(
  key => initState({
    key: `key_${key}`,
    values: false,
  }));
    