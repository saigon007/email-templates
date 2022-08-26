import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/wichtige-neuigkeiten.png" />
        <p>Hallo &#123;First + surename&#125;,</p>
        <p>
        vielen Dank für Deinen Einkauf bei priwatt und Deinen Beitrag zur Energiewende!
        </p>
        <p>Gern machen wir Dich darauf aufmerksam, dass die Zahlung zu Deiner 
          Bestellung &#123;IHREBESTELLNUMMER&#125; vom &#123;AUFTRAGDATUM&#125; weiterhin noch aussteht. 
          Um eine Stornierung Deines Auftrags zu vermeiden, überweise bitte den ausstehenden 
          Betrag von &#123;AMOUNT &ndash; MONEY&#125; auf das folgende Konto, damit unser Team Deine Bestellung 
          weiter bearbeiten kann:
        </p>
          <p><strong>Name:</strong> Priwatt GmbH
          <br><strong>IBAN:</strong> DE83 4306 0967 1131 7476 00</br>
          <br><strong>BIC:</strong> GENODEM1GLS &lpar;GLS Bank&rpar;</br>
          <br><strong>Betrag:</strong> &#123;GESAMT&#125;</br>
          <br><strong>Verwendungszweck:</strong> &#123;BELEGNR&#125;</br>
          </p>
          <p>
          Du hast noch Fragen zu Deiner Stecker-Solaranlage? Dann schaue auch
          gern auf unserem <a href="https://priwatt.de/blog/">Blog</a>, 
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>
           vorbei.
          </p>
      
        <BottomContainer />
        <style jsx>{`
          p {
            font-size: 16px;
            line-height: 24px;
            padding-bottom: 30px;
            margin: 0;
          }
          a {
            color: #3bdfac;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
