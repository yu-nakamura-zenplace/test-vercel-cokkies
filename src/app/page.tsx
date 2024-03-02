import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Vercel Cookies 検証</h1>
      <h2>localではRSCでもRCCでもCookie読み書きできるが、Vercelドメインではできない可能性がある？</h2>
      <h3>検証</h3>
      <ul>
        <li>
          <Link href="/rsc_cookies">RSC(ReactServerComponent)Cookies</Link>
        </li>
        <li>
          <Link href="/rcc_cookies">RCC(ReactClientComponent)Cookies</Link>
        </li>
      </ul>
      
    </main>
  );
}