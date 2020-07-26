// @ts-nocheck
export function conditional_contains_stale_flag() {
  if (experimentation.isToggleEnabled(TestExperimentName.STALE_FLAG)) {
    console.log("Hello World");
  }
}