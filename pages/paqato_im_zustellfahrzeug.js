import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p></p>
        <p>
          <strong>
            Dein Paket von priwatt zur Bestellung #123;#123; orderNumber
            #125;#125; wurde ins Zustellfahrzeug geladen
          </strong>
        </p>
        <p>Hallo #123;#123; recipient.name #125;#125;,</p>
        
        <p>
          tolle Neuigkeiten: Deine Bestellung von priwatt wird voraussichtlich
          heute zugestellt! Dein Paket mit der Sendungsnummer #123;#123;
          trackingCode #125;#125; wurde in das Zustellfahrzeug geladen und ist auf dem Weg zu Deiner angegebenen Adresse.
        </p>
        <p>#123;#123; recipient #125;#125;</p>
        <p>
        Weitere Details und Informationen zum Sendungsverlauf findest Du in Deiner Sendungsverfolgung.
        </p>
        <p>
        Nutze die Zeit, bis Dein Paket da ist, gern, um auf unserem <a href="https://priwatt.de/blog/">Blog</a>, 
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a> 
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a> 
          mehr über Deinen neuen Energielieferanten zu lernen.
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
