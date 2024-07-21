// import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// export const darkAtom = atom(false);
export const countAtom = atomWithStorage("theme", false);
