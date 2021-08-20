<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1  Microentorno

    p.mb-5 Para Baena (2011), “el microentorno está compuesto por las fuerzas más cercanas a la empresa: proveedores, intermediarios, clientes, competidores, y finalmente los grupos de interés. Todas estas fuerzas constituyen el microentorno de la empresa” (p. 73). La importancia de algunos de estos agentes está en que forman parte de la cadena de abastecimiento.
    p.mb-5.text-center <b>A continuación, se presentan los factores que tienen los microentornos: </b>
    TabsB.color-primario.mb-5
      .py-4.py-md-5(titulo="Proveedores" :icono="require('@/assets/curso/tema5/img01.svg')")
        .row.justify-content-center
          .col-lg-7.d-flex.align-items-center
            p Los proveedores hacen parte importante del engranaje de la cadena de abastecimiento, para el modelo de negocios de economías verdes se requieren de proveedores altamente especializados, cumplidores y certificados de la normatividad ambiental. Son capaces de suministrar insumos acordes a las cantidades necesarias, las especificaciones y los principios del Ministerio de Ambiente, Vivienda y Desarrollo Territorial.
          .col-lg-5
            figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema5/img06.svg')
      .py-4.py-md-5(titulo="Los intermediarios" :icono="require('@/assets/curso/tema5/img02.svg')")
        p.mb-5 Cuando nos referimos a los distribuidores como intermediarios son aquellos agentes que facilitan a cambio de una comisión o porcentaje la colocación de los productos en las diferentes redes o puntos de venta. Son de vital importancia para la cadena de abastecimiento, la planeación comercial, el transporte de los productos hacia los puntos de ventas y, finalmente, para que los consumidores puedan acceder a los productos en las cantidades adecuadas.
        .row.justify-content-center
          .col-lg-5
            figure(data-aos="zoom-out")
              img(src='@/assets/curso/tema5/img07.svg')
          .col-lg-5.d-flex.align-items-center
            div.t5-div1.p-4
              p.mb-0 Por ser el transporte o movimiento mecánico de mercancías se requiere de parte un alto grado de conciencia e inversión en tecnologías más limpias y amigables con el medio ambiente, que permitan una reducción significativa en el uso de combustibles fósiles y que cumplan con la normatividad técnico ambiental. 

            
      .py-4.py-md-5(titulo="Los clientes" :icono="require('@/assets/curso/tema5/img03.svg')")
        p.mb-5 Ninguna empresa podría sostenerse en ningún mercado sin contar con el determinado número de clientes que garanticen a través de las compras los ingresos necesarios para asegurar la supervivencia de la organización. Ante el aumento de nuevos competidores los ejecutivos del marketing luchan constantemente por la consecución de nuevos clientes, la conservación o retención de los actuales. Por tal razón se requiere que:
        .row.mb-5.justify-content-center(data-aos="zoom-out")          
          .col-lg-4.d-flex.align-items-center            
              p.mb-0  Las empresas dedicadas al marketing verde permanentemente tipifiquen o realicen procesos de segmentación para orientar sus productos hacia nuevos mercados, que amplíen su base de clientes, y generen mayores ingresos. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img08.svg')
        p.mb-5 Los clientes también desempeñan un papel demasiado importante y son quienes a través del consumo responsable dan forma a la legislación y normatividad ambiental, han sido realmente los generadores de una verdadera conciencia del consumo enfocada en el cuidado del entorno ambiental y social.
        .row.mb-5.justify-content-center(data-aos="zoom-out")                   
          .col-lg-9
            figure
              img(src='@/assets/curso/tema5/img09.svg')
        p Para ellos la gran influencia de la tecnología, los aspectos sociales, como la moda, por ejemplo, la comunicación o publicidad son fundamentales para determinar e influenciar constantemente en sus gustos o preferencias. 
      .py-4.py-md-5(titulo="Los competidores" :icono="require('@/assets/curso/tema5/img04.svg')")
        p.mb-5 Para las economías verdes en proceso de consolidación, los competidores son agentes fundamentales en el proceso de innovación de productos¸ competitividad organizacional, las utilidades, la satisfacción de los clientes y del desarrollo de la industria. De acuerdo con Baena (2011). “Toda compañía que desee tener éxito debe proporcionar mayor valor y satisfacción a sus clientes que el resto de sus competidores”; y para lograrlo se debe tener presente la estructura competitiva de la industria compuesta por las cinco fuerzas de Porter:
        
        .row.mb-5.justify-content-center(data-aos="zoom-out")          
          .col-lg-5
            div.mb-2.p-2(style="background-color: #4372C3; border-radius:5px")
              p.text-center.mb-0(style="color:white") Intensidad en la rivalidad de competidores actuales.
            div.mb-2.p-2(style="background-color: #43AEBD; border-radius:5px")
              p.text-center.mb-0(style="color:white") Capacidad de negociación de los proveedores.
            div.mb-2.p-2(style="background-color: #44B78C; border-radius:5px")
              p.text-center.mb-0(style="color:white") Amenaza de productos sustitutos.
            div.mb-2.p-2(style="background-color: #45B150; border-radius:5px")
              p.text-center.mb-0(style="color:white") Grado de rivalidad entre los competidores de la industria.
            div.mb-2.p-2(style="background-color: #6FAA47; border-radius:5px")
              p.text-center.mb-0(style="color:white") Capacidad de negociación con los clientes.


        Los competidores son grandes referentes e influenciadores empresariales en buenas prácticas de manufactura, se preparan e invierten para obtener certificaciones y para implementar acciones que fortalezcan la legislación y normatividad.
      .py-4.py-md-5(titulo="Los grupos de interés" :icono="require('@/assets/curso/tema5/img05.svg')")
        p.mb-5 Son aquellos grupos de personas o comunidades que se benefician de las operaciones empresariales o que estarían dispuestas a contribuir con el bienestar económico de la organización y con el logro de los diferentes objetivos. Son vitales para el marketing verde por el alto grado de relacionamiento que presentan con la organización. Además, podrían ser consumidores actuales o potenciales de la empresa. 
        .row.mb-5.justify-content-center                 
          .col-lg-8
            figure(data-aos="flip-right")  
              img(src='@/assets/curso/tema5/img10.svg')

</template>

<script>
export default {
  name: 'Tema5',
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
