import Image from 'next/image';

const phoneDisplay = '021 370 9914';
const phoneLink = 'tel:+27213709914';
const directionsLink = 'https://www.google.com/maps/search/?api=1&query=Pacific+Road+House+Jakes+Gerwel+Drive+Cape+Town';

const categories = [
  { number: '01', title: 'Gatsby', label: 'Loaded · messy · serious hunger', copy: 'Big Cape Town energy, built for the stop.', image: '/food/hero-gatsby.png', accent: 'orange' },
  { number: '02', title: 'Pizza', label: 'Hot · crisp · made to disappear', copy: 'A whole-table mood with a blistered edge.', image: '/food/pizza.png', accent: 'gold' },
  { number: '03', title: 'Burgers', label: 'Grilled · stacked · unapologetic', copy: 'Roadhouse comfort with the volume turned up.', image: '/food/burger.png', accent: 'blue' },
  { number: '04', title: 'Sandwiches', label: 'Toasted · generous · direct', copy: 'Comfort between two slices, no speech required.', image: '/food/sandwich.png', accent: 'cream' },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <div className="utility-bar"><p>Pacific Business Park · Jakes Gerwel Drive · Cape Town</p><a href={phoneLink}>Call {phoneDisplay}</a></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pacific Roadhouse home"><Image src="/brand/wordmark.svg" alt="Pacific Roadhouse" width={1800} height={650} priority /></a>
        <nav aria-label="Main navigation"><a href="#menu">Menu</a><a href="#story">Food story</a><a href="#visit">Find us</a></nav>
        <a className="button button-small button-orange" href={phoneLink}>Call the shop <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy"><p className="eyebrow light">A proper Cape Town takeaway</p><h1>Big food.<span>Good energy.</span></h1><p className="hero-intro">Roadhouse favourites, done properly. Come hungry, call ahead, and make the stop worth it.</p><div className="hero-actions"><a className="button button-orange" href="#menu">View the menu <Arrow /></a><a className="button button-ghost" href={directionsLink} target="_blank" rel="noreferrer">Find us <Arrow /></a></div><p className="microcopy">Walk in or call · no online ordering</p></div>
        <div className="hero-art" aria-label="Concept image of a loaded Gatsby sandwich"><div className="hero-ring" aria-hidden="true" /><div className="hero-food-frame"><Image src="/food/hero-gatsby.png" alt="Concept study of a loaded Gatsby sandwich" fill priority sizes="(max-width: 780px) 94vw, 58vw" /><span className="concept-tag">Food concept · confirm at the counter</span></div><span className="stamp stamp-top">Come hungry</span><span className="stamp stamp-bottom">01 / Gatsby</span></div>
      </section>

      <section className="menu section" id="menu"><div className="section-heading"><div><p className="eyebrow">The four moods</p><h2>Pick your<br /><span>hunger.</span></h2></div><p>Four food worlds. One good reason to pull in. These are visual concept studies, so call the shop for today&apos;s menu, prices, and availability.</p></div><div className="category-grid">{categories.map((item) => <a className={`category-card ${item.accent}`} href={`#${item.title.toLowerCase()}`} key={item.number}><div className="category-image"><Image src={item.image} alt={`Concept study of ${item.title}`} fill sizes="(max-width: 780px) 92vw, 45vw" /></div><div className="category-copy"><span className="card-number">{item.number}</span><span className="card-label">{item.label}</span><h3>{item.title}</h3><p>{item.copy}</p><span className="category-arrow"><Arrow /></span></div></a>)}</div></section>

      <section className="story section" id="story"><div className="story-heading"><p className="eyebrow light">Food in motion</p><h2>See it.<br /><span>Feel hungry.</span></h2><p>The closer you look, the better it gets: toasted edges, melted cheese, heat off the tray, and the first bite waiting at the counter.</p></div><div className="story-grid"><figure className="story-large"><Image src="/food/detail-sandwich.png" alt="Close-up concept study of toasted sandwich texture" fill sizes="(max-width: 780px) 92vw, 56vw" /><figcaption>01 · Toasted comfort</figcaption></figure><figure><Image src="/food/detail-pizza.png" alt="Close-up concept study of pizza crust and melted cheese" fill sizes="(max-width: 780px) 45vw, 25vw" /><figcaption>02 · Crisp edges</figcaption></figure><figure><Image src="/food/detail-fries.png" alt="Close-up concept study of hot golden fries" fill sizes="(max-width: 780px) 45vw, 25vw" /><figcaption>03 · Hot off the tray</figcaption></figure></div></section>

      <section className="refreshment section"><div className="refreshment-image"><Image src="/food/drinks.png" alt="Concept study of a cold drink and chips on a diner counter" fill sizes="(max-width: 780px) 92vw, 44vw" /></div><div><p className="eyebrow">Make it a stop</p><h2>Cold drink.<br />Hot food.</h2><p>Food is the reason. The energy is the bonus. Call to hear what&apos;s on and come through to the counter.</p><a className="button button-navy" href={phoneLink}>Call for today&apos;s menu <Arrow /></a></div></section>

      <section className="visit section" id="visit"><div className="visit-intro"><p className="eyebrow">Find the counter</p><h2>Come hungry.</h2><p>Pacific Roadhouse is at Pacific Business Park on Jakes Gerwel Drive. Walk in, or call to confirm today&apos;s menu and closing time.</p></div><div className="visit-panel"><div className="visit-detail"><span>Address</span><p>Pacific Business Park<br />Jakes Gerwel Drive<br />Cape Town, 7750</p></div><div className="visit-detail"><span>Telephone</span><a href={phoneLink}>{phoneDisplay}</a></div><div className="visit-actions"><a className="button button-orange" href={phoneLink}>Call now <Arrow /></a><a className="button button-navy" href={directionsLink} target="_blank" rel="noreferrer">Open in Maps <Arrow /></a></div></div></section>

      <footer><Image src="/brand/wordmark.svg" alt="Pacific Roadhouse" width={1800} height={650} /><p>Big flavour. Fair value. No fuss.</p><a href="#top">Back to top ↑</a></footer><div className="mobile-dock"><a href="#menu">Menu</a><a href={directionsLink} target="_blank" rel="noreferrer">Directions</a><a href={phoneLink}>Call</a></div>
    </main>
  );
}
