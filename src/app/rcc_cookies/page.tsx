"use client";
import {
  removeCookie,
  readCookie,
  writeCookie
} from "./functions";


export default function Page() {
  return <main>
    <h2>RSC(React Client Component)Cookies</h2>
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
          const result = await removeCookie();
          console.log("result", result);
        }}>
          <button>Cookie削除</button>
        </form>
      </li>
    </ul>
  </main>
}