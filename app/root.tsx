import type { MetaFunction, LoaderArgs, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import i18next from "@/i18next.server";
import { json } from "@remix-run/node";
import { useEffect } from "react";

import styles from "@/glossy/app.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const loader = async ({ request }: LoaderArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export const handle = {
  i18n: "common",
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale).then(() => {
      console.log("Language changed to", locale);
    });
  }, [locale, i18n]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <title>Liag - Life is a game</title>
        <Meta />
        <Links />
      </head>
      <body className={"bg-zinc-800 text-light"}>
        <div className={"mx-auto w-full px-4 py-20 md:w-[740px]"}>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
