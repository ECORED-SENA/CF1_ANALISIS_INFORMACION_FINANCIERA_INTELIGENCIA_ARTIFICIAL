<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La incorporación de la inteligencia artificial en los procesos contables y financieros responde a la necesidad de organizar, interpretar y utilizar la información de manera más eficiente, segura y oportuna. En este contexto, los hechos económicos deben identificarse, soportarse y tratarse mediante criterios técnicos que permitan reconocer su ocurrencia, relacionarlos con los documentos y registros contables correspondientes y preparar datos confiables para su procesamiento mediante herramientas tecnológicas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El uso de herramientas de inteligencia artificial para el tratamiento de información financiera exige comprender tanto sus posibilidades como sus límites. Estas herramientas pueden apoyar la extracción y clasificación de datos, la revisión de documentos, la identificación de patrones y la generación de hallazgos iniciales. Sin embargo, los resultados deben ser verificados por la persona responsable del análisis, de acuerdo con la normativa financiera, la protección de datos, la seguridad de la información y los controles internos aplicables.
      .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade")
        .col-lg-10.bg-color-2.p-4.mb-0.d-flex.align-items-center.p-4
          p.mb-0 La aplicación responsable de la inteligencia artificial en el tratamiento de hechos económicos requiere ética, transparencia y criterio profesional. Por ello, es necesario reconocer riesgos como los sesgos algorítmicos, los errores de predicción, la dependencia tecnológica y el uso inadecuado de datos financieros. Además, la formulación de <i>prompts</i> claros, la delimitación de las necesidades contables y financieras, la validación de los resultados y el archivo de los <i>prompts</i> corregidos permiten fortalecer la trazabilidad del proceso y mejorar la calidad de la información obtenida.
        .col-lg-2.bg-color-3.d-flex.align-items-center.justify-content-center.p-4
          figure
            img(src="@/assets/curso/temas/intro/img2.svg", data-aos="zoom-in", style="width: 100px").mx-auto







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
