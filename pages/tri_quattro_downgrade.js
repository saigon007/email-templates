import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Mailbanner_TrioQUattro_210723.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          mit dieser E-Mail möchten wir dich daran erinnern, Deine{" "}
          <strong>
            Trio- oder Quattro-Anlage via Fernupdate auf 600 Watt zu drosseln
            und den erfolgreichen Abschluss in deiner Talent Home App zu
            überprüfen.
          </strong>{" "}
          Wie das geht, erklären wir dir am Ende dieses Schreibens. Bitte lies
          diese Mail <strong>vor der Montage</strong> aufmerksam durch.
        </p>
        <p>
          <strong>Wieso muss ich meine Anlage drosseln?</strong>
          <br />
          Unsere leistungsstarken Trio- und Quattro-Sets können unter guten
          Bedingungen einen besonders hohen Energieertrag für Dich erzeugen.
          Jedoch gilt in Deutschland eine Norm, die die Ausgangsleistung von
          Stecker-Solaranlagen auf aktuell 600 Watt begrenzt. Mit der Drosselung
          Deiner Anlage kannst Du diese nach dem Do-It-Yourself-Prinzip sicher
          und gleichzeitig normenkonform betreiben. Keine Sorge, sobald die
          Bagatellgrenze von 800 Watt Ausgangsleistung in Kraft tritt, kannst Du
          Deine Anlage mit einem Update ganz einfach an diese anpassen.
        </p>
        <p>
          <img
            src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Sicherheitshinweis.png"
            width={"10%"}
          />
          <strong>Sicherheitshinweis:</strong> Betreibst Du Deine Anlage mit
          zwei ungedrosselten Wechselrichtern gemeinsam, kann Deine Stromleitung
          im schlimmsten Fall überhitzen. Das Risiko einer Brandgefahr kann
          entstehen. Da Deine Sicherheit für uns oberste Priorität hat, bitten
          wir Dich daher, beide Wechselrichter nacheinander in der
          Ausgangsleistung zu reduzieren.
        </p>
        <p>
          <strong>
            Bitte folge zur Drosselung dieser Anleitung Schritt für Schritt:
          </strong>
        </p>

        <ol>
          <li>
            <strong>
              Nimm zunächst beide Wechselrichter mit jeweils einem Modul in
              Betrieb.
            </strong>{" "}<br/>
            Verbinde dazu jeweils ein Modul mit einem der Wechselrichter über
            die DC-Anschlusskabel. Schließe im nächsten Schritt beide
            Wechselrichter zusammen. Im Anschluss verbinde noch einen der beiden
            Wechselrichter mit dem AC-Anschlusskabel und stecke das Kabel in die
            Steckdose. Die LEDs im TSUN-Logo der beiden Wechselrichter blinken
            nach wenigen Minuten grün.
          </li>

          <li>
            <strong>
              Richte jetzt Deinen Wechselrichter in der Talent Home App ein.
            </strong>{" "}<br/>
            Stelle sicher, dass eine stabile Internetverbindung besteht.
          </li>
          <li>
            <strong>Kontaktiere nun unser Support Team.</strong><br/> Schreibe dazu
            unter <strong>Angabe der Seriennummer Deiner Wechselrichter</strong>{" "}
            eine E-Mail an support@priwatt.de. Du findest die Seriennummer (R****************)auf
            der Rückseite des Geräts. Wir führen das Fernupdate direkt für Dich
            durch!
          </li>
          <li>
            <strong>
              Du erhältst eine Benachrichtigung über die erfolgreiche Drosselung
              von unserem Support Team.
            </strong>{" "}<br/>
            Fahre nach erfolgreicher Drosselung beider Wechselrichter mit der
            Montage fort. Bitte beachte für alle weiteren Schritte unsere
            Montageanleitung.
          </li>
        </ol>

        <p>
          <strong>Du hast das Fernupdate bereits abgeschlossen? </strong>Prüfe
          in diesem Fall in deiner Talent Home App, ob Deine Anlage mit beiden
          Wechselrichtern zusammen eine Erzeugungsleistung von 600 Watt
          übersteigt. In diesem Fall muss die Drosselung durch unser Support
          Team durchgeführt werden. Solltest du dir unsicher sein, wende dich
          gerne an uns.
        </p>

        <p>
          Kontaktiere bei Rückfragen unser Support Team per E-Mail an
          support@priwatt.de oder telefonisch unter +49 341 221 796 80.
        </p>
        <p>Vielen Dank für Deine Unterstützung!</p>

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

          ol li {
            margin-bottom: 20px;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
