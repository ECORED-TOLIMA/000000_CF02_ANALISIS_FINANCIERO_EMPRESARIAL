<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Conceptos generales de los indicadores financieros

    p.mb-4(data-aos="fade-down-right") Los indicadores financieros son herramientas cuantitativas esenciales en el análisis económico de las organizaciones. A partir de datos extraídos de los estados financieros, estos indicadores permiten construir relaciones numéricas que ayudan a entender la situación real de una empresa. Su propósito no es únicamente describir cifras, sino traducir la información contable en señales claras para evaluar la estabilidad, el rendimiento y la gestión financiera. Se convierten así en instrumentos que brindan una radiografía del estado económico de una empresa en un periodo determinado o en comparación con ejercicios anteriores o referentes del sector.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Según Ortiz (2011), los indicadores financieros permiten diagnosticar el funcionamiento integral de la empresa en sus dimensiones financiera, operativa y estratégica. No se trata solo de saber si una empresa gana o pierde dinero, sino de comprender cómo lo hace, con qué recursos, a qué velocidad, y con qué nivel de riesgo. De este modo, el análisis de indicadores contribuye a responder preguntas clave como:  
        
        ul.lista-ul.mb-0
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            | ¿La empresa es solvente?

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            | ¿Está bien apalancada?

          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            |  ¿Genera utilidades suficientes?
          
          li(style="margin-bottom: 2px")
            i.fas.fa-angle-right(style="color:#BAC36A") 
            |  ¿Aprovecha eficientemente sus activos?   

    p(data-aos="fade-down-right") En consecuencia, estos indicadores se convierten en piezas fundamentales en la toma de decisiones empresariales fundamentadas y proactivas.
    p.mb-4(data-aos="fade-down-right") La utilidad de los indicadores va más allá del diagnóstico financiero. También cumplen un rol fundamental en la planificación, control y evaluación dentro del proceso administrativo. Gerentes, inversionistas, entidades financieras y entes de control, utilizan estas métricas para: 

    .tarjeta1.tarjeta--BG02.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center(data-aos="fade-down")
        .col-lg-3.d-none.d-lg-block
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img-02.png", alt="alt").img400.m-auto
        .col-lg-9
          SlyderF.custom(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/icono-01.svg", alt="alt").img100.m-auto
              p.mb-0 Determinar la viabilidad de un negocio.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/icono-02.svg", alt="alt").img100.m-auto
              p.mb-0 Establecer políticas financieras.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/icono-03.svg", alt="alt").img100.m-auto
              p.mb-0 Asignar presupuestos.
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-6.col-lg-8
                  img(src="@/assets/curso/temas/tema1/icono-04.svg", alt="alt").img100.m-auto
              p.mb-0 Monitorear el cumplimiento de objetivos estratégicos.

    p(data-aos="fade-down-right") Por ello, es indispensable que su cálculo y análisis, se realicen con rigurosidad técnica y comprensión del entorno empresarial en el que opera la organización.
    p.mb-4(data-aos="fade-down-right") Desde el punto de vista técnico, los indicadores financieros se definen como relaciones matemáticas entre dos o más cuentas contables de los estados financieros, como el balance general o el estado de resultados. Estas relaciones tienen sentido analítico porque permiten convertir datos aislados en información estratégica. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-8
        .cajon.color-primario.p-4
          p Por ejemplo, un indicador como la razón corriente (activo corriente/pasivo corriente) revela en segundos si una empresa tiene capacidad para pagar sus obligaciones inmediatas. De esta manera, los indicadores permiten transformar los datos contables —en apariencia fríos y abstractos— en criterios concretos de gestión y control.

    p.mb-4(data-aos="fade-down-right") Los indicadores financieros se agrupan comúnmente en cuatro grandes categorías, cada una con una función específica:  

    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#F1F8E9")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-05.svg' alt='AvatarTop')
        h4.text-center Indicadores de liquidez
        p.text-center Evalúan la capacidad de la empresa para cumplir compromisos a corto plazo.
      .col-md-6.col-lg.tarjeta--tabla1.p-4(style="background-color:#E5E9FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-06.svg' alt='AvatarTop')
        h4.text-center Indicadores de endeudamiento
        p.text-center Miden el nivel de riesgo financiero y apalancamiento. 
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#F1F8E9")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-07.svg' alt='AvatarTop')
        h4.text-center Indicadores de rentabilidad
        p.text-center Determinan la eficiencia en la generación de utilidades.
      .col-md-6.col-lg.tarjeta--tabla1.p-4(style="background-color:#E5E9FE")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/icono-08.svg' alt='AvatarTop')
        h4.text-center Indicadores de eficiencia o gestión
        p.text-center Permiten valorar cómo se están utilizando los recursos disponibles. 

    .row.justify-content-center.mb-4(data-aos="fade-down-right")
      .bloque-texto-d.color-primario.col-lg-10.col-12.p-2
        .bloque-texto-d__texto.mb-2
          p Los indicadores financieros, como se expuso, se agrupan en cuatro grandes categorías fundamentales, cada una enfocada en analizar aspectos distintos pero complementarios de la situación económica de una empresa. Esta clasificación facilita una comprensión integral del desempeño financiero, permitiendo a los analistas, gerentes y empresarios tomar decisiones más acertadas, basadas en datos concretos y evaluaciones objetivas. Retomando a Ortiz (2011), se da una explicación de cada una:

    .tarjeta.BGIMG01.mb-5(data-aos="fade-left")
      .p-4.p-lg-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Indicadores de liquidez 
              p En primer lugar, se encuentran los indicadores de liquidez, cuya función principal es medir la capacidad de la empresa para atender sus obligaciones de corto plazo; es decir, estos indicadores muestran si la empresa cuenta con suficientes activos líquidos como efectivo, cuentas por cobrar o inventarios para cubrir sus deudas inmediatas. Herramientas como la razón corriente o la prueba ácida son claves para identificar si una empresa está en riesgo de insolvencia operativa, situación que puede afectar su reputación y su capacidad de continuar operando normalmente.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-03.png' style="width: 500px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Indicadores de endeudamiento 
              p En segundo lugar, están los indicadores de endeudamiento, también conocidos como indicadores de apalancamiento financiero. Estos permiten analizar el grado de dependencia que tiene la empresa de recursos ajenos; es decir, del crédito y las obligaciones financieras con terceros. Al medir la proporción de deuda frente a los activos o el patrimonio, se puede determinar si la empresa está asumiendo un nivel de riesgo adecuado o excesivo. Un endeudamiento bien manejado puede ser beneficioso para el crecimiento; sin embargo, un nivel alto y mal administrado puede comprometer la viabilidad del negocio en el largo plazo.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-04.png' style="width: 500px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Indicadores de rentabilidad 
              p En tercer lugar, se destacan los indicadores de rentabilidad, cuya función es evaluar la capacidad de la empresa para generar utilidades a partir de sus ingresos, activos o recursos propios. Estos indicadores son de especial interés para los inversionistas y propietarios, ya que reflejan el retorno que están obteniendo por su inversión. Entre los más usados se encuentran el margen de utilidad, el retorno sobre activos (ROA) y el retorno sobre patrimonio (ROE). Su análisis ayuda a entender si la empresa está utilizando adecuadamente sus recursos para producir beneficios sostenibles.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-05.png' style="width: 500px" ,alt='').m-auto
          
          .row.justify-content-center.align-items-center
            .col-lg-6.order-lg-1.order-2
              .h4 Indicadores de eficiencia o gestión 
              p Finalmente, están los indicadores de eficiencia o gestión, los cuales se enfocan en medir qué tan bien está utilizando la empresa sus recursos para operar. Estos indicadores analizan la rotación de activos como inventarios, cuentas por cobrar y cuentas por pagar, permiten determinar si los procesos internos son ágiles, si el capital de trabajo está bien gestionado y si la empresa mantiene un flujo de caja saludable. Una buena eficiencia en la gestión se traduce en menor tiempo de conversión de recursos en dinero y en una mejor capacidad de respuesta ante el mercado.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img-06.png' style="width: 500px" ,alt='').m-auto

    p.mb-0(data-aos="fade-down-right") En conjunto, estas cuatro categorías de indicadores, forman un sistema de análisis que permite observar a la empresa desde múltiples ángulos financieros. Evaluarlos de forma aislada puede ser útil, pero su verdadero valor emerge cuando se analizan en conjunto, ya que permiten establecer relaciones entre liquidez, rentabilidad, endeudamiento y eficiencia, ofreciendo una visión completa y estratégica del desempeño empresarial.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Indicadores de liquidez

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.mb-3
      p.mb-5(data-aos="fade-down-right") Los indicadores financieros se calculan a partir de los estados financieros básicos: situación financiera (el balance general), el estado de resultados y el flujo de efectivo. Además, se puede complementar la información con reportes internos, presupuestos y comparativos sectoriales.

      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-07.svg' alt="Imagen decorativa")
      .col-lg-7.col-12(data-aos="fade-left")
        p Los indicadores de liquidez son herramientas financieras que permiten medir la capacidad que tiene una empresa para hacer frente a sus compromisos financieros inmediatos; es decir, sus deudas a corto plazo. Este tipo de análisis es crucial para garantizar la operatividad continua del negocio, ya que una empresa con baja liquidez corre el riesgo de no poder pagar a sus proveedores, empleados, bancos u otras entidades, lo cual puede afectar negativamente su reputación, generar intereses por mora o incluso llevarla a la insolvencia.

    p.mb-5(data-aos="fade-down-right") Estos indicadores se enfocan en establecer una relación entre: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-09.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Activos corrientes
              p Aquellos bienes y derechos que pueden convertirse fácilmente en efectivo en menos de un año. Entre los activos corrientes se encuentran el efectivo, las cuentas por cobrar, los inventarios y otros activos líquidos.

      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-10.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Pasivos corrientes
              p Representan las obligaciones que deben pagarse en ese mismo periodo. Los pasivos corrientes incluyen préstamos bancarios de corto plazo, cuentas por pagar a proveedores y otras deudas próximas a vencerse.

    p(data-aos="fade-down-right") El análisis de liquidez es especialmente importante en negocios que operan con márgenes ajustados o que tienen una alta rotación de inventarios y cuentas por cobrar. Incluso una empresa rentable puede atravesar problemas financieros si no gestiona adecuadamente su liquidez. Por ejemplo, si una empresa tiene muchas ventas a crédito, pero no logra recaudar a tiempo, puede enfrentar dificultades para cumplir con sus compromisos, a pesar de tener utilidades contables.
    p.mb-5(data-aos="fade-down-right") Entre los indicadores más representativos de esta categoría se encuentran:  

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-08.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 La razón corriente
            h5.t2.mb-2 La razón corriente
            p.mb-0 Relaciona los activos corrientes con los pasivos corrientes.    

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-09.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 La prueba ácida o razón rápida
            h5.t2.mb-2 La prueba ácida o razón rápida
            p.mb-0 Excluye los inventarios del cálculo para mostrar una visión más estricta de la liquidez.
      
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-10.png", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 El capital de trabajo
            h5.t2.mb-2 El capital de trabajo
            p.mb-0 Indica cuánto exceden los activos líquidos a las obligaciones inmediatas

    p.mb-5(data-aos="fade-down-right") Cada uno de estos indicadores ofrece una perspectiva distinta, pero complementaria, sobre la solidez financiera de corto plazo.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .cajon-b.color-secundario.p-3.col-lg-10.col-12
        p Según Ortiz (2011), una correcta interpretación de los indicadores de liquidez permite tomar decisiones acertadas sobre la gestión del efectivo, la política de créditos y cobros, así como la planificación del capital de trabajo. En contextos de incertidumbre económica o cambios en la demanda, una liquidez adecuada actúa como colchón de seguridad para garantizar la continuidad del negocio. Por ello, estos indicadores deben monitorearse constantemente, compararse con promedios del sector y ajustarse a la realidad operativa de cada empresa.
        p.mb-4 A continuación, se explica en mayor medida, cada uno de estos indicadores:

    .h4.tcvo.mb-4(data-aos="fade-down-right") ● La razón corriente

    p.mb-5(data-aos="fade-down-right") La razón corriente es uno de los indicadores más utilizados para medir la liquidez general de una empresa. Su fórmula consiste en dividir el total de activos corrientes, entre el total de pasivos corrientes. Esta relación busca responder una pregunta clave: ¿cuántos recursos líquidos o de fácil conversión tiene la empresa por cada peso que debe pagar en el corto plazo?

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-45.png', alt='')

        p.p-4.bg-t1-1(style="background-color:#DCEDC8") En el ejemplo planteado, una empresa con activos corrientes por $80.000.000 y pasivos corrientes por $40.000.000, presenta una razón corriente de 2.0. Esto significa que por cada peso que debe pagar en el corto plazo, dispone de dos pesos en activos líquidos. A primera vista, esto se interpreta como una posición financiera saludable, ya que indica que la empresa tiene el doble de recursos que deudas inmediatas, lo cual le da margen para operar con tranquilidad.

    p(data-aos="fade-down-right") Sin embargo, es importante tener en cuenta que una razón corriente "alta" no siempre es sinónimo de eficiencia. Por ejemplo, si buena parte de esos activos corrientes están compuestos por inventarios que no se están vendiendo o por cuentas por cobrar de difícil recaudo, entonces la empresa podría tener una liquidez “aparente”, pero no efectiva. En ese sentido, la calidad de los activos es tan importante como su cantidad.
    p.mb-4(data-aos="fade-down-right") Por otro lado, una razón corriente inferior a 1.0 (es decir, cuando los pasivos superan a los activos corrientes) es una señal de alerta, ya que implica que la empresa no tiene suficientes recursos líquidos para cubrir sus deudas inmediatas. Esta situación podría poner en riesgo su operación cotidiana y obligarla a recurrir a financiamiento externo de forma urgente, generalmente con costos financieros más altos.

    .row.align-items-center.mb-4(data-aos="fade-down-right")
      .col-lg-6.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema1/img-12.png', alt='', style="width: 600px").m-auto

      .col-lg-6(data-aos="fade-down-right")
        p.p-4.bg-t1-1 De forma ideal, la razón corriente debe situarse en un rango entre 1.5 y 2.5, aunque esto puede variar dependiendo del tipo de industria. Por ejemplo, en sectores con alta rotación de inventarios como el comercio minorista, una razón corriente cercana a 1.2 podría ser aceptable. En contraste, en industrias más estables o con ciclos financieros más largos, se espera una razón corriente más elevada como señal de prudencia financiera. <br><br> En conclusión, este indicador no debe analizarse de manera aislada. Es recomendable complementarlo con la prueba ácida, el capital de trabajo y el análisis del flujo de efectivo, para obtener una visión completa de la capacidad real de pago de corto plazo. Además, se debe considerar la naturaleza de los activos, la antigüedad de las cuentas por cobrar y la estacionalidad del negocio; factores que inciden directamente en la interpretación de la liquidez.
    
    .h4.tcvo.mb-4(data-aos="fade-down-right") ● Prueba ácida

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-8.tarjeta.color-primario.p-4(style="background-color:#F1F8E9")
        p.text-bold.text-center.mb-0 #[b Fórmula]
        p.text-bold.text-center.mb-0 #[b Prueba Ácida = (Activo Corriente - Inventarios) / Pasivo Corriente]

    p(data-aos="fade-down-right") La prueba ácida es un indicador de liquidez más exigente que la razón corriente, ya que excluye los inventarios del activo corriente al momento de medir la capacidad de pago de una empresa. Esto se debe a que los inventarios, aunque hacen parte del capital de trabajo, no siempre se pueden convertir en efectivo de forma rápida o segura, especialmente si tienen baja rotación o están compuestos por productos obsoletos.
    p.mb-5(data-aos="fade-down-right") Este indicador busca responder: ¿qué tan solvente es la empresa si se eliminan los inventarios de la ecuación? En otras palabras, ¿la organización podría pagar sus deudas inmediatas solo con su efectivo, cuentas por cobrar y otros activos más líquidos? Es una medida más conservadora de la liquidez, útil para detectar situaciones en las que la liquidez aparente podría estar sobreestimada debido a un exceso de inventarios acumulados.

    .row.justify-content-center.mb-5
      .col-lg-6.col-8.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-13.png' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        .tarjeta.BG04.p-4.mb-3(style="background-color:#DCEDC8")
          p #[b Ejemplo:]
          p Si una empresa tiene un activo corriente de $80.000.000 y dentro de este tiene inventarios por $20.000.000, su activo corriente sin inventarios sería de $60.000.000. Si sus pasivos corrientes suman $40.000.000, entonces:
          p #[b Prueba Ácida = (80.000.000 - 20.000.000) / 40.000.000 = 1.5]

        p Este resultado significa que la empresa tiene $1,50 por cada $1 de deuda de corto plazo, considerando únicamente sus activos más líquidos (excluyendo los inventarios). Esta es una señal positiva, ya que muestra que, en caso de urgencia, la empresa podría cubrir sus obligaciones sin necesidad de liquidar inventarios, lo que generalmente requiere más tiempo y puede implicar descuentos u otras pérdidas.
    
    .row.justify-content-center.mb-0
      .col-lg-7.order-lg-1.order-2.mb-3(data-aos="fade-right")
        p Ahora bien, si la prueba ácida resulta inferior a 1.0, la empresa podría estar enfrentando un riesgo real de iliquidez, especialmente si sus inventarios no se venden con facilidad. Esto puede ocurrir en empresas que tienen mucho inventario inmovilizado o que dependen demasiado de ventas a crédito, sin una política de cobranza efectiva.
        p Por el contrario, una prueba ácida excesivamente alta, por ejemplo, superior a 3.0 también podría ser motivo de análisis, ya que indicaría que la empresa está acumulando demasiado efectivo o cuentas por cobrar, en lugar de invertir esos recursos de manera productiva. En estos casos, se debe evaluar si se están desaprovechando oportunidades de crecimiento o mejora operativa.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-14.svg' alt="Imagen decorativa")
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4
          p.mb-0 Según Ortiz (2011), la prueba ácida es uno de los indicadores más confiables para evaluar la liquidez de una empresa, siempre y cuando se complemente con el análisis de la estructura de los activos corrientes, el comportamiento histórico de los cobros y el contexto financiero de la organización. Su interpretación no debe hacerse de forma aislada, sino en conjunto con otros indicadores y datos cualitativos del entorno empresarial.

    .h4.tcvo.mb-4(data-aos="fade-down-right") ● Capital de trabajo

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-8.tarjeta.color-primario.p-4(style="background-color:#F1F8E9")
        p.text-bold.text-center.mb-0 #[b Fórmula]
        p.text-bold.text-center.mb-0 #[b Capital de Trabajo = Activo Corriente - Pasivo Corriente]

    p(data-aos="fade-down-right") El capital de trabajo es uno de los indicadores más fundamentales en la gestión financiera de una empresa, ya que representa la cantidad de recursos líquidos disponibles para operar el negocio una vez se han descontado las obligaciones inmediatas. En otras palabras, es el “colchón” que tiene la organización para sostener su funcionamiento diario, sin recurrir a financiamiento externo o incurrir en mora con sus compromisos financieros de corto plazo.
    p.mb-4(data-aos="fade-down-right") Este indicador se calcula simplemente restando los pasivos corrientes (deudas que vencen en menos de un año) de los activos corrientes (efectivo, cuentas por cobrar, inventarios, etc.). 

    .row.justify-content-center.mb-4
      .col-lg-6.col-8.mb-lg-0.mb-4.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-15.png' alt="Imagen decorativa")
      .col-lg-6(data-aos="fade-left")
        .tarjeta.BG04.p-4.mb-3(style="background-color:#DCEDC8")
          p #[b Ejemplo:]
          p Si una empresa tiene activos corrientes por $80.000.000 y pasivos corrientes por $40.000.000, su capital de trabajo será de $40.000.000. Esto significa que, una vez pagadas todas sus deudas inmediatas, aún le quedarán $40 millones para cubrir operaciones como compras, nómina, pagos de servicios, y otras necesidades operativas.

        p Una lectura positiva del capital de trabajo, implica que la empresa tiene margen de maniobra para operar sin depender exclusivamente de líneas de crédito u otras formas de financiamiento de emergencia. Sin embargo, un capital de trabajo excesivamente alto podría significar que la empresa tiene recursos ociosos (por ejemplo, mucho efectivo sin invertir, o inventarios innecesarios), lo cual también puede ser ineficiente. Por eso, más que su valor absoluto, lo importante es que este indicador esté en equilibrio con el tamaño y tipo de operación de la empresa.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Cuando el capital de trabajo es negativo (es decir, cuando el pasivo corriente supera al activo corriente), la empresa se encuentra en una situación crítica: no tiene suficientes recursos para atender sus compromisos de corto plazo, lo que puede generar problemas de liquidez, pérdida de confianza con los proveedores, dificultades para sostener la operación y eventualmente, insolvencia. Retomando a Ortiz (2011), esta situación es especialmente riesgosa en contextos de alta inflación, incertidumbre económica o baja rotación de cartera.

        p Este indicador se calcula simplemente restando los pasivos corrientes (deudas que vencen en menos de un año) de los activos corrientes (efectivo, cuentas por cobrar, inventarios, etc.). 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .tarjeta.tarjeta--gris2.p-2
          .row.justify-content-center.align-items-center
            .col-3.d-none.d-lg-block.order-lg-2.order-2.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema1/img-16.svg', alt='Imagen decorativa')
            .col-lg-5.col-12.mb-3.order-lg-1.order-2.mb-lg-0.p-4
              ul.lista-ul.mb-0
                li.mb-2
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | La adquisición de materias primas.

                li.mb-2
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | El cumplimiento de la producción.

                li.mb-2
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | La atención de la demanda.
                
                li.mb-2
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | La administración eficiente del crédito a clientes.

    p(data-aos="fade-down-right") Es por esto que su monitoreo constante es vital para mantener una operación fluida y evitar interrupciones que afecten la productividad y la satisfacción del cliente.
    p.mb-5(data-aos="fade-down-right") En síntesis, el capital de trabajo no solo es un reflejo de la liquidez de una empresa, sino también de su capacidad de adaptación, resistencia financiera y eficiencia operativa. Administrarlo correctamente implica mantener un equilibrio saludable entre las cuentas por cobrar, los inventarios y las cuentas por pagar, de manera que se asegure un flujo de efectivo constante y sostenible a lo largo del tiempo.

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Ciclo de Conversión de Efectivo (CCE)
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-17.png', alt='')

    p(data-aos="fade-down-right") Es un indicador financiero clave dentro del análisis de eficiencia y gestión operativa de una empresa. Este ciclo mide el tiempo promedio que tarda la empresa en convertir sus inversiones en inventarios y cuentas por cobrar en efectivo proveniente de las ventas, descontando el tiempo que tarda en pagar a sus proveedores. En otras palabras, el CCE permite calcular cuántos días tarda el dinero en dar la vuelta completa al proceso operativo: desde que se invierte en inventario, se vende, se cobra y se vuelve a tener disponible en caja.
    p.mb-3(data-aos="fade-down-right") Este ciclo se calcula mediante la siguiente fórmula:

    .row.justify-content-center.p-4.mb-4(data-aos="fade-right")
      .col-md-8.tarjeta.color-primario.p-4(style="background-color:#F1F8E9")
        p.text-bold.text-center.mb-0 #[b CCE = Días de inventario + Días de cuentas por cobrar - Días de cuentas por pagar]

    .row.justify-content-center.mb-4
      .col-lg-5.col-8.mb-lg-0.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-17_1.png' alt="Imagen decorativa")
      .col-lg-5.col-12.mb-3(data-aos="fade-left")
        p Cada uno de estos componentes representa una etapa del ciclo financiero-operativo: 
        ul.lista-ul.mb-0
          li.mb-2
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Días de inventario:] número promedio de días que tarda la empresa en vender su inventario.

          li.mb-2
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Días de cuentas por cobrar:] tiempo que tarda en cobrarle a los clientes después de la venta.

          li.mb-2
            i.fas.fa-angle-right(style="color:#BAC36A") 
            p.mb-0 #[b Días de cuentas por pagar:] plazo promedio que tiene la empresa para pagar a sus proveedores..
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-4 Por ejemplo, si una empresa tarda en promedio 45 días en vender sus inventarios, 30 días en cobrar a sus clientes y tiene un plazo de 35 días para pagar a sus proveedores, el cálculo sería:
    .row.justify-content-center.align-items-center.mb-3
      .col-md-6.tarjeta.color-primario.p-4.mb-4(style="background-color:#F1F8E9")
        p.text-bold.text-center.mb-0 #[b CCE = 45 + 30 - 35 = 40 días]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Esto significa, que, desde el momento en que la empresa invierte en inventario, hasta que recupera el efectivo de la venta, pasan 40 días en los que debe financiar sus operaciones. Este periodo debe ser gestionado con especial atención, ya que cuanto más corto sea el ciclo de conversión, mayor será la liquidez y eficiencia en el uso del capital de trabajo.
      .col-lg-10
        p Con respecto a los CCE: 
      .col-lg-10.d-lg-flex.d-none
        ImagenInfografica.color-acento-botones(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-v18-01.svg', alt="Imagen decorativa")
          .tarjeta.BG03.p-3(x="14%" y="40%" numero="+")
            p.text-center CCE positivo
            p Indica que la empresa necesita financiar parte del ciclo operativo con recursos propios o con deuda, ya que debe esperar a recuperar el efectivo. 
          .tarjeta.BG03.p-3(x="85.7%" y="58%" numero="+")
            p.text-center CCE negativo 
            p Puede interpretarse favorablemente, ya que implica que la empresa recibe el pago de sus clientes antes de tener que pagar a sus proveedores. 
      .col-lg-10.d-lg-none.d-flex
        figure
          img(src='@/assets/curso/temas/tema1/img-v18-02.svg', alt="Imagen decorativa")

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p Este es el caso típico de grandes cadenas de retail o supermercados, que venden en efectivo y pagan a sus proveedores a crédito, lo cual mejora significativamente su flujo de caja.
        p Ahora bien, un CCE demasiado largo puede ser una señal de problemas en la rotación de inventarios o en la gestión de cartera, lo que puede provocar escasez de efectivo, mayores costos financieros o incluso frenar el crecimiento del negocio. Por eso, las empresas deben trabajar en estrategias para acelerar las ventas, reducir los plazos de cobro y negociar mejores condiciones con sus proveedores.
        p Ortiz (2011), hace referencia a que el ciclo de conversión de efectivo, es un indicador esencial para comprender cómo se está utilizando el capital de trabajo en las operaciones cotidianas. Su análisis, permite anticipar tensiones de liquidez, optimizar procesos logísticos y financieros, además de diseñar políticas de crédito y compras más eficientes. En empresas en crecimiento, controlar el CCE puede marcar la diferencia entre el éxito y el estancamiento.

      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-19.png' alt="Imagen decorativa")

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Análisis de la liquidez

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-20.png', alt='')  

    p(data-aos="fade-down-right") El análisis de la liquidez es una herramienta fundamental para evaluar la capacidad de una empresa de cumplir con sus compromisos financieros a corto plazo, sin necesidad de recurrir a financiación externa o venta urgente de activos. Se trata de analizar si la organización dispone de recursos suficientes y con disponibilidad inmediata (o casi inmediata) para afrontar sus obligaciones dentro del ciclo operativo normal.
    p.mb-5(data-aos="fade-down-right") Una liquidez insuficiente, evidenciada a través de indicadores como una razón corriente menor a 1.0, una prueba ácida preocupantemente baja o un capital de trabajo negativo, representa una alerta crítica para la empresa. Esta situación puede derivar en retrasos en los pagos a proveedores, sanciones por incumplimientos contractuales, pérdida de credibilidad en el mercado e incluso, en casos extremos, en una crisis de insolvencia. Es decir, la empresa podría no tener la capacidad para sostener su operación diaria, a pesar de ser potencialmente rentable desde el punto de vista contable.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por ejemplo, una empresa que venda mucho y genere utilidades sobre el papel, pero tenga un largo periodo de recaudo de cartera, podría experimentar dificultades para pagar su nómina, proveedores o impuestos si no cuenta con reservas de liquidez suficientes. Esto ocurre con frecuencia en negocios que ofrecen ventas a crédito, pero no implementan una política efectiva de cobranza. En este caso, la liquidez deficiente puede ser consecuencia de una mala gestión de cuentas por cobrar, más que de falta de ingresos.

    p.mb-5(data-aos="fade-down-right") En el otro extremo, una liquidez excesiva también puede ser motivo de análisis. Si una empresa mantiene una razón corriente muy alta (por ejemplo, mayor a 3.0) o acumula grandes saldos de efectivo sin destinarlos a inversiones productivas, puede estar cayendo en una ineficiencia en el uso de sus recursos. El capital sin utilizar pierde valor en términos reales (por inflación) y representa oportunidades no aprovechadas para expandirse, mejorar procesos, capacitar personal, adquirir tecnología o aumentar la competitividad. En otras palabras, tener demasiada liquidez puede reflejar una actitud conservadora extrema o una falta de estrategia financiera clara.

    .row.justify-content-center.mb-2
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-5
          p.mb-0 Lo ideal, como lo plantea Ortiz (2011), es mantener la liquidez en niveles adecuados al tipo de negocio, su ciclo operativo y el contexto del sector. Una empresa comercial, por ejemplo, puede operar cómodamente con una razón corriente cercana a 1.5, mientras que una industria pesada, con mayores riesgos financieros y necesidades de reposición de inventarios, podría requerir niveles de liquidez más altos. No existe un único estándar universal, pero sí debe buscarse un equilibrio sano y sostenible.

    p.mb-0(data-aos="fade-down-right") En conclusión, el análisis de la liquidez no debe limitarse a la observación de un número o fórmula, sino que debe considerar el comportamiento histórico, la calidad de los activos líquidos, la rotación del capital de trabajo, las políticas de crédito y cobro, así como la planificación financiera de la empresa. Una buena liquidez garantiza estabilidad, confianza y capacidad de maniobra; pero, debe estar alineada con la rentabilidad y eficiencia para no convertirse en una barrera silenciosa al crecimiento.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Indicadores de endeudamiento

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      p.mb-5(data-aos="fade-left") Estos indicadores permiten analizar el grado de dependencia que tiene una empresa, respecto a recursos financieros de terceros; es decir, si su operación se financia mayoritariamente con capital propio o con deuda. Este tipo de indicadores es esencial para evaluar la solvencia financiera de la organización, el nivel de riesgo al que está expuesta y su capacidad para responder ante sus obligaciones.

      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        p Ortiz (2011), al respecto, indica que un nivel adecuado de endeudamiento puede potenciar el crecimiento de una empresa, siempre que la rentabilidad generada por los activos adquiridos con deuda supere el costo financiero de esa misma deuda. No obstante, un endeudamiento excesivo compromete la estabilidad financiera, limita la capacidad de maniobra, encarece el crédito futuro y puede generar desconfianza en inversionistas, proveedores y entidades bancarias.
        p Con respecto a los indicadores de endeudamiento, se deben tener los siguientes procesos, los cuales se detallan a continuación; hay que tener presente, que cada uno lleva una fórmula en dichos procesos, los cuales se ejemplifican e interpretan a la realidad: 
     
      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema1/img-22.png' alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Razón de endeudamiento")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Razón de Endeudamiento = Pasivo Total / Activo Total
              p.mb-0 #[b Ejemplo]
              p.mb-0 Pasivo total = $120.000.000
              p.mb-0 Activo total = $300.000.000
              p Razón de Endeudamiento = 120.000.000 / 300.000.000 = 0.40 o 40 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Esto indica que el 40 % de los activos están financiados con recursos de terceros y el 60 % con capital propio. Un nivel de endeudamiento entre el 40 % y el 60 % puede considerarse razonable, dependiendo del sector. Niveles superiores podrían implicar alto riesgo financiero.

              figure
                img(src='@/assets/curso/temas/tema1/img-23.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Cobertura de intereses")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Cobertura de Intereses = Utilidad Operacional / Gastos por Intereses
              p.mb-0 #[b Ejemplo]
              p.mb-0 Utilidad operacional = $80.000.000
              p.mb-0 Gastos financieros = $20.000.000
              p Cobertura = 80.000.000 / 20.000.000 = 4 veces

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Esto significa que la empresa genera 4 veces más utilidad operativa de la necesaria para cubrir los intereses de su deuda. Un índice menor a 2 es preocupante, ya que indica dificultades para sostener el servicio de la deuda sin comprometer otras operaciones.
              
              figure
                img(src='@/assets/curso/temas/tema1/img-24.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Apalancamiento financiero")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Apalancamiento = Activos Totales / Patrimonio
              p.mb-0 #[b Ejemplo]
              p.mb-0 Activos = $300.000.000
              p.mb-0 Patrimonio = $180.000.000
              p Apalancamiento = 300.000.000 / 180.000.000 = 1.67

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Por cada peso invertido por los socios, la empresa ha financiado $1.67 en activos. Un apalancamiento moderado (entre 1.5 y 2.0) puede ser positivo si la rentabilidad de los activos supera el costo del financiamiento.

              figure
                img(src='@/assets/curso/temas/tema1/img-25.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="Endeudamiento del patrimonio")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Endeudamiento del Patrimonio = Pasivo Total / Patrimonio
              p.mb-0 #[b Ejemplo]
              p.mb-0 Pasivo = $120.000.000
              p.mb-0 Patrimonio = $180.000.000
              p Endeudamiento del Patrimonio = 120.000.000 / 180.000.000 = 0.67

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Por cada peso de capital propio, la empresa tiene $0.67 en deudas. Este indicador es útil para evaluar la estructura de capital y el riesgo asumido por los accionistas. Valores mayores a 1 indican que la empresa depende más de la deuda que de su propio capital. 

              figure
                img(src='@/assets/curso/temas/tema1/img-26.png', alt='Texto que describa la imagen')

          .row(numero="5" titulo="Pasivo corriente sobre total pasivo")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Pasivo Corriente / Pasivo Total
              p.mb-0 #[b Ejemplo]
              p.mb-0 Pasivo corriente = $70.000.000
              p.mb-0 Pasivo total = $120.000.000
              p Resultado: 70.000.000 / 120.000.000 = 0.583 o 58.3 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Este indicador revela qué proporción de la deuda total debe ser pagada en el corto plazo. Si el valor es muy alto, puede representar presión sobre la liquidez. Lo ideal es mantener un equilibrio entre deuda de corto y largo plazo, según la capacidad de generación de efectivo.

              figure
                img(src='@/assets/curso/temas/tema1/img-27.png', alt='Texto que describa la imagen')

          .row(numero="6" titulo="Proporción de deuda financiera")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Deuda financiera / Total Pasivo
              p.mb-0 #[b Ejemplo]
              p.mb-0 Deuda con bancos = $90.000.000
              p.mb-0 Pasivo total = $150.000.000
              p Resultado: 90.000.000 / 150.000.000 = 60 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Este indicador muestra qué parte del pasivo está comprometido con entidades financieras, lo cual puede implicar costo financiero fijo y riesgo ante cambios en tasas de interés. Cuanto mayor sea este porcentaje, mayor será la dependencia de financiamiento externo formal.

              figure
                img(src='@/assets/curso/temas/tema1/img-28.png', alt='Texto que describa la imagen')

    .titulo1.mb-5(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Reflexión final sobre los indicadores de endeudamiento

    p.mb-5(data-aos="fade-down-right") Analizar el endeudamiento permite comprender cuánto riesgo financiero está asumiendo la empresa y si ese riesgo está siendo compensado con rentabilidad. Como recomienda Ortiz (2011), estos indicadores deben evaluarse siempre en conjunto y compararse con promedios del sector. Además, es esencial tener en cuenta la naturaleza del negocio, el ciclo operativo y el entorno económico, ya que lo que es considerado un nivel saludable en una industria, puede ser riesgoso en otra.
    
    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-lg-3.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/img-29.svg' alt="Imagen decorativa")
      .bloque-texto-d.color-primario.especial.col-lg-7.col-12.mb-3(data-aos="fade-left")
        .bloque-texto-d__texto.mb-2
          p Mantener el endeudamiento en niveles adecuados, es uno de los principios más importantes en la administración financiera de una empresa. El uso de deuda como fuente de financiamiento no es, por sí solo, negativo; de hecho, puede ser una estrategia útil para apalancar el crecimiento, aumentar la capacidad productiva o mejorar la competitividad. Sin embargo, cuando el nivel de deuda supera la capacidad de pago o la rentabilidad generada, los efectos pueden ser perjudiciales para la sostenibilidad del negocio.

    p(data-aos="fade-down-right") Un nivel de endeudamiento saludable debe estar alineado con la estructura del negocio, el tipo de industria y la estabilidad de los ingresos. Por ejemplo, empresas con ingresos estables y predecibles (como servicios públicos) pueden tolerar niveles de endeudamiento más altos que aquellas cuyos ingresos son estacionales o volátiles (como el turismo o el comercio al por menor). El problema surge cuando la deuda se convierte en una carga que consume buena parte de las utilidades, o cuando no se traduce en mejoras operativas o productivas.
    p.mb-4(data-aos="fade-down-right") De acuerdo a lo anterior, es importante tener presente las siguientes acciones relacionadas con en el endeudamiento: 

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Cobertura de intereses baja")
            .col-md-6.mb-4.mb-md-0
              p Cuando una empresa presenta una cobertura de intereses baja, significa que su utilidad operativa no es suficiente para cubrir cómodamente el pago de los intereses financieros. Por ejemplo, si una compañía solo logra generar el equivalente a 1,2 veces lo que debe pagar en intereses, cualquier disminución en sus ingresos —por cambios en el mercado, retrasos en los pagos de clientes o aumentos en los costos podría ponerla en una situación de iliquidez. Idealmente, la cobertura de intereses debería ser superior a 3 veces, lo que da margen de seguridad ante eventualidades.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-30.png', alt='')
          .row(titulo="Apalancamiento financiero elevado")
            .col-md-6.mb-4.mb-md-0
              p Un apalancamiento financiero elevado (por ejemplo, activos totales que duplican o triplican el patrimonio) refleja que la empresa está financiando una gran parte de sus operaciones con deuda. Esto implica que los dueños o accionistas están asumiendo menos riesgo financiero directo, pero también que el negocio es más vulnerable a las condiciones del mercado financiero, como el aumento de tasas de interés o la restricción del crédito. Además, si los activos financiados con deuda no generan suficiente rentabilidad, el apalancamiento se convierte en un factor que reduce el valor del patrimonio en lugar de multiplicarlo.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-31.png', alt='')
          .row(titulo="Deuda bien administrada")
            .col-md-6.mb-4.mb-md-0
              p Puede mejorar la rentabilidad sobre el patrimonio (ROE), permitir la expansión de operaciones y fortalecer la posición competitiva. No obstante, como advierte Ortiz (2011), cuando los niveles de endeudamiento se salen de control, afectan directamente la capacidad de maniobra de la empresa. Esto se traduce en menos opciones estratégicas, mayores costos financieros, menor flexibilidad ante cambios en el entorno y, en muchos casos, una dependencia excesiva de renegociaciones o refinanciaciones constantes.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img-32.png', alt='')
         
    p.mb-0(data-aos="fade-down-right") Por lo anterior, el endeudamiento debe analizarse de forma integral, considerando no solo el monto total de la deuda, sino también su estructura (plazo, tasa, tipo de acreedor), su costo real y el uso que se le da a los recursos obtenidos. El endeudamiento sano es aquel que potencia la rentabilidad sin comprometer la liquidez ni la autonomía de la empresa. La clave está en encontrar un equilibrio que favorezca el crecimiento sin sacrificar la estabilidad.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Indicadores de eficiencia y gestión 

    p.mb-5(data-aos="fade-down-right") Estos indicadores —también conocidos como indicadores de actividad o gestión— permiten evaluar qué tan bien está utilizando una empresa sus recursos productivos y financieros. Estos indicadores se enfocan en la velocidad con que la organización convierte sus activos en ventas o flujo de efectivo, lo que tiene un impacto directo sobre la liquidez, la rentabilidad y el capital de trabajo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-21_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Según Ortiz (2011), una buena gestión de activos como inventarios, cuentas por cobrar y cuentas por pagar, refleja una administración financiera eficiente, mientras que una rotación lenta o un ciclo operativo prolongado puede indicar problemas de liquidez, acumulación de inventarios o deficiencias en la política de cobros o pagos.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-10.col-12
        p De igual manera, este tipo de indicadores tiene unas acciones que se presentan en sus diversos procesos, las cuales se explican a continuación, con fórmulas y ejemplos reales: 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Rotación de inventarios")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Rotación de Inventarios = Costo de Ventas / Inventario Promedioal
              p.mb-0 #[b Ejemplo]
              p.mb-0 Costo de ventas: $300.000.000
              p.mb-0 Inventario promedio: $75.000.00000
              p Rotación = 300.000.000 / 75.000.000 = 4 veces%

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Esto significa que los inventarios se renuevan completamente 4 veces durante el periodo analizado. Una mayor rotación indica una gestión eficiente del inventario, lo que reduce costos de almacenamiento y el riesgo de obsolescencia. Una rotación muy baja puede reflejar exceso de stock o dificultades para vender los productos.
              p Además, este indicador puede convertirse en “días de inventario” dividiendo 360 entre el número de rotaciones:
              p La empresa tarda en promedio 90 días en vender todo su inventario.

              figure
                img(src='@/assets/curso/temas/tema1/img-33.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Rotación de cuentas por cobrar")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Rotación de Cuentas por Cobrar = Ventas Netas / Cuentas por Cobrar Promedioes
              p.mb-0 #[b Ejemplo]
              p.mb-0 Ventas netas: $500.000.000
              p.mb-0 Cuentas por cobrar: $100.000.000
              p Rotación = 500.000.000 / 100.000.000 = 5 veces

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p La empresa cobra sus cuentas 5 veces al año, o cada 72 días (360/5). Este dato es vital para medir la efectividad de la política de crédito y cobranza. Una rotación baja puede ser señal de una cartera vencida creciente o de clientes con plazos de pago muy largos, lo cual reduce la liquidez.
              p Es fundamental comparar este indicador con las condiciones de crédito pactadas. Si se otorgan plazos de 30 días, pero la rotación es de 90, hay una falla en el recaudo.

              figure
                img(src='@/assets/curso/temas/tema1/img-34.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Rotación de cuentas por pagar")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Rotación de Cuentas por Pagar = Compras / Cuentas por Pagar Promedio
              p.mb-0 #[b Ejemplo]
              p.mb-0 Compras por $240.000.000 y cuentas por pagar por $60.000.000
              p.mb-0 Rotación = 240.000.000 / 60.000.000 = 4 veces
              p Días promedio para pagar: 360 / 4 = 90 días

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Este indicador revela cuántas veces al año la empresa paga a sus proveedores. Una rotación baja (más días para pagar) puede significar mayor liquidez a corto plazo, pero también podría afectar las relaciones comerciales si los plazos se extienden demasiado. Un equilibrio saludable es pagar dentro de los plazos negociados, sin afectar el flujo de caja ni la reputación empresarial.

              figure
                img(src='@/assets/curso/temas/tema1/img-35.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="Ciclo de Conversión de Efectivo (CCE)")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p CCE = Días de inventario + Días de cuentas por cobrar - Días de cuentas por pagar
              p.mb-0 #[b Ejemplo]
              p.mb-0 Días de inventario: 90 días
              p.mb-0 Días de cartera (por cobrar): 72 días
              p Días de cuentas por pagar: 60 días
              p #[b CCE = 90 + 72 - 60 = 102 días]

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p El CCE de 102 días indica que la empresa necesita financiar con recursos propios o externos su operación durante ese periodo, desde que invierte en inventario hasta que cobra a los clientes, descontando el tiempo que se tarda en pagar a proveedores
              p Un CCE alto puede generar presión sobre la liquidez, mientras que un CCE más corto o incluso negativo (como sucede en algunos modelos de #[i retail]) mejora el flujo de caja operativo.

              figure
                img(src='@/assets/curso/temas/tema1/img-36.png', alt='Texto que describa la imagen')

    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Evaluación de la eficiencia operativa 

    .row.fondo3-t3.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      p.mb-5 El Ciclo de Conversión de Efectivo (CCE) es una herramienta clave para medir la eficiencia de la gestión financiera-operativa de una empresa. Cuanto más corto sea este ciclo, más rápido se recupera el efectivo invertido en el proceso productivo y comercial. Es decir, un CCE reducido indica que la empresa convierte sus inversiones en inventarios y cuentas por cobrar en dinero líquido en menos tiempo, lo cual fortalece su liquidez, reduce su dependencia del crédito y mejora su capacidad para operar con recursos propios.

      .col-lg-3.col-8.mb-lg-0.mb-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema1/img-37.png' alt="Imagen decorativa")
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p(data-aos="fade-right") Cuando una organización logra acortar su CCE, puede disponer más rápidamente de recursos para cubrir sus necesidades operativas, pagar a proveedores, invertir en nuevos proyectos o responder a oportunidades del mercado. Esta eficiencia en la gestión del capital de trabajo también le permite disminuir los costos financieros, al reducir su necesidad de endeudamiento o de uso de líneas de crédito para cubrir déficits temporales de caja.
        p(data-aos="fade-right") Por ejemplo, si una empresa logra negociar mejores plazos con sus proveedores (aumentando los días de cuentas por pagar), mejorar sus procesos de cobro (reduciendo los días de cartera), y mantener una rotación saludable de inventarios, puede lograr un CCE cercano a cero o incluso negativo. Esto significa que recibe el efectivo de las ventas antes de tener que pagar a sus proveedores, lo que representa una ventaja competitiva importante en términos de flujo de caja.
        p(data-aos="fade-right") Sin embargo, esta búsqueda de eficiencia, también debe ser cautelosa y estratégica. Un CCE demasiado corto o basado en políticas agresivas puede convertirse en un riesgo. Por ejemplo, presionar excesivamente a los clientes para que paguen antes de tiempo puede afectar las relaciones comerciales o reducir las ventas, si los plazos no son competitivos frente al mercado. De igual manera, mantener niveles de inventario demasiado bajos para agilizar la rotación puede provocar quiebres de stock, afectando la capacidad de respuesta ante aumentos inesperados en la demanda o interrupciones en la cadena de suministro.

    p.mb-4(data-aos="fade-down-right") En este sentido, la gestión del ciclo de conversión de efectivo no debe enfocarse únicamente en la velocidad, sino también en la flexibilidad, resiliencia y sostenibilidad. Se trata de encontrar el equilibrio ideal entre liquidez, rentabilidad y servicio al cliente, ajustando los indicadores a las características específicas del modelo de negocio. Por ejemplo, una empresa de distribución masiva tendrá un enfoque distinto al de una empresa industrial con ciclos largos de producción.

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Según Ortiz (2011), el análisis de la eficiencia operativa, incluyendo el CCE, debe realizarse como parte de una visión integral de la salud financiera de la empresa, en conjunto con indicadores de rentabilidad, endeudamiento y liquidez. Solo así se puede entender verdaderamente cómo interactúan las decisiones operativas con la capacidad financiera de la organización y tomar decisiones informadas que contribuyan al crecimiento sostenible del negocio.

        p En conclusión, un ciclo de conversión de efectivo más corto es deseable, pero no a cualquier costo. La eficiencia real radica en lograr una rotación equilibrada de los activos operativos, que permita sostener la operación con solidez financiera, capacidad de respuesta y enfoque estratégico.

    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Reflexiones de los indicadores de actividad

    p.mb-4(data-aos="fade-down-right") Los indicadores de actividad, permiten evaluar con precisión la eficiencia operativa de una empresa en el manejo de sus recursos clave: 

    .tarjeta--container.row.mb-4
      .col-md.tarjeta.bgA10.p-4(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center
          .col-auto
            img(src='@/assets/curso/temas/tema1/icono-11.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Inventarios
         
      .col-md.tarjeta.bgA10.p-4(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center
          .col-auto
            img(src='@/assets/curso/temas/tema1/icono-12.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Cuentas por cobrar

      .col-md.tarjeta.bgA10.p-4(data-aos="fade-down-right") 
        .row.justify-content-center.align-items-center
          .col-auto
            img(src='@/assets/curso/temas/tema1/icono-13.svg', style="max-width: 82px", alt='').m-auto
          .col
            p.mb-0 Cuentas por pagar

    p.mb-5(data-aos="fade-down-right") A través del análisis de la rotación de estos activos y pasivos, así como del cálculo del ciclo de conversión de efectivo, es posible determinar cuánto tiempo tarda la empresa en recuperar el dinero invertido en su operación. Un buen desempeño en estos indicadores refleja agilidad en los procesos internos, adecuada gestión del capital de trabajo y capacidad para generar flujo de caja sin recurrir a endeudamiento excesivo.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")(style="background-color:#B0BDA0") 
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-21_2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Sin embargo, la eficiencia no debe interpretarse solo como rapidez. Una rotación demasiado alta o un ciclo demasiado corto pueden implicar riesgos si no están alineados con la realidad del negocio, el comportamiento del mercado o las condiciones comerciales. Por eso, los indicadores de actividad deben analizarse de forma integral, complementándose con datos de liquidez, endeudamiento y rentabilidad, y considerando las características específicas de la empresa. Solo así pueden convertirse en una herramienta útil para la toma de decisiones estratégicas y para garantizar una gestión financiera sostenible.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4 Indicadores de rentabilidad 

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/img-38.png', alt='')

    p(data-aos="fade-down-right") Estos indicadores miden la capacidad de una empresa para generar utilidades con base en sus ventas, activos o patrimonio. Son esenciales para evaluar si el negocio está siendo eficiente en la generación de valor económico y si la estrategia financiera y operativa está dando resultados. Según Ortiz (2011), la rentabilidad no debe verse solo como “ganancia”, sino como el reflejo del desempeño gerencial y del buen uso de los recursos disponibles.
    p.mb-5(data-aos="fade-down-right") Así como los indicadores previamente explicados, estos indicadores de rentabilidad, también tienen procesos que se representan mediante fórmulas y ejemplos reales, de acuerdo a su respectiva interpretación: 

    .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down-right")
      .col-lg-10
        LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Margen de utilidad bruta")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Margen Bruto = (Ventas - Costo de Ventas) / Ventas
              p.mb-0 #[b Ejemplo]
              p.mb-0 Ventas: $500.000.000
              p.mb-0 Costo de ventas: $300.000.000
              p Margen Bruto = (500.000.000 - 300.000.000) / 500.000.000 = 0,40 o 40 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Indica que, por cada peso vendido, la empresa obtiene 40 centavos después de cubrir el costo directo de los productos o servicios. Es un indicador clave en la gestión de precios, costos y abastecimiento.

              figure
                img(src='@/assets/curso/temas/tema1/img-39.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Margen de utilidad operativa")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Margen Operativo = Utilidad Operativa / Ventas
              p.mb-0 #[b Ejemplo]
              p.mb-0 Utilidad operativa = $80.000.000
              p.mb-0 Ventas = $500.000.000
              p Margen Operativo = 80.000.000 / 500.000.000 = 16 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Mide la eficiencia en la operación del negocio, excluyendo factores financieros y fiscales. Un margen alto indica buen control de gastos administrativos y operacionales.

              figure
                img(src='@/assets/curso/temas/tema1/img-40.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Margen de utilidad neta")
            .col-md-12.mb-4.mb-md-0 
              p.mb-0 #[b Fórmula]
              p Margen Neto = Utilidad Neta / Ventas Netas
              p.mb-0 #[b Ejemplo]
              p.mb-0 Utilidad neta = $50.000.000
              p.mb-0 Ventas netas = $500.000.000
              p Margen Neto = 50.000.000 / 500.000.000 = 10 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p Refleja la rentabilidad final del negocio, después de descontar todos los gastos, impuestos e intereses. Es uno de los indicadores más observados por inversionistas, ya que mide el beneficio “real” generado por cada peso vendido.

              figure
                img(src='@/assets/curso/temas/tema1/img-41.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="EBITDA y margen EBITDA")
            .col-md-12.mb-4.mb-md-0 
              p #[b EBITDA (Earnings Before Interest, Taxes, Depreciation and Amortization)] es un indicador que mide la rentabilidad operacional pura, sin el impacto de decisiones financieras o contables.
              p.mb-0 #[b Fórmula]
              p EBITDA = Utilidad Operativa + Depreciaciones + Amortizaciones
              p.mb-0 #[b Ejemplo]
              p.mb-0 Utilidad operativa = $80.000.000
              p.mb-0 Depreciación y amortización = $20.000.000s
              p EBITDA = 80.000.000 + 20.000.000 = $100.000.000

              p #[b Margen EBITDA = EBITDA / Ventas Netas = 100.000.000 / 500.000.000 = 20 %]

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p El margen EBITDA muestra cuánto genera el negocio en flujo de caja operativo antes de obligaciones financieras y fiscales. Es útil para comparar empresas entre sí, ya que elimina factores externos al desempeño operativo.

              figure
                img(src='@/assets/curso/temas/tema1/img-42.png', alt='Texto que describa la imagen')

          .row(numero="5" titulo="ROA y ROE")
            .col-md-12.mb-4.mb-md-0 
              p #[b ROA (Return on Assets)] 
              p.mb-0 #[b Fórmula:] ROA = Utilidad Neta / Activos Totales
              p EBITDA = Utilidad Operativa + Depreciaciones + Amortizaciones
              p.mb-0 Ejemplo: Ejemplo: 50.000.000 / 300.000.000 = 16,7 %
              p.mb-0 #[b ROE (Return on Equity)]
              p.mb-0 #[b Fórmula:] ROE = Utilidad Neta / Patrimonio
              p Ejemplo: 50.000.000 / 180.000.000 = 27,8 %

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p El ROA mide qué tan rentables son los activos de la empresa, sin importar cómo fueron financiados. El ROE, en cambio, mide el rendimiento obtenido por los socios o accionistas. Si el ROE es significativamente mayor al ROA, es señal de apalancamiento financiero: la empresa usa deuda para aumentar la rentabilidad del capital propio.

              figure
                img(src='@/assets/curso/temas/tema1/img-43.png', alt='Texto que describa la imagen')

          .row(numero="6" titulo="Sistema DuPont")
            .col-md-12.mb-4.mb-md-0 
              p El Sistema DuPont es una metodología que descompone el ROE en tres componentes clave, para entender qué factores están impulsando la rentabilidad del capital propio:
              p.mb-0 #[b Fórmula]
              p #[b ROE = (Utilidad Neta / Ventas) x (Ventas / Activos) x (Activos / Patrimonio) o]
              p.mb-0 #[b ROE = Margen Neto x Rotación de Activos x Apalancamiento]
              p #[b Ejemplo:]
              ul.lista-ul.mb-0
                li(style="margin-bottom: 2px")
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | Margen Neto = 10 %

                li(style="margin-bottom: 2px")
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  | Rotación de activos = 1.67 (Ventas de $500.000.000 / Activos de $300.000.000)

                li(style="margin-bottom: 2px")
                  i.fas.fa-angle-right(style="color:#BAC36A") 
                  |  Apalancamiento = 1.67 (Activos / Patrimonio)
              p #[b ROE = 10 % x 1.67 x 1.67 = 27.9 %]

            .col-md-12.bgblanco.p-3
              p.mb-0 #[b Interpretación]
              p El sistema DuPont permite entender si el ROE alto es producto de una buena rentabilidad operativa (margen), de una alta eficiencia comercial (rotación) o de una estructura de capital agresiva (apalancamiento). Es ideal para tomar decisiones estratégicas.

              figure
                img(src='@/assets/curso/temas/tema1/img-44.png', alt='Texto que describa la imagen')

    .titulo1.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/temas/icono.svg', alt='Imagen decorativa')
      h4.mb-0 Reflexiones de los indicadores de rentabilidad  

    p Los indicadores de rentabilidad permiten medir con precisión la capacidad de una empresa para generar utilidades en relación con sus ventas, activos y patrimonio. Son esenciales para determinar si el negocio está siendo eficiente en el uso de sus recursos y si realmente está generando valor económico para sus propietarios. Estos indicadores no solo muestran si hay ganancias, sino también cómo se están obteniendo, en qué parte del proceso se originan y si son sostenibles en el tiempo.
    p.mb-5 Entre los más representativos se encuentran:  

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-14.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Márgenes de utilidad
              p Analizan la rentabilidad en distintas etapas del estado de resultados. 

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-15.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Margen bruto
              p Muestra lo que queda de las ventas después de cubrir el costo de los productos vendidos. 

      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-16.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Margen operativo
              p Refleja la eficiencia administrativa y de operación, excluyendo gastos financieros e impuestos. 
      
      .col-lg-6.mb-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/icono-17.svg' alt='AvatarTop')
          .tarjeta.color1(style= "width: 100%")
            .p-4
              h4 Margen neto 
              p Representa la utilidad real después de todos los gastos, siendo uno de los indicadores más observados por inversionistas y gerentes.
              
    p.mb-5(data-aos="fade-down-right") Otro grupo clave lo conforman los indicadores que relacionan las utilidades con los recursos utilizados, son los siguientes: 

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.col-5
            figure
              img(src='@/assets/curso/temas/tema1/icono-18.svg', alt='Texto que describa la imagen')
          
        h2.text-center ROA (Return on Assets)
        p Mide cuánta utilidad genera la empresa por cada peso invertido en activos. 

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-lg-3.col-md-6.col-5
            figure
              img(src='@/assets/curso/temas/tema1/icono-19.svg', alt='Texto que describa la imagen')
          
        h2.text-center ROE (Return on Equity)
        p Mide cuánta utilidad genera la empresa por cada peso invertido en activos. 

    .row.fondo2-t2.justify-content-center.align-items-center.py-3.px-lg-5.px-4.ordenar_tarjeta.mb-4(data-aos="zoom-in")
      p(data-aos="fade-down-right") Cuando el ROE es significativamente superior al ROA, suele indicar la existencia de apalancamiento financiero, es decir, que la empresa está utilizando deuda para incrementar sus beneficios, lo cual puede ser una estrategia positiva si está bien controlada.
      p.mb-2(data-aos="fade-down-right") Finalmente, el modelo DuPont permite descomponer el ROE en tres factores: margen neto, rotación de activos y apalancamiento. Este análisis detallado ayuda a identificar qué aspecto está impulsando o limitando la rentabilidad del capital. Adicionalmente, el cálculo del EBITDA y su margen respectivo se ha vuelto muy utilizado en análisis comparativos, ya que muestra la rentabilidad operativa antes de intereses, impuestos y depreciaciones. En conjunto, todos estos indicadores ofrecen una visión profunda y estratégica del desempeño financiero, fundamental para la toma de decisiones empresariales informadas.
















    //- .titulo-segundo.color-secundario(data-aos="fade-right")
    //-   h2 1.1  Título de segundo nivel, 24pt
    //- p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    //- h3.titulo-tercero(data-aos="fade-right") Título de tercer nivel, 20pt
    //- p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    //- h4.titulo-cuarto(data-aos="fade-right") Título de cuarto nivel, 18pt
    //- p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    //- .titulo-quinto.color-acento-contenido(data-aos="fade-right")
    //-   h4 Título de quinto nivel, 18pt

    //- p.mb-5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    //- .titulo-sexto.color-acento-contenido(data-aos="fade-right")
    //-   h5 Título de sexto nivel, 16pt
    //-   span subtitulo

    //- p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis. Maecenas cursus ante a diam porttitor mollis. Etiam vehicula dictum diam, eu pulvinar odio ultrices non. Vivamus viverra fermentum tortor, sit amet interdum nisl fermentum sed.

    //- Separador
    //- #parrafos.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Párrafos

    //- p.mb-0 Los párrafos mantienen un tamaño regular de 16 pt con interlineado base de 24 pt, sin embargo, existe excepciones para resaltar contenido donde se puede hacer uso de pesos 
    //-   | #[span.text-thin THIN], 
    //-   | #[strong BOLD], y #[span.text-black BLACK] 
    //-   | o #[mark etiquetas] de color (según paleta del programa). Así mismo, el ancho de los cajones textos permite variación en las doce (12) columnas.

    //- Separador
    //- #listas.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Listas
    
    //- p.mb-3 Se debe tener en cuenta que las personas realizan un escaneo del mismo para encontrar elementos de su interés. Las listas deben estar compuestas por elementos relacionados entre sí, con un orden específico o un conteo importante. 
  
    //- ul.lista-ul.mb-3(data-aos="fade-right")
    //-   li
    //-     i.lista-ul__vineta
    //-     | Texto
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Cita o Referencia
    //-   li  
    //-     i.lista-ul__vineta
    //-     | Imagen + Texto

    //- .h5 Requerimientos de información:

    //- ul.lista-ul.mb-5(data-aos="fade-right")
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Título conciso y claro.
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Si el texto del item es largo, la extensión máxima será de cuatro líneas en word tamaño carta. 
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Enfatizar ciertos puntos diferenciándolos del resto del texto.
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Cuando desee comunicar un procedimiento paso por paso y cuando el orden de los elementos sea necesario.

    //- h3 Listado ordenado
    //- .row.mb-5
    //-   .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h4 Listado ordenado básico
    //-     ol.lista-ol
    //-       li 
    //-         span.text-bold 1. 
    //-         | Item lista ordenada 1 
    //-         i Texto en Italica
    //-       li 
    //-         span.text-bold 2. 
    //-         | Item lista ordenada 2
    //-       li 
    //-         span.text-bold 3. 
    //-         | Item lista ordenada 3
    //-       li 
    //-         span.text-bold 4. 
    //-         | Item lista ordenada 4
    //-       li 
    //-         span.text-bold 5. 
    //-         | Item lista ordenada 5
    //-   .col-lg.mb-lg-0.mb-5(data-aos="flip-up")
    //-     h4 Listado ordenado básico
    //-     ol.lista-ol
    //-       li 
    //-         span.text-bold a. 
    //-         | Item lista ordenada a 
    //-         i Texto en Italica
    //-       li 
    //-         span.text-bold b. 
    //-         | Item lista ordenada b
    //-       li 
    //-         span.text-bold c. 
    //-         | Item lista ordenada c
    //-       li 
    //-         span.text-bold d. 
    //-         | Item lista ordenada d
    //-       li 
    //-         span.text-bold e. 
    //-         | Item lista ordenada e
    //-   .col-lg(data-aos="fade-left")
    //-     h4 Listado ordenado básico + separadores
    //-     ol.lista-ol.lista-ol--separador
    //-       li 
    //-         span.text-bold a. 
    //-         | Item lista ordenada a 
    //-         i Texto en Italica
    //-       li 
    //-         span.text-bold b. 
    //-         | Item lista ordenada b
    //-       li 
    //-         span.text-bold c. 
    //-         | Item lista ordenada c
    //-       li 
    //-         span.text-bold d. 
    //-         | Item lista ordenada d
    //-       li 
    //-         span.text-bold e. 
    //-         | Item lista ordenada e

    //- .row.mb-5
    //-   .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h4 Listado ordenado cuadro color
    //-     ol.lista-ol--cuadro
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span 1
    //-         | Item lista ordenada 1 
    //-         i Texto en Italica
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span 2
    //-         | Item lista ordenada 2
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span 3
    //-         | Item lista ordenada 3
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span 4
    //-         | Item lista ordenada 4
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span 5
    //-         | Item lista ordenada 5
    //-   .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
    //-     h4 Listado ordenado cuadro color
    //-     ol.lista-ol--cuadro
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span a
    //-         | Item lista ordenada a
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span b
    //-         | Item lista ordenada b
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span c
    //-         | Item lista ordenada c
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span d
    //-         | Item lista ordenada d
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span e
    //-         | Item lista ordenada e
    //-   .col-lg.mb-lg-0.mb-4(data-aos="fade-left")
    //-     h4 Listado ordenado cuadro color + separadores
    //-     ol.lista-ol--cuadro.lista-ol--separador
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span a
    //-         | Item lista ordenada a
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span b
    //-         | Item lista ordenada b
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span c
    //-         | Item lista ordenada c
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span d
    //-         | Item lista ordenada d
    //-       li 
    //-         .lista-ol--cuadro__vineta
    //-           span e
    //-         | Item lista ordenada e

    //- h3 Listado no ordenado

    //- .row.mb-5
    //-   .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h4 Listado no ordenado básico
    //-     ul.lista-ul
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada
    //-       li
    //-         ul
    //-           li 
    //-             i.lista-ul__vineta
    //-             | Item lista no ordenada
    //-           li 
    //-             i.lista-ul__vineta
    //-             | Item lista no ordenada
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada
    //-   .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
    //-     h4 Listado no ordenado básico
    //-     ul.lista-ul
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada
    //-       li
    //-         ul
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | Item lista no ordenada
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | Item lista no ordenada 
    //-             i Texto en Italica
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada 
    //-         i Texto en Italica
    //-   .col-lg(data-aos="fade-left")
    //-     h4 Listado no ordenado básico + separadores
    //-     ul.lista-ul--separador
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada
    //-       li.pb-0
    //-         ul
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | Item lista no ordenada
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-angle-right
    //-         | Item lista no ordenada

    //- .row
    //-   .col-lg.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h4 Listado no ordenado color
    //-     ul.lista-ul--color
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada 
    //-         i Texto en Italica
    //-       li
    //-         ul
    //-           li 
    //-             i.lista-ul__vineta
    //-             | Item lista no ordenada
    //-           li 
    //-             i.lista-ul__vineta
    //-             | Item lista no ordenada
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada
    //-       li 
    //-         i.lista-ul__vineta
    //-         | Item lista no ordenada
    //-   .col-lg.mb-lg-0.mb-4(data-aos="flip-up")
    //-     h4 Listado no ordenado color
    //-     ul.lista-ul--color
    //-       li 
    //-         i.fas.fa-brain
    //-         | Item lista no ordenada 
    //-         i Texto en Italica
    //-       li
    //-         ul
    //-           li 
    //-             i.fas.fa-bug
    //-             | Item lista no ordenada
    //-           li 
    //-             i.fas.fa-car-side
    //-             | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-compass
    //-         | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-eye
    //-         | Item lista no ordenada
    //-   .col-lg(data-aos="fade-left")
    //-     h4 Listado no ordenado color + separadores
    //-     ul.lista-ul--color.lista-ul--separador
    //-       li 
    //-         i.fas.fa-feather
    //-         | Item lista no ordenada 
    //-         i Texto en Italica
    //-       li.pb-0
    //-         ul
    //-           li 
    //-             i.fas.fa-cookie
    //-             | Item lista no ordenada 
    //-             b texto bold
    //-           li 
    //-             i.fas.fa-hat-wizard
    //-             | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-hippo
    //-         | Item lista no ordenada
    //-       li 
    //-         i.fas.fa-kiwi-bird
    //-         | Item lista no ordenada

    //- #tablas.titulo-segundo.color-acento-botones
    //-   h2 Tablas

    //- .h5 Requerimientos de información

    //- ul.lista-ul.mb-5(data-aos="fade-right")
    //-   li 
    //-     i.lista-ul__vineta
    //-     | Se requiere que la información contenida dentro de las tablas propuestas en los materiales, se encuentre digitalizada únicamente en formato excel. 

    //- //- .tabla-a debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .titulo-sexto.color-secundario(data-aos="fade-right")
    //-   h5 Tabla A.
    //-   i Titulo_tabla
    //- .tabla-a.color-acento-botones.mb-5 
    //-   table(data-aos="zoom-in" alt="Texto alternativo tabla")
    //-     caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
    //-     thead
    //-       tr(data-aos="fade-right")
    //-         th Encabezado 1
    //-         th Encabezado 2
    //-         th Encabezado 3
    //-         th Encabezado 4
    //-         th Encabezado 5
    //-     tbody
    //-       tr(data-aos="fade-right")
    //-         td Celda 1
    //-         td Celda 2
    //-         td Celda 3
    //-         td Celda 4
    //-         td Celda 5
    //-       tr(data-aos="fade-right")
    //-         td Celda 1
    //-         td Celda 2
    //-         td Celda 3
    //-         td Celda 4
    //-         td Celda 5
    //-       tr(data-aos="fade-right")
    //-         td Celda 1
    //-         td Celda 2
    //-         td Celda 3
    //-         td Celda 4
    //-         td Celda 5

    //- //- .tabla-a debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .titulo-sexto.color-secundario(data-aos="fade-right")
    //-   h5 Tabla B.
    //-   i Titulo_tabla
    //- .tabla-b.color-acento-contenido.mb-5
    //-   .tabla-b__header
    //-     h4.mb-0 Niveles del lenguaje
    //-   table(data-aos="zoom-in" alt="Texto alternativo tabla")
    //-     caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
    //-     tr(data-aos="fade-right")
    //-       th Vulgar
    //-       td Get back to work. Learn from criticism. Creativity is a work-ethic. Design as if your life depended on it. Keep going. It isn’t what you are.
    //-     tr(data-aos="fade-right")
    //-       th Coloquial
    //-       td It isn’t what you are, but what you’re going to become. Don’t censor yourself.  Sterility leads to susceptibility.It is, in effect, conditioned to prefer bad design.
    //-     tr(data-aos="fade-right")
    //-       th Convencional o estándar
    //-       td Paul Rand once said, “The public is more familiar with bad design than good design. leassuring. You are not your work. Don’t fucking lie to yourself. Life depended on it. Keep going
    //-     tr(data-aos="fade-right")
    //-       th Técnico
    //-       td The new becomes threatening, the old reassuring.” You are not your work. Don’t lie to yourself. Never, never assume that what Respect your craft. Widows and orphans are terrible.
    //-     tr(data-aos="fade-right")
    //-       th Formal
    //-       td Design as if your life depended on it. Keep going. It isn’t what you are, but what you’re going to become. Don’t censor yourself. 

    //- .titulo-sexto.color-secundario(data-aos="fade-right")
    //-   h5 Tabla C.
    //-   i Titulo_tabla
    //- .tabla-c.mb-5
    //-   table(data-aos="zoom-in" alt="Texto alternativo tabla")
    //-     caption Nota. <span style="font-weight: 400">Tomado referencia.</span>
    //-     tr(data-aos="fade-right")
    //-       th 03 de marzo
    //-       td 
    //-         p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-         span.text-small Textos pequeños
    //-       td
    //-         .h6 FDSD33
    //-     tr(data-aos="fade-right")
    //-       th 03 de marzo
    //-       td 
    //-         p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-         span.text-small Textos pequeños
    //-       td
    //-         .h6 FDSD33
    //-     tr(data-aos="fade-right")
    //-       th 03 de marzo
    //-       td 
    //-         p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-         span.text-small Textos pequeños
    //-       td
    //-         .h6 FDSD33
    //-     tr(data-aos="fade-right")
    //-       th 03 de marzo
    //-       td 
    //-         p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-         span.text-small Textos pequeños
    //-       td
    //-         .h6 FDSD33
    //-     tr(data-aos="fade-right")
    //-       th 03 de marzo
    //-       td 
    //-         p.text-small Donec mattis libero quis nisi euismod, a sodales magna porttitor. Morbi nunc elit, feugiat a nisl eu, venenatis ultrices dui. Suspendisse at sodales est
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-       td
    //-         .h6.mb-0 $12.500.200
    //-         span.text-small Textos pequeños
    //-       td
    //-         .h6 FDSD33

    //- //- Formato Figura
    //- .row.justify-content-center.mb-5
    //-   .col-lg-8
    //-     .titulo-sexto.color-acento-contenido(data-aos="fade-right")
    //-       h5 Figura 1.
    //-       i EstructuraX
    //-     figure(data-aos="zoom-in")
    //-       img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-       figcaption Nota. <span style="font-weight: 400">Tomado referencia.</span>

    //- #imagen_infografica.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Imagen Infográfica

    //- h3 Imagen Infográfica A

    //- ImagenInfografica.color-secundario.mb-5(data-aos="zoom-in")
    //-   template(v-slot:imagen)
    //-     figure
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
    //-     .h5.mb-2 titulo
    //-     p.mb-0 Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-   .tarjeta.color-acento-botones.p-3(x="50%" y="50%" numero="A")
    //-     .h5.mb-2 titulo
    //-     p.mb-0 Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-   .tarjeta.color-acento-botones.p-3(x="70%" y="70%" numero="B")
    //-     .h5.mb-2 titulo
    //-     p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    //- h3 Imagen Infográfica B

    //- ImagenInfograficaB.color-primario.mb-5(data-aos="zoom-in")
    //-   template(v-slot:imagen)
    //-     figure
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
    //-     h5 titulo
    //-     p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-     p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-     p.mb-0 Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-   div(x="50%" y="50%" tooltip="tooltip de max 35 caracteres")
    //-     .h5.mb-2 titulo
    //-     p.mb-0 Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    //-   div(x="70%" y="70%" tooltip="tooltip de max 35 caracteres")
    //-     .h5.mb-2 titulo
    //-     p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

    //- #video.titulo-segundo.color-acento-botones
    //-   h2 Video

    //- figure.mb-5(data-aos="zoom-in")
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-     figcaption Video: Leyenda del video
    
    //- h3.titulo-tercero Cajón texto color
    //- //- .cajon debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .row.justify-content-center.mb-5
    //-   .col-lg-4.mb-4(data-aos="fade-right")
    //-     .cajon.color-primario.p-4
    //-       .h5 Cajón texto color
    //-       p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    //-   .col-lg-8.mb-4(data-aos="fade-left")
    //-     .cajon.color-secundario.p-4
    //-       .h5 Cajón texto color
    //-       p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    //-   .col-lg-8.mb-4(data-aos="fade-right")
    //-     .cajon.color-acento-contenido.p-4
    //-       .h5 Cajón texto color
    //-       p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.
    //-   .col-lg-4.mb-4(data-aos="fade-left")
    //-     .cajon.color-acento-botones.p-4
    //-       .h5 Cajón texto color
    //-       p.mb-0 Se puede usar dos o más columnas para diagramar el texto, estos elementos pueden presentar contenedores que permitan diferenciar ideas o conceptos.

    //- //- .cajon-b debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- //- .arriba-derecha, .abajo-derecha, .abajo-izquierda (arriba-izquierda esta por defecto)
    //- .cajon-b.color-primario.p-3.mb-5(data-aos="fade-right")
    //-   p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel porta justo. Praesent congue nibh a justo ornare, eget vulputate nisl eleifend. Cras interdum finibus lacinia. Fusce dignissim sapien sit amet orci imperdiet, pharetra maximus nisi ullamcorper. Aliquam interdum elit ac nisi viverra, ultrices finibus est ultricies. Fusce tincidunt velit nulla. Aliquam eleifend libero eu neque rhoncus, sed placerat mi ornare.
    //-   p.mb-0 Proin dignissim nisl ac iaculis molestie. Fusce et orci arcu. Cras ac ultricies nisl. Praesent posuere tempor felis in pharetra. Curabitur vestibulum, mi sed placerat accumsan, est nulla sagittis mi, non faucibus tortor ex ac lacus. Nunc condimentum dolor sem, et pulvinar sapien cursus ut. Aenean consequat pharetra rutrum. Nunc vel nunc laoreet, ornare augue a, efficitur quam.

    //- h3.titulo-tercero Cajón texto color A
    //- //- .bloque-texto-a debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
    //-   .row.justify-content-between.align-items-center.m-0
    //-     .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
    //-       h2.mb-0 Whatever can be captured in words can be conquered with understanding. 
    //-     .col-lg-8(data-aos="fade-left")
    //-       .bloque-texto-a__texto.p-4
    //-         p Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
    //-         p.mb-0 Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    //- .row.justify-content-center.mb-5
    //-   .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h3.titulo-tercero Cajón texto color B
    //-     //- .bloque-texto-b debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     .bloque-texto-b.color-secundario.p-4
    //-       .bloque-texto-b__texto
    //-         i.fas.fa-quote-left
    //-         h2.mb-0 Can we all just agree as the greater design community to stop talking about Comic Sans altogether?
    //-         i.fas.fa-quote-right
    //-   .col-lg-6(data-aos="fade-left")
    //-     h3.titulo-tercero Cajón texto color C
    //-     //- .bloque-texto-c debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     .bloque-texto-c.color-secundario.p-4
    //-       i.fas.fa-quote-right
    //-       h2.mb-2 Then you’ll prove to yourself that you can survive anything.
    //-       span - The graphic designer

    //- .row.justify-content-center.mb-5
    //-   .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
    //-     h3.titulo-tercero Cajón texto color D
    //-     //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     .bloque-texto-d.color-secundario.p-4
    //-       .bloque-texto-d__texto.mb-2
    //-         i.fas.fa-quote-left
    //-         h3.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
    //-         i.fas.fa-quote-right
    //-       .bloque-texto-d__autor 
    //-         .h5.mb-0 The graphic designer
    //-         .h6.mb-0 Lorem ipsum dolor sit amet
    //-   .col-lg-6(data-aos="fade-left")
    //-     h3.titulo-tercero Cajón texto color E
    //-     //- .bloque-texto-e debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     .bloque-texto-e.color-secundario.p-4
    //-       .bloque-texto-e__texto
    //-         i.fas.fa-quote-left
    //-         h2.text-regular Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada.
    //-         i.fas.fa-quote-right
    //-       .row.align-items-end
    //-         .col
    //-           .bloque-texto-e__autor 
    //-             .h5.mb-0 The graphic designer
    //-             .h6.mb-0 Lorem ipsum dolor sit amet
    //-         .col-4
    //-           img(src='@/assets/template/img-placeholder-1-1.svg', alt="Imagen decorativa")

    //- h3.titulo-tercero Cajón texto color F
    //- //- .bloque-texto-f debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- .bloque-texto-f.color-secundario.pt-4.px-5.mb-5(data-aos="fade-right")
    //-   .bloque-texto-f__comillas
    //-     i.fas.fa-quote-left
    //-     i.fas.fa-quote-right
    //-   h4.text-regular.bloque-texto-f__texto Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt augue in augue tempus, in dapibus justo interdum. Sed viverra sed odio quis rhoncus. In elementum purus massa, id venenatis purus ullamcorper ut. Vestibulum vel dictum dolor, nec fringilla orci. Nulla vestibulum, metus nec porttitor bibendum, lectus ligula viverra eros, eget tempor risus nulla pretium justo. Nullam turpis dolor, pharetra vel fermentum at, rutrum in elit. Maecenas vitae hendrerit libero, et ornare augue. Vestibulum iaculis, metus et accumsan malesuada, ligula sapien convallis risus, a iaculis velit ante at turpis. Vivamus bibendum tellus sed tincidunt rhoncus. Nam velit massa, porttitor eget quam et, porttitor viverra eros. Donec eget pharetra metus. Cras porta arcu eu mauris iaculis euismod. Sed fringilla vel nisl quis aliquam.
    //-   .bloque-texto-f__autor.mb-3
    //-     h3.mb-0 The graphic designer
    //-   .bloque-texto-f__avatar
    //-     .bloque-texto-f__avatar__img
    //-       img(src='@/assets/template/img-placeholder-1-1.svg', alt="Imagen decorativa")

    //- h3.titulo-tercero Cajón texto color G
    //- .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/img.jpg')})`}" data-aos="fade-right"
    //-   )
    //-   .bloque-texto-g__texto.p-4(data-aos="fade-left")
    //-     p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
    //-       br
    //-       br
    //-       | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    //- .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
    //-   .bloque-texto-g__img(
    //-     :style="{'background-image': `url(${require('@/assets/curso/img.jpg')})`}" data-aos="fade-left"
    //-   )
    //-   .bloque-texto-g__texto.p-4(data-aos="fade-right")
    //-     p.mb-0 Think about all the possibilities. A good composition is the result of a hierarchy consisting of clearly contrasting elements set with distinct alignments containing irregular intervals of negative space. Nothing of without working at it. Be impossible to ignore.
    //-       br
    //-       br
    //-       | Stand so tall that they can’t look past you. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect accept possibility of failure. 

    //- .tarjeta.tarjeta--azul.p-4.mb-5
    //-   h4.titulo-cuarto Tipo A
    //-   SlyderA(data-aos="zoom-in")
    //-     .row.justify-content-center
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
    //-         img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-       .col-lg-6(data-aos="fade-left")
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     div
    //-       figure
    //-         img.w-75(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen

    //- .tarjeta.tarjeta--azul.p-4.mb-5
    //-   h4.titulo-cuarto Tipo B
    //-   SlyderA(tipo="b" data-aos="zoom-in")
    //-     .row.justify-content-center
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
    //-         img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-       .col-lg-6(data-aos="fade-left")
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     div
    //-       figure
    //-         img.w-75(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen

    //- h3 Slyder F

    //- SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
    //-   .tarjeta.color-acento-botones.p-4
    //-     .row.justify-content-center.mb-4
    //-       .col-8
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-     h2.text-center FIRST
    //-     p.text-center.mb-0 moment. Abandon the shelter  asdf asdf asdf asdf asdfasdf asaasdfa sdf asdfsadf asd fasd dsf sdf asdfa sdfasdf asd of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    //-   .tarjeta.color-acento-botones.p-4
    //-     .row.justify-content-center.mb-4
    //-       .col-8
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-     h2.text-center 2
    //-     p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    //-   .tarjeta.color-acento-botones.p-4
    //-     .row.justify-content-center.mb-4
    //-       .col-8
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-     h2.text-center 3
    //-     p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    //-   .tarjeta.color-acento-botones.p-4
    //-     .row.justify-content-center.mb-4
    //-       .col-8
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-     h2.text-center 4
    //-     p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.
    //-   .tarjeta.color-acento-botones.p-4
    //-     .row.justify-content-center.mb-4
    //-       .col-8
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-     h2.text-center LAST
    //-     p.text-center.mb-0 moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //- h3 Slider Bootstrap
    //- #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel' data-aos="zoom-in")
    //-   .carousel-indicators
    //-     button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
    //-     button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
    //-     button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
    //-   .carousel-inner
    //-     .carousel-item.active
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .carousel-item
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .carousel-item
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
    //-     span.carousel-control-prev-icon(aria-hidden='true')
    //-     span.visually-hidden Previous
    //-   button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
    //-     span.carousel-control-next-icon(aria-hidden='true')
    //-     span.visually-hidden Next

    //- AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
    //-   .row.justify-content-center(titulo="Titulo item 1")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   div(titulo="Titulo item 2")
    //-     figure
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen

    //- h3 Acordion A tipo B
    //- AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
    //-   .row.justify-content-center(titulo="Titulo item 1")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   div(titulo="Titulo item 2")
    //-     figure
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen

    //- Separador
    //- #tabs.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Pestañas o Tabs

    //- p.mb-3 Es un elemento web que permite cambiar rápidamente el contenido que el usuario está consumiendo sin cambiar de ventana o desplazarse verticalmente por el sitio web. 

    //- .h5 Requerimientos de información

    //- ul.lista-ul.mb-5
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Los títulos que actuará como botón que sea una palabra o frases muy cortas.
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | La cantidad máxima es de 5 items.
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Se sugiere que la cantidad de texto sea igual o menor a 12 líneas de word tamaño carta. 
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Se sugiere el uso de texto acompañado de imágenes que refuercen el contenido a representar. 
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Se recomienda utilizar este componente para evidenciar procesos o temas generales compuesto de varias etapas.
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | No se debe utilizar para representar grandes cantidades de texto o contenido.
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | No se debe utilizar dentro de la pestaña o tab vídeos.

    //- h3 Pestañas A
    //- //- TabsA debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- TabsA.color-acento-botones.mb-5(data-aos="fade-right")
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 1")
    //-     h4 PASO 1: The splendor
    //-     p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-       strong user style sheets
    //-       |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-     p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 2")
    //-     h4 PASO 2: The splendor
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-           strong user style sheets
    //-           |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 3")
    //-     h4 PASO 3: The splendor
    //-     p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-       strong user style sheets
    //-       |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-     p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 4")
    //-     h4 PASO 4: The splendor
    //-     p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-       strong user style sheets
    //-       |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-     p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 5")
    //-     h4 PASO 5: The splendor
    //-     p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-       strong user style sheets
    //-       |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-     p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .tarjeta.color-acento-botones--borde.p-4(titulo="PASO 6")
    //-     h4 PASO 6: The splendor
    //-     p This is a normal paragraph (<code>p</code> element). To add some length to it, let us mention that this page was primarily written for testing the effect of 
    //-       strong user style sheets
    //-       |. You can use it for various other purposes as well, like just checking how your browser displays various HTML elements by default. It can also be useful when testing conversions from HTML format to other formats, since some elements can go wrong then.
    //-     p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      
    //- h3 Pestañas B
    //- //- TabsB debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- TabsB.color-acento-contenido.mb-5(data-aos="zoom-out")
    //-   .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-7.order-lg-1.order-2
    //-         h4 Celebrate your failures 1
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   .py-4.py-lg-5(titulo="Don’t lie to yourself" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-6.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .py-4.py-lg-5(titulo="Don’t quit" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-7.order-lg-1.order-2
    //-         h4 Celebrate your failures 3
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-6.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 4
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-7.order-lg-1.order-2
    //-         h4 Celebrate your failures 5
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen 
    //-   .py-4.py-lg-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
    //-     .row.justify-content-center
    //-       .col-lg-6.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 6
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    //- h3 Pestañas C
    //- //- TabsC debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- TabsC.color-primario.mb-5(data-aos="zoom-out")
    //-   .py-3.py-md-4(titulo="The splendor of the mystery")
    //-     .row.justify-content-center
    //-       .col-lg-6.order-lg-1.order-2
    //-         h4 Celebrate your failures 1
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   .py-3.py-md-4(titulo="Don’t lie to yourself")
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-         .py-3.py-md-4(titulo="The splendor of the mystery")
    //-     .row.justify-content-center
    //-       .col-lg-6.order-lg-1.order-2
    //-         h4 Celebrate your failures 3
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   .py-3.py-md-4(titulo="Don’t lie to yourself")
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 4
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-         .py-3.py-md-4(titulo="The splendor of the mystery")
    //-     .row.justify-content-center
    //-       .col-lg-6.order-lg-1.order-2
    //-         h4 Celebrate your failures 5
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-   .py-3.py-md-4(titulo="Don’t lie to yourself")
    //-     .row.justify-content-center
    //-       .col-lg-6.col-10.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-       .col-lg-6
    //-         h4 Celebrate your failures 6
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    //- h3 Linea Tiempo C
    //- .tarjeta.tarjeta--gris.p-4.mb-5
    //-   //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   //- text-small se usa para que los títulos sean mas pequeños
    //-   LineaTiempoC.color-acento-contenido(text-small)
    //-     .row.justify-content-center(titulo="1761")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="1798")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion. 
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="1887")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="1889")
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="1899")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="1901")
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="1930")
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="1987")
    //-       figure
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen

    //- h3 Linea Tiempo D
    //- .row.justify-content-center.mb-5
    //-   .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
    //-     //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     LineaTiempoD.color-secundario
    //-       p.text-small(numero="1" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.     
    //-       p.text-small(numero="2" titulo="Praesent luctus") Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
    //-       p.text-small(numero="3" titulo="Praesent luctus") Donec feugiat volutpat metus at pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet fermentum ex, in cursus nulla. Ut in sapien et enim suscipit accumsan at eu tellus. Integer faucibus finibus augue, vel aliquam dolor elementum et. Donec viverra leo quam, a lacinia quam cursus in. Donec feugiat volutpat metus at pulvinar.
    //-       p.text-small(numero="4" titulo="Praesent luctus") quam cursus in. Donec feugiat volutpat metus at pulvinar.
    //-   .col-lg-6(data-aos="fade-left")
    //-     //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     LineaTiempoD.color-primario
    //-       .row.justify-content-center(numero="1" titulo="Praesent luctus")
    //-         .col-lg-6.order-lg-1.order-2
    //-           p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-         .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen
    //-       .row.justify-content-center(numero="2" titulo="Praesent luctus")
    //-         .col-lg-6.col-10.mb-4
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen
    //-         .col-lg-6
    //-           p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .row.justify-content-center(numero="3" titulo="Praesent luctus")
    //-         .col-lg-6.order-lg-1.order-2
    //-           p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-         .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen

    //- //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- LineaTiempoD.color-acento-contenido.mb-5(data-aos="zoom-out")
    //-   .row.justify-content-center(numero="1" titulo="Praesent luctus")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   .row.justify-content-center(numero="2" titulo="Praesent luctus")
    //-     .col-lg-6.mb-lg-0.mb-4
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-     .col-lg-6
    //-       p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .row.justify-content-center(numero="3" titulo="Praesent luctus")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.text-small.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen

    //- h3 Linea Tiempo E

    //- //- LineaTiempoE debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- LineaTiempoE.color-acento-contenido(data-aos="zoom-out")
    //-   .row.justify-content-center(titulo="2014 - Present" subtitulo="Title, Company")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   div(titulo="1014 - Past" subtitulo="Title, Company")
    //-     figure
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   .row.justify-content-center(titulo="2034 - Future" subtitulo="Title, Company")
    //-     .col-lg-6.order-lg-1.order-2
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    
    //- Separador
    //- #pasos.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Pasos

    //- h3 Pasos A tipo n
    //- //- PasosA debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- PasosA.color-primario.mb-5(tipo="n")
    //-   .row.justify-content-center
    //-     .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
    //-       h3 Lorem ipsum dolor sit amet.
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   .row.justify-content-center
    //-     .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la Imagen
    //-     .col-lg-8(data-aos="fade-left")
    //-       h3 Nullam vulputate mauris eros, ut.
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-   .row.justify-content-center
    //-     .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
    //-       h3 Lorem ipsum dolor sit amet.
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-     .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-   .row.justify-content-center
    //-     .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la Imagen
    //-     .col-lg-8(data-aos="fade-left")
    //-       h3 Nullam vulputate mauris eros, ut.
    //-       p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.

    //- h3 Pasos A tipo l
    //- //- PasosA debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- PasosA.color-acento-botones.mb-5(tipo="l")
    //-   div(data-aos="fade-left")
    //-     h3 Lorem ipsum dolor sit amet.
    //-     p.mb-0 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id risus eu tortor vulputate luctus. Fusce ligula tortor, euismod vel scelerisque nec, dapibus sit amet enim. Mauris aliquet tempor neque non faucibus. Etiam ex urna, viverra ut velit maximus, malesuada tincidunt lectus. Aliquam tincidunt ipsum turpis, at lacinia purus ultricies eget. Curabitur at fringilla elit. Mauris id rhoncus sapien. Integer mollis ante enim, at congue enim suscipit et. Aliquam erat volutpat. Maecenas dolor ex, laoreet sed egestas pellentesque, molestie vitae mauris. Quisque cursus eros eget odio consequat egestas.
    //-   div(data-aos="fade-right")
    //-     h3 Nullam vulputate mauris eros, ut.
    //-     p.mb-0 Duis non elit arcu. In luctus placerat dapibus. Praesent auctor nunc vitae iaculis iaculis. Aenean efficitur lectus in elit ullamcorper porttitor. Phasellus sit amet scelerisque magna, eget rhoncus urna. Integer mollis faucibus hendrerit. Nullam blandit vel tortor vel elementum.
    //-   div(data-aos="fade-left")
    //-     h3 Duis laoreet est non ligula.
    //-     p.mb-0 Nulla lobortis orci quis posuere fringilla. Mauris sit amet ligula et tortor euismod mollis laoreet sit amet nisl. Sed ac suscipit sapien. Aliquam commodo magna quis nisl porttitor pulvinar. Donec efficitur sapien pulvinar, dictum tortor ac, pellentesque felis. Sed in nunc quis enim mattis sodales. Suspendisse sodales sem mauris, nec vehicula felis rhoncus in.
    //-   div(data-aos="fade-right")
    //-     h3 Lorem ipsum dolor sit amet.
    //-     p.mb-0 Aliquam ornare sem in mauris lobortis accumsan. Suspendisse sollicitudin tellus eget bibendum cursus. Praesent tincidunt cursus mattis. Fusce nec convallis mauris, eu tincidunt neque. Proin justo orci, fermentum vel est vel, ornare sodales dui. Etiam consequat commodo tincidunt. Maecenas imperdiet ante eu mauris imperdiet, Phasellus pretium tortor quis varius sagittis. Suspendisse eu posuere enim, sed lacinia justo. Praesent eget tempor erat, a pretium ante. Nulla facilisi.

    //- h3 Pasos B
    //- .tarjeta.tarjeta--gris.p-4
    //-   //- PasosB debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   PasosB.color-acento-contenido(data-aos="zoom-in")
    //-     .row.justify-content-center(titulo="Palabra")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="I think it needs to be")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="I have selected those elements")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="Etiam eu mauris sit amet")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-     .row.justify-content-center(titulo="Praesent luctus")
    //-       .col-lg-6.order-lg-1.order-2
    //-         p.mb-0 This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.      
    //-       .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
    //-         img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-         figcaption Leyenda de la imagen
    //-     div(titulo="arcu porta, vel finibus eros posuere")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-     div(titulo="Praesent")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen
    //-     div(titulo="Sed vehicula velit vel arcu porta,")
    //-       img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-       figcaption Leyenda de la imagen

    //- Separador
    //- #llamados_accion.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-   h2 Llamados a la acción

    //- p.mb-2 Es un bloque de texto que destaca por su composición y diseño. Su principal función es incentivar al usuario a realizar una acción a través de un botón o hipervínculo, en este caso, con el fin de poder acceder a recursos como infografías, videos, documentos y sitios web externos e independientes del componente formativo.

    //- ul.lista-ul.mb-3
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Abrir PDF
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Infografías
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Documentos
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Videos externos 
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Enlaces

    //- .h5 Requerimientos de información:

    //- ul.lista-ul.mb-5
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Título llamativo, claro y conciso. 
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | La redacción de los textos deben crear la necesidad de consultar el contenido sugerido (anexos).
    //-   li(data-aos="fade-right") 
    //-     i.lista-ul__vineta
    //-     | Se sugiere un párrafo de acompañamiento que no sobrepase las 3 líneas de texto en su extensión, cuya característica principal sea incentivar al aprendiz a consultar el recurso propuesto.

    //- .h5 Ejemplo: Llamado a la acción 1 Acción de infografías

    //- //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- //- estas clases tambien tienen un modificador --borde
    //- .tarjeta.color-acento-botones.p-4.p-md-5.mb-5(data-aos="fade-right")
    //-   .row.justify-content-around.align-items-center
    //-     .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
    //-       img(src="@/assets/componentes/ej-01.png")
    //-     .col-md.col-lg-6
    //-       h3 Título del recurso
    //-       p.mb-4 There is no right answer. The splendor of the mystery is that you don’t understand. Your rapidograph pens are dried up, the x-acto blades in your bag are rusty, and your mind is dull. Stop clicking your mouse, get messy, go back to the basics and make something original. Why are you reading all of this?  
    //-       a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
    //-         span Descargar
    //-         i.fas.fa-file-download

    //- .h5 Ejemplo: Llamado a la acción 2 Recursos externos
    //- //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- //- estas clases tambien tienen un modificador --borde
    //- .tarjeta.color-primario.p-3.mb-5(data-aos="fade-right")
    //-   .row.justify-content-around.align-items-center
    //-     .col-3.col-sm-2.col-lg-1
    //-       img(src="@/assets/componentes/ej-02.svg")
    //-     .col
    //-       .row.justify-content-between.align-items-center
    //-         .col.mb-sm-0.mb-4
    //-           h3.mb-1 Título del recurso
    //-           p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
    //-         .col-sm-auto
    //-           a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
    //-             span Descargar
    //-             i.fas.fa-file-download

    //- //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //- //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //- //- estas clases tambien tienen un modificador --borde
    //- .tarjeta.color-acento-botones.p-3.mb-5(data-aos="fade-right")
    //-   .row.justify-content-around.align-items-center
    //-     .col-3.col-sm-2.col-lg-1
    //-       img(src="@/assets/componentes/ej-02.svg")
    //-     .col
    //-       .row.justify-content-between.align-items-center
    //-         .col-mb-sm-0.mb-4
    //-           h3.mb-1 Título del recurso
    //-           p.text-small Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias 
    //-         .col-sm-auto
    //-           a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
    //-             span Descargar
    //-             i.fas.fa-file-download

    //- .h5 Ejemplo: Llamado a la acción 3 Recursos externos versión simplificada
    //- .row.justify-content-center.mb-5
    //-   .col-lg-6
    //-     a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-pdf.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias   
    //-     a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-doc.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
    //-     a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-xls.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
    //-     a.anexo.mb-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-link.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
    //-   .col-lg-6
    //-     a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-zip.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
    //-     a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-ppt.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
    //-     a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" data-aos="fade-right")
    //-       .anexo__icono
    //-         img(src="@/assets/template/icono-xml.svg")
    //-       .anexo__texto
    //-         p.mb-0 Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias

    //-   Separador
    //-   #tarjetas.titulo-segundo.color-acento-botones(data-aos="fade-right")
    //-     h2 Tarjetas

    //-   p.mb-3 Es la agrupación de contenidos (texto e imágenes) en forma de tarjeta, que tiene como propósito, uno, ser más amigable el consumo de la información y dos, destacar información o conceptos relevantes.

    //-   .h5 Requerimientos de información:

    //-   ul.lista-ul.mb-5
    //-     li(data-aos="fade-right") 
    //-       i.lista-ul__vineta
    //-       | Título corto y claro.
    //-     li(data-aos="fade-right") 
    //-       i.lista-ul__vineta
    //-       | Información precisa, que reporten conceptos o definiciones.
    //-     li(data-aos="fade-right") 
    //-       i.lista-ul__vineta
    //-       | Se sugiere una cantidad de texto igual o menor a 4 líneas de word tamaño carta.
    
    //- h3 tarjeta de deslizamiento arriba abajo
    //- .row.justify-content-center.mb-5
    //-   .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="fade-right")
    //-     .tarjetas-up(@mouseover="mostrarIndicador = false")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-       .tarjetas-up_card.BG03.p-lg-3.p-4
    //-         .title.d-flex.align-items-center.justify-content-center.mb-4
    //-           span
    //-             i.fas.fa-caret-up.fa-2x.me-3
    //-             i.fas.fa-caret-down.fa-2x.me-3
    //-           h4.mb-0 Desempeño financiero
    //-         p.text-center.mb-0 Analiza la rentabilidad del proyecto mediante indicadores como ingresos totales, costos operativos, margen de ganancia y retorno sobre la inversión (ROI).
    //-   .col-xl-5.col-lg-6.col-sm-8.col-10.mb-4(data-aos="flip-up")
    //-     .tarjetas-up(@mouseover="mostrarIndicador = false")
    //-       .indicador--hover(v-if="mostrarIndicador")
    //-       img(src='@/assets/template/img-placeholder.svg' alt="Imagen decorativa")
    //-       .tarjetas-up_card.BG03.p-lg-3.p-4
    //-         .title.d-flex.align-items-center.justify-content-center.mb-4
    //-           span
    //-             i.fas.fa-caret-up.fa-2x.me-3
    //-             i.fas.fa-caret-down.fa-2x.me-3
    //-           h4.mb-0 Experiencia del cliente
    //-         p.text-center.mb-0 Mide la satisfacción del visitante a través de encuestas, opiniones en redes sociales, tasa de retención y el Net Promoter Score (NPS), que indica la probabilidad de recomendación.

    //-   h3 Tarjetas botones
    //-   .row.mb-5
    //-     .col-sm-6.col-lg-3.mb-4.mb-lg-0
    //-       //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta--boton.color-primario.p-4
    //-         .row.justify-content-center.mb-3
    //-           .col-7
    //-             figure
    //-               img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")
    //-         h3.text-center Intuition important
    //-         p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    //-     .col-sm-6.col-lg-3.mb-4.mb-lg-0
    //-       //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta--boton.color-secundario.p-4
    //-         .row.justify-content-center.mb-3
    //-           .col-7
    //-             figure
    //-               img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

    //-         h3.text-center Intuition important
    //-         p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    //-     .col-sm-6.col-lg-3.mb-4.mb-sm-0
    //-       //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
    //-         .row.justify-content-center.mb-3
    //-           .col-7
    //-             figure
    //-               img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

    //-         h3.text-center Intuition important
    //-         p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.

    //-     .col-sm-6.col-lg-3
    //-       //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta--boton.color-acento-botones.p-4
    //-         .row.justify-content-center.mb-3
    //-           .col-7
    //-             figure
    //-               img(src='@/assets/componentes/ej-03.svg', alt="Imagen decorativa")

    //-         h3.text-center Intuition important
    //-         p.text-small Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.


    //-   h3 Tarjetas conectadas
    //-   .tarjeta--container.row.mb-5
    //-     //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     //- estas clases tambien tienen un modificador --borde
    //-     .col-md.tarjeta.color-primario.p-5
    //-       .row.justify-content-center.mb-4
    //-         .col-6
    //-           figure
    //-             img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
    //-       h2.text-center Celebrate your<br>failures
    //-       p To surpass others is fucking tough, if you only do as you are told you don’t have it in you to succeed. Think about all the possibilities. You’ve been placed in the crucial moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     //- estas clases tambien tienen un modificador --borde
    //-     .col-md.tarjeta.color-acento-botones.p-5
    //-       .row.justify-content-center.mb-4
    //-         .col-6
    //-           figure
    //-             img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
    //-       h2.text-center Sterility leads to<br>susceptibility
    //-       p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

    //-     //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-     //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-     //- estas clases tambien tienen un modificador --borde
    //-     .col-md.tarjeta.color-acento-contenido.text-white.p-5
    //-       .row.justify-content-center.mb-4
    //-         .col-6
    //-           figure
    //-             img(src='@/assets/componentes/ej-05.svg', alt="Imagen decorativa")
            
    //-       h2.text-center Sterility leads to<br>susceptibility
    //-       p Remember it’s called the creative process, it’s not the creative moment. Saul Bass on failure: Failure is built into creativity… the creative act involves this element of ‘newness’ and ‘experimentalism,’ then one must expect and accept the possibility of failure.

    //-   h3 Tarjetas avatar A
    //-   .row
    //-     .col-lg-6
    //-       .tarjeta-avatar-b.mb-5
    //-         .tarjeta-avatar-b__img
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         .tarjeta.tarjeta--azul
    //-           .p-4
    //-             h2 John Doe
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-lg-6
    //-       .tarjeta-avatar-b.mb-5
    //-         .tarjeta-avatar-b__img
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-acento-botones
    //-           .p-4
    //-             h2 John Doe
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-lg-6
    //-       .tarjeta-avatar-b.mb-5
    //-         .tarjeta-avatar-b__img
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-acento-contenido
    //-           .p-4
    //-             h2 Greatness isn’t the height
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-lg-6
    //-       .tarjeta-avatar-b.mb-5
    //-         .tarjeta-avatar-b__img
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-primario.text-white
    //-           .p-4
    //-             h2 Greatness isn’t the height
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-   h3 Tarjetas avatar B
    //-   .row.mb-5
    //-     .col-md-6.col-lg.mb-5.mb-lg-0
    //-       .tarjeta-avatar
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-primario
    //-           .text-white.p-4
    //-             h2.text-center John Doe
    //-             p moment. K askdnaskjda sjkdn akjsndasd ajshd akjshd kajshd ask djhak sjdha ksjdha kjsdha kjsdha kjsdh akjshda kjshd aksjdh kajsd djkhakjshdka jsak Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-md-6.col-lg.mb-5.mb-lg-0
    //-       .tarjeta-avatar
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-acento-botones
    //-           .p-4
    //-             h2.text-center John Doe
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-md-6.col-lg.mb-5.mb-lg-0
    //-       .tarjeta-avatar
    //-         img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-         //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-         //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-         //- estas clases tambien tienen un modificador --borde
    //-         .tarjeta.color-acento-contenido
    //-           .p-4
    //-             h2.text-center Greatness isn’t the height
    //-             p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-   h3 Tarjetas flip

    //-   .row.mb-5
    //-     .col-sm-6.col-xl-3.mb-4.mb-xl-0
    //-       .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
    //-         .indicador--hover(v-if="indicadorTarjetaFlip")
    //-         .tarjeta-flip__contenedor
    //-           .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-flip__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, 

    //-     .col-sm-6.col-xl-3.mb-4.mb-xl-0
    //-       .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
    //-         .tarjeta-flip__contenedor
    //-           .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-flip__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-     .col-sm-6.col-xl-3.mb-4.mb-sm-0
    //-       .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
    //-         .tarjeta-flip__contenedor
    //-           .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-flip__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-     .col-sm-6.col-xl-3
    //-       .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
    //-         .tarjeta-flip__contenedor
    //-           .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-flip__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-   h3 Tarjetas slide

    //-   //- .tarjeta-slide debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   //- .arriba, .abajo, .derecha, .izquierda para controlar la animacion
    //-   .row.mb-5
    //-     .col-sm-6.col-xl-3.mb-4.mb-xl-0
    //-       .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
    //-         .indicador--hover(v-if="indicadorTarjetaSlide")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, 
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")

    //-     .col-sm-6.col-xl-3.mb-4.mb-xl-0
    //-       .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-     .col-sm-6.col-xl-3.mb-4.mb-sm-0
    //-       .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-     .col-sm-6.col-xl-3
    //-       .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
    //-         .tarjeta-slide__contenedor
    //-           .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
    //-           .tarjeta-slide__contenido.p-4.p-xl-5
    //-             h1 John Doe
    //-             p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus id, vulputate turpis.

    //-   h3 Tarjetas Tabla
    //-   .row.mb-5
    //-     .col-md-6.col-lg.tarjeta--tabla.p-4
    //-       .row.justify-content-center.mb-3
    //-         .col-4
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-       h2.text-center John Doe
    //-       p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-md-6.col-lg.tarjeta--tabla.p-4
    //-       .row.justify-content-center.mb-3
    //-         .col-4
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-       h2.text-center John Doe
    //-       p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-md-6.col-lg.tarjeta--tabla.p-4
    //-       .row.justify-content-center.mb-3
    //-         .col-4
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-       h2.text-center John Doe
    //-       p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-     .col-md-6.col-lg.tarjeta--tabla.p-4
    //-       .row.justify-content-center.mb-3
    //-         .col-4
    //-           img(src='@/assets/componentes/ej-05.svg' alt="Imagen decorativa")
    //-       h2.text-center John Doe
    //-       p.text-center moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t the height of your stature, it’s the heft of your spirit.

    //-   h3 Tarjetas con número

    //-   .row.mb-5
    //-     .col-md-6.col-xl.mb-4.mb-xl-0
    //-       //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta-numerada.color-primario.p-5
    //-         .tarjeta-numerada__numero
    //-           .h2 1
    //-         p.text-center 
    //-           b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
    //-         p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    //-     .col-md-6.col-xl.mb-4.mb-xl-0
    //-       //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta-numerada.color-secundario.p-5
    //-         .tarjeta-numerada__numero
    //-           .h2 2
    //-         p.text-center 
    //-           b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
    //-         p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    //-     .col-md-6.col-xl.mb-4.mb-xl-0
    //-       //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta-numerada.color-acento-contenido.p-5
    //-         .tarjeta-numerada__numero
    //-           .h2 3
    //-         p.text-center 
    //-           b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
    //-         p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    //-     .col-md-6.col-xl.mb-4.mb-xl-0
    //-       //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
    //-       //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-       //- estas clases tambien tienen un modificador --borde
    //-       .tarjeta-numerada.color-acento-botones.p-5
    //-         .tarjeta-numerada__numero
    //-           .h2 4
    //-         p.text-center 
    //-           b Ruta integral de atención en salud para la promoción y mantenimiento de la salud 
    //-         p.text-center Acciones realizadas en los entornos donde transcurre la vida y se desarrollan las personas

    //-   Separador
    //-   #modal.titulo-segundo.color-acento-botones
    //-     h2 Modal

    //-   .row
    //-     .col-auto
    //-       a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
    //-         span Abrir modal
    //-         .indicador--click(v-if="mostrarIndicador")
    //-     .col
    //-       p moment. Abandon the shelter of insecurity. Be bold. Greatness isn’t 
    //-         a.lnk(@click="modal1 = true") Abrir modal 
    //-         |the height of your stature, it’s the heft of your spirit.
      
    //-   ModalA(:abrir-modal.sync="modal1")
    //-     .row.align-items-center
    //-       .col-md-6.mb-4.mb-md-0
    //-         h4 Modal 1
    //-         p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
    //-       .col-md-6
    //-         figure
    //-           img(src='@/assets/template/img-placeholder.svg', alt="Imagen decorativa")
    //-           figcaption Leyenda de la imagen
      
    //-   Separador
    //-   #modal.titulo-segundo.color-acento-botones
    //-     h2 Animaciones

    //-   h3.titulo-tercero Fade
    //-   .row.mb-5
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-acento-botones.text-center.p-3(data-aos="fade-left")
    //-         h3.mb-0 fade-left
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-primario.text-center.p-3(data-aos="fade-right")
    //-         h3.mb-0 fade-right

    //-   h3.titulo-tercero Flip
    //-   .row.mb-5
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-primario.text-center.p-3(data-aos="flip-up")
    //-         h3.mb-0 flip-up
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-secundario.text-center.p-3(data-aos="flip-down")
    //-         h3.mb-0 flip-down
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-acento-contenido.text-center.p-3(data-aos="flip-left")
    //-         h3.mb-0 flip-left
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-acento-botones.text-center.p-3(data-aos="flip-right")
    //-         h3.mb-0 flip-right

    //-   h3.titulo-tercero Zoom
    //-   .row
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-primario.text-center.p-3(data-aos="zoom-in")
    //-         h3.mb-0 zoom-in
    //-     .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
    //-       .tarjeta.color-secundario.text-center.p-3(data-aos="zoom-in-up")
    //-         h3.mb-0 zoom-out

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
