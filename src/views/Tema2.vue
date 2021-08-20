<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1  Análisis situacional

    p.mb-5 A través del análisis situacional las empresas pertenecientes a sectores como la economía verde pueden validar tendencias de consumo responsable, el grado de satisfacción de los clientes, la preferencia de los consumidores hacia otros productos, identificar posibles amenazas por la entrada al mercado de productos sustitutos, incentivos o actividades de la competencia en busca de su lealtad. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-out")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis situacional permite identificar oportunidades para llegar a nuevos mercados o segmentos de la población, conocer en la cadena de abastecimiento el comportamiento, el impacto y el grado de buen relacionamiento, satisfacción, calidad en los procesos, cumplimiento de la normatividad y la capacidad de negociación con agentes de la cadena, como los proveedores esenciales, para el desarrollo de la producción a través del cumplimiento en entrega y cantidad de los insumos. 

    .row.mb-5.justify-content-center
      .col-lg-8
        p.mb-4 Por otro lado, este tipo de análisis permite identificar diferentes oportunidades con posibles canales de distribución para mejorar la presencia y rotación de los productos en los diferentes puntos de venta, incrementar los volúmenes, establecer alianzas que permitan optimizar la productividad en el punto venta, además mejorar indicadores de eficacia y eficiencia en la distribución comercial. 
        p Con el análisis situacional de la empresa se puede valorar la percepción de los diferentes grupos de interés, que son claves para la obtención y generación de ingresos, y el grado de conformidad de estos por los resultados o ingresos percibidos. También permite identificar aspectos del clima organizacional acerca del nivel de bienestar, proyección y seguridad que perciben los clientes internos de la organización. La formulación de nuevos objetivos y estrategias son el resultado de un análisis situacional que mejora el grado de competitividad.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img02.svg')

    p.text-center.mb-5 Ahora, se definirá análisis situacional según diferentes autores: 

    .row.mb-5.justify-content-center(data-aos="slide-left")  
      .col-lg-10
        .bloque-texto-d.color-primario.p-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p Supone llevar a cabo un análisis completo de la situación de la compañía. Esta debe analizar su entorno para tratar de encontrar oportunidades atractivas y evitar sus amenazas. Debe analizar también los puntos fuertes y débiles de la empresa
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .p.mb-0.pe-5 <b>Monferrer, 2013, p. 55</b>

    p.mb-4 De acuerdo con el autor, las organizaciones requieren realizar un estudio sobre el entorno de los negocios en el que se desenvuelven, este comprende el macro y microentorno de la empresa, por lo cual se requiere del análisis, estudio y proyección sobre el posible desempeño de las variables económicas, sociales, políticas, tecnológicas, legales, culturales, demográficas y medioambientales que conforman el macroentorno; que por su naturaleza o complejidad no son de manejo y tienen el objetivo de prever y minimizar amenazas, riesgos o posibles impactos negativos en los resultados o las utilidades.
    p.mb-5 Asimismo, en el análisis se requiere implementar el estudio tipologías de riesgo, para calificar el grado de afectación que el desempeño negativo podría tener en la viabilidad de las empresas, más aún en mercados en consolidación que pueden ser más vulnerables ante estos imprevistos del ambiente de negocios, como el biocomercio. 

    .row.mb-3.justify-content-center(data-aos="flip-left")  
      .col-lg-7
        figure
          img(src='@/assets/curso/tema2/img03.svg')

    .row.mb-5.justify-content-center(data-aos="slide-right")  
      .col-lg-10
        .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')            
            .tarjeta.color-acento-botones(style="background-color: #FFE081 !important")
              .p-4            
                p El análisis situacional permite a la organización capitalizar oportunidades, seguir desarrollando ventajas competitivas, identificar los recursos de la empresa o los que requiere a futuro y contar con información actualizada de la industria, para comparar su desempeño con empresas del mismo tamaño, identificar su grado de participación de mercado y fortalecer debilidades.

    p.mb-5.text-center <b>Al respecto, Baena (2011), afirma que:</b>

    .row.mb-5.justify-content-center(data-aos="flip-left")  
      .col-lg-10
        .bloque-texto-f.color-acento-botones.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right          
            p.mb-4.text-regular.bloque-texto-f__texto Solo las compañías que se adaptan al entorno tendrán éxito en sus actividades. En cambio, aquellas que se resisten a los cambios no serán capaces de ofrecer bienes o servicios demandados por los consumidores (las necesidades no son estáticas, sino que, por el contrario, evolucionan), por lo que perderán clientes y, por tanto, cuota de mercado.
            p.mb-4.text-regular.bloque-texto-f__texto Así mismo, el entorno está cambiando constantemente, por lo que las organizaciones deben desarrollar sistemas de vigilancia del entorno (denominado SIM) para observar los cambios que se producen en él y adaptarse a ellos. 
            p.mb-4.text-regular.bloque-texto-f__texto En otras palabras, las empresas no deben ignorar o resistirse a los cambios en el entorno, sino adaptarse a ellos. Solo así alcanzaran el éxito (p. 59).           
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

<style lang="sass" scoped></style>
