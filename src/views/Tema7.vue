<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1  Sistemas de información en biocomercio y negocios verdes

    p.mb-5 Para Cobarsi (2011), “el entorno de información de cualquier empresa, su sistema de información puede considerarse constituido por una especie de conglomerados de subsistemas de información focalizados en diferentes propósitos. Hay que decir que todos tienen una base tecnológica consolidada y proveedores cualificados” (p. 60). A continuación, se relaciona mapa conceptual para una empresa de negocios verdes y biocomercio.

    .row.mb-5.justify-content-center                 
        .col-lg-10
          figure(data-aos="flip-right")  
              img(src='@/assets/curso/tema7/img01.svg')

    p Cobarsi (2011) afirma que, “la implementación de estos sistemas de información garantiza un entorno de trabajo ecológico, porque evita pérdidas de tiempo y necesidades de movilidad. Además, se basa en principios como la ética, dependencia tecnológica, implantación ordenada e información en la nube” (p. 75-77)

</template>

<script>
export default {
  name: 'Tema7',
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
