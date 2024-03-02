import Link from "next/link";
import { classnames } from "@/app/classnames";

export default function Page() {
  return (
    <main>
      <h1>Vercel Cookies 検証</h1>
      <p>localではRSCでもRCCでもCookie読み書きできるが、Vercelドメインではできない可能性がある？</p>
      <h2>検証</h2>
      <ul>
        <li>
          <Link className={classnames.link} href="/rsc_cookies">RSC(ReactServerComponent)Cookies</Link>
        </li>
        <li>
          <Link className={classnames.link} href="/rcc_cookies">RCC(ReactClientComponent)Cookies</Link>
        </li>
      </ul>
      
    </main>
  );
}