"use client";
import {
  deleteCookie,
  readCookie,
  writeCookie
} from "@/app/rsc_cookies/actions";


export default function Page() {
  return <main>
    <h2>RSC(ReactServerComponent)Cookies</h2>
    <ul>
      <li>
        <form onSubmit={async event => {
          event.preventDefault();
          const result = await writeCookie();
          console.log("result", result);
        }}>
          <button>Cookie書き込み</button>
        </form>
      </li>
      <li>
        <form onSubmit={async event => {
          event.preventDefault();
          const result = await readCookie();
          console.log("result", result);
        }}>
          <button>Cookie読み取り</button>
        </form>
      </li>
      <li>
        <form onSubmit={async event => {
          event.preventDefault();
          const result = await deleteCookie();
          console.log("result", result);
        }}>
          <button>Cookie削除</button>
        </form>
      </li>
    </ul>
  </main>
}