<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1  Plataforma estratégica

    p.mb-5 Una empresa nace cuando se estructuran y establecen los diferentes lineamientos corporativos que definen la cultura corporativa de la organización. Estos se vuelven la base, el soporte o la plataforma que afianza o sostiene la organización y sobre la cual giran todas las demás acciones. La componen aspectos como:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-in")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La misión, la visión, los valores, los principios corporativos, las políticas organizacionales, posibles compromisos empresariales sociales y ambientales, un mapa de procesos que plantee procesos limpios y ecológicos; además, la estructura de la organización por áreas y por cargos. 

    p.mp-4 La plataforma estratégica se alimenta con actividades como <b>la planeación estratégica, el plan de <i>marketing</i> y la planeación comercial</b>, debido a que el objetivo de estos procesos de planeación es garantizar el cumplimiento de la misión y visión; apoyados en los demás elementos de la plataforma estratégica como: <b>los valores organizacionales, los principios, el mapa de procesos o la jerarquía organizacional</b>.
    p.mb-5 Para las empresas dedicadas a la economía verde es indispensable precisar y asegurar la formulación, análisis, ejecución y control de la plataforma estratégica, esta se vuelve el norte organizacional, hacia donde apuntan las diferentes estrategias y recursos de la empresa. Además de esto, su importancia radica en que se formula para el cliente interno, el cliente externo y demás grupos de interés, convirtiendo esta herramienta en una oportunidad para generar posicionamiento por los diferentes canales de comunicación y sistemas de información que usa la empresa. Ahora, se profundizará en ellos:

    TabsA.color-primario.mb-5    
      .tarjeta.color-primario--borde.p-4(titulo="La misión")
        h4 La misión
        .row.justify-content-center                 
          .col-lg-7
            p Formular la misión es dar respuesta a preguntas como: <b>¿qué hace la empresa?, ¿cómo lo hace?, ¿para quién se hace?</b> Habla de su mercado, de sus consumidores, beneficios del producto. Los negocios verdes cuentan con la oportunidad de hablar a sus mercados sobre sus principios corporativos, los propósitos únicos de su modelo de negocio basado en el desarrollo sostenible, el cual asegura sostenibilidad, respeto por los recursos naturales para la subsistencia de las futuras generaciones. Con productos o servicios amigables con el entorno donde opera le empresa, en este caso se hablaría de un consumidor responsable o consumo sostenible. 
          .col-lg-5
            figure(data-aos="slide-right")  
              img(src='@/assets/curso/tema6/img02.svg')
      .tarjeta.color-primario--borde.p-4(titulo="La visión")
        h4 La visión
        .row.justify-content-center                 
          .col-lg-7
            p Para las empresas de economía verde, el entorno empresarial presenta oportunidades de crecimiento sostenible. En la actualidad es una industria con fortalezas intrínsecas y extrínsecas que naturalmente ofrece a la sociedad, el medio ambiente y los consumidores la posibilidad de proyectar ambiental y biológicamente un mundo mucho mejor.  A la sociedad le gusta escuchar esto, porque le da sentido al presente, guía no solo el futuro de una marca, sino además el destino de futuras generaciones.
          .col-lg-5
            figure(data-aos="flip-right")  
              img(src='@/assets/curso/tema6/img03.svg')
      .tarjeta.color-primario--borde.p-4(titulo="Las políticas")
        h4 Las políticas
        .row.justify-content-center                 
          .col-lg-7
            p Son el soporte sobre el cual se toman las decisiones a nivel directivo, fundamentan el modo de actuar organizacional de todo el personal, fortalecen los valores y principios organizacionales, generan conciencia ética, es esencial que las empresas orientadas al biocomercio, los negocios verdes implementen políticas que estén alineadas con el Plan de Manejo Ambiental (PMA), orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia, y abandono según la naturaleza del proyecto, obra o actividad (Decreto 1220, abril 21 de 2005).  
          .col-lg-5
            figure(data-aos="flip-right")  
              img(src='@/assets/curso/tema6/img04.svg')
      .tarjeta.color-primario--borde.p-4(titulo="Los valores y compromisos")
        h4 Los valores y compromisos
        .row.justify-content-center                 
          .col-lg-7
            p En la actualidad los valores empresariales deberían apuntar aquellos que garanticen crecimiento económico sostenible.
          .col-lg-5
            figure(data-aos="flip-right")  
              img(src='@/assets/curso/tema6/img05.svg')
</template>

<script>
export default {
  name: 'Tema6',
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
