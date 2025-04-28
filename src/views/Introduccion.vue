<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        p Este componente formativo tiene como objetivo proporcionar a los aprendices del SENA las herramientas necesarias para comprender, calcular e interpretar los principales indicadores financieros utilizados en la evaluación de la situación económica de las empresas. A través de una metodología práctica y accesible, se abordarán conceptos clave como los indicadores de liquidez, endeudamiento, rentabilidad y eficiencia, fundamentales para la toma de decisiones estratégicas en el ámbito financiero. Mediante ejemplos representativos del entorno empresarial colombiano, los aprendices podrán aplicar estos conceptos a situaciones reales, facilitando así su aprendizaje y comprensión. Además, se utilizarán herramientas didácticas que promuevan la participación activa, ayudándolos a interpretar los resultados obtenidos y tomar decisiones informadas basadas en análisis financieros rigurosos. El componente se desarrollará de manera didáctica, con un enfoque práctico que permite vincular la teoría con la práctica, fortaleciendo las competencias en el análisis y manejo de indicadores financieros en contextos organizacionales.
        p Partiendo de lo anterior, se invita a que acceda al siguiente video, el cual relaciona la temática a tratar durante este componente formativo

      .col-lg-5.col-8.mb-lg-0.mb-4.order-lg-2.order-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/introduccion/img-01.svg', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
