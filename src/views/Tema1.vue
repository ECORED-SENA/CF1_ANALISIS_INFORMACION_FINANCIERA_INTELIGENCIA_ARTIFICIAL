<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Hechos económicos e información financiera digital
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") Los hechos económicos originan la información financiera y requieren un tratamiento organizado para convertirse en registros confiables dentro de los procesos contables.
            p(data-aos="fade-left") Para comprender su tratamiento inicial, se presentan los aspectos que articulan las operaciones económicas con la información financiera y el criterio profesional:  
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/tarjeta01_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Origen de la información
                    p.mb-0 Las operaciones económicas generan información que debe identificarse, sustentarse y organizarse.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/tarjeta01_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Entorno digital
                    p.mb-0 Los documentos y registros digitales facilitan el procesamiento de grandes volúmenes de información.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-5.h-100.bg-color-4.overflow-hidden
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/tarjeta01_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Participación de la IA
                    p.mb-0 La IA apoya tareas iniciales, pero sus resultados requieren validación contable, financiera y normativa.
            //- Fin Tarjetas
            Separador
            //- Inicio Tema1.1
            .row
              #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.1 Concepto de hecho económico
            .row.justify-content-center.align-items-center
              .col-12.col-sm-9.col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-right")
                figure.mb-0.text-center
                  img.mx-auto(src='@/assets/curso/temas/t1/img1.png', alt='', style="width: 320px;")
              .col-12.col-lg-8.order-2.order-lg-1.bg-color-5.p-4(data-aos="fade-left")
                p.mb-0 Un hecho económico es una operación expresable en términos monetarios que afecta los recursos, las obligaciones, los resultados o el patrimonio de una organización. No implica necesariamente un movimiento inmediato de dinero, pues también puede originarse al recibir bienes o servicios, adquirir obligaciones, realizar ventas a crédito, causar gastos, firmar contratos o reconocer cuentas por cobrar.
      p.mb-5(data-aos="fade-left") Para contextualizar estos elementos, se presenta una situación que permite identificar la ocurrencia y los efectos de un hecho económico:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una compra de mercancía a crédito constituye un hecho económico, aunque el pago no sea inmediato, porque la empresa recibe un bien y asume una obligación.
      p.mb-5(data-aos="fade-left") En este sentido, su identificación contable requiere establecer los elementos que permiten comprender, respaldar y organizar la operación económica:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            span Elementos básicos de un hecho económico
          .tabla-a
            table
              thead
                tr
                  th(style="width: 25%") Elemento
                  th(style="width: 35%") Pregunta orientadora
                  th(style="width: 40%") Ejemplo práctico
              tbody
                tr
                  td Operación realizada
                  td ¿Qué ocurrió?
                  td Compra de mercancía, venta de servicios, pago de nómina o adquisición de un crédito.
                tr
                  td Fecha
                  td ¿Cuándo ocurrió?
                  td Fecha de factura, comprobante, contrato o pago.
                tr
                  td Valor
                  td ¿Cuál fue el monto de la operación?
                  td $ 850.000 por compra de insumos.
                tr
                  td Participantes
                  td ¿Quién intervino en la operación?
                  td Empresa, proveedor, cliente, banco o trabajador.
                tr
                  td Soporte
                  td ¿Qué documento respalda el hecho?
                  td Factura electrónica, recibo, extracto, contrato o comprobante.
                tr
                  td Efecto financiero
                  td ¿Qué cambia en la información financiera?
                  td Aumenta un gasto, se reconoce una deuda, ingresa dinero o disminuye caja.
                tr
                  td Registro requerido
                  td ¿Cómo debe organizarse la información?
                  td Como ingreso, gasto, costo, cuenta por cobrar, cuenta por pagar o activo.
      //- FinTabla
      p(data-aos="fade-left") La identificación correcta del hecho económico facilita la recolección de datos, la selección de soportes, la formulación de <i>prompts</i> y la validación de resultados.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Ocurrencia de hechos económicos en contextos contables y financieros
      p(data-aos="fade-left") Un hecho económico ocurre cuando una operación afecta los recursos, las obligaciones, los ingresos, los gastos o el patrimonio de una organización. Su reconocimiento requiere comprobar el impacto financiero, la posibilidad de medirlo y la existencia de soportes confiables.
      .row.mb-5.justify-content-center.align-items-center        
        .col-12.col-sm-9.col-lg-3.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src='@/assets/curso/temas/t1/img1.2.png', alt='', style="width: 100%; max-width: 500px;")
        .col-12.col-lg-9.order-2.order-lg-2.bg-color-2.p-4(data-aos="fade-left")
          p En procesos apoyados por IA, esta identificación permite delimitar la consulta y precisar los datos que deben extraerse y organizarse.
          p.mb-0 Para diferenciar las operaciones confirmadas de aquellas que todavía requieren verificación, se presentan diversas situaciones contables y sus respectivos soportes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Venta facturada
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Sí.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Genera un ingreso y una posible cuenta por cobrar.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Factura electrónica o comprobante de venta.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cotización enviada
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> No necesariamente.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Todavía no confirma una venta ni genera una obligación.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Cotización o propuesta comercial.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Servicios públicos
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Sí.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Disminuye los recursos y permite reconocer un gasto.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Recibo y comprobante de pago.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Solicitud de crédito
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> No necesariamente.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> No existe desembolso ni obligación financiera formal.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Comunicación o solicitud.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Préstamo desembolsado
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Sí.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Aumenta el efectivo y genera una obligación financiera.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Extracto, contrato o comprobante bancario.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Compra a crédito
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Sí.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Se recibe un bien y se genera una cuenta por pagar.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Factura del proveedor.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pedido pendiente
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Depende.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Se debe confirmar la existencia de una obligación, entrega o factura.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Orden de compra, contrato o factura.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta02_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pago de nómina
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>¿Constituye un hecho económico?</b> Sí.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Razón:</b> Reconoce una salida de dinero y el cumplimiento de una obligación laboral.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Soporte:</b> Comprobante de nómina y pago.
      //- Fin Slideshow
      p(data-aos="fade-left") Reconocer la ocurrencia del hecho económico evita registrar operaciones no confirmadas u omitir eventos que afectan la información financiera. Además, mejora la calidad de los datos procesados mediante IA.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            Separador
            //- Inicio Tema1.3
            .row
              #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.3 Relación entre documentos, datos y registros contables
            p(data-aos="fade-left") Los documentos respaldan las operaciones, los datos contienen la información extraída y los registros organizan su tratamiento contable. En este sentido, se presentan en la siguiente tabla ejemplos que relacionan cada soporte con los datos, la clasificación y la revisión requerida:
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Relación entre documento, dato y registro contable
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Documento o soporte
                        th(style="width: 25%") Datos que pueden extraerse
                        th(style="width: 25%") Posible registro o clasificación
                        th(style="width: 30%") Revisión necesaria
                    tbody
                      tr
                        td Factura de venta
                        td Cliente, fecha, valor, impuesto y concepto.
                        td Ingreso, cuenta por cobrar o venta de contado.
                        td Verificar valor, cliente, impuestos y condiciones de pago.
                      tr
                        td Factura de compra
                        td Proveedor, producto, valor, impuesto y vencimiento.
                        td Gasto, costo, inventario o cuenta por pagar.
                        td Revisar si corresponde a gasto, costo o activo.
                      tr
                        td Extracto bancario
                        td Consignaciones, retiros, pagos, comisiones y saldos.
                        td Movimiento de banco, ingreso, gasto o pago de deuda.
                        td Conciliar con soportes internos.
                      tr
                        td Recibo de caja
                        td Valor recibido, fecha, tercero y concepto.
                        td Entrada de efectivo o recaudo de cartera.
                        td Confirmar origen del dinero.
                      tr
                        td Comprobante de egreso
                        td Beneficiario, valor, fecha y concepto.
                        td Pago a proveedor, gasto o abono a obligación.
                        td Verificar autorización y soporte relacionado.
                      tr
                        td Contrato
                        td Partes, valor, plazo, obligaciones y condiciones.
                        td Cuenta por pagar, ingreso diferido o compromiso contractual.
                        td Revisar si ya genera reconocimiento contable.
                      tr
                        td Nómina
                        td Trabajador, salario, deducciones, aportes y neto pagado.
                        td Gasto laboral y obligaciones asociadas.
                        td Confirmar valores liquidados y pagos.
                      tr
                        td Archivo de ventas
                        td Fecha, producto, cantidad, valor y cliente.
                        td Ingresos, cuentas por cobrar o reportes comerciales.
                        td Validar consistencia con facturación.
            //- FinTabla

            p(data-aos="fade-left") La relación entre documentos, datos y registros conserva la trazabilidad y permite verificar con mayor seguridad la información financiera procesada mediante IA.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Recolección de datos contables para herramientas de IA
      p(data-aos="fade-left") La recolección de datos contables consiste en reunir información pertinente, respaldada y organizada para atender una necesidad financiera. Por ello, antes de utilizar IA, deben considerarse los siguientes aspectos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img2.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Necesidad del análisis")
                p.mb-2 #[b Pregunta orientadora:] ¿Para qué se utilizarán los datos?
                p.mb-2 #[b Ejemplo:] Revisar cuentas por pagar o extraer los gastos del mes.
                p.mb-0 #[b Recomendación:] Delimitar el objetivo antes de cargar la información.
              .row(titulo="Tipo de documento")
                p.mb-2 #[b Pregunta orientadora:] ¿Qué soportes requiere el análisis?
                p.mb-2 #[b Ejemplo:] Facturas, extractos, recibos, contratos o reportes.
                p.mb-0 #[b Recomendación:] Seleccionar únicamente documentos relacionados con la consulta.
              .row(titulo="Datos relevantes")
                p.mb-2 #[b Pregunta orientadora:] ¿Qué información debe extraerse?
                p.mb-2 #[b Ejemplo:] Fecha, valor, tercero, concepto, impuesto y vencimiento.
                p.mb-0 #[b Recomendación:] Definir los campos necesarios antes de iniciar el análisis.
              .row(titulo="Calidad del archivo")
                p.mb-2 #[b Pregunta orientadora:] ¿El documento está completo y puede procesarse correctamente?
                p.mb-2 #[b Ejemplo:] Factura digitalizada con todos sus datos.
                p.mb-0 #[b Recomendación:] Excluir archivos borrosos, incompletos o duplicados.
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-9.order-2.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Formato")
                p.mb-2 #[b Pregunta orientadora:] ¿El archivo tiene un formato compatible?
                p.mb-2 #[b Ejemplo:] PDF, Excel, CSV, imagen o texto.
                p.mb-0 #[b Recomendación:] Estandarizar los formatos cuando sea posible.
              .row(titulo="Seguridad")
                p.mb-2 #[b Pregunta orientadora:] ¿Contiene datos personales o sensibles?
                p.mb-2 #[b Ejemplo:] Identificaciones, cuentas bancarias o información de clientes.
                p.mb-0 #[b Recomendación:] Proteger, eliminar o anonimizar los datos que no sean necesarios.
              .row(titulo="Organización")
                p.mb-2 #[b Pregunta orientadora:] ¿Los archivos están clasificados?
                p.mb-2 #[b Ejemplo:] Carpetas de ventas, compras, bancos o nómina.
                p.mb-0 #[b Recomendación:] Nombrar y organizar los archivos por fecha, proceso y concepto.
              .row(titulo="Verificación")
                p.mb-2 #[b Pregunta orientadora:] ¿La información coincide con el soporte?
                p.mb-2 #[b Ejemplo:] Valor de la factura comparado con el registro interno.
                p.mb-0 #[b Recomendación:] Validar los datos antes y después de procesarlos mediante IA.
          .col-lg-3.order-1.order-lg-2.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t1/img3.png", alt="").img400.m-auto
      //- Fin Accordion 2
      p(data-aos="fade-left") Recolectar datos contables implica preparar información útil, protegida y verificable. Esta etapa mejora la confiabilidad de los resultados y reduce errores en la extracción financiera.
      Separador
      //- Inicio Tema1.5
      .row
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Alcance de la IA en la obtención de información financiera
      p(data-aos="fade-left") La IA puede apoyar la obtención, organización e interpretación preliminar de grandes volúmenes de información financiera. Para delimitar su participación, se presentan sus principales alcances y precauciones:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Extracción documental
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Extraer fechas, valores, terceros, conceptos y vencimientos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> Puede omitir datos si el archivo está incompleto, mezclado o mal digitalizado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Clasificación de información
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Agrupar ingresos, gastos, costos, cuentas por pagar o cuentas por cobrar.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> La clasificación debe validarse con criterios contables y normativos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Interpretación inicial
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Sintetizar resultados, variaciones y comportamientos financieros.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> No reemplaza el análisis profesional ni la validación documental.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Identificación de patrones
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Reconocer relaciones y comportamientos repetidos en pagos, ingresos, gastos o saldos.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> El patrón identificado no siempre permite determinar la causa del resultado.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Detección de alertas
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Señalar posibles duplicados, valores atípicos, datos faltantes o movimientos inusuales.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> Cada alerta debe comprobarse mediante soportes y revisiones cruzadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Apoyo en conciliaciones
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Comparar registros contables con extractos o reportes bancarios.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> Las diferencias deben verificarse antes de realizar ajustes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Hallazgos iniciales
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Formular observaciones sobre inconsistencias, riesgos o datos relevantes.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> Los hallazgos deben validarse con normativa, procedimientos y evidencia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Recomendaciones preliminares
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Proponer revisiones, confirmaciones o solicitudes de información adicional.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> La decisión final corresponde a la persona responsable del proceso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Síntesis documental
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Sintetizar condiciones generales de contratos, facturas o reportes.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> No reemplaza la revisión técnica del documento completo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_10.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Organización de datos
                ul.lista-ul.color-vinotinto-custom.mb-0
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Alcance:</b> Ordenar información por fechas, terceros, valores, conceptos o categorías.
                  li.d-flex
                    .fas.fa-check-circle.me-3
                    span <b>Precaución:</b> El resultado depende de la calidad, seguridad y pertinencia de los datos.
      //- Fin Slideshow
      p(data-aos="fade-left") La IA funciona mejor cuando la necesidad está delimitada y los datos están completos, organizados y protegidos. La información sensible debe tratarse mediante controles de seguridad y confidencialidad.
      p(data-aos="fade-right") Comprender el alcance de la IA permite utilizarla como apoyo para organizar información, generar alertas y orientar revisiones, sin sustituir la validación documental ni el criterio profesional.

</template>

<script>
export default {
  name: 'Tema1',
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
