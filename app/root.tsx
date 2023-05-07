import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import stylesheet from '~/tailwind.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preload', href: '/public/images/Header.png', as: 'image' },
];

export default function Root() {
  return (
    <html lang='en' className='h-full'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='h-full bg-neutral-800 font-montserrat'>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
