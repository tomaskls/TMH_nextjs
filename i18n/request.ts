import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;  // Pakeista ši eilutė - pašalinome ()
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Europe/Vilnius'
  };
});