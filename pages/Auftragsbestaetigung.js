import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/08/auftragsbestaetigung.png" />
        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>
        <p>
          gerne bestätigen wir Dir, dass Deine Bestellung &#123;BELEGNR&#125;
          vom &#123;DATUM&#125; für Dein Balkonkraftwerk von priwatt bei uns
          eingegangen ist. Damit ist der erste Schritt in Deine private
          Energiewende geschafft!
        </p>

        <p>
          <strong>Bitte bezahle im nächsten Schritt Deine Anlage:</strong>
          Wähle dafür eine der folgenden drei Zahlungsvarianten.
        </p>

        <p>
          <strong>Variante 1 &#45; Sofortüberweisung oder Kreditkarte</strong>{" "}
          Scanne den <strong>linken QR-Code</strong> auf Deiner
          Auftragsbestätigung (siehe Anhang) mit der Kamera Deines
          Mobiltelefons. Daraufhin wirst Du zu unserem Zahlungsdienstleister{" "}
          <strong>Mollie</strong> weitergeleitet, um die Zahlung auszuführen.
        </p>

        <p>
          <strong>Variante 2 &#45; Paypal</strong> Scanne den{" "}
          <strong>rechten QR-Code</strong> auf Deiner Auftragsbestätigung (siehe
          Anhang) mit der Kamera Deines Mobiltelefons, um zu{" "}
          <strong>Paypal</strong> weitergeleitet zu werden und die Zahlung
          auszuführen.
        </p>
        <p>
          <strong>Variante 3 &#45; Banküberweisung</strong> Um per
          Banküberweisung zu zahlen, überweise bitte den vollständigen
          Rechnungsbetrag aus Deiner Auftragsbestätigung innerhalb der{" "}
          <strong>nächsten 14 Tage</strong> auf das folgende Konto:
        </p>
        <p>
          Name: Priwatt GmbH IBAN: DE18 7002 0270 0038 2422 61 BIC: HYVEDEMMXXX
          Verwendungszweck: &#123;BELEGNR&#125;
        </p>

        <p>
          <strong>8 bis 10 Werktage</strong> nach Zahlungseingang senden wir
          Dein Balkonkraftwerk zu Dir nach Hause. Bitte beachte: Aufgrund der
          derzeit hohen Nachfrage kann es vereinzelt zu verlängerten
          Lieferzeiten kommen.
        </p>

        <p>
          Vielen Dank für Deinen Beitrag und viel Spaß beim Produzieren Deines
          eigenen Solarstroms!
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
