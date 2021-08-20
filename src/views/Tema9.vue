<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1  La competencia

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-out")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-5    
        p El grupo de organizaciones que, en una misma categoría de productos, presenta una oferta similar buscando la preferencia de los consumidores, liderazgo en la industria y rentabilidad en sus operaciones.

    .row.mb-5.justify-content-center                 
      .col-lg-4
        p Las industrias caracterizadas por grandes cantidades de competidores tienen alto grado de innovación reflejado en su amplio portafolio de productos, diseño y variedad de envases y tamaños, porque llegan a diferentes segmentos de la población. Así mismo, presentan:
      .col-lg-8
        .cajon.color-acento-botones.p-4
          ul.lista-ul--color
            li 
              i.lista-ul__vineta
              | Un alto desempeño en sus sistemas operativos o logísticos.
            li 
              i.lista-ul__vineta
              | Manejan grandes volúmenes en ventas y distribución.  
            li 
              i.lista-ul__vineta
              | Cuentan con un amplio número de canales o medios para hacer llegar sus productos al consumidor final.         
          
    .row.mb-5.justify-content-center                 
      .col-lg-9
        p.mb-4 En la fijación de precios los competidores juegan un papel bien importante, ya que a menos que tengan una propuesta de valor bien marcada como ventaja competitiva; la competencia será una gran limitante a la hora de establecer los precios. Obligando a sus competidores a manejar estrategias similares, clientes con listas de precios y condiciones comerciales preferenciales, como descuentos, amplios periodos de pago o adiciones en productos.
        p Debido a los elevados niveles de competitividad la competencia obliga a realizar enormes inversiones <b>en publicidad, <i>marketing</i> relacional, <i>marketing</i> directo, promociones de ventas vía retención o fidelización de clientes y en sistemas de ventas</b>. A pesar de que la competencia hace parte del microentorno de la organización, para la empresa la variable competencia es compleja de manejar, para efectos de la planeación comercial la competencia es la variable que más requiere monitorear, evaluar y que obliga permanente a reevaluar objetivos, inversión de recursos porque cualquier acción de los competidores impacta en la proyección de ventas o en los resultados finales. La lucha en el mercado con los competidores es por la participación de mercado. 
      .col-lg-3
        figure
            img(src='@/assets/curso/tema9/img02.svg')
        
          
</template>

<script>
export default {
  name: 'Tema9',
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
