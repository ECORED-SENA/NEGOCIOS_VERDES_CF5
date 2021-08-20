<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1  La empresa

    p.mb-4 Por el hecho de pertenecer a un ecosistema a la empresa se puede considerar como un organismo que interactúa en armonía con su entorno social, medioambiental, económico, político, legal, generando utilidades a los diferentes grupos de interés que intervienen en ella. Bajo el concepto newtoniano se considera la empresa como una máquina que podía ser diseñada bajo principios científicos para lograr la máxima eficacia y eficiencia orientada a la consecución de unos objetivos muy definidos (Cobarsi, 2011, p. 28).
 
    figure(data-aos="zoom-in")  
      img(src='@/assets/curso/tema8/img01.svg')

    p.mb-5 Concepto de empresa. Taylor (1911) aplicó las siguientes premisas al diseño de trabajo orientado a la eficiencia en plantas industriales:

    p.mb-4 Estos principios funcionan para organizaciones que basan sus sistemas de producción en masa en actividades que se repiten de una forma estructurada, orientados al logro de objetivos bajo principios de efectividad y eficiencia, con tareas coordinadas donde prima el grado de especialización y jerarquía.
    p.mb-5 <b>Concepto empresa como ser vivo.</b> Formulada por primera vez por el biólogo austriaco Bertalanffy (1976) y estos son sus principios fundamentales: 

    .row.mb-5
      .col-lg-4.t4.div1.d-flex(data-aos="fade-right")  
        div              
          figure.mb-5.mt-4
            img(src='@/assets/curso/tema8/img02.svg') 
          p.px-5.text-center Prestar atención al entorno interno y externo.
      .col-lg-4.t4.div2.d-flex
        div
          figure.mt-4.mb-5(data-aos="zoom-in")  
            img(src='@/assets/curso/tema8/img03.svg')
          p.px-5.text-center Considerar a las organizaciones formadas por subsistemas interrelacionados.
      .col-lg-4.t4.div3.d-flex(data-aos="fade-left")  
        div
          figure.mb-5.mt-4
            img(src='@/assets/curso/tema8/img04.svg')
          p.px-5.text-center Establecer congruencias y alinear diferentes subsistemas para identificar y eliminar potenciales disfunciones.

    p.mb-5 En la actualidad este concepto es muy aplicado ante los constantes cambios, avances e incertidumbre que impera en el macro y microentorno de la organización. Los cambios que impactan directamente requieren que la empresa implemente sistemas de consecución, gestión y retroalimentación de la información. Además, el modelo demanda una buena relación con los diferentes grupos de interés para lograr los objetivos y no incurrir en ineficiencias operativas.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-in")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        div
          p.mb-0(style="color: #6F7302 ") <b>Concepto empresa como un cerebro.</b>
          br
          p Los adelantos científicos en las neurociencias han servido de base para tomar al cerebro de lo que podría ser como una organización que aprende, plenamente adaptada a la economía del conocimiento (Cobarsi 2011, p. 31). 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-in")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        div
          p.mb-0(style="color: #529AD9 ") <b>Concepto empresa como una red.</b>
          br
          Una red es un conjunto de nodos que se relacionan entre sí mediante vínculos. Todo depende de, ¿Qué consideramos como un nodo en un caso concreto y de que vínculo definimos? Así podremos definir la empresa como la red de vínculos de confianza e intercambio de la información de las personas que trabajan en ella. Esta red puede extenderse más allá del ámbito estricto de la empresa (Cobarsi 2011, p. 38).

</template>

<script>
export default {
  name: 'Tema8',
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
