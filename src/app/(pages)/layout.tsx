import React from "react";
import GlobalNav from "@/_shared/components/GlobalNav";

export default function Layout({children}: {children: React.ReactNode;}) {
  return (
    <section style={{ padding: 16 }}>
      <GlobalNav>
        {children}
      </GlobalNav>
    </section>
  );
}