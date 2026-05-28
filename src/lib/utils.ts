/** Returns the correct animation class based on whether element is in view. */
export function inView(isInView: boolean): string {
  return isInView ? 'animate-fade-in-up' : 'opacity-0'
}
