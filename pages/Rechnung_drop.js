import Layout from "../components/Layout";
import ContainerOrderNr from "../components/ContainerOrderNr";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr>
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/05/Img-3.png" />

        <p></p>
        <p>Hallo &#123;NAME&#125;,</p>

        <p>
          <strong>anbei finden Sie die Rechnung zu Ihrer</strong> Bestellung <strong>&#123;Belegnr&#125;</strong> von
          priwatt. Ihre Produkte wurden soeben verpackt und werden zeitnah an
          Sie verschickt.
        </p>

        <p>
        Bezahlen können Sie Ihre Bestellung <strong>innerhalb der nächsten 14 Tage</strong>.
        </p>

        <p>
        Wir wünschen Ihnen viel Spaß bei Ihrem Start in die private Energiewende!
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
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
