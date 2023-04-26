import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>
          wir haben wichtige Neuigkeiten zu Deiner Stecker-Solaranlage: Einige
          Montageschienen unseres Lieferanten weichen von der Norm ab und müssen
          daher ausgetauscht werden.
        </p>
        <p>
          <strong>
            Bitte lies Dir diese E-Mail unbedingt bis zum Ende durch,
            gegebenenfalls ist auch Deine Anlage betroffen.
          </strong>
        </p>
        <p>
          Deine Sicherheit und die Zuverlässigkeit unserer Produkte haben für
          uns oberste Priorität. Daher prüfen wir im Rahmen unseres
          Qualitätssicherungsprozesses kontinuierlich unsere Produkte. In diesem
          Zusammenhang ist aufgefallen, dass einige der in unseren
          Stecker-Solarsets enthaltenen Montageschienen mit einem zu kurzen
          Gewindeabstand zum Profilrand produziert und versendet wurden.
        </p>
        <p>
          <strong>
            Sollte Deine Anlage betroffen sein, müssen Deine Montageschienen
            vorsorglich als Sicherheitsmaßnahme ausgetauscht werden.
          </strong>
        </p>
        <p>
          So prüfst Du, ob Deine Montageschienen ausgetauscht werden müssen:
        </p>

        <ol>
          <li style={{ fontSize: "16px" }}>
            Schau Dir das untere Ende der Montageschienen Deiner
            Stecker-Solaranlage an. Betrachte dabei die Stelle, an der die
            Endklemmen befestigt sind (Siehe Bild 1). Abhängig vom
            Installationsort brauchst Du dafür eine Leiter.
          </li>
          <div>
            <img
              src="https://priwatt.de/wordpress/wp-content/uploads/2023/03/Anwendungsfall.jpg"
              width={"100%"}
            />
            <p style={{ fontSize: "10px" }}>
              Bild 1: Links = betroffene Halterungsschiene | Rechts = von der
              Norm abweichende Halterungsschiene
            </p>
          </div>
          <li style={{ fontSize: "16px" }}>
            Stehen die Modulklemmen sicher auf Deinen Montageschienen und sind
            noch einige Millimeter Platz bis zum Rand der Schienen? (siehe Bild
            2) Dann hat der Profilrand Deiner Montageschienen die richtige Länge
            und die Schienen müssen nicht ausgetauscht werden.
          </li>
          <li style={{ fontSize: "16px" }}>
            Ragen Deine Endklemmen über den Rand der Schienen hinaus? (Siehe
            Bild 2 und Bild 1 rechts) Dann ist der Profilrand Deiner
            Montageschienen zu kurz. Montiere Deine Anlage als
            Sicherheitsmaßnahme bitte direkt ab. Wir schicken Dir kostenfrei
            neue Montageschienen zu. Weitere Informationen dazu findest Du unten
            in dieser E-Mail.
          </li>

          <div>
            <img
              src="https://priwatt.de/wordpress/wp-content/uploads/2023/03/Grafik-Vergleich.jpg"
              width={"100%"}
            />
            <p style={{ fontSize: "10px" }}>
              Bild 2: Links = richtige Montageschiene | Rechts = von der Norm
              abweichende Montageschiene
            </p>
          </div>
        </ol>
        <p>
          Du hast Deine Anlage noch nicht installiert? Dann warte bitte auf die
          Nachlieferung der neuen Montageschienen, bevor Du Dein Balkonkraftwerk
          montierst.
        </p>
        <p>
          <strong>So bekommst Du die neuen Montageschienen:</strong> Deine neuen
          Schienen bekommst Du automatisch und selbstverständlich kostenfrei von
          uns zugesendet. Sie sind bereits in unserem Lager angekommen und
          werden in Kürze an Deine bei uns hinterlegte Adresse versendet. Du
          erhältst eine Versandbenachrichtigung, wenn das Paket unser Lager
          verlässt.
        </p>
        <p>
          <strong>Hinweis:</strong> Die Schienen sind aus einer
          Aluminiumlegierung. Bitte entsorge sie gemäß den Vorgaben Deines
          Bundeslandes entweder in der gelben Tonne oder auf dem Wertstoffhof.
        </p>

        <p>
          Wir bitten Dich um Entschuldigung für die Umstände und schenken Dir
          als Entschädigung einen 50 € Gutschein für unseren Online-Shop, den Du
          nach Belieben selbst einlösen oder verschenken kannst.
        </p>
        <p>
          <strong>So geht es jetzt weiter:</strong>
        </p>

        <ol>
          <li style={{ fontSize: "16px" }}>
            Die neuen Montageschienen kommen voraussichtlich Ende dieser Woche
            oder Anfang nächster Woche bei Dir an.
          </li>

          <li style={{ fontSize: "16px" }}>
            Sobald Du die neuen Schienen erhalten hast, tausche diese bitte
            direkt aus.
          </li>
          <li style={{ fontSize: "16px" }}>
            Deinem Paket liegen ein vorgefertigter Antwortbrief und ein
            frankierter Rückumschlag bei. Wenn Du den Austausch durchgeführt
            hast, schicke uns den Antwortbrief bitte unterschrieben für unsere
            Unterlagen zurück.
          </li>
          <li style={{ fontSize: "16px" }}>
            Sobald Dein Brief bei uns eingegangen ist, erhältst Du von uns
            Deinen 50 € Gutscheincode.
          </li>
        </ol>

        <p>
          Bei Rückfragen stehen wir Dir gerne zur Seite. Kontaktiere uns dafür
          ganz einfach per E-Mail über produktaustausch@priwatt.de oder
          telefonisch unter +49 34122179610.
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

          ol li {
            margin-bottom: 20px;
            line-height: 24px;
          }

          ol {
            margin-top: 0;
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
