import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, For } from "solid-js";
import { useWindowSize } from "@solid-primitives/resize-observer";

import * as Dict from "~/i18n/navbar";
import { useLocale, useTranslator } from "~/locale";
import Logo from "../assets/logo.svg?inline";

function NavLink(props: { title: string, href: string }) {
  return (
    <A href={props.href} class="px-6 lg:px-0 lg:mx-2 py-2 lg:py-0 leading-8 lg:inline-block block border-b lg:border-none border-b-gray-700 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:translate-y-1 lg:after:translate-y-0 after:w-full after:border-b-2 after:border-primary after:opacity-0 after:transition-opacity hover:after:opacity-100 [&.active]:after:opacity-100">
      {props.title}
    </A>
  );
}

function ExternalNavLink(props: { title: string, href: string }) {
  return (
    <a href={props.href} class="px-6 lg:px-0 lg:mx-2 py-2 lg:py-0 leading-8 lg:inline-block block border-b lg:border-none border-b-gray-700 cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:w-full after:border-b-2 after:border-primary after:opacity-0 after:transition-opacity hover:after:opacity-100 [&.active]:after:opacity-100" target="_blank">
      {props.title}
    </a>
  );
}

function DropdownNavLink(props: { title: string, items: { title: string, href: string }[] }) {
  const [open, setOpen] = createSignal(false);

  return (
    <div
      class="relative px-6 lg:px-0 lg:mx-2 border-b lg:border-none border-b-gray-700"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span
        class="py-2 lg:py-0 leading-8 flex items-center cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:translate-y-1 lg:after:translate-y-0 after:w-full after:border-b-2 after:border-primary after:opacity-0 after:transition-opacity hover:after:opacity-100"
        onClick={() => setOpen(!open())}
      >
        {props.title}<span class="ml-1 text-xs opacity-70">▾</span>
      </span>
      <div
        class="lg:absolute lg:top-full lg:left-0 lg:bg-black lg:shadow-lg lg:py-1 lg:min-w-max lg:z-50"
        classList={{ "hidden": !open() }}
      >
        <For each={props.items}>{(item) =>
          <a href={item.href} class="block py-1 lg:px-4 lg:py-2 text-sm hover:text-primary" target="_blank">{item.title}</a>
        }</For>
      </div>
    </div>
  );
}

function LanguageButton() {
  const locale = useLocale();
  const location = useLocation();

  const toggleLanguage = () => {
    if (locale() === "zh") {
      window.location.href = location.pathname.replace("/2026/zh/", "/2026/en/");
    } else {
      window.location.href = location.pathname.replace("/2026/en/", "/2026/zh/");
    }
  }

  return (
    <a class="mx-2 h-8 leading-8 inline-block cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[2px] after:w-full after:border-b-2 after:border-primary after:opacity-0 after:transition-opacity hover:after:opacity-100" onClick={toggleLanguage}>
      {locale() === "zh" ? "EN" : "中文"}
    </a>
  );
}

export function Navbar() {
  const locale = useLocale();
  const t = useTranslator(Dict);

  const [menuExpandable, setMenuExpandable] = createSignal(false);
  const [menuExpanded, setMenuExpanded] = createSignal(false);

  const size = useWindowSize();

  createEffect(() => {
    if (size.width < 1024) {
      setMenuExpandable(true);
      setMenuExpanded(false);
    } else {
      setMenuExpandable(false);
      setMenuExpanded(false);
    }
  });

  const toggleMenu = () => {
    if (!menuExpandable()) return;
    setMenuExpanded(!menuExpanded());
  };

  return (
    <nav class="bg-black text-white text-sm h-20 px-6 w-full flex flex-row items-center relative">
      <div class="flex-none mr-4 h-full flex flex-col justify-center">
        <img class="w-48 inline-block" src={Logo} alt="logo" />
      </div>
      <div class="flex-1 lg:flex-0"></div>
      <div class="absolute hidden lg:block lg:relative lg:flex-1 left-0 top-full lg:top-0 w-full lg:w-auto min-h-[calc(100vh-80px)] lg:min-h-0 lg:h-auto z-50 bg-black" classList={{ "!block": menuExpanded() }} onClick={toggleMenu}>
        <NavLink href={`/2026/${locale()}/`} title={t("Home")!} />
        <NavLink href={`/2026/${locale()}/callforpaper`} title={t("CallForPaper")!} />
        <NavLink href={`/2026/${locale()}/venue`} title={t("Venue")!} />
        <DropdownNavLink title={t("History")!} items={[
          { title: "ChinaVis 2025", href: "https://chinavis.org/2025/" },
          { title: "ChinaVis 2024", href: "https://chinavis.org/2024/" },
          { title: locale() === "en" ? "More" : "更多", href: `https://chinavis.org/history${locale() == "en" ? "_en" : ""}.html` },
        ]} />
      </div>

      <div class="flex-none h-full flex flex-col justify-center">
        <LanguageButton />
      </div>
      <button class="lg:hidden flex-none ml-2 w-8 h-8 relative text-center rounded border border-gray-400 text-xl" classList={{ "bg-gray-800 border-primary": menuExpanded() }} onClick={toggleMenu}><span class="absolute -mt-0.5 top-1/2 left-1/2 -translate-1/2">&#9776;</span></button>
    </nav>
  );
}
