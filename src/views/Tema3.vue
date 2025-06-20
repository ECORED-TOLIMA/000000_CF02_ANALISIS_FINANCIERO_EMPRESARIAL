<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión

    p.mb-4 Son herramientas fundamentales, tanto cuantitativas como cualitativas, que permiten medir el desempeño de una organización en relación con sus objetivos estratégicos, tácticos y operativos. A través de estos indicadores, las empresas pueden monitorear y evaluar la eficacia de sus procesos internos, la eficiencia en la utilización de los recursos y la calidad de los resultados obtenidos. Los indicadores actúan como señales de alerta que orientan sobre el cumplimiento de las metas y permiten identificar de manera oportuna las desviaciones que pueden comprometer el logro de los objetivos organizacionales.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El propósito principal de los indicadores de gestión, es facilitar la toma de decisiones informadas, basadas en datos objetivos y actualizados, en lugar de percepciones subjetivas. Un buen sistema de indicadores, permite a los directivos y responsables de áreas, realizar un seguimiento permanente de los avances, detectar oportunidades de mejora, implementar acciones correctivas de manera anticipada y, en general, fortalecer la gestión organizacional. Asimismo, su aplicación contribuye a fomentar una cultura de resultados dentro de la organización, donde el desempeño de cada área y de cada colaborador se mide de acuerdo con parámetros claros y consensuados.

    p.mb-4 Para que los indicadores de gestión sean efectivos, deben cumplir con ciertas características básicas:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.col-5
            figure
              img(src='@/assets/curso/temas/tema3/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ser específicos
        p Deben medir un aspecto claramente definido y relevante para la operación. 

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.col-5
            figure
              img(src='@/assets/curso/temas/tema3/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ser medibles 
        p De manera objetiva y alcanzables dentro de los recursos y capacidades de la organización, relevantes en el contexto de los objetivos estratégicos y con un marco temporal definido que permita evaluar la evolución en el tiempo. 

    p.mb-5 Esta estructura garantiza que los indicadores no solo reflejen la situación actual, sino que también sirvan como base para la planificación futura y la mejora continua. El diseño adecuado de los indicadores, debe abarcar todas las áreas críticas de la organización: producción, ventas, atención al cliente, gestión del talento humano, finanzas, entre otras. Por ejemplo, en las siguientes áreas puede realizarse lo siguiente: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/icono-01.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Comercial 
              p El porcentaje de cumplimiento de las metas de ventas.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/icono-02.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Producción 
              p El nivel de eficiencia en el uso de insumos.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 A través del monitoreo sistemático de estos indicadores, es posible identificar desviaciones respecto a los estándares esperados, corregir fallos en los procesos y ajustar planes de acción en tiempo real, optimizando así el desempeño global de la organización.

    p.mb-5 Los indicadores de gestión, cumplen un rol esencial en la rendición de cuentas, al proporcionar información objetiva y verificable sobre los resultados alcanzados en comparación con los planes establecidos. Además, funcionan como herramientas de motivación y reconocimiento para los equipos de trabajo, al visibilizar los logros individuales y colectivos, reforzando el sentido de pertenencia y compromiso hacia la organización. Una gestión basada en indicadores, no solo mejora los resultados operativos, sino que también:

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0.mb-0.px-4
              ul.lista-ul
                li.mb-3 
                  i.fas.fa-angle-right(style="color:#B0BDA0")
                  | Fortalece el liderazgo interno.

                li.mb-3 
                  i.fas.fa-angle-right(style="color:#B0BDA0")
                  | Promueve la transparencia organizacional.

                li.mb-0 
                  i.fas.fa-angle-right(style="color:#B0BDA0")
                  | Consolida una cultura orientada a la excelencia y a la mejora continua.

            .col-lg-3.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.px-0
              figure
                img(src='@/assets/curso/temas/tema3/img-02.svg', alt='Imagen decorativa')  
      
    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Tipos y clasificación

    p.mb-5 Los indicadores de gestión se clasifican según el tipo de resultado que permiten evaluar dentro de los procesos organizacionales. Entre los más utilizados se encuentran los indicadores de eficiencia, eficacia, productividad y calidad. Esta clasificación permite abordar el análisis desde distintas perspectivas, lo que facilita una visión integral del desempeño empresarial y una toma de decisiones más acertada. A continuación, se relaciona lo que tiene que ver con cada uno:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Indicadores de eficiencia")
            .col-md-12.mb-4.mb-md-0 
              p Miden la relación entre los recursos utilizados y los resultados obtenidos. Su objetivo es evaluar si la organización está haciendo un uso adecuado de sus recursos como tiempo, dinero, personal o materiales para generar un determinado resultado. 

            .col-md-12.bgblanco.p-3
              p Por ejemplo, un indicador de eficiencia podría ser el costo por unidad producida o el tiempo promedio de atención al cliente. 
              p Un buen nivel de eficiencia implica lograr los resultados con el menor consumo posible de recursos.

              figure
                img(src='@/assets/curso/temas/tema3/img-03.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Indicadores de eficacia")
            .col-md-12.mb-4.mb-md-0 
              p Se enfocan en el grado de cumplimiento de los objetivos propuestos. A diferencia de la eficiencia, no consideran el uso de recursos, sino si se logró o no lo que se esperaba. 

            .col-md-12.bgblanco.p-3
              p Un ejemplo de este tipo de indicador, sería el porcentaje de cumplimiento del plan de ventas o el número de proyectos finalizados dentro del plazo estipulado. 
              p La eficacia apunta directamente a los resultados, sin importar cómo se alcanzaron.

              figure
                img(src='@/assets/curso/temas/tema3/img-04.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Indicadores de productividad")
            .col-md-12.mb-4.mb-md-0 
              p Combinan elementos de eficiencia y eficacia, al medir la cantidad de productos o servicios generados en relación con los recursos utilizados.

            .col-md-12.bgblanco.p-3
              p Por ejemplo, la cantidad de unidades producidas en una planta, con relación a las horas-hombre.
              p Son muy útiles para evaluar el rendimiento de áreas operativas. 

              figure
                img(src='@/assets/curso/temas/tema3/img-05.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="Indicadores de calidad")
            .col-md-12.mb-4.mb-md-0 
              p Se centran en la satisfacción del cliente y en el cumplimiento de estándares establecidos. 

            .col-md-12.bgblanco.p-3
              p Un ejemplo de ello, podría ser la cantidad de productos fabricados, de los cuales alguna cierta cantidad presentaría defectos
              p Evalúan aspectos como el número de errores, devoluciones o quejas y son fundamentales para garantizar procesos sostenibles y alineados con las expectativas del mercado.

              figure
                img(src='@/assets/curso/temas/tema3/img-06.png', alt='Texto que describa la imagen')

    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Aplicación en la evaluación del desempeño empresarial

    p La aplicación de los indicadores de gestión en la evaluación del desempeño empresarial, permite obtener una visión clara, objetiva y estructurada del funcionamiento interno de la organización. Estos indicadores actúan como herramientas de control y seguimiento, facilitando la identificación de avances, retrocesos o desviaciones frente a las metas establecidas. Al utilizarlos de manera sistemática, las empresas pueden medir no solo el cumplimiento de sus planes, sino también la efectividad de sus estrategias operativas y administrativas.
    p.mb-5 En la práctica, los indicadores de eficiencia, eficacia, productividad y calidad, permiten hacer un diagnóstico del rendimiento de las diferentes áreas de la organización. Por ejemplo:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/icono-03.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Área de producción
              p Se pueden analizar tiempos de ciclo, niveles de desperdicio o unidades producidas por hora.

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/icono-04.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Área comercial 
              p Se pueden observar tasas de conversión, cumplimiento de metas de ventas o niveles de satisfacción del cliente. 
    
    p Esta aplicación sectorizada, permite detectar puntos críticos y establecer acciones correctivas o de mejora específicas.
    p.mb-5 Adicionalmente, los indicadores:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon--C01.p-2.mb-4(style="background-color: #F6F8DE")
          .row.justify-content-center.align-items-center
            .col-4.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img-07.svg', alt='Imagen decorativa')
            .col-lg-6.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | Permiten establecer comparaciones entre periodos, sedes, equipos o incluso con referentes del sector, lo que enriquece el análisis del desempeño. 

                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | Esta visión comparativa facilita la toma de decisiones estratégicas, como reasignación de recursos, cambios en procesos, ajustes en el modelo de negocio o rediseño de objetivos. 

                li.mb-3
                  i.fas.fa-check(style="color:#BAC36A")
                  | De esta manera, los indicadores se convierten en una guía para mejorar la competitividad y sostenibilidad de la empresa.
    
    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Otro beneficio importante de su aplicación, es que fomentan la cultura de la medición y la gestión basada en resultados. Cuando los colaboradores conocen los indicadores con los que serán evaluados y comprenden cómo se calculan, es más fácil alinear los esfuerzos individuales y colectivos con los objetivos de la organización. Esto también fortalece la transparencia y la rendición de cuentas dentro del ambiente laboral.
        p Igualmente, la aplicación de estos indicadores, es fundamental para dirigir la organización con base en información real y actualizada. Más allá de ser simples métricas, estos indicadores permiten tomar decisiones oportunas, impulsar mejoras continuas y garantizar que los recursos se utilicen de manera eficiente para alcanzar los resultados esperados. Son, en esencia, el puente entre la planeación estratégica y la ejecución operativa.
      .col-lg-5.col-8.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img-08.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Una vez analizado el papel de los indicadores de gestión en el control operativo y la evaluación del desempeño interno, es fundamental incorporar los indicadores financieros para obtener una visión más amplia y objetiva del estado económico de la organización
  
        p El análisis comparativo complementa la interpretación, ya que permite evaluar los resultados actuales frente a distintos referentes. Al respecto, se tienen en cuenta los siguientes enfoques: 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema3/img-09.svg", alt="Imagen decorativa").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/icono-05.svg", alt="Imagen decorativa").img100
            .col
              h4 Comparación interanual 
              p.mb-3 Uno de los enfoques más comunes es la comparación interanual, que permite observar tendencias, identificar variaciones relevantes y evaluar la evolución financiera de la empresa en el tiempo. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/icono-06.svg", alt="Imagen decorativa").img100
            .col
              h4 #[em Benchmarking] 
              p.mb-3 También se puede realizar un benchmarking, comparando los indicadores con los de empresas similares del mismo sector, lo que permite establecer parámetros de desempeño competitivo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema3/icono-07.svg", alt="Imagen decorativa").img100
            .col
              h4 Metas presupuestadas o proyecciones financieras 
              p.mb-3 Este es otro tipo de comparación útil realizado, ya que este análisis permite evaluar si la empresa está cumpliendo con sus objetivos, si existen desviaciones y cuáles son sus posibles causas.

    p En este contexto, la interpretación de resultados no solo sirve para comprender el pasado y el presente financiero, sino también para proyectar escenarios futuros y ajustar el rumbo estratégico.
    p.mb-5 Interpretar los resultados y realizar un análisis comparativo no es un ejercicio estático, sino una herramienta dinámica que facilita la gestión financiera. Más allá de calcular ratios, se trata de transformar los datos en información útil y significativa, que sirva de base para la toma de decisiones, el control de gestión y la mejora continua del desempeño organizacional.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="fade-down-right")
        .color-secundario.p-4.mb-4(style="background-color:#E5E9FE")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4 
              img.mb-3(src='@/assets/curso/temas/tema3/icono-08.svg')
            .col-lg-9
              p Tanto los indicadores de gestión como los financieros, proporcionan información valiosa por separado; sin embargo, su verdadero poder analítico se alcanza al integrarlos en un enfoque de análisis integral, que permita identificar causas, efectos y relaciones entre los distintos aspectos del desempeño organizacionalpa







</template>

<script>
export default {
  name: 'Tema3',
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
