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
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          <strong>wir haben eine gute Nachricht für Dich:</strong> Der
          Wechselrichter wird Dich
          <strong>pünktlich zum angegebenen Liefertermin</strong>(siehe
          Bestellbestätigung) erreichen. Solltest Du mit unserem Kundensupport
          eine andere Vereinbarung getroffen haben, behält diese natürlich ihre
          Gültigkeit.
        </p>
        <p>
          Bitte habe einen Blick auf Dein Postfach, da Dich unser Versandpartner
          einen Tag vor der Zustellung per E-Mail kontaktieren wird, um die
          Zustellung mit Dir zu koordinieren.
        </p>
        <p>
          Damit ist Dein Set nun bald vollständig und Du bist bereit für Deine
          private Energiewende! Wir wünschen Dir viel Spaß beim Erzeugen Deines
          eigenen grünen Stroms!
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
            padding-bottom: 20px;
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
