<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Este componente formativo ha proporcionado un marco integral para el cálculo y la interpretación de indicadores financieros esenciales en la evaluación de la situación económica de una empresa. A través de ejemplos prácticos y explicaciones detalladas de indicadores clave como la razón corriente, la prueba ácida, el margen de utilidad, el ROA y el ROE, los aprendices han adquirido las competencias necesarias para analizar y comprender los aspectos fundamentales de la gestión financiera. La aplicación de estos indicadores permite tomar decisiones estratégicas fundamentadas, favoreciendo la mejora en la toma de decisiones empresariales. Además, la inclusión de cifras representativas del entorno empresarial colombiano ha facilitado la conexión de la teoría con la práctica, permitiendo que los aprendices evalúen de manera efectiva la salud financiera de una empresa y fortalezcan su capacidad analítica para enfrentar desafíos financieros en contextos reales.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo Calculo e interpretación de los indicadores financieros, se explican los diferentes tipos de indicadores como son el de liquidez, endeudamiento, eficacia y el de rentabilidad; relacionando las fórmulas de su representación y unos ejemplos prácticos al respecto. Igualmente, se detalla el proceso que tiene que ver con la toma de decisiones, dentro de los indicadores existentes.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
