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
        <Banner />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          es gibt gute Neuigkeiten: wir möchten Dich darüber informieren, dass
          Du die noch ausstehenden Kleinteile bis Ende der kommenden Woche
          erhalten wirst! Somit kannst Du in Kürze in die Energiewende starten.
        </p>
        <p>
          In diesem Atemzuge möchten wir uns für Deine Geduld bedanken. Wir
          hoffen, dass Deine Freude nun umso größer ist!
        </p>
        <Button href="https://priwatt.de/service/anmeldeservice">
          Hier klicken und kostenlos anmelden!
        </Button>
        <p>
          Du hast noch Fragen zu Deiner Stecker-Solaranlage? Dann schaue auch
          gern auf unserem <a href="https://priwatt.de/blog/">Blog</a>,
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>
          vorbei.
        </p>
        <p>
          Vielen Dank für Deine Geduld und toll, dass Du gemeinsam mit uns die
          Energiewende vorantreibst!
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
