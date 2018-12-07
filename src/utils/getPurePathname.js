export const getPurePathname = function(pathname) {
  if (pathname === "/") {
    return 'home'
  } else {
    return pathname.replace(/\//g, '')
  }
}
