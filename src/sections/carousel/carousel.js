import "./carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo from "../../assets/bitcoin360ai/7222d243862daf533fdbbeabaeb8f8f9.png";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const totalImages = 10;
  const imagesPerPage = 6;
  const secondsPerSlide = 1;
  const transitionDuration = 2000; // milliseconds

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);

      // Reset the transition after the animation completes
      setTimeout(() => {
        setTransitionEnabled(false);
      }, transitionDuration);
    }, secondsPerSlide * 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderImages = () => {
    const images = [];

    for (let i = currentIndex; i < currentIndex + imagesPerPage; i++) {
      const imageIndex = i % totalImages;
      console.log(imageIndex);
      images.push(
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          key={imageIndex}
          src={require(`../../assets/bitcoin360ai/currency_${imageIndex}.png`)}
          alt={`Image ${imageIndex}`}
          className={`carousel-image${true ? " transition" : ""}`}
        />
      );
    }

    return images;
  };

  return (
    <div className="carousel">
      <h1>Las mejores divisas para operar ahora mismo</h1>
      <div className="carousel-container">
        <div className="image-container">{renderImages()}</div>
      </div>
      <button>Invertir ahora</button>
      <div className="carousel-spans">
        <a>Website Agreement</a>
        <a>Risk Disclaimer</a>
        <a>Privacy Policy</a>
        <a>Report Abuse</a>
        <a>Contact Us</a>
      </div>
      <img className="carousel-logo" src={logo} alt="sd" />
      <hr />
      <p>
        REGULATION & HIGH RISK INVESTMENT WARNING: Trading Forex, CFDs and
        Cryptocurrencies is highly speculative, carries a level of risk and may
        not be suitable for all investors. You may lose some or all of your
        invested capital, therefore you should not speculate with capital that
        you cannot afford to lose. Please click here to read a full risk
        warning. Bitcoin 360AI is a technology, marketing and advertising
        service. Bitcoin 360AI does not gain or lose profits based on your
        trading results and operates as a technology, marketing and advertising
        service. Bitcoin 360AI is not a financial services firm and does not
        operate as a financial services firm and is only used as a marketing
        tool by third party advertisers and brokers to attract customers. Its
        your obligation to check and decide weather the broker you were
        connected to applies to all local rules and regulations and is regulated
        in your country jurisdiction and is allowed to receive customers from
        your location your are in, before you fund your account with the broker
        and start trading with it. please report Bitcoin 360AI (by clicking
        report abuse) if you find that the broker assigned to you is not
        regulated in your jurisdiction so we <br></br> can cancel your account with
        Bitcoin 360AI.<br></br> <br></br>We are required to tell potential investors that
        our software's past performance does not necessarily predict future
        results, therefore you should not speculate with capital that you cannot
        afford to lose.
        <br></br> <br></br>
        USA REGULATION NOTICE: Option trading is not regulated within the United
        States. Bitcoin 360AI is not supervised or regulated by any financial
        agencies nor US agencies. Any unregulated trading activity by U.S.
        residents is considered unlawful. Bitcoin 360AI does not accept
        customers located within the United States or holding an American
        citizenship.
        <br></br> <br></br>
        SITE RISK DISCLOSURE: Bitcoin 360AI does not accept any liability for
        loss or damage as a result of reliance on the information contained
        within this website; this includes education material, price quotes and
        charts, and analysis. Please be aware of the risks associated with
        trading the financial markets; never invest more money than you can risk
        losing. The risks involved in trading Forex, CFDs and Cryptocurrencies
        may not be suitable for all investors. Bitcoin 360AI doesn't retain
        responsibility for any trading losses you might face as a result of
        using the data hosted on this site.
        <br></br> <br></br>
        LEGAL RESTRICTIONS: without limiting the undermentioned provisions, you
        understand that laws regarding financial contracts vary throughout the
        world, and it is your responsibility to make sure you properly comply
        with any law, regulation or guideline in your country of residence
        regarding the use of the Site. To avoid any doubt, the ability to access
        our Site does not necessarily mean that our Services and/or your
        activities through the Site are legal under the laws, regulations or
        directives relevant to your country of residence.
        <br></br> <br></br>
        Please note that Bitcoin 360AI receives advertising fees for directing
        users to open an account with the brokers/advertisers and/or for driving
        traffic to the advertiser website.
        <br></br>
        If you feel you landed on this page by wrongdoings and/or misleading
        information of an advertisement, pre lander, email or any other
        promotions of a 3rd party website/promoter or by please report it by
        clicking REPORT ABUSE
        <br></br> <br></br>
        We have placed cookies on your computer to help improve your experience
        when visiting this website. You can change cookie settings on your
        computer at any time. Use of this website indicates your acceptance of
        this website's Privacy Policy.
        <br></br>
        <br></br>© 2023 All Rights Reserved - Bitcoin 360AI
      </p>
    </div>
  );
};

export default Carousel;
