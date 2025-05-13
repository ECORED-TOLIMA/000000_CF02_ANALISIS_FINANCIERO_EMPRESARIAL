<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La aplicación de los indicadores financieros en la toma de decisiones

    p.mb-5(data-aos="fade-down-right") El uso de los indicadores financieros como base para la toma de decisiones, es fundamental en cualquier organización, sin importar su tamaño o sector. Estos indicadores permiten transformar los datos contables y financieros en información comprensible, útil y accionable. Su función principal no es solo describir la situación económica de la empresa, sino también facilitar la identificación de oportunidades, riesgos y tendencias que puedan influir en el desempeño futuro del negocio.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Un análisis financiero efectivo no se limita a revisar un solo indicador de forma aislada. Por el contrario, se requiere una lectura integral del conjunto de indicadores, que permita ver el panorama completo de la situación de la empresa. Por ejemplo, una empresa puede tener alta rentabilidad (ROE elevado), pero si tiene una razón de endeudamiento muy alta y una cobertura de intereses baja, estaría operando con un riesgo financiero elevado. De igual forma, una buena rotación de inventarios puede perder relevancia si las cuentas por cobrar están mal gestionadas, afectando el flujo de efectivo.

    p.mb-5(data-aos="fade-down-right") La integración de los indicadores financieros también es clave para alinear la gestión operativa con la estrategia empresarial. Por ejemplo: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/icono-01.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Crecimiento agresivo
              p Una empresa orientada al crecimiento agresivo puede tolerar un mayor apalancamiento financiero si lo compensa con rentabilidad alta.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/icono-02.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Estabilidad
              p En cambio, una organización que prioriza la estabilidad deberá enfocar sus decisiones en mantener buena liquidez, minimizar riesgos y sostener márgenes operativos sólidos. 

    p(data-aos="fade-down-right") En este sentido, los indicadores ayudan a traducir la estrategia en métricas concretas y comparables en el tiempo.
    p.mb-5(data-aos="fade-down-right") Además, cada tipo de decisión empresarial se apoya en diferentes grupos de indicadores: 

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-03.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Inversión
            p.text-center.mt-4.mb-0 Las decisiones sobre inversión requieren analizar la rentabilidad esperada y la eficiencia del uso de activos. 

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-04.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Financiamiento
            p.text-center.mt-4.mb-0 Las decisiones sobre financiamiento exigen revisar el nivel de endeudamiento y la capacidad de pago. 

      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/icono-05.svg' alt="Imagen decorativa")
          .tarjeta--boton.color-secundario.p-4.py-5.h-100(style="background-color:#E5E9FE")
            h4.text-center.mt-5.mb-0 Operativas
            p.text-center.mt-4.mb-0 Las decisiones operativas, como mejorar procesos o ajustar precios, se apoyan en márgenes y rotación de activos. 

    p(data-aos="fade-down-right") En todos los casos, la información financiera es el punto de partida para actuar con criterio y reducir la incertidumbre.
    p.mb-5(data-aos="fade-down-right") En los últimos años, el uso de herramientas digitales ha transformado la forma en que se realiza el análisis financiero. Plataformas como Excel avanzado, Power BI, Tableau o software ERP permiten automatizar el cálculo de indicadores, visualizar resultados en tiempo real y generar reportes interactivos que facilitan la interpretación de los datos. Estas herramientas permiten a los gestores financieros y emprendedores identificar patrones, hacer simulaciones y tomar decisiones más ágiles y fundamentadas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris2.p-2
          .row.justify-content-center.align-items-center.mb-3
            .col-3.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema2/img-02.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-2
              p El uso de dashboards o tableros de control financiero, por ejemplo, facilita una lectura intuitiva del desempeño de la empresa a través de gráficos dinámicos que conectan los principales indicadores con las metas estratégicas. De esta forma, la información contable deja de ser estática y se convierte en un recurso vivo, que se actualiza constantemente y permite tomar decisiones de forma oportuna, con una perspectiva más clara del impacto de cada acción.
              p Es importante resaltar que la interpretación adecuada de los indicadores requiere formación, criterio y contexto. No basta con calcular fórmulas; se necesita comprender qué representan los resultados, qué los está afectando y cómo se comparan con periodos anteriores o con otras empresas del sector. La experiencia y el conocimiento del negocio son complementos esenciales para dar sentido a los números y convertirlos en decisiones acertadas.

    p.mb-5(data-aos="fade-down-right") En conclusión, los indicadores financieros son herramientas poderosas de gestión, pero su verdadero valor se revela cuando se usan de forma estratégica, integrada y apoyados en tecnología. Son el puente entre los datos y las decisiones, y permiten a la empresa no solo saber dónde está, sino también proyectar hacia dónde quiere ir, con fundamentos sólidos que disminuyan el riesgo y maximicen el potencial de crecimiento.

    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Análisis de indicadores financieros

    p.mb-4(data-aos="fade-down-right") Es una herramienta fundamental para evaluar, controlar y proyectar el desempeño de una empresa en todos sus niveles. A través de ellos, los responsables financieros pueden obtener una visión cuantitativa y cualitativa del estado real del negocio, permitiendo tomar decisiones más acertadas, reducir la incertidumbre y alinear la operación diaria con los objetivos estratégicos de la organización. Estos indicadores convierten los estados financieros en una fuente activa de información para gestionar de forma más eficiente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-8.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/img-03.png', alt='Texto que describa la imagen')
      .col-lg-7
        p Los diferentes grupos de indicadores liquidez, endeudamiento, rentabilidad y eficiencia, ofrecen una visión integral y complementaria de la salud financiera de la empresa, de la siguiente manera: 
        ul.lista-ul
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Liquidez:] permiten anticipar posibles tensiones de caja y mantener una operación fluida. 

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Endeudamiento:] reflejan el nivel de riesgo financiero y la estructura de capital. 

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Rentabilidad:] revelan la capacidad para generar valor, mientras que los de eficiencia permiten medir el uso adecuado de los recursos. 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Juntos, forman un sistema de alerta temprana que facilita la acción preventiva y la mejora continua.

    p.mb-4(data-aos="fade-down-right") No obstante, el verdadero valor de estos indicadores no está solo en su cálculo, sino en su interpretación dentro del contexto del negocio. Una empresa no debe basar su análisis financiero en cifras absolutas, sino en relaciones, tendencias y comparaciones. Así, se hace necesario que estos indicadores se analicen como un conjunto articulado, no como cifras aisladas. Además, deben adaptarse a la realidad de cada organización, su tamaño, sector, ciclo de vida y objetivos estratégicos.

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Hoy en día, el uso de herramientas digitales y sistemas de visualización financiera como Excel avanzado, Power BI o tableros de control, ha fortalecido significativamente la manera como se gestionan estos indicadores. Estas plataformas permiten automatizar procesos, actualizar datos en tiempo real y tomar decisiones con mayor agilidad. Así, el análisis financiero deja de ser una tarea meramente contable y se convierte en un proceso dinámico de gestión estratégica que impacta directamente en la competitividad de la empresa.
        p En conclusión, los indicadores financieros son mucho más que fórmulas: son instrumentos clave para la sostenibilidad, el crecimiento y la toma de decisiones informadas. Su aplicación exige conocimiento técnico, pensamiento crítico, uso de tecnología y comprensión profunda del entorno empresarial. Incorporar el análisis de indicadores en la cultura organizacional fortalece la visión a largo plazo, mejora el desempeño y potencia el liderazgo financiero dentro de cualquier organización.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img-04.png' alt="Imagen decorativa")





















    //- .cronologia.mb-5
    //-   .contenedor
    //-     .tarjeta-evento.tarjeta-evento--paso1(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 01
    //-         h2.p-2.text-white Subtitle
    //-       .tarjeta-cuerpo.p-4
    //-         p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-         figure
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen 
    //-     .tarjeta-evento.tarjeta-evento--paso2(data-aos="fade-right")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 02
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso3(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 03
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso4(data-aos="fade-right")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 04
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis deserunt doloribus consequatur, laudantium odio dolorum laboriosam.
    //-     .tarjeta-evento.tarjeta-evento--paso5(data-aos="fade-left")
    //-       .tarjeta-titulo
    //-         .cajon-numero
    //-           span 05
    //-         h2 Subtitle
    //-       .tarjeta-cuerpo
    //-         p.mb-0 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
