import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import ContainerOrderNr from "../components/ContainerOrderNr";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <br />
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/05/Img-4.png" />
        <br />
        <p>&#123;ANSCHREIBEN&#125;,</p>

        <p>
          tbei der Prüfung Deiner Zahlung ist uns eine Differenz von
          &#123;REST&#125; aufgefallen. Sicherlich hast Du Dich beim Eingeben
          des Rechnungsbetrages vertippt, das passiert den Besten!
        </p>

        <p>
          Bitte überweise uns den offenen Betrag von &#123;REST&#125; an das
          folgende Konto, um Deine Bestellung weiter verarbeiten zu können:
        </p>
        <p>
        <p>
          Name: Priwatt GmbH IBAN: DE18 7002 0270 0038 2422 61 BIC: HYVEDEMMXXX
          Verwendungszweck: &#123;AUFTRAG&#125;
        </p>
        </p>

        <p>
        Lieben Dank für Deinen Beitrag zur Energiewende! 
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
