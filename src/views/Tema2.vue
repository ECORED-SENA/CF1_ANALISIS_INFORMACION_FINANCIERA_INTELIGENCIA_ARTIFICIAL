<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Normativa financiera y protección de datos
      p(data-aos="fade-left") La normativa financiera y la protección de datos orientan el uso técnico, legal y responsable de la IA en los procesos contables. Este tema se desarrolla desde dos ámbitos complementarios:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #491a6d;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_1.svg', alt='' style="width:100px").m-auto
            h4.text-white Tratamiento financiero
            p.text-white La IA puede procesar información, proponer clasificaciones y generar hallazgos preliminares. Sin embargo, no reemplaza los criterios técnicos aplicables a los hechos económicos (Ley 1314, 2009).
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #b8d1d8;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta01_2.svg', style="width:100px").m-auto
            h4.card-title.mb-2 Protección de información
            p Los documentos financieros pueden contener datos personales, comerciales o bancarios. Su tratamiento exige finalidad definida, autorización, seguridad y confidencialidad (Ley 1581, 2012).
          //- Fin Tarjetas
      p(data-aos="fade-left") Ambos ámbitos establecen límites para aprovechar la IA sin perder el control normativo, la protección de la información ni la responsabilidad profesional.
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Normativa de información financiera nacional e internacional
      //- Pestanas verticales
      .row.align-items-center.mb-5
        .col-lg-8.mb-4.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.bg-color-9.p-5(titulo="2009. Ley 1314")
              h4 2009. Ley 1314
              p Regula los principios y normas de contabilidad, información financiera y aseguramiento aceptados en Colombia. Permite validar que la información procesada mediante IA respete criterios contables y financieros (Ley 1314, 2009).
            .tarjeta.bg-color-9.p-5(titulo="2012. Ley 1581")
              h4 2012. Ley 1581
              p Establece disposiciones generales para proteger los datos personales. Exige cuidado con la información incluida en documentos contables y financieros (Ley 1581, 2012).
            .tarjeta.bg-color-9.p-5(titulo="2015. Decreto 2420")
              h4 2015. Decreto 2420
              p Compila el marco técnico normativo de contabilidad, información financiera y aseguramiento. Orienta la revisión de registros y clasificaciones según el grupo normativo aplicable (Decreto 2420, 2015).
            .tarjeta.bg-color-9.p-5(titulo="2019. CONPES 3975")
              h4 2019. CONPES 3975
              p Formula la Política Nacional para la Transformación Digital e Inteligencia Artificial. Contextualiza la automatización y digitalización de procesos productivos y financieros (DNP, 2019).
            .tarjeta.bg-color-9.p-5(titulo="2025. CONPES 4144")
              h4 2025. CONPES 4144
              p Establece la Política Nacional de Inteligencia Artificial. Orienta su uso ético, seguro, sostenible y responsable, con énfasis en gobernanza de datos y gestión de riesgos (CONPES 4144, 2025).
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='', style="width:600px").m-auto
      //- Pestanas verticales
      p(data-aos="fade-left") Además del marco normativo nacional, el uso responsable de la IA financiera se orienta mediante referentes internacionales y controles internos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Normas Internacionales de Información Financiera (NIIF)
                p Promueven criterios internacionales de reconocimiento, medición, presentación y revelación. Permiten contrastar los resultados de la IA con el marco técnico aplicable (Fundación IFRS, s. f.).                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Principios de IA de la Organización para la Cooperación y el Desarrollo Económicos (OCDE)
                p Orientan el desarrollo y uso de sistemas confiables, transparentes, seguros y sujetos a supervisión humana (OCDE, s. f.).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta02_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Controles organizacionales
                p Establecen procedimientos internos de registro, validación, seguridad y control para comprobar los resultados antes de incorporarlos al proceso financiero.
      //- Fin Slideshow
      p(data-aos="fade-left") La normativa nacional, los referentes internacionales y los controles internos permiten utilizar IA sin perder el control técnico, documental y profesional del proceso financiero.
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Concepto, objetivos y estructura de la normativa financiera
      p(data-aos="fade-left") La normativa financiera orienta el tratamiento técnico de los hechos económicos y favorece la preparación de información útil, verificable y coherente.
      p(data-aos="fade-right") Para comprender su aplicación en procesos apoyados por IA, sus elementos se organizan en cuatro componentes relacionados:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            //- Slide 1
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Concepto y función
                p.mb-0 La normativa financiera reúne principios, normas, marcos técnicos, políticas y procedimientos que regulan el reconocimiento, la medición, la presentación, la revelación y el control de los hechos económicos. Su aplicación evita que los registros dependan de criterios improvisados (Ley 1314, 2009).
            //- Slide 2
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Objetivos
                p La normativa busca que la información financiera cumpla las siguientes condiciones:
                ul.lista-ul.color-vinotinto-custom.mb-3
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Utilidad:</b> facilita la toma de decisiones.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Comprensibilidad:</b> permite interpretar la información con claridad.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Comparabilidad:</b> posibilita contrastar periodos, entidades o informes.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Verificabilidad:</b> exige soportes, registros y evidencias.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Oportunidad:</b> garantiza disponibilidad en el momento requerido.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Coherencia:</b> mantiene correspondencia con la realidad económica.
                p.mb-0 En procesos apoyados por IA, estos objetivos permiten evaluar la pertinencia y confiabilidad de los resultados obtenidos.
            //- Slide 3
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Estructura normativa
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Marco legal general:</b> establece las disposiciones superiores sobre contabilidad, información financiera y aseguramiento.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Marcos técnicos normativos:</b> determinan criterios de reconocimiento, medición, presentación y revelación.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Políticas contables internas:</b> adaptan la normativa a las operaciones de cada organización.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Procedimientos y controles:</b> definen responsables, revisiones, aprobaciones, soportes y evidencias.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Marco conceptual:</b> orienta la preparación y presentación de la información financiera.
            //- Slide 4
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta03_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protección de datos y aplicación de IA
                p El tratamiento de información financiera con IA exige comprobar la autorización, la finalidad, la necesidad de los datos, la seguridad, la confidencialidad y el acceso restringido. Cuando sea necesario, los datos personales deben anonimizarse antes de incorporarlos a una herramienta tecnológica (Ley 1581, 2012).
                p.mb-0 La IA puede apoyar la extracción de datos, la clasificación, la interpretación preliminar y la identificación de alertas. Sin embargo, sus resultados requieren validación humana, trazabilidad documental y correspondencia con la normativa aplicable.
      //- Fin Slideshow
      p(data-aos="fade-left") La normativa financiera integra disposiciones legales, criterios técnicos, políticas internas, controles y protección de datos para orientar un uso responsable y verificable de la IA.
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Reconocimiento y medición de hechos económicos
      p(data-aos="fade-left") El reconocimiento determina si una operación debe incorporarse en la información financiera, mientras que la medición establece el valor monetario que la representa adecuadamente. 
      p(data-aos="fade-left") Para aplicar estos procesos con criterios técnicos y validar los resultados generados por IA, se desarrolla la siguiente secuencia:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
          //- Linea de tiempo
          .row.justify-content-center
            .col-lg-10
              PasosA.color-acento-contenido.mb-4(tipo="n")
                //- PASO 1
                .row.align-items-center
                  .col-12.col-lg
                    h4 Confirmar la existencia del hecho económico
                    p Se determina si la operación ocurrió realmente, afecta los recursos, las obligaciones, los ingresos, los gastos o el patrimonio y cuenta con información suficiente.
                  .col-12.col-lg-auto.mt-3.mt-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_1.svg', alt='').img125
                //- PASO 2
                .row.align-items-center
                  .col-12.col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_2.svg', alt='').img125
                  .col-12.col-lg.text-start
                    h4 Verificar el soporte documental
                    p Se comprueba la existencia, validez, integridad y relación de facturas, contratos, comprobantes, extractos bancarios u otros documentos con la operación económica.
                //- PASO 3
                .row.align-items-center
                  .col-12.col-lg
                    h4 Evaluar el reconocimiento
                    p Se establece si la operación cumple las condiciones técnicas para incorporarse en la información financiera. No toda actividad administrativa o comercial debe reconocerse contablemente (Fundación IFRS, s. f.).
                  .col-12.col-lg-auto.mt-3.mt-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_3.svg', alt='').img125
                //- PASO 4
                .row.align-items-center
                  .col-12.col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_4.svg', alt='').img125
                  .col-12.col-lg.text-start
                    h4 Establecer la medición
                    p Se asigna un valor monetario sustentado en precios de adquisición, contratos, comprobantes, avalúos, costos, valores presentes o criterios definidos por el marco técnico aplicable. La medición no consiste únicamente en copiar el valor de un documento.
                //- PASO 5
                .row.align-items-center
                  .col-12.col-lg
                    h4 Definir la clasificación y el periodo
                    p Se determina si el hecho corresponde a un gasto, costo, activo, pasivo, ingreso, cuenta por pagar o cuenta por cobrar. También se establece el periodo de reconocimiento y la política contable aplicable.
                  .col-12.col-lg-auto.mt-3.mt-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_5.svg', alt='').img125
                //- PASO 6
                .row.align-items-center
                  .col-12.col-lg-auto.mb-3.mb-lg-0
                    figure
                      img(src='@/assets/curso/temas/t2/tarjeta04_6.svg', alt='').img125
                  .col-12.col-lg.text-start
                    h4 Validar el resultado generado por IA
                    p La IA puede extraer fechas, valores, impuestos, terceros y conceptos; además, puede sugerir clasificaciones o señalar inconsistencias. Sin embargo, el resultado debe contrastarse con la normativa, los soportes, el contexto de la operación y el criterio profesional (Ley 1314, 2009; Decreto 2420, 2015).
          //- Fin Linea de tiempo
      p(data-aos="fade-right") Para integrar el reconocimiento, la medición, la clasificación y la validación profesional, se plantea el siguiente caso:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Caso aplicado: compra de un computador
          p Una herramienta de IA procesa una factura por $ 3.800.000 correspondiente a la compra de un computador y extrae proveedor, fecha, valor antes de impuestos, IVA y total. También sugiere clasificar la operación como gasto tecnológico.
          p Antes de aceptar el resultado, la persona responsable debe establecer si el computador corresponde a un gasto, activo fijo, equipo de cómputo o inventario, considerando su destinación, vida útil, materialidad y política contable. Asimismo, debe verificar la base de medición, los impuestos, las condiciones de adquisición y el soporte original.
      p(data-aos="fade-left") El reconocimiento y la medición convierten una operación económica en información financiera verificable. La IA facilita el tratamiento inicial, pero la decisión requiere validación humana y normativa.
      Separador
      //- Inicio Tema2.4
      .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Protección de datos aplicada a información financiera
      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t2/img2.png', alt='', style="width: 100%; max-width: 350px;")
        .col-12.col-lg-8.order-2.order-lg-1.bg-color-5.p-4(data-aos="fade-left")
          p La protección de datos regula el tratamiento autorizado, seguro y confidencial de la información personal y financiera utilizada en procesos apoyados por IA.
          p.mb-0 La protección de la información financiera parte de principios y derechos que delimitan su tratamiento en entornos tecnológicos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Autorización y finalidad
                p Los datos personales solo deben utilizarse con autorización y para un propósito específico, legítimo y previamente definido (Ley 1581, 2012).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Necesidad y transparencia
                p La información recolectada debe ser indispensable para el análisis. Además, el titular debe conocer la finalidad y las condiciones de su tratamiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Confidencialidad y seguridad
                p Los datos deben protegerse frente a pérdidas, alteraciones, accesos no autorizados, divulgación o uso indebido mediante controles institucionales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta05_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Anonimización y habeas data
                p Los datos identificables deben ocultables cuando sea posible. La información financiera, crediticia y comercial requiere protección especial (Ley 1266, 2008).
      //- Fin Slideshow
      p(data-aos="fade-left") La aplicación de estos principios comprende acciones específicas en cada momento del tratamiento de la información financiera:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  //- PASO 1
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Antes del procesamiento
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Verificar la autorización y la finalidad.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Definir quién es responsable del tratamiento.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Seleccionar únicamente los datos necesarios.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Anonimizar identificaciones o cuentas bancarias.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Confirmar que la herramienta esté autorizada.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta06_1.png', alt='').img125
                  //- PASO 2
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta06_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Durante el procesamiento
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Restringir el acceso a personas autorizadas.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Aplicar controles de seguridad y confidencialidad.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Mantener trazabilidad sobre los datos utilizados.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Emplear información pertinente y proporcional.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Evitar reutilizaciones no autorizadas (Circular Externa 002, 2024).
                  //- PASO 3
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Después del procesamiento
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Validar los resultados mediante intervención humana.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Conservar únicamente los soportes necesarios.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Proteger los resultados generados.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Eliminar archivos temporales y copias innecesarias.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Registrar las actuaciones del responsable y del encargado (Decreto 1377, 2013).
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta06_3.png', alt='').img125
            //- Fin Linea de tiempo
      p(data-aos="fade-left") La protección de datos acompaña todo el proceso con IA, desde la selección de la información hasta la validación, conservación o eliminación de los resultados.
      Separador
      //- Inicio Tema2.5
      .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Acceso, seguridad y confidencialidad de la información
      p(data-aos="fade-left") La información financiera requiere controles que regulen su consulta, protección y utilización durante los procesos apoyados por inteligencia artificial.
      p(data-aos="fade-right") Para diferenciar las condiciones que orientan su tratamiento responsable, se presentan tres conceptos fundamentales:
        //- Inicio Tarjetas
        .row.justify-content-center(data-aos="fade-right")
          .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
            .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
              figure.mb-0
                img(src='@/assets/curso/temas/t2/tarjeta07_1.png').w-100
              .p-4
                h4.card-title.text-center.mb-4 Acceso
                p.mb-0 Corresponde a la autorización otorgada a una persona, área, sistema o herramienta para consultar, utilizar, modificar, descargar o compartir información. Debe limitarse según la función y la necesidad del proceso (Ley 1581, 2012).
          .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
            .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
              figure.mb-0
                img(src='@/assets/curso/temas/t2/tarjeta07_2.png').w-100
              .p-4
                h4.card-title.text-center.mb-4 Seguridad
                p.mb-0 Comprende medidas administrativas, técnicas y tecnológicas para prevenir pérdida, alteración, divulgación, destrucción o consulta no autorizada. Incluye permisos, plataformas institucionales, control de versiones y trazabilidad (MinTIC, 2025).
          .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
            .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
              figure.mb-0
                img(src='@/assets/curso/temas/t2/tarjeta07_3.png').w-100
              .p-4
                h4.card-title.text-center.mb-4 Confidencialidad
                p.mb-0 Exige que la información sea utilizada únicamente por personas autorizadas y para la finalidad definida. En procesos con IA, requiere controlar los datos cargados, la plataforma empleada y la circulación de los resultados (Superintendencia de Industria y Comercio, 2024).
        //- Fin Tarjetas
      p(data-aos="fade-left") La aplicación conjunta del acceso, la seguridad y la confidencialidad comprende los siguientes controles durante el tratamiento de la información:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Autorizar el acceso
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Definir quién puede utilizar la información.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Asignar permisos según el rol y la responsabilidad.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Establecer la finalidad contable o financiera.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta08_1.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta08_2.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Preparar los datos
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Seleccionar únicamente la información necesaria.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Excluir datos personales que no sean indispensables.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Reemplazar identificaciones o cuentas por códigos.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Verificar que la plataforma esté autorizada.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Proteger el procesamiento
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Aplicar permisos de consulta, edición o descarga.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Utilizar contraseñas y carpetas protegidas.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Evitar canales personales o plataformas no validadas.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Mantener la confidencialidad de documentos y resultados (Decreto 1377, 2013).
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta08_3.png', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta08_4.png', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Registrar y validar
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Conservar evidencia de accesos y modificaciones.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Registrar las cargas y los resultados generados.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Contrastar alertas y clasificaciones con los soportes.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Exigir validación humana antes de utilizar los resultados.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Conservar o eliminar
                      ul.lista-ul.color-vinotinto-custom.mb-3
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Guardar los archivos necesarios en espacios autorizados.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Mantener permisos y respaldos institucionales.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Eliminar descargas, copias y archivos temporales.
                        li.d-flex
                          .fas.fa-check-circle.me-3
                          span Conservar únicamente la información que mantenga una finalidad vigente.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t2/tarjeta08_5.png', alt='').img125
            //- Fin Linea de tiempo
      p.mb-5(data-aos="fade-left") A continuación, se presenta un ejemplo:
      .row.justify-content-center.mb-5(data-aos="fade-right") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Estos controles se integran en una situación financiera que requiere limitar los datos y comprobar los resultados generados:
          p Para identificar pagos duplicados, una organización entrega a una herramienta autorizada códigos de proveedor, números de factura, fechas y valores. No incorpora cuentas bancarias, direcciones ni datos de contacto porque no son necesarios. Las alertas generadas se contrastan con facturas y extractos antes de registrarse o compartirse.
      p(data-aos="fade-left") El acceso, la seguridad y la confidencialidad permiten utilizar información financiera con responsabilidad, limitar riesgos y mantener el control humano sobre los resultados de la IA.
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

<style lang="sass"></style>
