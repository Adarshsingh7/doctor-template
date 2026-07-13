"use client";

import { useCallback, useState } from "react";

export function StitchFrame({
  html,
  title,
}: Readonly<{
  html: string;
  title: string;
}>) {
  const [height, setHeight] = useState("100dvh");

  const resize = useCallback((frame: HTMLIFrameElement | null) => {
    if (!frame?.contentDocument?.documentElement) return;

    const update = () => {
      const doc = frame.contentDocument;
      if (!doc) return;
      const nextHeight = Math.max(
        doc.documentElement.scrollHeight,
        doc.body?.scrollHeight ?? 0,
        window.innerHeight,
      );
      setHeight(`${nextHeight}px`);
    };

    update();
    window.setTimeout(update, 250);
    window.setTimeout(update, 1000);
  }, []);

  return (
    <iframe
      className="block w-full border-0"
      srcDoc={html}
      title={title}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      style={{ height }}
      onLoad={(event) => resize(event.currentTarget)}
    />
  );
}
