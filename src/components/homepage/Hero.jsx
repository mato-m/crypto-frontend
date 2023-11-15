import React from "react";
import styles from "./Hero.module.css";
import { SiBitcoin, SiEthereum, SiCardano, SiDogecoin } from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import Lottie from "lottie-react";
import heroanimation from "../../assets/heroanimation.json";

const Hero = () => {
  const latestPrices = [
    { id: 1, icon: SiBitcoin, handle: "BTC", price: 25640, change: 7.4 },
    { id: 2, icon: SiEthereum, handle: "ETH", price: 1921.3, change: -3.1 },
    { id: 3, icon: SiCardano, handle: "ADA", price: 1.23, change: -1.1 },
    { id: 4, icon: SiDogecoin, handle: "DOGE", price: 1.6, change: 7.6 },
    { id: 1, icon: SiBitcoin, handle: "BTC", price: 25640, change: 7.4 },
    { id: 2, icon: SiEthereum, handle: "ETH", price: 1921.3, change: -3.1 },
    { id: 3, icon: SiCardano, handle: "ADA", price: 1.23, change: -1.1 },
    { id: 4, icon: SiDogecoin, handle: "DOGE", price: 1.6, change: 7.6 },
    { id: 1, icon: SiBitcoin, handle: "BTC", price: 25640, change: 0 },
    { id: 2, icon: SiEthereum, handle: "ETH", price: 1921.3, change: -3.1 },
    { id: 3, icon: SiCardano, handle: "ADA", price: 1.23, change: -1.1 },
    { id: 4, icon: SiDogecoin, handle: "DOGE", price: 1.6, change: 7.6 },
    { id: 1, icon: SiBitcoin, handle: "BTC", price: 25640, change: 7.4 },
    { id: 2, icon: SiEthereum, handle: "ETH", price: 1921.3, change: -3.1 },
    { id: 3, icon: SiCardano, handle: "ADA", price: 1.23, change: -1.1 },
    { id: 4, icon: SiDogecoin, handle: "DOGE", price: 1.6, change: 7.6 },
  ];

  return (
    <div className={styles.heroDiv}>
      <div className={styles.heroMain}>
        <div className={styles.heroMainInner}>
          <div>
            <h1>CryptoTrack</h1>
            <h2 style={{ marginBottom: 60 }}>
              Easily track the changes of cryptocurrency prices
            </h2>
            <h3>Track over 140+ cryptocurrencies 🚀</h3>
            <h3>Over 400 000 users 🌕</h3>
            <h3>NFT showcase 💸</h3>
          </div>
          <Lottie
            animationData={heroanimation}
            loop={true}
            className={styles.heroLottie}
          />
        </div>
      </div>
      <div className={styles.heroPricesRowWrapper}>
        <div className={styles.heroPricesRow}>
          <div className={styles.heroPrices}>
            <h3>Latest prices</h3>
            <div className={styles.cryptoHeroHeader}>
              <span className={styles.cryptoHeroName}>Crypto</span>
              <div>
                <span className={styles.cryptoHeroPrice}>Price & Change</span>
              </div>
              <span className={styles.cryptoHeroChange}>More</span>
            </div>
            <div className={styles.cryptoHeroList}>
              {latestPrices &&
                latestPrices.map((v) => (
                  <div className={styles.cryptoHeroListItem} key={v.id}>
                    <div>
                      <v.icon />
                      <span className={styles.cryptoHeroName}>{v.handle}</span>
                    </div>
                    <div>
                      <span className={styles.cryptoHeroPrice}>{v.price}$</span>
                      <span
                        style={{
                          textShadow: `1px 1px 15px ${
                            v.change > 0
                              ? "green"
                              : v.change < 0
                              ? "red"
                              : "black"
                          }`,
                          color:
                            v.change > 0
                              ? "green"
                              : v.change < 0
                              ? "red"
                              : "black",
                        }}
                        className={styles.cryptoHeroChange}
                      >
                        {v.change}%
                      </span>
                    </div>
                    <FaChartLine
                      className={styles.chartButton}
                      style={{
                        padding: 10,
                        borderRadius: 20,
                      }}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.heroPrices}>
            <h3>Winners</h3>
            <div className={styles.cryptoHeroHeader}>
              <span className={styles.cryptoHeroName}>Crypto</span>
              <div>
                <span className={styles.cryptoHeroPrice}>Price & Change</span>
              </div>
              <span className={styles.cryptoHeroChange}>More</span>
            </div>
            <div className={styles.cryptoHeroList}>
              {latestPrices &&
                latestPrices
                  .filter((v) => v.change >= 0)
                  .sort((a, b) => (a.change >= b.change ? -1 : 1))
                  .map((v) => (
                    <div className={styles.cryptoHeroListItem} key={v.id}>
                      <div>
                        <v.icon />
                        <span className={styles.cryptoHeroName}>
                          {v.handle}
                        </span>
                      </div>
                      <div>
                        <span className={styles.cryptoHeroPrice}>
                          {v.price}$
                        </span>
                        <span
                          style={{
                            textShadow: `1px 1px 15px ${
                              v.change > 0
                                ? "green"
                                : v.change < 0
                                ? "red"
                                : "black"
                            }`,
                            color:
                              v.change > 0
                                ? "green"
                                : v.change < 0
                                ? "red"
                                : "black",
                          }}
                          className={styles.cryptoHeroChange}
                        >
                          {v.change}%
                        </span>
                      </div>
                      <FaChartLine
                        className={styles.chartButton}
                        style={{
                          padding: 10,
                          borderRadius: 20,
                        }}
                      />
                    </div>
                  ))}
            </div>
          </div>
          <div className={styles.heroPrices}>
            <h3>Losers</h3>
            <div className={styles.cryptoHeroHeader}>
              <span className={styles.cryptoHeroName}>Crypto</span>
              <div>
                <span className={styles.cryptoHeroPrice}>Price & Change</span>
              </div>
              <span className={styles.cryptoHeroChange}>More</span>
            </div>
            <div className={styles.cryptoHeroList}>
              {latestPrices &&
                latestPrices
                  .filter((v) => v.change < 0)
                  .sort((a, b) => (a.change >= b.change ? 1 : -1))
                  .map((v) => (
                    <div className={styles.cryptoHeroListItem} key={v.id}>
                      <div>
                        <v.icon />
                        <span className={styles.cryptoHeroName}>
                          {v.handle}
                        </span>
                      </div>
                      <div>
                        <span className={styles.cryptoHeroPrice}>
                          {v.price}$
                        </span>
                        <span
                          style={{
                            textShadow: `1px 1px 15px ${
                              v.change > 0
                                ? "green"
                                : v.change < 0
                                ? "red"
                                : "black"
                            }`,
                            color:
                              v.change > 0
                                ? "green"
                                : v.change < 0
                                ? "red"
                                : "black",
                          }}
                          className={styles.cryptoHeroChange}
                        >
                          {v.change}%
                        </span>
                      </div>
                      <FaChartLine
                        className={styles.chartButton}
                        style={{
                          padding: 10,
                          borderRadius: 20,
                        }}
                      />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
