<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1  Diagnóstico empresarial

    p.mb-5 Esta herramienta permite a la empresa reconocer el avance que tiene para lograr sus objetivos corporativos, la misión y la visión. Además, propicia evaluar el desempeño de las diferentes áreas de la organización en sus principales indicadores de gestión, facilita la toma de decisiones con base en la información, permite conocer el estado actual, identificar los recursos disponibles y el valor de la empresa. El diagnóstico empresarial posibilita medir o cuantificar el impacto del entorno de negocios en los resultados de la organización.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-right")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Para las organizaciones pertenecientes a las economías verdes, el diagnóstico empresarial es una herramienta de negocios bastante útil para definir y estructurar el Plan de Manejo Ambiental (PMA) y apropiar los principios del Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2010) para garantizar la Política de Producción y Consumo Sostenible, del Plan Nacional de Negocios Verdes (PNNV). 

    .row.mb-5.justify-content-center
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/Plan_Nacional_de_Negocios_Verdes.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Plan Nacional de Negocios Verdes. Ministerio de Ambiente y Desarrollo Sostenible.
          
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

<style lang="sass" scoped></style>
