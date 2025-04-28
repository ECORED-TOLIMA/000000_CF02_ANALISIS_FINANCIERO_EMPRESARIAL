export default {
  global: {
    componenteFormativo: 'Cálculo e interpretación de indicadores financieros',
    descripcionCurso:
      'Este componente formativo busca que el aprendiz, comprenda, calcule e interprete los principales indicadores financieros que permiten evaluar la situación económica de una empresa. A través de ejemplos prácticos, se facilitará la aplicación de los conceptos en contextos reales que apoyen la toma de decisiones estratégicas. El enfoque será didáctico y aplicado, con cifras inventadas pero representativas del entorno empresarial colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Conceptos generales de los indicadores financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Indicadores de liquidez',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores de endeudamiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores de eficiencia y gestión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Indicadores de rentabilidad',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'La aplicación de los indicadores financieros en la toma de decisiones',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: '1. Conceptos generales de los indicadores financieros',
      referencia:
        'Toala Zavala, C. F. (2022). Análisis financiero y su relevancia en la toma de decisiones en las PYMES. Revista UNESUM-Ciencias, 7(2), 170-176.',
      tipo: 'Articulo',
      link:
        'https://pdfs.semanticscholar.org/dbb4/aee964c5afcca718a5476eb6a7bbe5f8d60c.pdf',
    },
    {
      tema:
        '2. La aplicación de los indicadores financieros en la toma de decisiones',
      referencia:
        'Molina, Oña, & Typan. (2023). Indicadores financieros y su influencia en la toma de decisiones del Supermercado Open 24 & 7, Portoviejo. Manabí. Revista FIPCAEC, 8(2), 895-918.',
      tipo: 'Articulo',
      link: 'https://www.fipcaec.com/index.php/fipcaec/article/view/770/1393',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'proceso de evaluación de la situación económica y financiera de una empresa, mediante el estudio de sus estados financieros.',
    },
    {
      termino: 'Capital de trabajo',
      significado:
        'diferencia entre los activos corrientes y los pasivos corrientes, que indica la capacidad de la empresa para operar eficientemente.',
    },
    {
      termino: 'Endeudamiento',
      significado:
        'grado en que una empresa utiliza recursos financieros de terceros, para financiar sus operaciones.',
    },
    {
      termino: 'Indicadores financieros',
      significado:
        'relaciones matemáticas entre cuentas contables, que permiten medir aspectos clave del desempeño económico de la empresa.',
    },
    {
      termino: 'Liquidez',
      significado:
        'capacidad de una empresa para cumplir sus obligaciones a corto plazo, con los recursos que tiene disponibles.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'capacidad de una empresa para generar utilidades en relación con los recursos utilizados.',
    },
    {
      termino: 'Prueba ácida',
      significado:
        'indicador de liquidez que excluye inventarios del cálculo para mostrar la capacidad inmediata de pago.',
    },
  ],
  referencias: [
    {
      referencia:
        'Coral Delgado, L. C. & Gudiño Dávila, E. L. (2014). Contabilidad universitaria. (7ª Edición). Bogotá, Colombia: Editorial. Mc Graw Hill.',
    },
    {
      referencia:
        'Díaz, H. (2006). Contabilidad general. (2ª Edición). México DF, México: Editorial. Pearson Prentice Hall.',
    },
    {
      referencia:
        'García, O. L. (2009). Administración financiera: Fundamentos y aplicaciones. (4ª Edición). Bogotá, Colombia: Editorial. Desconocida.',
    },
    {
      referencia:
        'Ortiz Anaya, H. (2011). Análisis financiero aplicado y principios de administración financiera. (14ª Edición). Bogotá, Colombia: Editorial. Universidad Externado de Colombia.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Ernesto Mariño Puentes',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
