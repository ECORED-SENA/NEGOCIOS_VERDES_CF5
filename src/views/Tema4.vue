<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1  Macroentorno

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos="zoom-in")  
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La organización se ve impactada a diario por el desempeño de variables o fuerzas externas a ella, de las cuales depende en gran medida el comportamiento interno de la organización, la viabilidad, la construcción de modelos de negocios, planes de mercadeo y la planeación comercial. Las empresas dedicadas al modelo de negocios verdes han encontrado en gran medida un aliado en el macroentorno de la organización para el desarrollo y crecimiento sostenible. 

    Separador

    #t_4_1.titulo-segundo
      h2 4.1 Factores económicos

    p.mb-4 Prever y proyectar el comportamiento de los factores económicos como la inflación que incide en el aumento de los precios o el desempleo, afecta la capacidad adquisitiva de las personas y, por ende, el consumo. Asimismo, la variación de la tasa de cambio o variaciones de las tasas de intereses del banco emisor, en el caso de empresas que importen, exporten o tienen deudas con el sistema financiero, se requiere que hagan monitoreo permanente al comportamiento de estas variables. Esto es esencial, especialmente, para las empresas y para mercados en consolidación, como el sector de la economía verde, por tratarse de sectores en busca de un desarrollo sostenible. 
    p.mb-5 Baena (2011), frente a las fuerzas económicas explica que: el efecto de la economía de un país sobre la oferta y la demanda puede afectar al éxito o fracaso de una empresa, al incidir, fundamental, en tres variables:

    .row
      .col-lg-4.t4.div1.d-flex(data-aos="fade-right")  
        div        
          p.my-4.text-center <b>Poder adquisitivo</b>
          figure.mb-5
            img(src='@/assets/curso/tema4/img02.svg') 
          p.px-5 La situación económica de un país o determinada región puede tener un efecto importante sobre el beneficio de cualquier empresa. Por ejemplo, en los momentos de crisis económica, desciende la demanda de automóviles o el gasto de ocio. Además, las crisis económicas con llevan un aumento en la tasa de desempleo, lo que a su vez contrae el consumo de los productos que los consumidores no consideran indispensables; tal es el caso de los bienes tecnológicos o el ocio. 
      .col-lg-4.t4.div2.d-flex
        div
          p.my-4.text-center <b>Tipo de cambio</b>
          figure.mb-5(data-aos="zoom-in")  
            img(src='@/assets/curso/tema4/img03.svg')
          p.px-5 Los tipos de cambio de muchas divisas como el euro, el dólar estadounidense o la libra esterlina son variables. Esto significa que pueden tener un impacto directo sobre la rentabilidad de las empresas que realizan actividades en el extranjero (importación o exportación). Por ejemplo, si el tipo de cambio del euro aumenta, cada vez será más costoso exportar los productos fabricados en la zona euro. Por el contrario, ante una depreciación de la moneda, las exportaciones son cada vez más baratas, lo que beneficiaría a las empresas locales.
      .col-lg-4.t4.div3.d-flex(data-aos="fade-left")  
        div
          p.my-4.text-center <b>Tipo de interés</b>
          figure.mb-5
            img(src='@/assets/curso/tema4/img04.svg')
          p.px-5 Cuando el tipo de interés disminuye, aumenta el nivel de endeudamiento de la economía ya que el dinero prestado es más “barato”. De este modo, cuando endeudarse resulta fácil y “barato”, aumenta la demanda de aquellos productos cuyo precio es elevado y que en raras ocasiones se compran al contado. Un ejemplo es la adquisición de vivienda.

    Separador 

    #t_4_2.titulo-segundo
      h2 4.2 Factores políticos y legales

    p.mb-5 Estos factores han venido regulando y garantizando la normatividad de la economía verde y del Plan Nacional de Negocios Verdes (PNNV). Situación que favorece el desarrollo sostenible de las empresas del biocomercio o crecimiento verde, a través del fomento de las políticas de producción limpias y consumo sostenible. 

    .row.mb-5.justify-content-center
      .col-lg-11
        figure
            img(src='@/assets/curso/tema4/img05.svg')

    p.mb-4 Al contrario de empresas de mercados de consumo como los cigarrillos, que por el tipo de producto que comercializan, la normatividad ha afectado el desempeño comercial.
    p En este escenario de interés por la regulación y garantizar el cumplimiento de la normatividad medioambiental parte del Estado, el director de mercadeo y las directivas empresariales de la industria de negocios verdes o del biocomercio deben ejecutar las actividades propias para garantizar al interior de la empresa el cumplimiento de la normatividad y principios de la Política de Producción y Consumo Sostenible, creada e impulsada por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2010). Esto se implementa en todo el proceso de la cadena de valor.

    Separador

    #t_4_3.titulo-segundo
      h2 4.3 Factores demográficos

    p.mb-5 El crecimiento acelerado de la población mundial, sobre todo en países de las denominadas economías emergentes, ha hecho que empresas de todo el mundo pongan sus ojos e intereses comerciales en estos mercados. Por lo que resulta importante estimar no solo el tamaño sino el potencial que proyectan estas regiones para la comercialización. 

    .row.justify-content-center(data-aos="fade-in")  
      .col-lg-12
        .tarjeta-avatar-b
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema4/img06.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-botones
              .p-4            
                p.mb-5 Sucede con variables demográficas como los altos niveles de longevidad de las poblaciones en el mundo, quienes han venido elevando su nivel de ingresos, académico y cultural; además presentan estilos de vida cosmopolitas enfocados al consumo sostenible. Estas características permiten <<b>identificar a estos compradores o clientes como consumidores potenciales en mercados accesibles</b>, factores determinantes para la comercialización y oportunidades de negocio a través del acceso o coberturas nacionales o a través las exportaciones para las empresas dedicadas a los negocios verdes y al biocomercio. 
                p Adicional a esto, se ve la lucha de los países por erradicar la pobreza en el planeta, situación que brinda una mejor distribución de recursos o de riquezas, aspecto que favorece la capacidad adquisitiva de las personas y propician el consumo de bienes o servicios.

    Separador

    #t_4_4.titulo-segundo
      h2 4.4 Factores sociales y culturales

    p.mb-5 Las sociedades modernas se caracterizan por ser cosmopolitas y por presentar altos niveles de migración, aspectos que favorecen la rápida apropiación de otras culturas como:

    .row.mb-5.justify-content-center(data-aos="fade-in")  
      .col-lg-3
        div.t4.div4.py-3
          p.mb-0.text-center <b>Los valores</b>
      .col-lg-3
        div.t4.div4.py-3
          p.mb-0.text-center <b>Los estilos de vida</b>
      .col-lg-3
        div.t4.div4.py-3
          p.mb-0.text-center <b>Los hábitos</b>
      .col-lg-3
        div.t4.div4.py-3
          p.mb-0.text-center <b>Las costumbres</b>

    p.mb-4 Las sociedades tal vez presentan mayores avances frente a temas importantes para las economías verdes como el autocuidado, el consumo responsable de productos más amigables con el entorno y el ser humano.
    p A nivel social se han generado grandes cambios que favorecen las economías verdes, estos se reflejan en la lucha por mejor calidad de vida, por el crecimiento económico bajo la premisa de desarrollo sostenible, el uso de nuevas tecnologías para mejorar niveles de información y comprar bienes o servicios con más comodidad. 

    Separador

    #t_4_5.titulo-segundo
      h2 4.5 Factores tecnológicos y ambientales

    p.mb-5 Los factores tecnológicos y ambientales han facilitado el desarrollo sostenible y la consolidación de la industria de negocios verdes y del biocomercio. Las empresas han invertido en el uso de tecnologías útiles para la producción más limpia y sostenible, al igual que la inversión en tecnología de punta más amigable en los procesos de comunicación, de distribución y comercialización. Procesos que encajan perfectamente dentro del concepto de desarrollo sostenible con el entorno social y medio ambiental.

    .row.mb-5.justify-content-center
        .col-lg-10
          .row.justify-content-center.t4_5_div(data-aos="flip-right")
            .col-lg-3.py-4.px-5
              figure
                img(src='@/assets/curso/tema4/img07.svg')
            .col-lg-9.p-4.d-flex.align-items-center
              p.mb-0 El uso de tecnologías amigables resulta bastante importante y aplicable en los procesos de innovación o desarrollo de productos en el proceso de contabilidad, manejo de inventarios, contacto y seguimiento a clientes; esto en una sociedad donde los avances tecnológicos permiten al consumidor mayor acceso a la información, haciendo que este demande estándares más elevados de servicio.

    p Ambientalmente se puede afirmar que la tecnología y naturaleza están en la lucha por aportar equilibrio, bienestar y riqueza de forma sostenible, conjuntamente en pro de las necesidades y soluciones del mundo actual. La naturaleza siempre ha estado ahí para satisfacer estas necesidades y para garantizar nuestra supervivencia, los avances tecnológicos permiten hoy protegerla y salvaguardar, asegurando así el uso y conservación de los recursos para las futuras generaciones.
</template>

<script>
export default {
  name: 'Tema4',
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
