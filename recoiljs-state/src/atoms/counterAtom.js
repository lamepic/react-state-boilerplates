import { atom } from "recoil";

// create atoms to store state
export const counterState = atom({
  key: "counterState",
  default: 0,
});
