import Link from "next/link";


export default function GlobalNav({ children }: { children: React.ReactNode; }) {
  return <section>
    <h1>
      <Link href={`/`}>Vercel Cookies 検証</Link>
    </h1>
    <section style={{ display: "flex", gap: 16 }}>
      <div style={{ columnWidth: 140 }}>
        <ul>
          <li>
            <Link href="/rsc_cookies">RSC
              Cookies</Link>
          </li>
          <li>
            <Link href="/rcc_cookies">RCC
              Cookies</Link>
          </li>
        </ul>
      </div>
      <div style={{ width: "100%", }}>
        {children}
      </div>
    </section>
  </section>;
}