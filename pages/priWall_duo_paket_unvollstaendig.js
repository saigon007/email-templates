import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/09/deine_auftsellwinkel_sind_auf_dem_weg.png" />

        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          Dein Paket ist bereits bei Dir angekommen? Sehr gut! Dann ist Dir
          sicherlich aufgefallen, dass dem Paket zwei statt vier Aufstellwinkel
          beiliegen.
        </p>
        <p>
          Die zwei übrigen Aufstellwinkel werden aktuell von unserem Team
          verpackt und zu Dir geschickt! Damit ist Deine Anlage bald vollständig
          und Du kannst in Deine private Energiewende starten.
        </p>

        <p>
          Deine Stecker-Solaranlage ist noch nicht bei Dir angekommen? Dann wird
          diese zeitnah bei Dir eintreffen! Beachte bitte, dass auch in diesem
          Fall zwei Deiner vier Aufstellwinkel separat geliefert werden!
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
