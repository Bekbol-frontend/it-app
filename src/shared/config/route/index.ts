export enum AppRoutes {
  HOME = "HOME",
  ABOUT = "ABOUT",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.ABOUT]: "/about",
};
