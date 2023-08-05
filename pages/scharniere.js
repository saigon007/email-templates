import Layout from "../components/Layout";
import Container from "../components/Container";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <Container>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2023/07/Mailbanner_Falschlieferung_Scharniere210723.png" />
        <p>Liebe Kundin, lieber Kunde,</p>
        <p>wir haben wichtige Neuigkeiten zu Deiner Stecker-Solaranlage.</p>
        <p>
          Wir möchten Dich darauf hinweisen, dass Dein Paket unser
          Logistikzentrum mit den falschen Scharnieren verlassen hat. Die
          Scharniere, die an der Halterung des Solarmoduls befestigt werden,
          sind zu kurz. Eine Montage ist mit diesen Scharnieren leider nicht
          möglich.
        </p>
        <p>
          <strong>So geht es jetzt weiter:</strong>
          Deine neuen Scharniere bekommst Du automatisch und selbstverständlich
          kostenfrei von uns zugesendet. Sie sind bereits in unserem Lager
          angekommen und werden in Kürze an Deine bei uns hinterlegte Adresse
          versendet, damit du Deine Anlage so bald wie möglich in Betrieb nehmen
          kannst. Die Lieferung erreicht Dich voraussichtlich Ende kommender
          Woche oder zu Beginn der darauffolgenden Woche. Du erhältst eine
          Versandbenachrichtigung, wenn das Paket unser Lager verlässt.
        </p>
        <p>
        Wir möchten uns aufrichtig für die Unannehmlichkeiten entschuldigen.
        </p>
         


        <p>
        Bei Rückfragen stehen wir Dir gerne zur Seite. Kontaktiere uns dafür ganz einfach per E-Mail über support@priwatt.de oder telefonisch unter +49 341 221 796 80.
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
          }
        `}</style>
      </Container>
      <Footer />
    </Layout>
  );
}
