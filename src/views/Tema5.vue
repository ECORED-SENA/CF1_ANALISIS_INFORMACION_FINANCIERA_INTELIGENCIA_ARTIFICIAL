<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Ingeniería de <i>prompts</i> para hechos económicos
      p(data-aos="fade-left") La ingeniería de <i>prompts</i> permite convertir una necesidad contable o financiera en una instrucción clara para una herramienta de inteligencia artificial. Un <i>prompt</i> eficaz debe precisar el contexto, los datos disponibles, la tarea esperada, el formato de respuesta y los criterios de validación (OpenAI, s. f.).
      .row.justify-content-center.g-4.mb-5.pt-5(data-aos="fade-up")
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t5/tarjeta01_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Necesidad financiera
            p.mb-0 El proceso comienza con una situación concreta que requiere análisis, como revisar cartera, identificar pagos duplicados o clasificar gastos.
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t5/tarjeta01_2.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Instrucción estructurada
            p.mb-0 La solicitud debe indicar qué información se analizará, qué tarea realizará la IA y cómo debe presentar el resultado.
        .col-12.col-sm-6.col-lg-4
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t5/tarjeta01_3.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Validación profesional
            p.mb-0 Los resultados generados deben contrastarse con documentos, normativa aplicable y criterio profesional. La supervisión humana continúa siendo indispensable (UNESCO, 2024).
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Concepto de <i>prompt</i> e ingeniería de <i>prompts</i>
      p(data-aos="fade-left") Un <i>prompt</i> es la instrucción, pregunta o solicitud que se entrega a una herramienta de inteligencia artificial para obtener una respuesta. Puede ser una frase sencilla o una instrucción más completa, según el nivel de claridad, contexto y detalle proporcionado.
      p(data-aos="fade-left") La ingeniería de <i>prompts</i> consiste en diseñar, ajustar y mejorar estas instrucciones para obtener respuestas más útiles, verificables y pertinentes en relación con una necesidad financiera.
      p(data-aos="fade-left") Para formular un <i>prompt</i> financiero, deben definirse algunos elementos que orienten la respuesta de la herramienta:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Contexto")
                      p.mb-2 Indica qué situación financiera se está revisando.
                      p.mb-0 <b>Ejemplo:</b> pagos a proveedores del mes de mayo.
                    .row(titulo="Objetivo")
                      p.mb-2 Precisa para qué se utilizará la IA.
                      p.mb-0 <b>Ejemplo:</b> identificar posibles pagos duplicados o facturas sin soporte.
                    .row(titulo="Datos disponibles")
                      p.mb-2 Define qué información será entregada a la herramienta.
                      p.mb-0 <b>Ejemplo:</b> proveedor, factura, fecha, valor, comprobante y estado de pago.
                    .row(titulo="Tarea específica")
                      p.mb-2 Establece qué debe hacer la IA.
                      p.mb-0 <b>Ejemplo:</b> comparar registros e identificar coincidencias.
                    .row(titulo="Criterios de análisis")
                      p.mb-2 Indica qué condiciones debe considerar durante la revisión.
                      p.mb-0 <b>Ejemplo:</b> fechas cercanas, valores iguales, facturas repetidas o comprobantes faltantes.
                    .row(titulo="Formato de respuesta")
                      p.mb-2 Define cómo debe organizarse el resultado.
                      p.mb-0 <b>Ejemplo:</b> tabla con alerta, registro afectado, razón de revisión y acción sugerida.
                    .row(titulo="Límite de uso")
                      p.mb-2 Establece qué no debe hacer la herramienta.
                      p.mb-0 <b>Ejemplo:</b> no emitir conclusiones definitivas ni recomendar ajustes sin validación.
                    .row(titulo="Validación esperada")
                      p.mb-2 Define cómo se comprobarán los resultados.
                      p.mb-0 <b>Ejemplo:</b> contrastar cada alerta con factura, comprobante de egreso y extracto bancario.
            //- Fin Accordion 1
            p(data-aos="fade-left") Para evidenciar la importancia de estructurar adecuadamente la instrucción, se presenta una situación aplicada:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa quiere revisar una base de cuentas por pagar. La base contiene proveedor, número de factura, fecha de emisión, fecha de vencimiento, valor, estado de pago y comprobante asociado. Un <i>prompt</i> poco útil sería: “Revise esta información y diga qué encuentra”. Esta instrucción es muy general, no indica qué debe buscar la IA ni cómo debe presentar el resultado.
          p Un <i>prompt</i> mejor estructurado sería: “Analice la siguiente base de cuentas por pagar. Identifique facturas vencidas, posibles pagos duplicados, registros sin comprobante asociado y valores atípicos. Presente el resultado en una tabla con proveedor, número de factura, alerta identificada, razón de revisión y acción sugerida. No emita conclusiones definitivas; indique que cada alerta debe validarse con los soportes originales”.
      p.mb-5(data-aos="fade-left") La siguiente tabla presenta cómo cambia la calidad de una instrucción cuando se agregan contexto, tarea, criterios y formato de respuesta.
      //- Inicio Tabla 12
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 12.
            span Comparación entre <i>prompt</i> débil y <i>prompt</i> estructurado
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(style="width: 25%") Tipo de <i>prompt</i>
                  th(style="width: 45%") Ejemplo
                  th(style="width: 30%") Posible resultado
              tbody
                tr
                  td <i>Prompt</i> débil
                  td Revise estas facturas.
                  td Respuesta general, sin criterios claros de análisis.
                tr
                  td <i>Prompt</i> mejorado
                  td Revise estas facturas e identifique número, proveedor, fecha, valor e impuesto.
                  td Extracción de datos más ordenada.
                tr
                  td <i>Prompt</i> estructurado
                  td Analice estas facturas de compra del mes de mayo. Identifique duplicados por proveedor, número y valor; señale documentos sin fecha o sin impuesto; y presente una tabla con alerta, soporte afectado y acción sugerida.
                  td Resultado más útil, verificable y fácil de revisar.
                tr
                  td <i>Prompt</i> con control
                  td Además, no emita conclusiones definitivas y señale que cada hallazgo debe validarse con factura original, comprobante y política contable.
                  td Respuesta más responsable y alineada con revisión humana.
      //- Fin Tabla 12
      p(data-aos="fade-left") Un <i>prompt</i> financiero útil combina claridad, contexto, criterios de análisis, formato de respuesta, límites y validación profesional.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Delimitación de la necesidad contable o financiera
      p(data-aos="fade-left") Delimitar la necesidad consiste en precisar qué se desea revisar, analizar, extraer o comparar antes de utilizar inteligencia artificial. Una solicitud específica permite seleccionar mejor los datos y obtener resultados más pertinentes.
      p(data-aos="fade-left") Una necesidad bien delimitada debe responder a cinco aspectos básicos:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Proceso
                            p.text-start.mb-2.text-center ¿Qué situación financiera se revisará?
                            p.text-start.mb-0.text-color-acento-contenido.text-center <b>Ejemplo:</b> cuentas por pagar.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Periodo
                            p.text-start.mb-2.text-center ¿Qué intervalo de tiempo corresponde al análisis?
                            p.text-start.mb-0.text-color-acento-contenido.text-center <b>Ejemplo:</b> junio de 2026.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Resultado esperado
                            p.text-start.mb-2.text-center ¿Qué se necesita identificar?
                            p.text-start.mb-0.text-color-acento-contenido.text-center <b>Ejemplo:</b> facturas vencidas, pagos duplicados o soportes faltantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Datos necesarios
                            p.text-start.mb-2.text-center ¿Qué información debe utilizarse?
                            p.text-start.mb-0.text-color-acento-contenido.text-center <b>Ejemplo:</b> proveedor, factura, fecha, valor y estado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Protección de información
                            p.text-start.mb-2.text-center ¿Qué datos deben ocultarse o excluirse?
                            p.text-start.mb-0.text-color-acento-contenido.text-center <b>Ejemplo:</b> identificaciones, cuentas bancarias o datos de contacto innecesarios.
            //- Fin Carrusel
            p(data-aos="fade-left") La delimitación también favorece el principio de necesidad en el tratamiento de datos personales y reduce la exposición de información que no requiere el análisis (Superintendencia de Industria y Comercio, 2024).
            p(data-aos="fade-left") La siguiente tabla presenta cómo transformar una solicitud general en una necesidad específica para usar inteligencia artificial en información financiera:
      //- Inicio Tabla 13
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 13.
            span Delimitación de la necesidad contable o financiera
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th(style="width: 20%") Solicitud general
                  th(style="width: 30%") Necesidad delimitada
                  th(style="width: 25%") Datos requeridos
                  th(style="width: 25%") Resultado esperado
              tbody
                tr
                  td Revisar las ventas
                  td Identificar las ventas del mes por cliente, producto y valor.
                  td Fecha, cliente, producto, factura, cantidad y valor.
                  td Tabla de ventas organizadas y posibles variaciones.
                tr
                  td Analizar los gastos
                  td Clasificar los gastos del mes por categoría y señalar valores atípicos.
                  td Fecha, tercero, concepto, categoría, valor y soporte.
                  td Resumen por categoría y alertas de revisión.
                tr
                  td Revisar cartera
                  td Identificar facturas vencidas y saldos pendientes por cliente.
                  td Cliente, factura, fecha de vencimiento, valor, abonos y saldo.
                  td Listado de cartera vencida y prioridad de revisión.
                tr
                  td Revisar pagos
                  td Detectar posibles pagos duplicados a proveedores.
                  td Proveedor, factura, fecha, valor, comprobante y referencia bancaria.
                  td Alertas por coincidencia de proveedor, valor o factura.
                tr
                  td Revisar contratos
                  td Extraer fechas de vencimiento, obligaciones y valores pactados.
                  td Contrato, partes, fecha, valor, plazo y obligaciones.
                  td Resumen contractual con puntos que requieren seguimiento.
                tr
                  td Revisar bancos
                  td Comparar movimientos bancarios con registros contables.
                  td Fecha, valor, referencia, tercero, concepto y registro contable.
                  td Diferencias entre banco y contabilidad para validar.
                tr
                  td Revisar nómina
                  td Identificar inconsistencias en valores liquidados o pagos realizados.
                  td Trabajador codificado, periodo, devengo, deducciones y neto pagado.
                  td Alertas preliminares para revisión de nómina.
                tr
                  td Revisar soportes
                  td Identificar registros financieros sin documento asociado.
                  td Número de registro, fecha, tercero, valor y soporte.
                  td Listado de operaciones sin evidencia documental.
      //- Fin Tabla 13
      p(data-aos="fade-right") A continuación, se presenta un ejemplo aplicado:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa desea usar IA para revisar sus cuentas por pagar. La solicitud inicial es: “Revise las cuentas por pagar”. Esta instrucción es muy amplia, porque no indica el periodo, el tipo de alerta, los datos disponibles ni el formato de respuesta.
          p Una necesidad mejor delimitada sería: “Revise la base de cuentas por pagar del mes de junio para identificar facturas vencidas, posibles pagos duplicados y registros sin comprobante asociado. La base contiene proveedor, número de factura, fecha de emisión, fecha de vencimiento, valor, estado de pago y comprobante. El resultado debe presentarse en una tabla con proveedor, factura, alerta identificada, razón de revisión y acción sugerida”.
          p Con esta delimitación, el <b><i>prompt</i></b> puede construirse con mayor precisión y la respuesta de la IA será más fácil de validar. Además, la persona responsable podrá verificar si los datos cargados son suficientes, si existe información personal que deba protegerse y qué soportes deben consultarse antes de aceptar cualquier hallazgo.
      p(data-aos="fade-left") Para mayor comprensión del tema, se realizan preguntas orientadoras para definir una necesidad contable o financiera antes de formular el <i>prompt</i>:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="¿Qué proceso se va a revisar?")
                      p.mb-0 Definir el campo de análisis, por ejemplo, cuentas por pagar.
                    .row(titulo="¿Qué periodo se analizará?")
                      p.mb-0 Establecer el intervalo correspondiente, por ejemplo, junio de 2026.
                    .row(titulo="¿Qué documentos o bases se tienen?")
                      p.mb-0 Identificar los insumos disponibles, como bases en Excel, facturas y comprobantes.
                    .row(titulo="¿Qué se quiere encontrar?")
                      p.mb-0 Precisar la tarea de la IA, por ejemplo, facturas vencidas, posibles pagos duplicados o soportes faltantes.
                    .row(titulo="¿Qué datos son necesarios?")
                      p.mb-0 Utilizar únicamente la información requerida, como proveedor, factura, fecha, valor y estado.
                    .row(titulo="¿Qué datos deben protegerse?")
                      p.mb-0 Excluir o proteger identificaciones, cuentas bancarias y datos de contacto innecesarios.
                    .row(titulo="¿Cómo debe responder la IA?")
                      p.mb-0 Definir el formato esperado, por ejemplo, una tabla con alerta, razón y acción sugerida.
                    .row(titulo="¿Cómo se validará el resultado?")
                      p.mb-0 Contrastar los hallazgos con facturas, comprobantes y extractos.
            //- Fin Accordion 1
            p(data-aos="fade-left") Delimitar la necesidad permite formular <i>prompts</i> más precisos, seleccionar los datos pertinentes, proteger la información y validar los resultados con criterios definidos. 
            Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Selección de <i>chatbots</i>  y herramientas de IA según la necesidad
      p(data-aos="fade-left") No todas las herramientas de inteligencia artificial cumplen la misma función. Su selección depende de la necesidad financiera, el tipo de información disponible, la tarea requerida y el resultado esperado.
      p(data-aos="fade-right") Además, deben considerarse las condiciones de seguridad, autorización y protección de datos, especialmente cuando se utiliza información financiera o personal (Superintendencia de Industria y Comercio, 2024).
      p(data-aos="fade-left") La selección de la herramienta puede orientarse según la tarea financiera que se requiere desarrollar:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Extraer datos de facturas escaneadas")
                      p.mb-0 Puede utilizarse una herramienta OCR o de lectura documental para identificar proveedor, fecha, número de factura, valor e impuesto. Se deben revisar posibles errores de lectura en cifras, fechas o nombres.
                    .row(titulo="Clasificar gastos del mes")
                      p.mb-0 Puede emplearse un <i>chatbot</i> o una herramienta de análisis de tablas para agrupar gastos por categoría, tercero o centro de costo. La clasificación debe validarse con la política contable interna.
                    .row(titulo="Detectar pagos duplicados")
                      p.mb-0 Puede utilizarse una herramienta de análisis de datos o IA aplicada a hojas de cálculo para comparar proveedor, factura, valor, fecha y comprobante. Las alertas deben confirmarse con facturas, egresos y extractos.
                    .row(titulo="Revisar cartera vencida")
                      p.mb-0 Puede emplearse analítica de datos o un <i>chatbot</i> con una tabla estructurada para identificar facturas vencidas, saldos y clientes con mayor mora. Se deben proteger los datos personales y validar que los saldos estén actualizados.
                    .row(titulo="Resumir contratos financieros")
                      p.mb-0 Puede utilizarse un <i>chatbot</i> con capacidad de lectura documental para extraer valores, plazos, obligaciones, vencimientos y condiciones. El resumen debe contrastarse con el contrato original.
                    .row(titulo="Identificar valores atípicos")
                      p.mb-0 Puede emplearse una herramienta de analítica o detección de anomalías para señalar gastos, ingresos o pagos fuera del comportamiento habitual. La causa del valor inusual debe confirmarse antes de establecer conclusiones.
                    .row(titulo="Generar borradores de informes")
                      p.mb-0 Puede utilizarse IA generativa o un asistente de redacción para elaborar resúmenes de hallazgos financieros preliminares. Deben revisarse las cifras, conclusiones y el lenguaje técnico.
                    .row(titulo="Organizar archivos financieros")
                      p.mb-0 Puede emplearse automatización o un gestor documental con IA para clasificar facturas, contratos y comprobantes por fecha o proveedor. Debe verificarse que los documentos queden ubicados correctamente.
            //- Fin Accordion 1
            p(data-aos="fade-left") La herramienta de IA debe seleccionarse según la necesidad financiera, los datos disponibles y el nivel de seguridad requerido, para obtener resultados útiles y facilitar su validación profesional.
            Separador
      //- Inicio Tema5.4
      .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Estructuración y ejecución de <i>prompts</i> en aplicativos de IA
      p(data-aos="fade-left") La estructuración de <i>prompts</i> consiste en organizar una instrucción para que la respuesta de la inteligencia artificial sea clara, útil y verificable. En información financiera, debe precisarse el contexto, la tarea, los datos disponibles, los criterios de análisis, el formato esperado y los límites de la respuesta.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Contexto")
                      p.mb-2 Indica la situación o proceso financiero que se revisará.
                      p.mb-0 <b>Ejemplo:</b> cuentas por pagar del mes de junio.
                    .row(titulo="Objetivo")
                      p.mb-2 Define el propósito de la consulta.
                      p.mb-0 <b>Ejemplo:</b> identificar facturas vencidas, posibles pagos duplicados o registros sin soporte.
                    .row(titulo="Datos disponibles")
                      p.mb-2 Precisa la información que se entregará a la IA.
                      p.mb-0 <b>Ejemplo:</b> proveedor, factura, fecha, valor, estado y comprobante.
                    .row(titulo="Tarea solicitada")
                      p.mb-2 Establece la acción que debe realizar la herramienta.
                      p.mb-0 <b>Ejemplo:</b> comparar registros e identificar alertas que requieran revisión.
                    .row(titulo="Criterios de revisión")
                      p.mb-2 Define las condiciones que debe considerar la IA.
                      p.mb-0 <b>Ejemplo:</b> valores repetidos, facturas vencidas, comprobantes faltantes o fechas inconsistentes.
                    .row(titulo="Formato de salida")
                      p.mb-2 Indica cómo debe presentarse la respuesta.
                      p.mb-0 <b>Ejemplo:</b> tabla con proveedor, factura, alerta, razón de revisión y acción sugerida.
                    .row(titulo="Límites de la respuesta")
                      p.mb-2 Establece restricciones para evitar conclusiones inadecuadas.
                      p.mb-0 <b>Ejemplo:</b> no concluir fraude ni recomendar ajustes sin validación documental.
                    .row(titulo="Validación esperada")
                      p.mb-2 Define cómo se comprobarán los resultados.
                      p.mb-0 <b>Ejemplo:</b> contrastar cada alerta con factura, comprobante, extracto o política interna.
                    .row(titulo="Protección de datos")
                      p.mb-2 Precisa qué información debe excluirse o anonimizarse.
                      p.mb-0 <b>Ejemplo:</b> identificaciones, cuentas bancarias o datos personales innecesarios.
                    .row(titulo="Trazabilidad")
                      p.mb-2 Determina qué evidencia debe conservarse.
                      p.mb-0 <b>Ejemplo:</b> base utilizada, <i>prompt</i>, respuesta de IA y validación realizada.
            //- Fin Accordion 1
            p(data-aos="fade-left") La integración de estos elementos puede observarse en una revisión de pagos a proveedores:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa desea revisar una base de pagos a proveedores. La base contiene proveedor, número de factura, fecha de pago, valor, comprobante de egreso y referencia bancaria. Antes de usar IA, elimina cuentas bancarias completas, reemplaza identificaciones por códigos internos y verifica que los valores estén en formato numérico.
          p.fw-bold Un <i>prompt</i> estructurado podría ser:
          p “Analice la siguiente base de pagos a proveedores correspondiente al mes de junio. Identifique posibles pagos duplicados, facturas con el mismo número, valores repetidos por proveedor, registros sin comprobante de egreso y pagos con referencia bancaria faltante. Presente el resultado en una tabla con proveedor, número de factura, alerta identificada, razón de revisión y acción sugerida. No emita conclusiones definitivas ni califique la situación como fraude. Indique que cada alerta debe validarse con factura, comprobante de egreso y extracto bancario”.
          p Después de ejecutar el <i>prompt</i>, la persona responsable debe revisar si la IA respondió de acuerdo con la instrucción. Si la respuesta es muy general, puede ajustar el <i>prompt</i> mediante una instrucción adicional, como: “Clasifique las alertas en alta, media y baja prioridad” o “Explique qué campos comparó para identificar cada posible duplicado”.
          p.mb-0 Si la herramienta incluye datos que no estaban en la base, se debe solicitar una corrección, por ejemplo: “Elimine cualquier información inferida y trabaje únicamente con los datos suministrados”.
      p(data-aos="fade-left") Estructurar y ejecutar <i>prompts</i> implica formular instrucciones claras y controladas, cuyos resultados deben validarse con soportes, normativa, protección de datos y criterio profesional.
      Separador
      //- Inicio Tema5.5
      .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Errores, iteración, validación y archivo de <i>prompts</i> corregidos
      p(data-aos="fade-left") El uso de <i>prompts</i> puede generar errores cuando la instrucción es ambigua, los datos están incompletos o la herramienta interpreta información no suministrada. Por ello, las respuestas deben revisarse, corregirse y validarse antes de utilizarlas.
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0
                      SlyderF(columnas="col-xl-4 col-lg-4 col-md-6 col-12")                        
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta03_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Errores
                            p.mb-0 Pueden originarse por falta de contexto, datos incompletos, instrucciones generales, formatos poco claros o criterios de revisión insuficientes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta03_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Iteración
                            p.mb-0 Consiste en ajustar el <i>prompt</i> después de revisar la primera respuesta, incorporando mayor precisión, contexto, criterios o formato.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta03_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Validación
                            p.mb-0 Permite contrastar los resultados con documentos, bases de datos, normativa, políticas internas y demás soportes disponibles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t5/tarjeta03_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Archivo
                            p.mb-0 Implica conservar la base utilizada, el <i>prompt</i> inicial, los ajustes realizados, las respuestas obtenidas y la validación final para mantener la trazabilidad.
            //- Fin Carrusel
            p(data-aos="fade-left") Los errores frecuentes pueden corregirse mediante ajustes específicos en la formulación del <i>prompt:</i>
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="<i>Prompt</i> muy general")
                      p.mb-2 Puede producir una respuesta superficial.
                      p.mb-0 <b>Corrección:</b> precisar proceso, periodo, datos y resultado esperado.
                    .row(titulo="Falta de contexto")
                      p.mb-2 La herramienta puede no comprender la operación financiera.
                      p.mb-0 <b>Corrección:</b> indicar si se analiza cartera, pagos, gastos, contratos, ventas u otro proceso.
                    .row(titulo="Datos incompletos")
                      p.mb-2 Las alertas pueden basarse en información parcial.
                      p.mb-0 <b>Corrección:</b> revisar fechas, valores, terceros, soportes y estado del registro.
                    .row(titulo="Columnas mal nombradas")
                      p.mb-2 La IA puede interpretar incorrectamente los campos.
                      p.mb-0 <b>Corrección:</b> estandarizar los encabezados antes de cargar la información.
                    .row(titulo="Formato de salida no definido")
                      p.mb-2 La respuesta puede quedar desorganizada.
                      p.mb-0 <b>Corrección:</b> indicar la estructura o las columnas esperadas.
                    .row(titulo="Conclusiones definitivas")
                      p.mb-2 La herramienta puede emitir afirmaciones sin suficiente respaldo.
                      p.mb-0 <b>Corrección:</b> solicitar únicamente hallazgos preliminares sujetos a validación.
                    .row(titulo="Información inventada")
                      p.mb-2 La IA puede incorporar datos que no fueron suministrados.
                      p.mb-0 <b>Corrección:</b> indicar que debe trabajar exclusivamente con la información entregada.
                    .row(titulo="Falta de criterios de revisión")
                      p.mb-2 La herramienta puede no identificar qué condiciones analizar.
                      p.mb-0 <b>Corrección:</b> definir criterios como duplicados, vencimientos, valores atípicos o soportes faltantes.
                    .row(titulo="Datos personales innecesarios")
                      p.mb-2 Puede aumentar el riesgo de exposición de información.
                      p.mb-0 <b>Corrección:</b> anonimizar o excluir los datos que no sean requeridos.
                    .row(titulo="Falta de trazabilidad")
                      p.mb-2 No queda evidencia suficiente del análisis realizado.
                      p.mb-0 <b>Corrección:</b> conservar la base, el <i>prompt</i>, las respuestas, los ajustes y la validación final.
            //- Fin Accordion 1
            p(data-aos="fade-left") La corrección de un <i>prompt</i> puede evidenciarse en una revisión de pagos a proveedores:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo práctico
          p Una empresa desea revisar pagos a proveedores del mes de julio. La primera instrucción enviada a la IA fue: “Revise esta base y diga si hay problemas”. La respuesta obtenida fue general, sin indicar registros específicos ni criterios de revisión.
          p Para mejorar el resultado, la persona responsable ajusta el <i>prompt</i> de la siguiente manera:
          p.mb-0 “Analice la base de pagos a proveedores del mes de julio. Identifique posibles pagos duplicados, facturas con igual número, valores repetidos por proveedor, registros sin comprobante de egreso y pagos sin referencia bancaria. Presente el resultado en una tabla con proveedor, número de factura, valor, alerta identificada, razón de revisión y acción sugerida. No emita conclusiones definitivas; indique que cada hallazgo debe validarse con factura, comprobante de egreso y extracto bancario. Trabaje únicamente con los datos suministrados”.
      p(data-aos="fade-left") Una vez identificados los errores, una ruta práctica para mejorar <i>prompts</i> y conservar evidencia del uso de inteligencia artificial en información financiera se presenta en la siguiente tabla:
      //- Inicio Tabla 14
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-md-auto.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 14.
            span Ruta para iterar, validar y archivar <i>prompts</i> corregidos
          .tabla-a.color-acento-contenido
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
                  td Revisar la respuesta inicial de IA.
                  td Verificar si identificó alertas, registros y razones.
                  td Se reconoce si la respuesta es útil o insuficiente.
                tr
                  td.text-center 2
                  td Identificar el error del <i>prompt</i>.
                  td Falta de contexto, formato, criterios o límites.
                  td Se define qué debe corregirse.
                tr
                  td.text-center 3
                  td Ajustar la instrucción.
                  td Agregar periodo, campos, alertas esperadas y formato de tabla.
                  td <i>Prompt</i> más claro y completo.
                tr
                  td.text-center 4
                  td Ejecutar nuevamente el <i>prompt</i>.
                  td Solicitar una nueva respuesta con la instrucción corregida.
                  td Resultado más ordenado y verificable.
                tr
                  td.text-center 5
                  td Solicitar explicación del hallazgo.
                  td Pedir que indique qué campos comparó para generar la alerta.
                  td Mayor claridad sobre el criterio utilizado.
                tr
                  td.text-center 6
                  td Validar con soportes.
                  td Revisar facturas, extractos, comprobantes o contratos.
                  td Hallazgo confirmado, descartado o pendiente.
                tr
                  td.text-center 7
                  td Documentar la revisión.
                  td Registrar quién revisó, fecha y conclusión de cada alerta.
                  td Evidencia del control humano.
                tr
                  td.text-center 8
                  td Archivar <i>prompts</i> y respuestas.
                  td Guardar <i>prompt</i> inicial, <i>prompt</i> corregido y respuesta final.
                  td Trazabilidad del uso de IA.
                tr
                  td.text-center 9
                  td Conservar base utilizada.
                  td Guardar versión de la tabla o archivo analizado.
                  td Posibilidad de repetir o auditar el análisis.
                tr
                  td.text-center 10
                  td Actualizar banco de <i>prompts</i>
                  td Incorporar el <i>prompt</i> corregido para análisis futuros.
                  td Mejora continua en el uso de IA financiera.
      //- Fin Tabla 14
      p(data-aos="fade-left") La iteración, validación y conservación de <i>prompts</i> corregidos permiten mejorar la calidad de los resultados y mantener la trazabilidad del análisis financiero.
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

<style lang="sass"></style>
