"use client";

import { useMemo, useState } from "react";

const titles = [
  { title: "Kito: The First Journey", type: "African Originals", year: "2026", tag: "TOK FLIX Original", art: "kito", description: "A young dreamer discovers that courage can change the future." },
  { title: "The Last Kingdom", type: "Drama", year: "2025", tag: "Popular", art: "kingdom", description: "A kingdom faces its greatest test when old secrets return." },
  { title: "City of Dreams", type: "Drama", year: "2026", tag: "New", art: "city", description: "One city. Many stories. A chance to begin again." },
  { title: "Wild Frontier", type: "Adventure", year: "2025", tag: "Trending", art: "wild", description: "An unforgettable adventure across a breathtaking landscape." },
];

const categories = ["All", "African Originals", "Drama", "Adventure"];

export default function Home() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<(typeof titles)[number] | null>(null);
  const visible = useMemo(() => titles.filter((item) =>
    (category === "All" || item.type === category) &&
    (item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
  ), [category, search]);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="TOK FLIX home"><span className="brand-mark">T</span><span>TOK <b>FLIX</b></span></a>
        <nav className="main-nav"><a className="active" href="#home">Home</a><a href="#trending">Trending</a><a href="#originals">TOK FLIX Originals</a></nav>
        <div className="top-actions">
          <label className="search-box"><span>⌕</span><input aria-label="Search titles" placeholder="Search movies..." value={search} onChange={(e) => setSearch(e.target.value)} /></label>
          <button className="profile-button" aria-label="Profile">👤</button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-art" aria-hidden="true"><div className="sun" /><div className="mountain mountain-back" /><div className="mountain mountain-front" /><div className="hero-haze" /></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="live-dot" /> THE TOK FLIX FEATURE</div>
          <p className="hero-kicker">A STORY THAT TAKES YOU FURTHER</p>
          <h1>Beyond the<br /><em>Horizon</em></h1>
          <p className="hero-copy">Every journey begins with a story. Discover a world of unforgettable moments, bold adventures, and stories that stay with you.</p>
          <div className="hero-meta"><span>2026</span><span className="meta-dot">•</span><span>Adventure</span><span className="meta-dot">•</span><span>Featured</span></div>
          <div className="hero-buttons"><button className="primary-button" onClick={() => setSelected({ title: "Beyond the Horizon", type: "Featured", year: "2026", tag: "Featured film", art: "horizon", description: "A journey beyond everything you know. Video playback will be available when the film is added to your library." })}><span>▶</span> Explore featured film</button><a className="secondary-button" href="#trending">Explore titles <span>→</span></a></div>
        </div>
        <div className="hero-caption"><span>01</span><span className="caption-line" /><span>BEYOND THE HORIZON</span></div>
      </section>

      <section className="content-section" id="trending">
        <div className="section-heading"><div><p className="section-kicker">WHAT TO WATCH</p><h2>Trending <span>now</span></h2></div><a href="#originals" className="view-all">Explore collection <span>→</span></a></div>
        <div className="filter-row" role="group" aria-label="Filter titles">{categories.map((item) => <button key={item} className={category === item ? "filter-chip selected" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="title-grid">
          {visible.map((item, index) => <article className="title-card" key={item.title}>
            <button className={`poster poster-${item.art}`} onClick={() => setSelected(item)} aria-label={`View ${item.title}`}>
              <span className="poster-number">0{index + 1}</span><span className="poster-tag">{item.tag}</span><span className="poster-play">▶</span><span className="poster-title">{item.title}</span>
            </button>
            <div className="card-details"><div><h3>{item.title}</h3><p>{item.type} <span>·</span> {item.year}</p></div><button className="more-button" onClick={() => setSelected(item)} aria-label={`More about ${item.title}`}>···</button></div>
          </article>)}
          {visible.length === 0 && <p className="empty-state">No titles match your search. Try another title or category.</p>}
        </div>
      </section>

      <section className="originals-band" id="originals"><div><p className="section-kicker">MADE FOR YOUR SCREEN</p><h2>Stories with a <em>homegrown</em> heartbeat.</h2><p>Discover fresh voices, original adventures, and stories from across Africa and beyond.</p></div><a className="primary-button" href="#trending">Discover originals <span>→</span></a></section>
      <footer className="footer"><a className="brand" href="#"><span className="brand-mark">T</span><span>TOK <b>FLIX</b></span></a><span>Stories beyond imagination.</span><span>© 2026 TOK FLIX</span></footer>

      {selected && <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}><section className="title-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">×</button><p className="section-kicker">{selected.tag}</p><h2 id="modal-title">{selected.title}</h2><p>{selected.description}</p><div className="modal-note">This is a catalogue preview. Add your licensed video in the TOK FLIX media library to enable playback.</div><button className="primary-button" onClick={() => setSelected(null)}>Got it</button></section></div>}
    </main>
  );
}
