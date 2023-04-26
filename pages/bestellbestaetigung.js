import Layout from "../components/Layout";
import Banner from "../components/Banner";
import BottomContainer from "../components/BottomContainer";
import Footer from "../components/Footer";
import ContainerOrderNr from "../components/ContainerOrderNr";

export default function Unterseite() {
  return (
    <Layout>
      <ContainerOrderNr varordernr="{{ order.orderNumber }}">
        <Banner src="https://priwatt.de/wordpress/wp-content/uploads/2022/07/wunschprodukt.png" />
        &#123;% set currencyIsoCode = order.currency ? order.currency.isoCode :
        &#39;EUR&#39;%&#125;
        <p>
          Hallo &#123;&#123; order.orderCustomer.firstName &#125;&#125;
          &#123;&#123; order.orderCustomer.lastName &#125;&#125;,
        </p>
        <p>
          gerne bestätigen wir Dir, dass Deine Bestellung &#123;&#123;
          order.orderNumber &#125;&#125; vom &#123;&#123;
          order.orderDate|date(&#34;d/m/Y&#34;) &#125;&#125; bei uns eingegangen
          ist. Voraussichtlich wird Deine Bestellung am &#123;% set dateTo =
          order.deliveries.at(0).shippingDateLatest %&#125; &#123;% for lineItem
          in order.lineItems %&#125; &#123;% if
          lineItem.payload.customFields.custom_product_deliveries_field_date_to
          is defined %&#125; &#123;% if
          date(lineItem.payload.customFields.custom_product_deliveries_field_date_to)
          &gt; date(dateTo) %&#125; &#123;% set dateTo =
          lineItem.payload.customFields.custom_product_deliveries_field_date_to
          %&#125; &#123;% endif %&#125; &#123;% endif %&#125; &#123;% endfor
          %&#125; &#123;&#123; dateTo|date(&#34;d/m/Y&#34;) &#125;&#125;
          geliefert.
        </p>
        <p>
          Aufgrund der derzeit hohen Nachfrage kann es vereinzelt zu
          verlängerten Lieferzeiten kommen.
        </p>
        <p>
          <strong>Du bezahlst per Vorkasse?</strong> Dann überweise bitte den
          Rechnungsbetrag unter{" "}
          <strong>
            <u>Angabe Deiner Bestellnummer</u>
          </strong>{" "}
          auf dieses Konto:
        </p>
        <p>
          <strong>Name:</strong> Priwatt GmbH
          <br />
          <strong>IBAN:</strong> DE83 4306 0967 1131 7476 00
          <br />
          <strong>BIC:</strong> GENODEM1GLS (GLS Bank)
          <br />
          <strong>Betrag:</strong> &#123;&#123; order.price.totalPrice
          &#125;&#125; €
          <br />
          <strong>
            Verwendungszweck (
            <span className="text-red">bitte zwingend angeben!</span>):
          </strong>{" "}
          &#123;&#123; order.orderNumber &#125;&#125;
        </p>
        <h2>Bestellübersicht</h2>
        &#123;% for lineItem in order.lineItems %&#125; &#123;% if
        lineItem.payload.features is defined and
        lineItem.payload.features|length &gt;= 1 %&#125; &#123;% set
        referencePriceFeatures = lineItem.payload.features|filter(feature =&gt;
        feature.type == &#39;referencePrice&#39;) %&#125; &#123;% if
        referencePriceFeatures|length &gt;= 1 %&#125; &#123;% set
        referencePriceFeature = referencePriceFeatures|first %&#125;,
        &#123;&#123; referencePriceFeature.value.purchaseUnit &#125;&#125;
        &#123;&#123; referencePriceFeature.value.unitName &#125;&#125;
        (&#123;&#123;
        referencePriceFeature.value.price|currency(currencyIsoCode)
        &#125;&#125;* / &#123;&#123; referencePriceFeature.value.referenceUnit
        &#125;&#125; &#123;&#123; referencePriceFeature.value.unitName
        &#125;&#125;) &#123;% endif %&#125; &#123;% endif %&#125; &#123;% if
        lineItem.cover.url is defined %&#125; &#123;% endif %&#125;
        <div className="flex">
          <div className="margin-left">
            <p className="text-darkblue">
              &#123;&#123; lineItem.label|u.wordwrap(80) &#125;&#125; x
              &#123;&#123; lineItem.quantity &#125;&#125;{" "}
            </p>
            &#123;% if lineItem.payload.options is defined and
            lineItem.payload.options|length &gt;= 1 %&#125; &#123;% for option
            in lineItem.payload.options %&#125;&#123;&#123; option.group
            &#125;&#125;: &#123;&#123; option.option &#125;&#125; &#123;% if
            lineItem.payload.options|last != option %&#125;&#123;&#123; &#34; |
            &#34; &#125;&#125; &#123;% endif %&#125; &#123;% endfor %&#125;
            &#123;% endif %&#125;
          </div>
          <div>
            &#123;&#123; lineItem.unitPrice|currency(currencyIsoCode)
            &#125;&#125; &#123;% endfor %&#125;
          </div>
        </div>
        <p>
          &#123;% set displayRounded = order.totalRounding.interval != 0.01 or
          order.totalRounding.decimals != order.itemRounding.decimals %&#125;
          &#123;% set decimals = order.totalRounding.decimals %&#125; &#123;%
          set total = order.price.totalPrice %&#125; &#123;% if displayRounded
          %&#125; &#123;% set total = order.price.rawTotal %&#125; &#123;% set
          decimals = order.itemRounding.decimals %&#125; &#123;% endif %&#125;
        </p>
        <p>
          Zwischensumme &#123;&#123; order.amountNet|currency(currencyIsoCode)
          &#125;&#125; Versand &#123;% if order.deliveries is defined and
          order.deliveries|length &gt;= 1 %&#125; &#123;% for shippingCost in
          order.deliveries %&#125; &#123;&#123;
          shippingCost.shippingCosts.totalPrice|currency(currencyIsoCode)
          &#125;&#125; &#123;% endfor %&#125; &#123;% endif %&#125; Steuern
          &#123;% if order.price.calculatedTaxes is defined and
          order.price.calculatedTaxes|length &gt;= 1 %&#125; &#123;% for
          calculatedTax in order.price.calculatedTaxes %&#125; &#123;&#123;
          calculatedTax.tax|currency(currencyIsoCode) &#125;&#125; &#123;%
          endfor %&#125; &#123;% endif %&#125; Gesamt &#123;&#123;
          total|currency(currencyIsoCode,decimals=decimals) &#125;&#125;
        </p>
        <p>Informationen zu Deiner Bestellung</p>
        <p>
          Lieferadresse &#123;% set delivery = order.deliveries.first %&#125;
          &#123;% set shippingAddress = delivery.shippingOrderAddress %&#125;
          &#123;&#123; shippingAddress.company &#125;&#125; &#123;&#123;
          shippingAddress.firstName &#125;&#125; &#123;&#123;
          shippingAddress.lastName &#125;&#125; &#123;&#123;
          shippingAddress.street &#125;&#125; &#123;&#123;
          shippingAddress.zipcode &#125;&#125; &#123;&#123; shippingAddress.city
          &#125;&#125; &#123;&#123; shippingAddress.country.translated.name
          &#125;&#125;
        </p>
        <p>
          Rechnungsadresse &#123;% set billingAddress =
          order.addresses.get(order.billingAddressId) %&#125; &#123;&#123;
          billingAddress.company &#125;&#125; &#123;&#123;
          billingAddress.firstName &#125;&#125; &#123;&#123;
          billingAddress.lastName &#125;&#125; &#123;&#123;
          billingAddress.street &#125;&#125; &#123;&#123; billingAddress.zipcode
          &#125;&#125; &#123;&#123; billingAddress.city &#125;&#125;
          &#123;&#123; billingAddress.country.translated.name &#125;&#125;
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
          .text-red {
            color: red;
          }
          h2 {
            font-size: 18px;
            font-family: Inter, Arial, sans-serif;
            font-weight: 600;
            color: #0c215a;
            line-height: 27px;
          }
          .text-darkblue {
            font-family: Inter, Arial, sans-serif;
            font-size: 12px;
            font-weight: 600;
            line-height: 18px;
            text-align: left;
            color: #0c215a;
            padding-left: 15px;
          }
          .margin-left {
            padding: 20px;
            padding-left: 60px;
          }
          .flex {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </ContainerOrderNr>
      <Footer />
    </Layout>
  );
}
