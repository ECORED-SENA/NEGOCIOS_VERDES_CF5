<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Para poder sobrevivir las organizaciones han debido afrontar retos a nivel interno y externo, adaptándose a los constantes cambios de tipo económico, social, cultural, tecnológico, así como a los diferentes sucesos de tipo político, legal y demográfico que han influenciado en la forma de hacer negocios. Como resultado de estos acontecimientos, las empresas han incorporado métodos o procesos a nivel estratégico o de direccionamiento que las han hecho no solo más flexibles, sino que les han brindado capacidad de respuesta rápida ante estos constantes cambios en las diferentes áreas de producción, logística, <i>marketing</i> y ventas. 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la actualidad los procesos de producción, comercialización, <i>marketing</i>, ventas y el mismo consumo moderno demandan un modelo de negocios basado en políticas de acción y desarrollo sostenible o de mercadeo, producción y consumo responsable con el entorno en el que la empresa se desenvuelve. Como solución a esta problemática surgen las empresas orientadas a la economía verde con una filosofía operativa basada en los principios de desarrollo sostenible y crecimiento verde. 

    p.mb-4 Pero al igual que las organizaciones tradicionales, para afrontar las diferentes situaciones o retos del entorno de negocio, la empresa verde requiere contar no solo con capacidad directiva y estratégica, sino con los recursos económicos necesarios y esto se consigue a través de logro de los objetivos comerciales, escenario donde la gran protagonista es la planeación comercial.
    p.mb-5 A través de este proceso la empresa planea estratégicamente, prevé los presupuestos, los recursos operativos, económicos y humanos necesarios que le permitan alcanzar las diferentes metas comerciales, organiza con eficiencia, ejecuta con disciplina operativa y controla a través del cumplimiento de las diferentes políticas institucionales e indicadores de gestión para garantizar el logro de los objetivos, para responder acorde a las necesidades organizacionales como el cumplimiento de la misión y la visión; además, atendiendo eficientemente las diferentes necesidades o deseos de los clientes, compradores o consumidores para crear una ventaja competitiva.

    .cajon.color-acento-contenido.p-4.mb-4        
        p En conclusión, para la empresa, el mercadeo y el consumidor con el cumplimiento de los objetivos establecidos en la planeación comercial, se garantiza la viabilidad y supervivencia de los negocios verdes. 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
