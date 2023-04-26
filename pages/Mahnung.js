import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import ContainerOrderNr from "../components/ContainerOrderNr";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <br/>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/01/Img-12.png" />
        <br/>
        <p>&#123;ANSCHREIBEN&#125;,</p>
        <p>vielen Dank für Deinen Einkauf bei priwatt!</p>
        <p>
          Hiermit machen wir Dich darauf aufmerksam, dass die Zahlung zu Deiner
          Bestellung &#123;BELEGNR&#125; vom &#123;DATUM&#125; noch
          aussteht. 
        </p>

        <p>
        Um eine Stornierung Deines Auftrags zu vermeiden, überweise
          bitte den ausstehenden Betrag von &#123;GESAMT&#125; auf das folgende
          Konto. So kann unser Team Deine Bestellung weiter bearbeiten und Dir
          zusenden:

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
          Du hast noch Fragen? Dann wirf gerne einen Blick in unsere{" "}
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            Erklär-Videos
          </a>
             , in unseren <a href="https://priwatt.de/service/faq">FAQ-Bereich</a>
            oder auf unseren <a href="https://priwatt.de/blog/">Blog</a>.
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
