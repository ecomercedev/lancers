import './App.css'

const CHATWORK_ID = '14spx1779e20n'

function App() {
  return (
    <main className="page">
      <article className="note">
        <p className="eyebrow">A quick note</p>
        <h1 className="title">How I&apos;m picturing this</h1>

        <div className="body">
          <p>
            Hi — let me lay out how I&apos;m picturing this, since I don&apos;t
            think I explained it clearly before.
          </p>

          <p>
            I&apos;ll do the searching and the writing. What you&apos;d get from
            me is a batch like this:
          </p>

          <div className="example" aria-label="Example batch format">
            <a
              className="job-link"
              href="https://www.lancers.jp/work/detail/5582266"
              target="_blank"
              rel="noreferrer"
            >
              https://www.lancers.jp/work/detail/5582266
            </a>
            <span className="placeholder">[proposal text]</span>
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
            <span className="placeholder">[proposal text]</span>
          </div>

          <p>
            One link, one ready-to-go proposal, a few at a time. You open the job
            page, read what I&apos;ve written, and if you&apos;re comfortable
            with it, submit it. If you&apos;re not, skip it — no hard feelings
            either way. Nothing goes out that you haven&apos;t read first.
          </p>

          <p>When a client responds, I handle the build.</p>

          <p>
            One thing I&apos;d ask: please let the client know there&apos;s a
            developer on the team handling implementation. You on design, me on
            the build. I&apos;d rather that be out in the open from the start
            than have it come up later — it&apos;s your account and your
            reputation on the line, and I don&apos;t want to put that at risk.
          </p>

          <p>
            On the split, let&apos;s talk numbers once the first job actually
            lands, since it&apos;ll depend on the scope. Happy to hear what you
            have in mind.
          </p>

          <div className="chatwork">
            <p className="chatwork-label">Let&apos;s chat via Chatwork</p>
            <p className="chatwork-id">{CHATWORK_ID}</p>
          </div>

          <p className="closing">
            I&apos;ll send the first batch over this week. Sound good?
          </p>
        </div>
      </article>
    </main>
  )
}

export default App
