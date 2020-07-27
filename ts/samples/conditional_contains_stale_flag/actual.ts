import { Experimentation, ALWAYS_TRUE } from '../experimentation'

export function conditional_contains_stale_flag() {
  if (Experimentation.isToggleEnabled(ALWAYS_TRUE)) {
    console.log("Hello World");
  }
}