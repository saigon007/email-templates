import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p>
          <strong>
            Deine priwatt Bestellung #123;#123; orderNumber #125;#125; wurde
            erfolgreich zugestellt!
          </strong>
        </p>
        <p>Hallo #123;#123; recipient.name #125;#125;</p>
        <p>Deine private Energiewende beginnt jetzt!</p>
        <p>
          Dein Paket von priwatt mit der Sendungsnummer #123;#123; trackingCode
          #125;#125 wurde heute erfolgreich Deiner angegebenen Adresse
          zugestellt.
        </p>
        <p>#123;#123; recipient #125;#125</p>

        <p>
        Um schnell und einfach in Deine private Energiewende zu starten, findest Du hier die Montageanleitung zu Deiner Stecker-Solaranlage.
        </p>
        <Button href="https://priwatt.de/wordpress/wp-content/uploads/2022/09/Montageanleitung-09-2022-2.pdf">
          Hier geht`s zur Montageanleitung
        </Button>

        <p>
        Nutze die Zeit, bis Dein Paket da ist, gern, um auf unserem <a href="https://priwatt.de/blog/">Blog</a>, 
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a> 
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a> 
          mehr über Deinen neuen Energielieferanten zu lernen.
        </p>

        <p>
          Vielen Dank für Deine Bestellung und Deinen Beitrag zur privaten
          Energiewende! Wir wünschen Dir viel Spaß mit Deiner
          Stecker-Solaranlage.{" "}
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
