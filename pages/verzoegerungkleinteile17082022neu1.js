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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/08/wichtige-neuigkeiten.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          es gibt gute Neuigkeiten: wir möchten Dich darüber informieren, dass
          Du die noch ausstehenden Kleinteile bis Ende der kommenden Woche
          erhalten wirst! Somit kannst Du in Kürze in die Energiewende starten.
        </p>
        <strong>Informationen zu Deinem Solarmodul</strong>
        <table className="first-table">
          <tr>
            <th>Solarmodul Anzahl</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Solarmodul Hersteller</th>
            <td>Sunman</td>
          </tr>
          <tr>
            <th>Solarmodul Typ</th>
            <td>Sunman 310 Wp - SMB310-6X10DW</td>
          </tr>
          <tr>
            <th>Solarmodul Einzelleistung in W</th>
            <td>310</td>
          </tr>
        </table>
        <strong>Informationen zu Deinem Solarmodul</strong>
        <table>
          <tr>
            <th>Solarmodul Anzahl</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Solarmodul Hersteller</th>
            <td>Sunman</td>
          </tr>
          <tr>
            <th>Solarmodul Typ</th>
            <td>Sunman 310 Wp - SMB310-6X10DW</td>
          </tr>
          <tr>
            <th>Solarmodul Einzelleistung in W</th>
            <td>310</td>
          </tr>
        </table>
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
          tr {
            text-align: left;
          }
          tr:nth-child(odd) {
            background: #f6f8fe;
          }
          th, td {
            padding: 20px;
            line-height: 24px;
            font-size: 14px;
          }
          .first-table {
            margin-bottom: 50px;
          }
          table {
            border-spacing: 0;
            margin-bottom: 30px;
          }
          strong {
            display: block;
            margin-bottom: 20px;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
