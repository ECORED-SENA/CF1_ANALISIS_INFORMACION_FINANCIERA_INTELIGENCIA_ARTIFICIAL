<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Herramientas tecnológicas financieras e inteligencia artificial
      p(data-aos="fade-left") Las herramientas tecnológicas financieras apoyan el tratamiento inicial de la información mediante procesos organizados, verificables y sujetos a control profesional.
      p(data-aos="fade-right") Como apertura del capítulo, se presenta un panorama general sobre el apoyo de la tecnología y la inteligencia artificial en el tratamiento de la información financiera:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aplicaciones prácticas de las herramientas tecnológicas
                p Las herramientas tecnológicas financieras apoyan tareas como registrar operaciones, almacenar documentos, consultar datos, comparar archivos, generar reportes, identificar diferencias y emitir alertas preliminares sobre situaciones que requieren revisión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Utilidad en actividades cotidianas
                p Su uso se refleja en actividades como descargar facturas electrónicas, organizar extractos bancarios, clasificar gastos, revisar cuentas por cobrar, controlar pagos a proveedores y preparar información para informes financieros.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aporte de la inteligencia artificial
                p La inteligencia artificial puede apoyar la extracción de datos, el resumen de información, la clasificación de conceptos, la detección de posibles inconsistencias, la identificación de patrones, la identificación de alertas y la generación de recomendaciones preliminares.
      //- Fin Slideshow
      p(data-aos="fade-left") Este apoyo tecnológico fortalece el tratamiento inicial de la información financiera, siempre que se cuente con datos organizados, documentos verificables, medidas de seguridad, protección de datos y revisión humana.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Herramientas tecnológicas financieras: concepto y características
      p(data-aos="fade-left") Las herramientas tecnológicas financieras son aplicaciones, sistemas, plataformas o soluciones digitales que apoyan el registro, la organización, la consulta, el procesamiento, el análisis y la conservación de la información contable y financiera.
      p(data-aos="fade-right") En la práctica, estas herramientas no actúan de manera aislada. Su uso articulado facilita el tratamiento de los hechos económicos, la consulta de soportes, la comparación de datos y la generación de alertas preliminares con apoyo de inteligencia artificial.
      p.fw-bold(data-aos="fade-left") Para comprender su función dentro del proceso financiero, se presentan sus aspectos principales:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img1.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="¿Qué son?")
                p.mb-0 Son soluciones digitales que apoyan la gestión de la información financiera desde su registro hasta su conservación.
              .row(titulo="¿Para qué sirven?")
                p.mb-0 Permiten registrar operaciones, organizar documentos, consultar datos, comparar archivos, controlar movimientos y preparar información para reportes o análisis posteriores.
              .row(titulo="¿Cómo se utilizan?")
                p.mb-0 Se integran dentro de una misma ruta de trabajo. Por ejemplo, una factura puede capturarse, almacenarse, registrarse, consolidarse y luego analizarse con apoyo tecnológico.
              .row(titulo="¿Cómo se clasifican?")
                p.mb-0 Pueden clasificarse según la tarea que apoyan: registro, organización documental, consulta, análisis, automatización o trazabilidad.
              .row(titulo="¿Cómo se seleccionan?")
                p.mb-0 La elección depende del volumen de información, la complejidad de las operaciones, la necesidad de control, la frecuencia de uso y el resultado esperado.
      //- Fin Accordion 1
      p.mb-5(data-aos="fade-left") Según la función que cumplen dentro del tratamiento de la información financiera, se presentan algunas herramientas de uso frecuente y ejemplos de aplicación:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3.
            span Herramientas tecnológicas financieras y ejemplos de uso
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Herramienta
                  th(style="width: 25%") ¿Para qué sirve?
                  th(style="width: 30%") Ejemplo práctico
                  th(style="width: 25%") Relación con IA
              tbody
                tr
                  td Sistema contable
                  td Registrar operaciones, generar reportes y consultar saldos.
                  td Registrar compras, ventas, gastos, pagos y cuentas por cobrar.
                  td La IA puede apoyar la revisión de datos exportados del sistema.
                tr
                  td Facturación electrónica
                  td Emitir, recibir y conservar facturas digitales.
                  td Descargar facturas de ventas y compras del mes.
                  td La IA puede extraer fecha, proveedor, valor, IVA y concepto.
                tr
                  td Hoja de cálculo
                  td Organizar, calcular, filtrar y comparar datos.
                  td Elaborar una base de cartera con cliente, factura, vencimiento y saldo.
                  td La IA puede ayudar a clasificar datos o detectar valores atípicos.
                tr
                  td Plataforma bancaria
                  td Consultar movimientos, pagos, consignaciones y saldos.
                  td Descargar extractos para comparar ingresos y egresos.
                  td La IA puede apoyar la identificación de movimientos repetidos o inusuales.
                tr
                  td Gestor documental
                  td Almacenar, clasificar y conservar documentos digitales.
                  td Guardar facturas, contratos, recibos y comprobantes por carpetas.
                  td La IA puede facilitar búsquedas, resúmenes o extracción de datos.
                tr
                  td Herramienta OCR
                  td Convertir imágenes o PDF escaneados en texto editable.
                  td Leer una factura escaneada para extraer datos.
                  td Sirve como paso previo para que la IA procese información textual.
                tr
                  td Tablero de control
                  td Visualizar indicadores, tendencias y resultados.
                  td Ver ventas por mes, gastos por categoría o cartera vencida.
                  td La IA puede apoyar la interpretación inicial de variaciones.
                tr
                  td <i>Chatbot</i> o asistente de IA
                  td Consultar, resumir, clasificar o interpretar información.
                  td Pedir un resumen de gastos del mes o una lista de posibles inconsistencias.
                  td Genera hallazgos preliminares que deben validarse.
                tr
                  td Automatización de procesos
                  td Ejecutar tareas repetitivas bajo reglas definidas.
                  td Renombrar archivos, enviar alertas o consolidar reportes.
                  td Puede integrarse con IA para clasificar o priorizar información.
                tr
                  td Plataforma de firma electrónica
                  td Firmar documentos digitales con trazabilidad.
                  td Firmar contratos, autorizaciones o certificaciones.
                  td Ayuda a conservar evidencia y validar documentos usados en análisis.
      //- FinTabla
      p(data-aos="fade-left") Para contextualizar su aplicación, se presenta una situación práctica en la que se integran diferentes herramientas tecnológicas financieras:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa necesita revisar las cuentas por pagar del mes. Para hacerlo, reúne las facturas de proveedores, los comprobantes de egreso y el extracto bancario. Primero organiza los archivos por fecha y proveedor en una carpeta digital. Luego consolida en una hoja de cálculo los datos principales: número de factura, proveedor, fecha, valor, vencimiento y estado de pago. Después utiliza una herramienta de IA para identificar posibles pagos duplicados, facturas sin comprobante o valores que no coinciden con el extracto.
          p La herramienta de IA puede entregar una lista preliminar de alertas, por ejemplo: dos facturas con el mismo valor y proveedor, un pago registrado sin factura asociada o una factura vencida que no aparece como pagada. Sin embargo, la persona responsable debe revisar cada alerta con los documentos originales antes de tomar decisiones o hacer ajustes contables.
      p(data-aos="fade-left") A partir del ejemplo anterior, el uso articulado de las herramientas tecnológicas financieras puede organizarse mediante la siguiente ruta práctica:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Reunir los documentos
                      p Se recopilan facturas, comprobantes, extractos, reportes y demás soportes necesarios para el análisis.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_1.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_2.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Organizar los archivos
                      p Los documentos se clasifican por fecha, tipo, proveedor, cliente u otro criterio que facilite su consulta.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Extraer los datos relevantes
                      p Se identifican valores, fechas, terceros, conceptos y demás información necesaria para el procesamiento.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_3.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_4.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Consolidar la información
                      p Los datos obtenidos se integran en una hoja de cálculo, sistema contable u otra herramienta de apoyo.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Analizar la información
                      p Se utilizan herramientas tecnológicas o de inteligencia artificial para identificar diferencias, patrones, posibles inconsistencias o alertas preliminares.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_5.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_6.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Validar los resultados
                      p Los hallazgos se contrastan con los documentos originales y los registros disponibles antes de tomar decisiones.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Conservar la evidencia
                      p Se almacenan de manera organizada los documentos, archivos y resultados que respaldan el proceso realizado.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta02_7.svg', alt='').img125
            //- Fin Linea de tiempo
      p(data-aos="fade-left") Las herramientas tecnológicas financieras facilitan la organización, revisión y análisis de la información. Su uso con inteligencia artificial debe complementarse con validación técnica y respaldo documental.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Técnicas de digitalización y captura de información financiera
      p(data-aos="fade-left") La digitalización permite convertir documentos financieros en archivos digitales disponibles para consulta y procesamiento, mientras que la captura permite extraer de ellos los datos necesarios para su análisis.
      p(data-aos="fade-right") Los documentos digitalizados deben conservar condiciones de integridad, origen y disponibilidad, de acuerdo con las disposiciones aplicables sobre mensajes de datos y documentos electrónicos (Ley 527 de 1999).
      p(data-aos="fade-left") Para diferenciar estos procesos, se presentan sus características y su aplicación en el tratamiento de información financiera:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #491a6d;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.svg', alt='', style="width:100px").m-auto
            h4.text-white Reunir los documentos
            p.text-white.mb-3 Consiste en convertir documentos físicos o soportes dispersos en archivos digitales que puedan organizarse, conservarse y procesarse.
            p.text-white.mb-2 #[b Ejemplos:]
            ul.lista-ul.color-vinotinto-custom.text-white.mb-0
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Escanear una factura impresa.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Fotografiar un recibo con condiciones adecuadas.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Descargar una factura electrónica.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Exportar información desde un sistema financiero.
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #b8d1d8;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.svg', alt='', style="width:100px").m-auto
            h4.card-title.mb-2 Captura de información
            p.mb-3 Consiste en extraer los datos necesarios de los documentos digitales para incorporarlos a una base, sistema o herramienta de análisis.
            p.mb-2 #[b Datos frecuentes:]
            ul.lista-ul.color-vinotinto-custom.mb-3
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Fecha.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Número de factura.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Tercero.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Concepto.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Valor e impuestos.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Forma de pago.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Número de cuenta.
              li.d-flex
                i.fas.fa-check-circle.me-3
                span Referencia bancaria.
            p.mb-0 La captura puede realizarse manualmente, mediante hojas de cálculo, OCR, sistemas contables o herramientas apoyadas por inteligencia artificial.
      //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") Según el tipo de documento y la información requerida, pueden aplicarse diferentes técnicas de digitalización y captura:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 4.
            span Técnicas de digitalización y captura de información financiera
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Técnica
                  th(style="width: 25%") ¿En qué consiste?
                  th(style="width: 30%") Ejemplo práctico
                  th(style="width: 25%") Cuidado antes de usar IA
              tbody
                tr
                  td Escaneo de documentos
                  td Convertir documentos físicos en archivos digitales.
                  td Escanear facturas, recibos, contratos o comprobantes.
                  td Verificar que el archivo esté completo, legible y en el orden correcto.
                tr
                  td Fotografía documental
                  td Tomar imagen de un soporte físico cuando no se cuenta con escáner.
                  td Fotografiar un recibo de caja o comprobante de pago.
                  td Evitar sombras, cortes, desenfoque o datos ilegibles.
                tr
                  td Descarga de archivos digitales
                  td Obtener documentos desde plataformas contables, bancarias o comerciales.
                  td Descargar facturas electrónicas, extractos o reportes de ventas.
                  td Guardar archivos originales y evitar modificar soportes sin trazabilidad.
                tr
                  td OCR
                  td Convertir imagen o PDF escaneado en texto que pueda ser leído por una herramienta.
                  td Extraer texto de una factura escaneada.
                  td Revisar errores de lectura en números, fechas, nombres o valores.
                tr
                  td Exportación de datos
                  td Descargar información desde sistemas en formatos como Excel o CSV.
                  td Exportar cartera, ventas, compras o pagos desde un sistema contable.
                  td Revisar columnas, filtros aplicados, fechas y campos incompletos.
                tr
                  td Captura manual controlada
                  td Registrar datos en una plantilla definida.
                  td Digitar número de factura, proveedor, fecha, valor y vencimiento.
                  td Validar doblemente los datos digitados para evitar errores humanos.
                tr
                  td Integración de archivos
                  td Relacionar información proveniente de varias fuentes.
                  td Comparar facturas, comprobantes de egreso y extractos bancarios.
                  td Confirmar que los archivos correspondan al mismo periodo y operación.
                tr
                  td Anonimización previa
                  td Ocultar o reemplazar datos personales antes del análisis.
                  td Cambiar nombres o identificaciones por códigos internos.
                  td Conservar una tabla segura que permita relacionar códigos y documentos originales.
                tr
                  td Clasificación digital
                  td Ordenar archivos por tipo, fecha, tercero o proceso.
                  td Carpeta de compras, ventas, bancos, nómina y cartera.
                  td Evitar mezclar documentos de diferentes periodos o procesos.
                tr
                  td Captura asistida con IA
                  td Solicitar a una herramienta que extraiga datos de un documento o tabla.
                  td Pedir que identifique proveedor, valor, fecha e impuesto en facturas.
                  td Validar los resultados frente al documento original antes de usarlos.
      //- FinTabla
      p(data-aos="fade-left") Antes de procesar la información, deben considerarse dos condiciones que influyen directamente en la confiabilidad de los resultados:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-5(style="border-radius: 25px 0 0 25px; background-color: #491a6d;")
            .row.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_1.svg', alt='', style="width:100px").m-auto
            h4.text-white Calidad de la digitalización
            p.text-white.mb-3 Los documentos deben ser legibles, completos, estar correctamente identificados y conservar relación con el soporte correspondiente. Archivos borrosos, incompletos o mal clasificados pueden generar errores durante la extracción y el análisis de datos.
            p.text-white.mb-0 Como referencia, pueden considerarse criterios archivísticos relacionados con identificación, orden, foliación, clasificación y conservación documental (Archivo General de la Nación, 2018).
        .col-lg-6.col-md-6
          .tarjeta.p-5.h-100.bg-color-6(style="border-radius: 0 25px 25px 0; background-color: #b8d1d8;")
            .row.mb-4
              .col-auto
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta04_2.svg', alt='', style="width:100px").m-auto
            h4.card-title.mb-2 Protección de datos
            p.mb-3 Antes de utilizar herramientas de IA, debe revisarse si los documentos contienen nombres, identificaciones, cuentas bancarias, direcciones u otros datos personales.
            p.mb-0 El tratamiento de esta información debe atender criterios de idoneidad, necesidad, razonabilidad y proporcionalidad (Superintendencia de Industria y Comercio, Circular Externa 002 de 2024).
      //- Fin Tarjetas
      p(data-aos="fade-left") Para contextualizar estas técnicas, se presenta una situación relacionada con la revisión de cuentas por pagar:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Caso:
          p Una empresa necesita identificar posibles pagos duplicados a proveedores. Para ello, descarga los comprobantes de egreso y el extracto bancario, reúne las facturas en PDF y organiza los archivos por proveedor y fecha.
          p Posteriormente, extrae datos como número de factura, valor, fecha de pago y referencia bancaria, los consolida en una hoja de cálculo y utiliza una herramienta de IA para identificar posibles duplicados o diferencias.
          p Los hallazgos obtenidos se consideran preliminares y deben contrastarse con los documentos originales antes de realizar ajustes o tomar decisiones.
      p(data-aos="fade-right") El proceso puede organizarse mediante una ruta que prepare la información antes de utilizar herramientas de inteligencia artificial:
      .row.bg-fondo-2.justify-content-center(data-aos="fade-right")
        .col-10
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Identificar la necesidad
                      p Se define la información financiera que requiere revisión o análisis.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_1.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_2.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Reunir los documentos
                      p Se recopilan facturas, extractos, comprobantes, contratos o reportes relacionados.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Digitalizar o descargar
                      p Los soportes físicos se convierten en archivos digitales o se obtienen desde las plataformas correspondientes.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_3.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_4.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Organizar los archivos
                      p Los documentos se clasifican mediante criterios como fecha, tercero, tipo o periodo.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Extraer los datos
                      p Se identifican fechas, valores, conceptos, terceros y demás información necesaria.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_5.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_6.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Revisar la calidad
                      p Se verifican datos incompletos, duplicados, ilegibles o inconsistentes.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Proteger la información
                      p Se ocultan o restringen los datos personales que no sean necesarios para el análisis.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_7.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_8.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Procesar con IA
                      p La información preparada puede utilizarse para clasificación, comparación, resumen o detección de alertas.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Validar los resultados
                      p Los hallazgos se contrastan con los soportes y registros originales.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_9.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta05_10.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Conservar la evidencia
                      p Se almacenan los archivos, resultados y soportes que permiten mantener la trazabilidad del proceso.
            //- Fin Linea de tiempo
      p(data-aos="fade-left") La calidad del análisis apoyado por inteligencia artificial depende de documentos legibles, datos organizados, protección adecuada de la información y validación de los resultados. Para complementar este proceso, el siguiente video desarrolla la preparación de soportes y datos antes de utilizar herramientas de inteligencia artificial:
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Estandarización de archivos para análisis con IA
      p(data-aos="fade-left") Como apertura del tema, se presenta una visión general sobre la estandarización de archivos y su importancia en procesos apoyados por inteligencia artificial:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="¿Qué es la estandarización?")
                p.mb-0 La estandarización de archivos consiste en organizar documentos y bases de datos financieras con criterios uniformes de nombre, formato, estructura, contenido y ubicación, para facilitar su consulta, comparación y procesamiento.
              .row(titulo="¿Por qué es importante para la IA?")
                p.mb-0 En procesos apoyados por inteligencia artificial, la estandarización permite trabajar con información clara, ordenada y consistente. Esto reduce errores en la extracción, clasificación e interpretación inicial de los datos.
              .row(titulo="¿Cómo se aplica en la práctica?")
                p.mb-0 En una organización, estandarizar implica crear carpetas por periodo o proceso, definir reglas para nombrar archivos y mantener un orden que facilite relacionar documentos, registros y soportes.
              .row(titulo="¿Qué cuidados requiere?")
                p.mb-0 La estandarización también exige bases de datos bien estructuradas, con encabezados claros, fechas en un mismo formato, valores numéricos consistentes, ausencia de duplicados y protección de datos sensibles.
      //- Fin Accordion 1
      p(data-aos="fade-left") De esta manera, la estandarización fortalece la consulta, la trazabilidad, la conservación y el análisis confiable de la información financiera. La estandarización se aplica mediante criterios que permiten mantener los archivos y datos financieros organizados, consistentes y adecuados para su procesamiento:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 5.
            span Criterios para estandarizar archivos financieros antes de usar IA
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Criterio
                  th(style="width: 25%") Aplicación práctica
                  th(style="width: 30%") Ejemplo
                  th(style="width: 25%") Riesgo si no se estandariza
              tbody
                tr
                  td Nombre del archivo
                  td Usar una estructura común para identificar fecha, tipo de documento, tercero y número.
                  td 2026-05-FacturaCompra-ProveedorABC-FV1250.pdf
                  td Dificultad para ubicar soportes o relacionarlos con registros.
                tr
                  td Tipo de archivo
                  td Usar formatos adecuados según la finalidad.
                  td PDF para soportes, Excel o CSV para bases de datos.
                  td Archivos difíciles de procesar o comparar.
                tr
                  td Ubicación
                  td Organizar carpetas por periodo, proceso o tipo de documento.
                  td 2026-05 / Compras / Facturas.
                  td Mezcla de documentos de diferentes periodos o procesos.
                tr
                  td Encabezados de tabla
                  td Usar nombres claros y únicos para cada columna.
                  td Fecha, proveedor, número de factura, valor, IVA, total.
                  td La IA puede interpretar mal los campos.
                tr
                  td Fechas
                  td Utilizar un solo formato en toda la base.
                  td 2026-05-15 o 15/05/2026.
                  td Errores al ordenar, filtrar o comparar periodos.
                tr
                  td Valores
                  td Registrar números sin mezclar texto innecesario.
                  td 1250000 en lugar de “$ 1.250.000 pagado”.
                  td Dificultad para sumar, comparar o detectar variaciones.
                tr
                  td Terceros
                  td Usar nombres o códigos consistentes.
                  td ProveedorABC o código PR-001.
                  td Duplicidad por variaciones en el nombre del tercero.
                tr
                  td Soporte relacionado
                  td Incluir número de factura, comprobante o referencia bancaria.
                  td FV1250, CE034, RB7788.
                  td Falta de trazabilidad entre dato y documento.
                tr
                  td Duplicados
                  td Revisar registros repetidos antes del análisis.
                  td Dos facturas con igual número y proveedor.
                  td Alertas falsas o resultados financieros distorsionados.
                tr
                  td Protección de datos
                  td Ocultar datos personales innecesarios antes de procesar.
                  td Reemplazar cédula por código interno.
                  td Riesgo de exposición de información personal o financiera.
      //- FinTabla
      p(data-aos="fade-left") Para contextualizar estos criterios, se presenta una situación en la que la falta de estandarización dificulta el análisis financiero:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa necesita analizar las ventas, compras y pagos del mes de mayo. Al revisar sus archivos, encuentra facturas guardadas con nombres como “factura proveedor”, “compra mayo”, “documento escaneado” y “pago final”. También tiene una base de Excel con columnas llamadas “cliente”, “nombre cliente”, “tercero” y “comprador”, aunque todas hacen referencia al mismo dato. Si esta información se carga directamente en una herramienta de IA, es probable que la respuesta sea incompleta o confusa.
          p Para corregirlo, la empresa decide estandarizar los archivos. Crea carpetas por periodo y proceso: “2026-05-Ventas”, “2026-05-Compras”, “2026-05-Bancos” y “2026-05-Cartera”. Luego renombra los documentos con una estructura común y depura la base de datos para que todos los registros tengan las mismas columnas: fecha, tercero, documento, concepto, valor antes de impuestos, impuesto, total, estado de pago y soporte. Después de esta organización, la IA puede revisar la información con mayor precisión y generar hallazgos preliminares más útiles.
      p(data-aos="fade-left") La diferencia entre información sin estandarizar y estandarizada puede identificarse en las siguientes situaciones:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 6.
            span Antes y después de estandarizar archivos financieros
          .tabla-a
            table
              thead
                tr
                  th(style="width: 30%") Situación inicial
                  th(style="width: 35%") Ajuste realizado
                  th(style="width: 35%") Resultado para el análisis con IA
              tbody
                tr
                  td Archivos con nombres genéricos como “factura1” o “pago nuevo”.
                  td Se renombran con año, mes, tipo de documento, tercero y número.
                  td La IA y el usuario pueden identificar mejor cada soporte.
                tr
                  td Facturas, extractos y contratos en una misma carpeta.
                  td Se crean carpetas por periodo y tipo de documento.
                  td Se reduce la confusión entre procesos y soportes.
                tr
                  td Fechas escritas como “mayo 5”, “05/05/26” y “2026-05-05”.
                  td Se unifica el formato de fecha.
                  td Se facilita ordenar, filtrar y comparar registros.
                tr
                  td Valores con símbolos, textos y espacios.
                  td Se dejan valores numéricos limpios.
                  td Se pueden sumar, comparar y detectar diferencias.
                tr
                  td Columnas repetidas con nombres distintos.
                  td Se define un único encabezado para cada dato.
                  td La IA interpreta mejor la estructura de la tabla.
                tr
                  td Datos personales completos en la base.
                  td Se reemplazan datos sensibles por códigos internos.
                  td Se reduce el riesgo de exposición de información.
                tr
                  td Registros duplicados sin explicación.
                  td Se identifican y marcan para revisión.
                  td Las alertas generadas por IA son más confiables.
                tr
                  td No existe relación entre tabla y soporte.
                  td Se agrega columna con número de factura o comprobante.
                  td Se mejora la trazabilidad documental del análisis.
      //- FinTabla
      p(data-aos="fade-left") La estandarización de archivos puede organizarse mediante acciones que preparan la información antes de su procesamiento con inteligencia artificial:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Definición del objetivo del análisis")
                p.mb-0 Se determina qué información se necesita revisar, por ejemplo, compras, ventas, cartera o pagos del mes. Esto permite identificar los documentos necesarios.
              .row(titulo="Organización de los documentos")
                p.mb-0 Se crean carpetas por periodo y proceso, por ejemplo: <i>2026-05 / Compras / Facturas.</i> Así, los archivos quedan organizados por tema y fecha.
              .row(titulo="Establecimiento de una regla para nombrar archivos")
                p.mb-0 Se adopta una estructura uniforme, como año-mes-tipo-tercero-número. Esto facilita identificar y ubicar cada documento.
              .row(titulo="Revisión de los formatos de archivo")
                p.mb-0 Se utilizan formatos adecuados según su finalidad, como PDF para soportes y Excel o CSV para bases de datos. Esto facilita su consulta y procesamiento.
              .row(titulo="Limpieza de las bases de datos")
                p.mb-0 Se eliminan celdas combinadas, duplicados y columnas vacías. De esta manera, la información queda más clara para su procesamiento.
              .row(titulo="Unificación de columnas y fechas")
                p.mb-0 Se emplean encabezados y formatos consistentes para datos como fecha, tercero, concepto, valor y estado. Esto facilita comparar registros.
              .row(titulo="Protección de datos personales")
                p.mb-0 Se sustituyen identificaciones u otros datos sensibles por códigos cuando no sean necesarios para el análisis, reduciendo el riesgo de exposición.
              .row(titulo="Relación de los datos con sus soportes")
                p.mb-0 Se incorporan referencias como el número de factura o comprobante para conservar la trazabilidad entre el registro y el documento.
              .row(titulo="Procesamiento de la información con IA")
                p.mb-0 La información organizada puede utilizarse para solicitar clasificaciones, alertas o resúmenes preliminares de hallazgos.
              .row(titulo="Validación de los resultados")
                p.mb-0 Los resultados generados con apoyo de IA se comparan con los soportes originales antes de utilizarlos para la toma de decisiones.
      //- Fin Accordion 1
      p(data-aos="fade-left") La estandarización de archivos favorece resultados más confiables con IA al mantener documentos organizados, datos claros y información sensible protegida
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Firmas electrónicas, almacenamiento y gestión documental financiera
      p(data-aos="fade-left") Las firmas electrónicas, el almacenamiento digital y la gestión documental financiera permiten conservar evidencia de las operaciones realizadas por una organización, facilitar la trazabilidad y mantener los documentos disponibles para posteriores consultas. La Ley 527 de 1999 regula en Colombia aspectos relacionados con los mensajes de datos, el comercio electrónico y las firmas digitales, y establece condiciones para reconocer la validez de la información electrónica (Ley 527, 1999).
      p(data-aos="fade-left") Estos elementos cumplen funciones complementarias dentro de la administración y conservación de la información financiera:
      //- Inicio Tarjetas
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta06_1.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Firma electrónica
              p.mb-3 La firma electrónica permite identificar a una persona y asociarla con la aprobación o aceptación de un documento. En procesos financieros puede utilizarse para aprobar órdenes de pago, contratos, certificaciones o informes.
              p Su aplicación debe permitir identificar al firmante, conservar evidencia y mantener condiciones de confiabilidad durante el proceso (Decreto 2364, 2012).
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta06_2.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Almacenamiento digital
              p.mb-3 El almacenamiento digital consiste en conservar documentos financieros en medios electrónicos de manera organizada, segura y recuperable.
              p Los archivos deben mantenerse con nombres claros, ubicación definida, permisos de acceso, copias de respaldo y relación con el proceso financiero correspondiente.
        .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
          .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
            figure.mb-0
              img(src='@/assets/curso/temas/t3/tarjeta06_3.png').w-100
            .p-4
              h4.card-title.text-center.mb-4 Gestión documental financiera
              p.mb-3 La gestión documental organiza los documentos desde su producción o recepción hasta su consulta, conservación o disposición final.
              p Incluye actividades como clasificar documentos, conformar expedientes, asignar nombres, conservar metadatos, controlar versiones y administrar accesos (Archivo General de la Nación, 2015).
      //- Fin Tarjetas
      p.mb-5(data-aos="fade-left") Dentro de este proceso intervienen diferentes elementos que contribuyen al control, conservación y trazabilidad de la información financiera:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 7.
            span Aplicación práctica de firmas electrónicas, almacenamiento y gestión documental financiera
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Elemento
                  th(style="width: 25%") ¿Para qué sirve?
                  th(style="width: 30%") Ejemplo práctico
                  th(style="width: 25%") Relación con IA
              tbody
                tr
                  td Firma electrónica
                  td Identificar al firmante y asociarlo con la aprobación de un documento.
                  td Aprobación digital de una orden de pago.
                  td Permite verificar quién autorizó el documento analizado.
                tr
                  td Mensaje de datos
                  td Representar información generada, enviada, recibida o almacenada por medios electrónicos.
                  td Contrato, factura o autorización enviada por correo institucional.
                  td Sirve como soporte digital que puede ser procesado o consultado.
                tr
                  td Firma digital
                  td Mecanismo con características técnicas específicas para dar seguridad al documento firmado.
                  td Firma de certificados, contratos o documentos oficiales.
                  td Ayuda a validar autenticidad e integridad del soporte.
                tr
                  td Almacenamiento digital
                  td Guardar documentos en medios electrónicos de forma organizada y recuperable.
                  td Carpeta de facturas, contratos, comprobantes y extractos del mes.
                  td Facilita que la IA consulte documentos completos y bien ubicados.
                tr
                  td Expediente electrónico
                  td Conjunto organizado de documentos relacionados con un proceso.
                  td Expediente de pago a proveedor con factura, contrato, orden y comprobante.
                  td Permite analizar la operación completa y no documentos aislados.
                tr
                  td Metadatos
                  td Datos que describen el documento, como fecha, autor, tipo, versión o proceso.
                  td Fecha de creación, proveedor, número de factura y responsable.
                  td Ayudan a clasificar, buscar y relacionar información.
                tr
                  td Control de versiones
                  td Seguimiento de cambios realizados sobre un documento.
                  td Informe financiero versión 1, revisión y versión final aprobada.
                  td Evita que la IA analice documentos desactualizados.
                tr
                  td Permisos de acceso
                  td Definición de quién puede consultar, editar, descargar o compartir documentos.
                  td Acceso restringido a nómina, cartera o bancos.
                  td Protege información sensible usada en análisis con IA.
                tr
                  td Copia de respaldo
                  td Conservación de una copia segura de documentos importantes.
                  td Respaldo mensual de soportes contables y financieros.
                  td Reduce riesgo de pérdida de evidencia.
                tr
                  td Trazabilidad documental
                  td Registro de la relación entre documentos, responsables y acciones realizadas.
                  td Factura asociada a pago, comprobante y autorización.
                  td Permite validar alertas o hallazgos generados por IA.
      //- FinTabla
      p.mb-5(data-aos="fade-left") La integración de estos elementos puede aplicarse en situaciones habituales de gestión financiera:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa recibe una factura por servicios de mantenimiento. Antes de aprobar el pago, verifica el contrato, confirma la prestación del servicio y autoriza la orden mediante firma electrónica.
          p La factura, el comprobante de egreso, la autorización y el soporte bancario se conservan dentro de un expediente digital con criterios uniformes de identificación. Posteriormente, una herramienta de IA puede apoyar la identificación de posibles pagos duplicados o inconsistencias.
          p Los resultados generados deben validarse con los documentos originales antes de realizar ajustes o tomar decisiones.
      p(data-aos="fade-right") La gestión documental financiera puede organizarse desde la identificación del proceso hasta la conservación de la evidencia generada:
      .row.bg-fondo-2.justify-content-center(data-aos="fade-right")
        .col-10
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Identificar el proceso financiero
                      p Se determina la operación que requiere soporte, como un pago, contrato, nómina, cartera o conciliación.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_1.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_2.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Reunir los soportes
                      p Se recopilan facturas, contratos, órdenes, autorizaciones, comprobantes y extractos relacionados.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Verificar firmas y aprobaciones
                      p Se confirma la evidencia de las personas que autorizaron o aprobaron los documentos.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_3.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_4.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Nombrar los archivos
                      p Se asignan nombres uniformes que faciliten su identificación y ubicación.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Organizar el expediente
                      p Los documentos relacionados con una misma operación se agrupan dentro de una estructura definida.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_5.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_6.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Definir permisos de acceso
                      p Se determina quién puede consultar, modificar o compartir la información.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Conservar metadatos
                      p Se mantienen datos como fecha, tercero, documento, responsable y versión.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_7.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_8.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Procesar con IA
                      p La información organizada puede utilizarse para identificar duplicados, vencimientos, variaciones o posibles inconsistencias.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Validar con documentos originales
                      p Los hallazgos se contrastan con facturas, autorizaciones, contratos y demás soportes.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_9.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_10.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Conservar la evidencia
                      p Se guardan los documentos, resultados y registros que respaldan el proceso realizado.
            //- Fin Linea de tiempo
      p(data-aos="fade-left") La firma electrónica, el almacenamiento y la gestión documental fortalecen la trazabilidad y el respaldo de la información financiera, facilitando análisis con IA sustentados en documentos organizados y verificables.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Principios de inteligencia artificial: conceptos, herramientas y tendencias
      p(data-aos="fade-left") La inteligencia artificial puede entenderse como el conjunto de tecnologías que permite a los sistemas realizar tareas relacionadas con el procesamiento de información, el aprendizaje a partir de datos, la identificación de patrones y la generación de respuestas, predicciones o recomendaciones.
      p(data-aos="fade-right") En el ámbito financiero, puede apoyar actividades como extraer datos de documentos, clasificar gastos, resumir contratos, detectar posibles inconsistencias, interpretar variaciones iniciales o sugerir acciones de revisión. Su aplicación debe realizarse bajo criterios de responsabilidad, transparencia y supervisión humana (OCDE, s. f.).
      p(data-aos="fade-left") Para comprender su aplicación en información financiera, se presentan algunos aspectos fundamentales:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta08_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Concepto
                            p.text-start La IA reúne tecnologías capaces de procesar datos, reconocer patrones, generar respuestas y apoyar tareas que requieren análisis de información.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta08_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Aplicación financiera
                            p.text-start Puede contribuir a la extracción, clasificación, comparación e interpretación inicial de datos financieros, así como a la generación de alertas o recomendaciones preliminares.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta08_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Diversidad de herramientas
                            p.text-start La IA no corresponde a una única herramienta. Existen soluciones para generar texto, extraer información de documentos, analizar datos, automatizar procesos o estimar comportamientos futuros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta08_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Uso responsable
                            p.text-start Los resultados generados por IA requieren información adecuada, supervisión humana, protección de datos y validación antes de ser utilizados para tomar decisiones.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t3/img2.png', style="width: 500px", data-aos="zoom-in").m-auto
              //- Fin Carrusel
            p(data-aos="fade-left") El uso responsable de inteligencia artificial en procesos financieros debe orientarse mediante principios que favorezcan resultados confiables y verificables:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Finalidad
                            p.text-start Debe definirse con claridad para qué se utilizará la IA y qué resultado se espera obtener.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Calidad de los datos
                            p.text-start La información utilizada debe ser completa, legible, actualizada, organizada y pertinente para el análisis.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Pertinencia
                            p.text-start Solo deben incorporarse los datos necesarios para atender la necesidad planteada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Transparencia
                            p.text-start Debe conservarse información sobre las instrucciones utilizadas, las fuentes consultadas y los resultados generados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Supervisión humana
                            p.text-start Los resultados deben revisarse antes de aceptarlos o utilizarlos para tomar decisiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Seguridad
                            p.text-start Los documentos, bases de datos y resultados deben mantenerse protegidos mediante controles de acceso adecuados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Protección de datos
                            p.text-start Debe evitarse la exposición innecesaria de información personal o sensible.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Trazabilidad
                            p.text-start Conviene conservar evidencia del proceso realizado, incluidos datos utilizados, instrucciones y resultados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gestión de riesgos
                            p.text-start Deben identificarse posibles errores, sesgos, interpretaciones inadecuadas o alertas falsas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta09_10.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mejora continua
                            p.text-start Las instrucciones, datos y procedimientos deben ajustarse cuando los resultados requieran mayor precisión.
              //- Fin Carrusel
            p(data-aos="fade-left") Estos principios son coherentes con orientaciones internacionales relacionadas con derechos humanos, transparencia, equidad y supervisión humana en el uso de inteligencia artificial (UNESCO, 2021).
            p(data-aos="fade-left") Según la tarea que se requiera realizar, pueden emplearse diferentes tipos de herramientas de inteligencia artificial:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 8.
            span Herramientas de IA y usos prácticos en información financiera
          .tabla-a
            table
              thead
                tr
                  th(style="width: 20%") Tipo de herramienta
                  th(style="width: 25%") ¿Qué permite hacer?
                  th(style="width: 30%") Ejemplo práctico
                  th(style="width: 25%") Precaución necesaria
              tbody
                tr
                  td <i>Chatbot</i> o IA generativa
                  td Redactar, resumir, clasificar, comparar o interpretar información.
                  td Pedir un resumen de gastos del mes a partir de una tabla.
                  td Validar que la respuesta coincida con la base entregada.
                tr
                  td OCR inteligente
                  td Leer documentos escaneados o imágenes y convertirlos en texto.
                  td Extraer fecha, proveedor, NIT, valor e IVA de una factura.
                  td Revisar errores de lectura en números, fechas o nombres.
                tr
                  td Analítica con IA
                  td Identificar patrones, variaciones o comportamientos inusuales.
                  td Detectar aumentos atípicos en gastos de transporte.
                  td Confirmar la causa del cambio con soportes y contexto.
                tr
                  td Modelos predictivos
                  td Estimar comportamientos futuros a partir de datos históricos.
                  td Proyectar probabilidad de mora en una cartera.
                  td No tomar decisiones automáticas sin revisión humana.
                tr
                  td Automatización inteligente
                  td Ejecutar tareas repetitivas y generar alertas.
                  td Renombrar archivos, consolidar reportes o avisar facturas vencidas.
                  td Definir reglas claras y revisar excepciones.
                tr
                  td Asistentes documentales
                  td Buscar, resumir o comparar documentos.
                  td Revisar contratos para identificar vencimientos y obligaciones.
                  td Leer el documento original antes de aceptar conclusiones.
                tr
                  td Tableros con IA
                  td Visualizar indicadores y explicar variaciones.
                  td Mostrar ventas, gastos, cartera y flujo de caja con alertas.
                  td Revisar que los datos fuente estén actualizados.
                tr
                  td Sistemas integrados con IA
                  td Conectar IA con ERP, sistemas contables o plataformas financieras.
                  td Generar alertas sobre pagos, inventarios o cuentas por cobrar.
                  td Controlar accesos, permisos y trazabilidad del proceso.
      //- FinTabla
      p(data-aos="fade-left") La evolución de estas tecnologías ha ampliado sus posibilidades de aplicación en procesos contables y financieros:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold IA generativa
                            p.text-start Permite elaborar resúmenes, explicaciones, tablas y hallazgos preliminares. Los resultados deben revisarse para evitar datos inventados u omisiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Analítica predictiva
                            p.text-start Utiliza información histórica para estimar comportamientos futuros, como cartera vencida o flujo de caja. Requiere validar supuestos y calidad de los datos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Detección de anomalías
                            p.text-start Apoya la identificación de datos inusuales, pagos duplicados, valores atípicos o fechas inconsistentes. Cada alerta debe comprobarse con los soportes originales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Automatización documental
                            p.text-start Facilita la clasificación, organización o extracción de información de archivos, siempre que se revise la calidad del resultado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Integración con sistemas contables
                            p.text-start Permite relacionar información procedente de diferentes plataformas, manteniendo controles de acceso, permisos y trazabilidad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Asistentes financieros conversacionales
                            p.text-start Facilitan consultas sobre información financiera mediante instrucciones en lenguaje natural. Las solicitudes deben formularse con precisión y los resultados requieren validación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Reportes aumentados
                            p.text-start Apoyan la elaboración de informes con explicaciones preliminares de cifras y variaciones, que deben ser revisadas antes de su presentación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t3/tarjeta10_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Gestión de riesgos con IA
                            p.text-start Permite identificar posibles riesgos operativos o financieros y generar alertas que posteriormente deben ser evaluadas por responsables del proceso.
              //- Fin Carrusel
            p(data-aos="fade-left") Estas tendencias se relacionan con el desarrollo y adopción de inteligencia artificial en Colombia, considerando tanto sus oportunidades como los riesgos asociados a su implementación (DNP, 2025).
            p(data-aos="fade-left") Para contextualizar el uso de estas herramientas, se presenta una situación relacionada con el análisis de gastos:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa necesita revisar los gastos del mes. Para ello, obtiene una base con fecha, tercero, concepto, centro de costo, valor y soporte; elimina información innecesaria, unifica formatos y protege los datos personales que no requiere para el análisis.
          p Posteriormente, solicita a una herramienta de IA identificar las categorías con mayor valor, posibles variaciones y registros que requieren revisión. La respuesta obtenida constituye un resultado preliminar que debe contrastarse con facturas, comprobantes y demás soportes antes de establecer conclusiones.
      p(data-aos="fade-left") Mediante la siguiente tabla se presenta muestra una ruta sencilla para usar inteligencia artificial en la revisión inicial de información financiera:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 9.
            span Ruta práctica para aplicar IA en información financiera
          .tabla-a
            table
              thead
                tr
                  th(style="width: 10%") Paso
                  th(style="width: 25%") Acción
                  th(style="width: 35%") Ejemplo práctico
                  th(style="width: 30%") Resultado esperado
              tbody
                tr
                  td.text-center 1
                  td Definir la necesidad financiera.
                  td Revisar gastos, cartera, pagos, ventas o contratos.
                  td Propósito claro del análisis.
                tr
                  td.text-center 2
                  td Seleccionar la herramienta adecuada.
                  td Chatbot, OCR, analítica, tablero o sistema contable con IA.
                  td Herramienta coherente con la tarea.
                tr
                  td.text-center 3
                  td Preparar los datos.
                  td Limpiar bases, organizar archivos y proteger datos personales.
                  td Información lista para procesar.
                tr
                  td.text-center 4
                  td Formular el <i>prompt</i> o instrucción.
                  td Solicitar clasificación, alertas, resumen o comparación.
                  td Consulta clara y delimitada.
                tr
                  td.text-center 5
                  td Revisar la respuesta.
                  td Leer hallazgos, tablas, alertas o recomendaciones.
                  td Resultado preliminar identificado.
                tr
                  td.text-center 6
                  td Validar con soportes.
                  td Comparar con facturas, extractos, contratos o comprobantes.
                  td Confirmación o descarte de hallazgos.
                tr
                  td.text-center 7
                  td Ajustar la consulta si es necesario.
                  td Corregir el <i>prompt</i> o entregar datos más claros.
                  td Mejor calidad de la respuesta.
                tr
                  td.text-center 8
                  td Documentar el proceso.
                  td Guardar base, <i>prompt</i>, respuesta y validación.
                  td Trazabilidad del uso de IA.
                tr
                  td.text-center 9
                  td Definir acciones de revisión.
                  td Solicitar soporte, corregir dato o escalar alerta.
                  td Decisiones sustentadas.
                tr
                  td.text-center 10
                  td Conservar evidencia.
                  td Archivar resultado validado y documentos asociados.
                  td Soporte para consultas posteriores.
      //- FinTabla
      p(data-aos="fade-left") La inteligencia artificial puede fortalecer el análisis financiero, siempre que se utilicen datos de calidad, instrucciones claras, protección de la información, trazabilidad y validación profesional de los resultados.
</template>

<script>
export default {
  name: 'Tema3',
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
<style lang="sass"></style>
<style lang="sass"></style>
