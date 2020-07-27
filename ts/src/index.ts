// @ts-expect-error
export function always<T>(expected: T, expression: () => T) {
}
// @ts-expect-error
export function never<T>(expected: T, expression: () => T) {
}