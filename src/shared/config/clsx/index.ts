export type TYPE_MODS = Record<string, boolean>;

export function clsx(classes: string[] = [], mods: TYPE_MODS = {}): string {
  return [
    ...classes,
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key, _]) => key),
  ].join(" ");
}
