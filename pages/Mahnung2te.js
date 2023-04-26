import Layout from "../components/Layout";
import ContainerOrderNr from "../components/ContainerOrderNr";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/Mahnung.png" />
        <p>&#123;ANSCHREIBEN&#125;,</p>

        <p>
          die Zahlung zu Deiner priwatt Bestellung &#123;BELEGNR&#125; vom
          &#123;DATUM&#125; steht noch aus. Bitte überweise den Betrag von
          &#123;GESAMT&#125; Euro innerhalb der nächsten 7 Tage auf das folgende
          Konto, damit unser Team Deine Bestellung bearbeiten kann. Anderenfalls
          wird Dein Auftrag in Kürze storniert.
        </p>
        <p>
          <strong>Name:</strong> Priwatt GmbH
          <br />
          <strong>IBAN:</strong> DE83 4306 0967 1131 7476 00
          <br />
          <strong>BIC:</strong> GENODEM1GLS (GLS Bank)
          <br />
          <strong>Betrag:</strong> &#123;GESAMT&#125;
          <br />
          <strong>Verwendungszweck:</strong> &#123;BELEGNR&#125;
        </p>
        <p>
          Hast Du noch Fragen? Dann schaue auch gern auf unserem{" "}
          <a href="https://priwatt.de/blog/">Blog</a>,
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>
          vorbei.
        </p>
        <p>Vielen Dank für Deinen Beitrag zur Energiewende!</p>

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
