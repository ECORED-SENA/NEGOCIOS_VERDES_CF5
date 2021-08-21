export default {
  global: {
    componenteFormativo: 'Diagnóstico del plan comercial',
    descripcionCurso:
      'La planeación comercial es un proceso del mercadeo donde a través del análisis situacional y diagnóstico de las variables del macro y microentorno de la empresa se trazan los objetivos en marketing y ventas. La organización, las actividades de control, la disciplina operativa y la articulación con las demás áreas son la clave para la ejecución del plan y alcanzar los objetivos de la misión y visión. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planeación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Principios de la planeación comercial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas de la planeación comercial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis situacional',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diagnóstico empresarial',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Macroentorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Factores económicos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Factores políticos y legales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Factores demográficos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Factores sociales y culturales',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Factores tecnológicos y ambientales',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Microentorno',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plataforma estratégica',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Sistemas de información en biocomercio y negocios verdes',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'La competencia',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '10.1',
            titulo: 'Niveles de segmentación de mercados',
            hash: 't_10_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '10.2',
            titulo: 'Criterios para la realizar segmentación de mercados ',
            hash: 't_10_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Baena, G. V. (2011). Fundamentos de marketing: entorno, consumidor, estrategia e investigación comercial. Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/33480',
    },
    {
      referencia:
        'Bertalanffy, L. V. (1976). General System theory: Foundations, Development, Applications. George Braziller.',
    },
    {
      referencia:
        'Cobarsi, B. (2011). Sistemas de información en la empresa. Editorial UOC. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/33493',
    },
    {
      referencia: 'Erickson, B. (2010). Ventas. Biblioteca de aula. UNESCO. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/36393',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Programa Nacional de Biocomercio Sostenible (2014-2024). Ministerio de Ambiente y Desarrollo Sostenible.  ',
      link:
        'https://www.minambiente.gov.co/index.php/negocios-verdes-y-sostenibles/negocios-verdes/que-son-los-negocios-verdeshttps://www.minambiente.gov.co/index.php/negocios-verdes-y-sostenibles/negocios-verdes/que-son-los-negocios-verdes',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). Política Nacional de Producción y Consumo. Ministerio de Ambiente, Vivienda y Desarrollo Territorial.  ',
      link:
        'https://www.icesi.edu.co/blogs/pycs/files/2011/09/Pol%C3%ADtica-de-PyCS-FINAL.pdf',
    },
    {
      referencia:
        'Monferrer, D. (2013). Fundamentos de marketing. Universitat Jaume. ',
      link:
        'http://repositori.uji.es/xmlui/bitstream/handle/10234/49394/s74.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2005). Decreto 1220, abril 21 de 2005, por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales. ',
      link:
        'https://cda.gov.co/apc-aa-files/64313463346136383731653464623265/dec_1220_2005.pdf  ',
    },
    {
      referencia:
        'Taylor, F. (1911). The Principles of Scientific Management. Harper & Brothers.',
    },
  ],
  glosario: [
    {
      termino: 'Biocomercio',
      significado:
        'conjunto de actividades de recolección, producción, procesamiento o comercialización de bienes y servicios derivados de la biodiversidad nativa, bajo criterios de sostenibilidad ambiental, social y económica.',
    },
    {
      termino: 'Competencia',
      significado:
        'conjunto de organizaciones que compiten entre sí en la misma categoría por el liderazgo de la industria.',
    },
    {
      termino: 'Crecimiento verde',
      significado:
        'hace referencia al fomento del crecimiento y desarrollo económico, garantizando la continuidad de los recursos y servicios ambientales de los cuales depende nuestro bienestar.',
    },
    {
      termino: 'Demanda',
      significado:
        'cantidad de bienes y servicios que son adquiridos por los consumidores.',
    },
    {
      termino: 'Desarrollo limpio',
      significado:
        'el Mecanismo de Desarrollo Limpio (MDL) es un mecanismo cooperativo establecido bajo el Protocolo de Kyoto, el cual tiene el potencial de ayudar a los países en desarrollo a alcanzar un desarrollo sostenible mediante la promoción de inversiones ambientalmente amigables por parte de gobiernos o empresas de los países industrializados.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'el desarrollo sostenible se define como el desarrollo que satisface las necesidades actuales sin comprometer los recursos y posibilidades de las generaciones futuras.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'principio organizador que busca satisfacer las necesidades actuales sin comprometer los recursos disponibles de las generaciones futuras.',
    },
    {
      termino: 'Economía verde',
      significado:
        'es un sistema de actividades económicas relacionadas con la producción, distribución y consumo de bienes y servicios que resulta en mejoras del bienestar humano en el largo plazo, sin, al mismo tiempo, exponer a las generaciones futuras a riesgos ambientales y escasez ecológicas significativas.',
    },
    {
      termino: 'Empresa',
      significado:
        'organismo, institución dedicada a la generación de beneficios sociales, económicos, culturales o medioambientales.',
    },
    {
      termino: 'Oferta',
      significado:
        'cantidad de bienes y servicios que están dispuestos para la venta.',
    },
    {
      termino: 'Segmentación de mercados',
      significado:
        'segmentar es diferenciar el mercado total de un producto o servicio en grupos diferentes de consumidores, homogéneos entre sí y diferentes a los demás, en cuanto a hábitos, necesidades y gustos, que podrían requerir productos o combinaciones de marketing diferentes. ',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2014). Plan Nacional de Negocios Verdes. Ministerio de Ambiente y Desarrollo Sostenible',
      tipo: 'PDF',
      descarga: '/downloads/Plan_Nacional_de_Negocios_Verdes.pdf',
    },
    {
      texto:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2010). Política Nacional de Producción y Consumo. Ministerio de Ambiente, Vivienda y Desarrollo Territorial. ',
      tipo: 'PDF',
      descarga: '/downloads/Política-de-PyCS-FINAL.pdf',
    },
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
