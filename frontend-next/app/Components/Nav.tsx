"use client";
import { useRouter } from "next/navigation";
export default function Nav() {
  const router = useRouter();
  return (
    <>
      <div>
        <header className="navbar">
          <div className="logo">🅑🅔 CRYPTOxAI</div>
          <nav className="nav-links">
            <a href="#search">🔍</a>
            <a href="#market">Market</a>
            <a href="#trade">Trade</a>
            <div className="dropdown">
              <a href="#more">More▾</a>
              <div className="dropdown-content">
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <a href="#about">About</a>
            <a href="#login" className="login-button">
              Login
            </a>
          </nav>
          <button className="theme-toggle">🌙</button>
        </header>

        <main className="main-content">
          <section className="hero">
            <h1>Made in India</h1>
            <h2>CRYPTO APP</h2>
            <p>All in one solution</p>
            <div className="email-signup">
              <input type="email" placeholder="@email" />
              <button
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </section>
          <img className="mainphone" src="phone1.png" alt="phone image" />
          <section className="features">
            <div className="feature">
              <h3>Buy Crypto</h3>
              <p>BUY BTC, ETH, and other crypto easily via bank transfer</p>
              <img src="buy.webp" alt="Buy" />
            </div>
            <div className="feature">
              <h3>Recurring Buy</h3>
              <p>
                Grow your portfolio automatically with daily, weekly, or monthly
                trades.
              </p>
              <img src="phone2.webp" alt="Recurring Buy" />
            </div>
            <div className="feature">
              <h3>Price Alert</h3>
              <p>Be notified on BTC, ETH prices and more</p>
              <ul>
                <li>BTC Bitcoin +500.00 1.2%</li>
                <li>ETH Ethereum -200.00 -2%</li>
                <li>BNB Bignbuilt +150.00 2.3%</li>
                <li>ERT Ethorium +210.00 1.2%</li>
                <li>TKV Totalkv -120.00 -0.08%</li>
                <li>MKP Masterkop +233.00 2.5%</li>
              </ul>
            </div>
            <div className="feature">
              <h3>On-Chain Staking</h3>
              <p>Generate passive income by helping to secure blockchain</p>
            </div>
          </section>

          <section className="mobile-app">
            <img src="portfolio3.png" alt="Mobile App" />
            <div>
              <h3>Trade on the go, Anywhere, anytime.</h3>
              <p>Compatible with all browsers</p>
            </div>
          </section>

          <section className="news">
            <h2>Latest News</h2>
            <p>Uniswap Foundation Delays Proposal Upgrade Vote</p>
            <p>European Bitcoin ETPs Face Losses Amid Rising US Competition</p>
            <p>
              Trader Exchanges 29 ETH for 129.6 Billion PEW, Holding Value of
              Approximately $900,000
            </p>
            <p>
              Ethereum Co-Founder Vitalik Buterin Comments On LUNA Criticism
            </p>
            <a href="#more-news">View All News</a>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h4>ABOUT</h4>
              <a href="#careers">Careers</a>
              <a href="#news">News</a>
              <a href="#press">Press</a>
              <a href="#legal">Legal</a>
            </div>
            <div className="footer-section product">
              <h4>PRODUCT</h4>
              <a href="#exchange">Exchange</a>
              <a href="#buy-crypto">Buy crypto</a>
              <a href="#tax">Tax</a>
              <a href="#tokens">Tokens</a>
            </div>
            <div className="footer-section business">
              <h4>BUSINESS</h4>
              <a href="#p2p-merchant">P2P Merchant</a>
              <a href="#vip-service">VIP Service</a>
              <a href="#labs">Labs</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyrights are reserved by CRYPTOxAI | +91-8304729438</p>
          </div>
        </footer>
      </div>
    </>
  );
}
