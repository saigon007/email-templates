import Layout from "../components/Layout";
import ContainerOrderNr from "../components/ContainerOrderNr";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/05/Img-3.png" />

        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>

        <p>
          Anbei senden wir Rir die <strong>bereits bezahlte Rechnung</strong> zu
          Deiner Kenntnisnahme. Du muss also nichts weiter tun.
        </p>

        <p>
        Übrigens: In Kürze erhältst Du einen Tracking-Link und siehst damit,{" "}
          <strong>wann Deine Lieferung ankommt.</strong>. Wir wünschen Dir viel Spaß mit Deiner Bestellung!
        </p>


        <BottomContainer />
        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 20px;
            margin: 0;
          }
          a {
            color: #3bdfac;
          }
        `}</style>
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
