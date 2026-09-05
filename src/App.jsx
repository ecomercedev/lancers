import './App.css'

const CHATWORK_ID = '14spx1779e20n'

function App() {
  return (
    <main className="page">
      <article className="note">
        <p className="eyebrow">ご連絡</p>
        <h1 className="title">進め方について</h1>

        <div className="body">
          <p>
            こんにちは。以前うまく伝えきれていなかったと思うので、こちらの進め方のイメージを改めて整理させてください。
          </p>

          <p>
            案件のリサーチと提案文の作成は、こちらで担当します。お渡しするものは、たとえば次のような形です。
          </p>

          <div className="example" aria-label="提案バッチの例">
            <a
              className="job-link"
              href="https://www.lancers.jp/work/detail/5582266"
              target="_blank"
              rel="noreferrer"
            >
              https://www.lancers.jp/work/detail/5582266
            </a>
            <span className="placeholder">【提案文】</span>
            <br />
            <br />
            <a
              className="job-link"
              href="https://www.lancers.jp/work/detail/XXXXXXX"
              target="_blank"
              rel="noreferrer"
            >
              https://www.lancers.jp/work/detail/XXXXXXX
            </a>
            <span className="placeholder">【提案文】</span>
          </div>

          <p>
            1件のリンクに、そのまま出せる提案文を1本。まとめて数件ずつお送りします。案件ページを開いて内容をご確認いただき、問題なければご投稿ください。合わないものがあればスキップしていただいて構いません。ご確認前に勝手に送ることはありません。
          </p>

          <p>クライアントから返信があったら、実装はこちらで担当します。</p>

          <p>
            ひとつお願いがあります。クライアントには、最初の段階で「実装はチームの開発担当が行う」とお伝えいただけますか。デザインはあなた、実装は私、という役割分担です。あとから出てくるより、最初からオープンにしておいた方がよいと思っています。アカウントと信頼はあなたのものですので、そこにリスクを抱えさせたくありません。
          </p>

          <p>
            報酬の配分については、最初の案件が決まったタイミングで、スコープを見ながら相談できればと思います。ご希望があればぜひ教えてください。
          </p>

          <div className="chatwork">
            <p className="chatwork-label">Chatworkでご連絡ください</p>
            <p className="chatwork-id">{CHATWORK_ID}</p>
          </div>

          <p className="closing">
            今週中に、最初の提案セットをお送りします。よろしいでしょうか？
          </p>
        </div>
      </article>
    </main>
  )
}

export default App
