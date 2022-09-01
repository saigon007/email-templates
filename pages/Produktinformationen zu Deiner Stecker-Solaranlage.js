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
        <p>Hallo &#123;first + surename&#125;,</p>
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
