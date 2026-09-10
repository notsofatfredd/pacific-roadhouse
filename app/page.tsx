import Image from 'next/image';

const phoneDisplay = '021 370 9914';
const phoneLink = 'tel:+27213709914';
const directionsLink = 'https://www.google.com/maps/search/?api=1&query=Pacific+Road+House+Jakes+Gerwel+Drive+Cape+Town';

const localFavourites = [
  { number: '01', title: 'Gatsbys', kicker: 'The Cape Town classic', copy: 'Big Cape Town energy. Call the shop to hear what is on today.', image: '/food/food-study-gatsby-v1.png', alt: 'Concept study of a loaded gatsby sandwich' },
  { number: '02', title: 'Hake & chips', kicker: 'Crisp, hot, direct', copy: 'A provisional visual study for the counter favourites section.', image: '/food/food-study-hake-chips-v1.png', alt: 'Concept study of hake and chips' },
  { number: '03', title: 'Steak sandwich', kicker: 'Loaded and direct', copy: 'Built around the generous sandwich energy people associate with the shop.', image: '/food/food-study-steak-sandwich-v1.png', alt: 'Concept study of a steak sandwich' },
  { number: '04', title: 'Fried chicken', kicker: 'Cake box concept', copy: 'The box is a visual direction only. Call the counter for today\'s menu.', image: '/food/food-study-chicken-v1.png', alt: 'Concept study of fried chicken in a bakery box' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <div className="utility-bar"><p>Pacific Business Park · Jakes Gerwel Drive · Cape Town</p><a href={phoneLink}>Call {phoneDisplay}</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pacific Roadhouse home"><Image src="/brand/wordmark.svg" alt="Pacific Roadhouse" width={1800} height={650} priority /></a>
        <nav aria-label="Main navigation"><a href="#favourites">The big four</a><a href="#story">Our way</a><a href="#visit">Find us</a></nav>
        <a className="button button-small button-orange" href={phoneLink}>Call the shop <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">A proper Cape Town takeaway</p>
          <h1>Order<span>the whole box.</span></h1>
          <p className="hero-intro">Gatsbys. Pizza. Sandwiches. Fried chicken. This is a phone-order situation, so call the counter and get the good stuff.</p>
          <div className="hero-actions"><a className="button button-orange" href={phoneLink}>Call for today&apos;s menu <Arrow /></a><a className="button button-ghost" href={directionsLink} target="_blank" rel="noreferrer">Get directions <Arrow /></a></div>
          <p className="microcopy">Concept preview · call for today&apos;s menu and availability.</p>
        </div>
        <div className="hero-art hero-food" aria-label="Concept image of fried chicken in a bakery box">
          <span className="stamp stamp-top">24 pieces</span>
          <div className="food-frame"><Image src="/brand/cake-box-chicken-concept.png" alt="Concept: fried chicken piled into an open white bakery box" fill priority sizes="(max-width: 780px) 92vw, 48vw" /><span className="concept-tag">Concept image · not the current menu</span></div>
          <span className="stamp stamp-bottom">Cake box energy</span>
        </div>
      </section>

      <section className="promise-strip" aria-label="Pacific Roadhouse essentials"><div><strong>01</strong><span>Phone order</span></div><div><strong>02</strong><span>Proper portions</span></div><div><strong>03</strong><span>Bakery box chicken</span></div></section>

      <section className="favourites section" id="favourites">
        <div className="section-heading"><div><p className="eyebrow">The big four</p><h2>Pick your mood.</h2></div><p>A visual menu for a place where the real menu lives on the phone. No prices in this concept: call the shop and ask what is hot today.</p></div>
        <div className="favourite-grid">{localFavourites.map((item) => <article className="favourite-card" key={item.number}><div className="card-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 780px) 90vw, 42vw" /></div><div className="card-copy"><span className="card-number">{item.number}</span><span className="card-kicker">{item.kicker}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="concept-label">Concept study · confirm at the counter</span></div><span className="card-line" aria-hidden="true" /></article>)}</div>
      </section>

      <section className="manifesto section" id="story"><div className="manifesto-mark" aria-hidden="true"><Image src="/brand/mark-white.svg" alt="" width={1000} height={1000} /></div><div className="manifesto-copy"><p className="eyebrow light">The Pacific way</p><h2>Good food doesn&apos;t need a speech.</h2><p>It should be hot, generous and worth what you paid. That is the standard: familiar Cape Town food, served without pretending to be something it isn&apos;t.</p><div className="manifesto-rule"><span>Proper portions</span><span>Real value</span><span>Made for Cape Town</span></div></div></section>

      <section className="visit section" id="visit"><div className="visit-intro"><p className="eyebrow">Find the counter</p><h2>Right here at Pacific Business Park.</h2><p>Stop in for takeaway, or call the shop to confirm today&apos;s menu, availability and trading hours.</p></div><div className="visit-panel"><div className="visit-detail"><span>Address</span><p>Pacific Business Park<br />Jakes Gerwel Drive<br />Cape Town, 7750</p></div><div className="visit-detail"><span>Telephone</span><a href={phoneLink}>{phoneDisplay}</a></div><div className="visit-detail"><span>Before you leave</span><p>Call to confirm today&apos;s menu and closing time.</p></div><div className="visit-actions"><a className="button button-orange" href={phoneLink}>Call now <Arrow /></a><a className="button button-navy" href={directionsLink} target="_blank" rel="noreferrer">Open in Maps <Arrow /></a></div></div></section>

      <footer><Image src="/brand/wordmark.svg" alt="Pacific Roadhouse" width={1800} height={650} /><p>Big flavour. Fair value. No fuss.</p><div><a href={phoneLink}>{phoneDisplay}</a><a href="#top">Back to top ↑</a></div></footer>
      <div className="mobile-dock"><a href={phoneLink}>Call for menu</a><a href={directionsLink} target="_blank" rel="noreferrer">Directions</a></div>
    </main>
  );
}
