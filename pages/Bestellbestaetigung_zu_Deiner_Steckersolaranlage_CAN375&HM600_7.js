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
        <p>Hallo &#123;&#123;order.orderCustomer.firstName&#125;&#125;,</p>
        <p>vielen Dank, dass Du die Energiewende voranbringst!</p>
        <p>
          Damit Du weißt, was Deine Stecker-Solaranlage alles kann, haben wir
          Dir in der folgenden Tabelle die wichtigsten Informationen zu Deinem
          Solarmodul und Wechselrichter zusammengetragen.
        </p>
        <p>
          <strong>
            Achtung: Für die spätere Anmeldung Deiner Anlage wirst Du diese
            Produktinformationen noch benötigen. Speichere Dir diese E-Mail also
            gut ab.
          </strong>
        </p>
        <p>
          Mehr Informationen zur Anmeldung erhältst Du in den kommenden Tagen
          per E-Mail.
        </p>

        <strong>Informationen zu Deinem Solarmodul</strong>
        <table className="first-table">
          <tr>
            <th>Solarmodul Anzahl</th>
            <td>2</td>
          </tr>
          <tr>
            <th>Solarmodul Hersteller</th>
            <td>Canadian Solar</td>
          </tr>
          <tr>
            <th>Solarmodul Typ</th>
            <td>Canadian Solar 375 Wp - CS3L-375</td>
          </tr>
          <tr>
            <th>Solarmodul Einzelleistung in W</th>
            <td>375</td>
          </tr>
        </table>
        <strong>Informationen zu Deinem Wechselrichter</strong>
        <table>
          <tr>
            <th>Wechselrichter Anzahl</th>
            <td>1</td>
          </tr>
          <tr>
            <th>Wechselrichter Hersteller</th>
            <td>Hoymiles</td>
          </tr>
          <tr>
            <th>Wechselrichter Typ</th>
            <td>HM-600</td>
          </tr>
          <tr>
            <th>Wechselrichter Einzelleistung in W/VA</th>
            <td>600</td>
          </tr>
        </table>
        <p>
          <strong>
            Du möchtest Dich schon jetzt zur Anmeldung Deiner
            Stecker-Solaranlage informieren?
          </strong>
        </p>
        <p>
          Dann klicke auf den folgenden Button, um Dich über die Anmeldung und
          den kostenlosen priwatt Anmeldeservice zu informieren:
        </p>
        <Button href="https://priwatt.de/service/anmeldeservice">
          Hier klicken und mehr erfahren!
        </Button>
        <p>
          Du hast noch Fragen zu Deiner Stecker-Solaranlage? Dann schaue auch
          gern auf unserem <a href="https://priwatt.de/blog/">Blog</a>,{" "}
          <a href="https://www.youtube.com/channel/UCLBefFTN5Dl3hz7OnSUUhOg">
            YouTube-Kanal
          </a>{" "}
          oder in unseren <a href="https://priwatt.de/service/faq">FAQ</a>{" "}
          vorbei.
        </p>

        <p>
          Für den schnell und einfachen Aufbau Deiner Stecker-Solaranlage
          findest Du hier die{" "}
          <a href="https://priwatt.de/wordpress/wp-content/uploads/2022/08/priwatt-Montageanlage-08-22-1.pdf">
            Montageanleitung
          </a>
          ,{" "}
          <a href="https://priwatt.de/service/einfach-installieren/">
            Step-byStep-Aufbauanleitung
          </a>{" "}
          und ermittelst mit dem{" "}
          <a href="https://priwatt.de/service/ertragsrechner/">
            Ertragsrechner
          </a>{" "}
          Deine Amortisation.
        </p>
        <p>
          Wir wünschen Dir viel Spaß bei der Erzeugung Deines eigenen
          Solarstroms!
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
          th,
          td {
            padding: 20px;
            line-height: 24px;
            font-size: 14px;
            width: 50%;
          }
          .first-table {
            margin-bottom: 50px;
          }
          table {
            border-spacing: 0;
            margin-bottom: 30px;
            width: 100%;
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
