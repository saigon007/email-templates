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
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/product-information.png" />
        <p></p>
        <p> Hallo &#123;&#123; order.orderCustomer.firstName &#125;&#125;
          &#123;&#123; order.orderCustomer.lastName &#125;&#125;,</p>
        <p>vielen Dank für Deine Bestellung bei priwatt!</p>

        <p>
          Auf dem Weg zur Energiewende unterstützen wir Dich gerne mit unserem
          <b>kostenlosen Anmeldeservice</b>, den Du direkt nach dem Kauf Deiner
          Anlage nutzen kannst.
        </p>

        <p>
          Der allgemeine Anmeldeprozess setzt sich aus zwei aufeinander
          folgenden Schritten zusammen:{" "}
        </p>

        <p>
          <b>Schritt 1</b>: Anmeldung Deiner Anlage bei Deinem Netzbetreiber
        </p>
        <p>
          <b>Schritt 2</b>: Registrierung im Marktstammdatenregister
        </p>

        <p>
          Für Deine Anmeldung haben wir Dir in der folgenden Tabelle die
          wichtigsten Informationen zu Deinem Solarmodul und Wechselrichter
          zusammengetragen.
        </p>
        <p>
          <strong>
            Achtung: Die Produktinformationen und die angehangenen Dokumente
            dieser E-Mail benötigst Du im Anmeldeprozess Deiner
            Stecker-Solaranlage! Speichere Dir diese also gerne ab.
          </strong>
       
          Den Link zum Anmeldeservice von priwatt findest Du unterhalb der
          Tabelle.
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
            <td>Canadian Solar 360 Wp - CS3L - 360</td>
          </tr>
          <tr>
            <th>Solarmodul Einzelleistung in W</th>
            <td>360</td>
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
        <p></p>
        
         <p><strong>Melde Deine Stecker-Solaranlage an!</strong>
        
        
        Klicke auf den folgenden Button, um mehr über den Anmeldeservice von
        priwatt zu erfahren und Deine Anlage kostenfrei anzumelden!</p> 
        
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
