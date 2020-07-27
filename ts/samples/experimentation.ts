
export class Experimentation {
  public isToggleEnabled(flag: string) {
    return !/stale/i.test(flag);
  }
}

export function getInstance() {
  return new Experimentation();
}

export const ALWAYS_FALSE = 'always_false';
export const ALWAYS_TRUE = 'always_true';