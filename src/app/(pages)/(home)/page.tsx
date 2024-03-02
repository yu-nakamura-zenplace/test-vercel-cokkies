import Link from "next/link";
import GlobalNav from "@/_shared/components/GlobalNav";

export const revalidate = 5; // キャッシュのライフタイム1秒

export default function Page() {
  return (
    <main>
      <h2>検証内容</h2>
      <p>localではRSCでもRCCでもCookie読み書きできるが、Vercelドメインではできない可能性がある？</p>
      <h2>検証結果</h2>
      <h3>local</h3>
      <p>{`RSC/RCC両方ともCookies読み書き可能`}</p>
      <h3>vercel</h3>
      <h4>preview</h4>
      <p>{`◯◯◯`}</p>
      <h4>本番</h4>
      <p>{`◯◯◯`}</p>
    </main>
  );
}