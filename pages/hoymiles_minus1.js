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
          bald ist es so weit: Deine Stecker-Solaranalge kommt zu Dir nach
          Hause!
        </p>
        <p>
          <strong>Bitte beachte:</strong> Verschickt wird Deine Anlage in{" "}
          <strong>zwei Teillieferungen</strong>, die Dich{" "}
          <strong>innerhalb des angekündigten Lieferzeitraums</strong> und anan{" "}
          <strong>unterschiedlichen Tagen</strong> erreichen werden. Die
          Reihenfolge kann dabei variieren.
        </p>
        <p>
          {" "}
          <strong> - </strong> <strong> Die erste Teillieferung</strong>{" "}
          beinhaltet Dein(e) Solarmodul(e) samt Halterung und Kleinteile. Die
          Spedition GEL wird Dich 1 Tag vor Auslieferung per E-Mail
          kontaktieren, um mit Dir einen Lieferzeitpunkt zu vereinbaren.{" "}
        </p>
        <p>
          <strong> - </strong> In der<strong>zweiten Teillieferung</strong>
          befindet sich der Wechselrichter Deines Stecker-Solar-Sets. Den Link
          zur Verfolgung Deines Paketes erhältst Du nach der Übergabe an DHL.
        </p>
        <p>
          <strong>
            Du hast mit unserem Support-Team eine andere Vereinbarung getroffen?
          </strong>
          Dann behält diese natürlich ihre Gültigkeit.
        </p>
        <p>
          <strong>Du hast bereits einen Teil Deiner Lieferung erhalten?</strong>
          Umso besser, der Zweite kommt bald!
        </p>
        <p>
          Damit ist der Start in Deine private Energiewende nicht mehr weit!
        </p>
        <p>
          <strong>Du hast noch Fragen?</strong> Dann schaue auch gern auf
          unserem <a href="https://priwatt.de/blog/">Blog</a>,
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
