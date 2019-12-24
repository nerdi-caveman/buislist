import React from "react";
import Head from "../../components/head";
import Imagebanner from "../../assets/back1.jpg";

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <Head title="Local stores and business nearby" />
      <section className="landing-page-header">
        <div className="banner-img">
          <img src={Imagebanner} alt="Banner" />
        </div>
        <div className="header-search">
          <div className="page-container">
            <div className="header-filtr">
              <h1>Find local stores and businesses around you.</h1>
              <form>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
