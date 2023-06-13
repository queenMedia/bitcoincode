import "./works.css";
import { CardWorks } from "../../components/cardWorks/cardWorks";
import { HeaderCard } from "../../components/headerCard/headerCard";
import iconOne from "../../assets/images/1.png";
import iconTwo from "../../assets/images/2.png";
import iconThree from "../../assets/images/3.png";

export const Works = (props) => {
  const cardsContent = [
    {
      image: iconOne,
      header: <HeaderCard class="puprle-light-header-card" title="Paso 1"/>,
      alt: "iconOne",
      title: "SIGA EL MERCADO",
      content: "Bitcoin Code afirma ser capaz de predecir las operaciones con un nivel de precisión del 99,4% . Los miembros de todo el mundo han informado en los comentarios en línea que han hecho el doble e incluso el triple de los márgenes de beneficio, por lo que hasta el 300% utilizando esta tecnología.",
    },
    {
      image: iconTwo,
      header: <HeaderCard class="purple-header-card" title="Paso 2"/>,
      alt: "iconTwo",
      title: "TECNOLOGÍA FINANCIERA",
      content: "Al igual que una serie de soluciones de trading más avanzadas, Bitcoin Code informa de una reactividad excepcional y dice que se adelanta al mercado en 0,01 segundos, lo cual es increíblemente rápido.",
    },
    {
      image: iconThree,
      header: <HeaderCard class="blue-header-card" title="Paso 3" />,
      alt: "iconThree",
      title: "TECNOLOGÍA FINANCIERA",
      content: "Al igual que una serie de soluciones de trading más avanzadas, Bitcoin Code informa de una reactividad excepcional y dice que se adelanta al mercado en 0,01 segundos, lo cual es increíblemente rápido.",
    }
  ]
  return (
    <section className="cards-section-works">
       <div className="cardContent-works">
        {cardsContent.map(({image, alt ,title, content, header}) => (
            <CardWorks image={image} alt={alt} title={title} content={content} header={header}/>
        ))}
       </div>
    </section>
  );
};
