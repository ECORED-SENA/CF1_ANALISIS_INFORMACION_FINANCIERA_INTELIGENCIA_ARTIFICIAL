export default {
  global: {
    Name: 'Fundamentos de inteligencia artificial (IA) para hechos económicos',
    Description:
      'El reconocimiento de los hechos económicos, la aplicación de la normativa financiera, la protección de datos y el uso responsable de herramientas de inteligencia artificial permiten preparar información contable y financiera confiable. La recolección de datos, la digitalización de soportes, la selección de herramientas de IA y la formulación de <i>prompts</i> fortalecen la extracción, la validación y la organización inicial de la información financiera, conforme a criterios éticos, técnicos y normativos.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Hechos económicos e información financiera digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de hecho económico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Ocurrencia de hechos económicos en contextos contables y financieros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Relación entre documentos, datos y registros contables',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Recolección de datos contables para herramientas de IA',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Alcance de la IA en la obtención de información financiera',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normativa financiera y protección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Normativa de información financiera nacional e internacional',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Concepto, objetivos y estructura de la normativa financiera',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Reconocimiento y medición de hechos económicos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Protección de datos aplicada a información financiera',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Acceso, seguridad y confidencialidad de la información',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Herramientas tecnológicas financieras e inteligencia artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Herramientas tecnológicas financieras: concepto y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Técnicas de digitalización y captura de información financiera',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estandarización de archivos para análisis con IA',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Firmas electrónicas, almacenamiento y gestión documental financiera',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Principios de inteligencia artificial: conceptos, herramientas y tendencias',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ética, transparencia y riesgos en el uso de IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Implicaciones éticas y legales del uso de IA',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Veracidad, privacidad y responsabilidad en datos financieros',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Transparencia algorítmica, justicia y rendición de cuentas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Sesgos algorítmicos, errores de predicción y dependencia tecnológica',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Controles internos y normativos aplicables al uso de IA financiera',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Ingeniería de <i>prompts</i> para hechos económicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de <i>prompt</i> e ingeniería de <i>prompts</i>',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Delimitación de la necesidad contable o financiera',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Selección de <i>chatbots</i> y herramientas de IA según la necesidad',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Estructuración y ejecución de <i>prompts</i> en aplicativos de IA',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Errores, iteración, validación y archivo de <i>prompts</i> corregidos',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Conjunto de instrucciones que permite a un sistema procesar datos y generar resultados.',
    },
    {
      termino: 'Anonimización',
      significado:
        'Proceso mediante el cual se ocultan o reemplazan datos que identifican a una persona.',
    },
    {
      termino: 'Banderas rojas',
      significado:
        'Señales de alerta que indican posibles errores, inconsistencias o situaciones que requieren revisión.',
    },
    {
      termino: '<i>Chatbot</i>',
      significado:
        'Herramienta de inteligencia artificial que responde instrucciones o preguntas en lenguaje natural.',
    },
    {
      termino: 'Dato financiero',
      significado:
        'Información relacionada con valores, fechas, terceros, pagos, ingresos, gastos o saldos.',
    },
    {
      termino: 'Estandarización de archivos',
      significado:
        'Organización uniforme de documentos y bases de datos para facilitar su consulta, comparación y análisis.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'Proceso de organizar, conservar, proteger y consultar documentos relacionados con operaciones financieras.',
    },
    {
      termino: 'Hecho económico',
      significado:
        'Operación que afecta recursos, obligaciones, ingresos, gastos o patrimonio de una organización.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Tecnología que procesa información para apoyar tareas como clasificación, análisis, alertas o recomendaciones.',
    },
    {
      termino: 'Ingeniería de <i>prompts</i>',
      significado:
        'Técnica para formular instrucciones claras y obtener respuestas útiles de herramientas de inteligencia artificial.',
    },
    {
      termino: 'Medición',
      significado:
        'Asignación de un valor monetario a un hecho económico reconocido.',
    },
    {
      termino: '<i>Prompt</i>',
      significado:
        'Instrucción o solicitud que se entrega a una herramienta de inteligencia artificial.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'Conjunto de medidas para tratar información personal de forma segura, autorizada y confidencial.',
    },
    {
      termino: 'Reconocimiento',
      significado:
        'Proceso para determinar si un hecho económico debe incorporarse en la información financiera.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Evidencia que permite seguir el origen, uso, revisión y validación de la información.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (2015, 17 de febrero). Acuerdo 003 de 2015. Por el cual se establecen lineamientos generales para las entidades del Estado en cuanto a la gestión de documentos electrónicos generados como resultado del uso de medios electrónicos.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=61731',
    },
    {
      referencia:
        'Archivo General de la Nación. (2017). Requisitos mínimos de digitalización.',
      link: 'https://www.archivogeneral.gov.co/el-agn-presenta-el-documento-requisitos-minimos-de-digitalizacion',
    },
    {
      referencia:
        'Archivo General de la Nación. (2018). G.INF.07: Guía para la gestión de documentos y expedientes electrónicos.',
      link: 'https://www.archivogeneral.gov.co/normograma/referentes.php',
    },
    {
      referencia:
        'Congreso de Colombia. (1999, 18 de agosto). Ley 527 de 1999. Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276',
    },
    {
      referencia:
        'Congreso de Colombia. (2008, 31 de diciembre). Ley Estatutaria 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34488',
    },
    {
      referencia:
        'Congreso de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley Estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2019, 8 de noviembre). Documento CONPES 3975: Política nacional para la transformación digital e inteligencia artificial.',
      link: 'https://www.dnp.gov.co/LaEntidad_/subdireccion-general-prospectiva-desarrollo-nacional/direccion-desarrollo-digital/Paginas/Documentos-Conpes.aspx',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025, 14 de febrero). Documento CONPES 4144: Política nacional de inteligencia artificial.',
      link: 'https://www.dnp.gov.co/publicaciones/Planeacion/Paginas/conpes-4144-hoja-de-ruta-colombia-inteligencia-artificial-retos-actuales-transformacion-futura.aspx',
    },
    {
      referencia:
        'International Accounting Standards Board. (2018). Conceptual Framework for Financial Reporting. IFRS Foundation.',
      link: 'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2019). Modelo de requisitos para la gestión de documentos electrónicos.',
      link: 'https://www.mintic.gov.co/portal/715/w3-article-135930.html',
    },
    {
      referencia:
        'OpenAI. (s. f.). <i>Prompt</i> engineering. Recuperado el 1 de septiembre de 2026.',
      link: 'https://developers.openai.com/api/docs/guides/prompt-engineering',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos. (s. f.). Principios de inteligencia artificial de la OCDE. Recuperado el 1 de septiembre de 2026.',
      link: 'https://www.oecd.org/en/topics/ai-principles.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2012, 22 de noviembre). Decreto 2364 de 2012. Por medio del cual se reglamenta el artículo 7 de la Ley 527 de 1999 sobre la firma electrónica.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50583',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013, 27 de junio). Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2023, 1 de agosto). Guía para el oficial de protección de datos personales.',
      link: 'https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/boletin/compartimos-en-esta-edicion-la-publicacion-de-la-guia-para-el-oficial-de-proteccion-de-datos-personales',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2024, 21 de agosto). Circular Externa 002 de 2024. Lineamientos sobre el tratamiento de datos personales en sistemas de inteligencia artificial.',
      link: 'https://sedeelectronica.sic.gov.co/transparencia/normativa/circular-externa-2-de-2024-de-la-superintendencia-de-industria-y-comercio-lineamientos-sobre-el-tratamiento-de-datos',
    },
    {
      referencia:
        'Tabassi, E. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0) (NIST AI 100-1). National Institute of Standards and Technology.',
      link: 'https://doi.org/10.6028/NIST.AI.100-1',
    },
    {
      referencia:
        'UNESCO. (2021, 23 de noviembre). Recomendación sobre la ética de la inteligencia artificial.',
      link: 'https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
