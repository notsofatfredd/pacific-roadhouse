import Image from 'next/image';

const phoneDisplay = '021 370 9914';
const phoneLink = 'tel:+27213709914';
const directionsLink =
  'https://www.google.com/maps/search/?api=1&query=Pacific+Road+House+Jakes+Gerwel+Drive+Cape+Town';

const localFavourites = [
  {
    number: '01',
    title: 'The Gatsby',
    copy: 'A Cape Town original, made for sharing—or for one serious appetite.',
  },
  {
    number: '02',
    title: 'Hake & chips',
    copy: 'The old-school parcel: generous fish, seasoned chips and no ceremony.',
  },
  {
    number: '03',
    title: 'Steak full house',
    copy: 'A proper loaded sandwich and one of the names locals keep mentioning.',
  },
  {
    number: '04',
    title: 'Chicken & seafood',
    copy: 'More familiar favourites from a counter built for choice and value.',
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="utility-bar">
        <p>Pacific Business Park · Jakes Gerwel Drive · Cape Town</p>
        <a href={phoneLink}>Call {phoneDisplay}</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pacific Roadhouse home">
          <Image
            src="/brand/wordmark.svg"
            alt="Pacific Roadhouse"
            width={1800}
            height={650}
            priority
          />
        </a>
        <nav aria-label="Main navigation">
          <a href="#favourites">Known for</a>
          <a href="#story">Our way</a>
          <a href="#visit">Find us</a>
        </nav>
        <a className="button button-small button-orange" href={phoneLink}>
          Call the shop <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">A proper Cape Town takeaway</p>
          <h1>
            Big appetite?
            <span>You’re in the right place.</span>
          </h1>
          <p className="hero-intro">
            Cape Town classics, generous portions and straight-up value from the
            Pacific family counter.
          </p>
          <div className="hero-actions">
            <a className="button button-orange" href={phoneLink}>
              Call for today’s menu <Arrow />
            </a>
            <a
              className="button button-ghost"
              href={directionsLink}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <Arrow />
            </a>
          </div>
          <p className="microcopy">
            Menu, prices and availability can change. Call before you travel.
          </p>
        </div>

        <div className="hero-art" aria-label="Pacific Roadhouse brand mark">
          <span className="stamp stamp-top">No fuss</span>
          <div className="mark-stage">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <Image
              src="/brand/mark.svg"
              alt=""
              width={1000}
              height={1000}
              priority
            />
          </div>
          <span className="stamp stamp-bottom">Big flavour</span>
        </div>
      </section>

      <section className="promise-strip" aria-label="Pacific Roadhouse essentials">
        <div><strong>01</strong><span>Cape Town favourites</span></div>
        <div><strong>02</strong><span>Generous portions</span></div>
        <div><strong>03</strong><span>Takeaway at the park</span></div>
      </section>

      <section className="favourites section" id="favourites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What locals talk about</p>
            <h2>Come hungry.</h2>
          </div>
          <p>
            These are the Pacific Roadhouse favourites most often mentioned in
            public customer listings. This is not the current menu—phone the shop
            for today’s selection and prices.
          </p>
        </div>

        <div className="favourite-grid">
          {localFavourites.map((item) => (
            <article className="favourite-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <span className="card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto section" id="story">
        <div className="manifesto-mark" aria-hidden="true">
          <Image src="/brand/mark-white.svg" alt="" width={1000} height={1000} />
        </div>
        <div className="manifesto-copy">
          <p className="eyebrow light">The Pacific way</p>
          <h2>Good food doesn’t need a speech.</h2>
          <p>
            It should be hot, generous and worth what you paid. That is the
            standard: familiar Cape Town food, served without pretending to be
            something it isn’t.
          </p>
          <div className="manifesto-rule">
            <span>Proper portions</span>
            <span>Real value</span>
            <span>Made for Cape Town</span>
          </div>
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visit-intro">
          <p className="eyebrow">Find the counter</p>
          <h2>Right here at Pacific Business Park.</h2>
          <p>
            Stop in for takeaway, or call the shop to confirm today’s menu,
            availability and trading hours.
          </p>
        </div>

        <div className="visit-panel">
          <div className="visit-detail">
            <span>Address</span>
            <p>Pacific Business Park<br />Jakes Gerwel Drive<br />Cape Town, 7750</p>
          </div>
          <div className="visit-detail">
            <span>Telephone</span>
            <a href={phoneLink}>{phoneDisplay}</a>
          </div>
          <div className="visit-detail">
            <span>Before you leave</span>
            <p>Call to confirm today’s menu and closing time.</p>
          </div>
          <div className="visit-actions">
            <a className="button button-orange" href={phoneLink}>
              Call now <Arrow />
            </a>
            <a
              className="button button-navy"
              href={directionsLink}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <Image
          src="/brand/wordmark.svg"
          alt="Pacific Roadhouse"
          width={1800}
          height={650}
        />
        <p>Big flavour. Fair value. No fuss.</p>
        <div>
          <a href={phoneLink}>{phoneDisplay}</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>

      <div className="mobile-dock">
        <a href={phoneLink}>Call for menu</a>
        <a href={directionsLink} target="_blank" rel="noreferrer">Directions</a>
      </div>
    </main>
  );
}
