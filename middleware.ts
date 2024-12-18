import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

export default createMiddleware({
  locales: locales,
  defaultLocale: 'en',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/', '/(lt|en)/:path*'],
};
