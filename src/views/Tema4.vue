<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Ética, transparencia y riesgos en el uso de IA
      p(data-aos="fade-left") La inteligencia artificial puede apoyar el tratamiento inicial de la información financiera, pero su uso también implica riesgos éticos, legales y técnicos. Por ello, debe aplicarse con transparencia, responsabilidad y supervisión humana (UNESCO, 2024; OCDE, s. f.).
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Implicaciones éticas y legales del uso de IA
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            p(data-aos="fade-left") Las implicaciones éticas se relacionan con el uso responsable de la información y con los efectos que pueden generar los resultados obtenidos con inteligencia artificial. Las implicaciones legales se vinculan con el cumplimiento de normas sobre protección de datos, confidencialidad, seguridad de la información y responsabilidad frente a su tratamiento.
            p(data-aos="fade-right") En Colombia, el CONPES 4144 de 2025 orienta la Política Nacional de Inteligencia Artificial, mientras que la Circular Externa 002 de 2024 establece lineamientos para el tratamiento de datos personales en sistemas de IA (DNP, 2025; Superintendencia de Industria y Comercio, 2024).
            p.fw-bold(data-aos="fade-left") En el uso de inteligencia artificial aplicada a información financiera, deben considerarse diferentes situaciones que pueden generar implicaciones éticas o legales:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Protección de datos
                p Cargar bases con información de clientes, proveedores o trabajadores puede exponer datos personales o financieros. Debe utilizarse únicamente la información necesaria y aplicar medidas de protección.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Decisiones automatizadas
                p Una recomendación generada por IA no debe convertirse de forma automática en una decisión financiera, comercial o jurídica. El resultado requiere revisión y criterio profesional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Confidencialidad
                p La información contenida en nóminas, contratos, extractos o bases internas debe mantenerse restringida a las personas autorizadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Validación de resultados
                p Las alertas, clasificaciones o recomendaciones deben contrastarse con facturas, comprobantes, extractos y demás soportes antes de tomar decisiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta01_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Responsabilidad humana
                p Aunque la IA participe en el análisis, la responsabilidad por revisar, interpretar y decidir permanece en las personas responsables del proceso.
      //- Fin Slideshow
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Veracidad, privacidad y responsabilidad en datos financieros
      p(data-aos="fade-left") La información financiera utilizada en procesos apoyados por inteligencia artificial debe cumplir condiciones de calidad, protección y revisión para evitar errores o usos inadecuados.
      p(data-aos="fade-left") En este contexto, tres criterios orientan el tratamiento responsable de los datos financieros:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            .row.justify-content-center.g-4.mb-5.pt-5(data-aos="fade-up")
              .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
                  .position-absolute.top-0.start-50.translate-middle
                    img(src='@/assets/curso/temas/t4/tarjeta02_1.svg', alt='', style='width: 90px;')
                  h4.fw-bold.mb-3.mt-3 Veracidad
                  p.mb-0 La información utilizada por la IA debe corresponder a documentos reales, cifras correctas, periodos adecuados y soportes verificables. Si los datos están incompletos, desactualizados o mal clasificados, los resultados también pueden ser equivocados.
              .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
                  .position-absolute.top-0.start-50.translate-middle
                    img(src='@/assets/curso/temas/t4/tarjeta02_2.svg', alt='', style='width: 90px;')
                  h4.fw-bold.mb-3.mt-3 Privacidad
                  p.mb-0 Los datos personales y financieros presentes en facturas, nóminas, extractos, contratos o bases de clientes deben protegerse durante el análisis. La Ley 1581 de 2012 reconoce el derecho de las personas a conocer, actualizar y rectificar la información recopilada sobre ellas (Congreso de la República, 2012).
              .col-12.col-sm-6.col-lg-4
                .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
                  .position-absolute.top-0.start-50.translate-middle
                    img(src='@/assets/curso/temas/t4/tarjeta02_3.svg', alt='', style='width: 90px;')
                  h4.fw-bold.mb-3.mt-3 Responsabilidad
                  p.mb-0 Los resultados generados por IA no deben aceptarse de forma automática. Los hallazgos deben revisarse con documentos originales y criterio profesional, en coherencia con principios de transparencia, equidad y supervisión humana (UNESCO, 2024; OCDE, s. f.).
            p(data-aos="fade-left") Además, la Superintendencia de Industria y Comercio establece criterios como idoneidad, necesidad, razonabilidad y proporcionalidad para el tratamiento de datos personales en sistemas de IA (Superintendencia de Industria y Comercio, 2024).
            p(data-aos="fade-right") Para aplicar estos criterios en el tratamiento de información financiera, deben considerarse los siguientes controles:
            //- Inicio Accordion 1
            .bg--img_03.mt-5
              .row.justify-content-center
                .col-lg-3.mb-5.mb-lg-0
                  figure(data-aos="zoom-in")
                    img(src="@/assets/curso/temas/t4/img1.png", alt="").img400.m-auto
                .col-lg-9
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Veracidad de los datos")
                      p.mb-0 Los datos incompletos o incorrectos pueden generar conclusiones equivocadas. Se deben revisar cifras, fechas, soportes y posibles duplicados antes del análisis.
                    .row(titulo="Actualización de la información")
                      p.mb-0 El uso de datos vencidos puede afectar las decisiones. Por ello, debe confirmarse que la base corresponda al periodo revisado.
                    .row(titulo="Privacidad")
                      p.mb-0 La exposición de datos personales, bancarios o comerciales representa un riesgo. Se deben anonimizar identificaciones y cuentas cuando no sean necesarias.
                    .row(titulo="Finalidad")
                      p.mb-0 La información debe utilizarse únicamente para el propósito autorizado. Antes del análisis, debe definirse con claridad para qué se usarán los datos.
                    .row(titulo="Mínimo necesario")
                      p.mb-0 Debe evitarse cargar información excesiva. Solo se deben incluir columnas, documentos o campos indispensables para la consulta.
                    .row(titulo="Responsabilidad humana")
                      p.mb-0 Los resultados pueden contener errores o alertas falsas. Cada hallazgo debe validarse con documentos originales antes de tomar decisiones.
                    .row(titulo="Trazabilidad")
                      p.mb-0 Debe conservarse evidencia de cómo se obtuvo el resultado, incluyendo la base utilizada, la instrucción formulada, la respuesta de IA y la validación realizada.
                    .row(titulo="Confidencialidad")
                      p.mb-0 Los resultados no deben circular entre personas no autorizadas. Los hallazgos deben compartirse únicamente con los responsables del proceso.
            //- Fin Accordion 1
            Separador
            //- Inicio Tema4.3
            .row
              #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 4.3 Transparencia algorítmica, justicia y rendición de cuentas
            p(data-aos="fade-left") El uso responsable de inteligencia artificial en procesos financieros requiere comprender cómo se generan los resultados, prevenir tratamientos injustificados y establecer responsables sobre su revisión y utilización.
            p(data-aos="fade-left") Estos principios permiten mantener control sobre la forma en que se utiliza la inteligencia artificial y sobre los efectos de sus resultados:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Transparencia algorítmica
                p La transparencia algorítmica implica documentar cómo se utilizó una herramienta de IA en un proceso financiero. No requiere conocer su código interno, sino conservar evidencia de los datos utilizados, la instrucción formulada, el resultado generado y la forma en que fue revisado.
                p.mb-0 La transparencia y la explicabilidad favorecen la protección de derechos, la confianza y la supervisión humana en sistemas de inteligencia artificial (UNESCO, 2024).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Justicia
                p La justicia busca evitar que los resultados de la IA generen tratamientos desiguales o decisiones injustificadas hacia clientes, proveedores, trabajadores u otras personas.
                p.mb-0 Cuando los datos son incompletos, desactualizados o sesgados, pueden producirse clasificaciones o alertas equivocadas. Por ello, los sistemas deben incorporar mecanismos de revisión y corrección, en coherencia con principios de robustez, seguridad y confiabilidad (OCDE, s. f.).
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t4/tarjeta02_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Rendición de cuentas
                p La rendición de cuentas exige definir quién prepara la información, formula la consulta, revisa los resultados y toma la decisión final.
                p.mb-0 Aunque una herramienta genere alertas o recomendaciones, la responsabilidad sobre sus efectos permanece en las personas encargadas del proceso. El marco de gestión de riesgos de IA del NIST también plantea la necesidad de gestionar los riesgos asociados con su uso.
      //- Fin Slideshow 
      p.mb-5(data-aos="fade-left") La aplicación de estos principios requiere controles que permitan justificar, verificar y documentar los resultados obtenidos con inteligencia artificial:
      //- Inicio Tabla
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 10.
            span Transparencia, justicia y rendición de cuentas en IA financiera
          .tabla-a
            table
              thead
                tr
                  th(style="width: 25%") Aspecto
                  th(style="width: 35%") Riesgo si no se controla
                  th(style="width: 40%") Cuidado práctico
              tbody
                tr
                  td Datos utilizados
                  td Analizar información incompleta, desactualizada o no autorizada.
                  td Guardar la base usada y verificar periodo, campos y soportes.
                tr
                  td <i>Prompt</i> aplicado
                  td Obtener respuestas ambiguas o difíciles de comprobar.
                  td Conservar la instrucción formulada y sus ajustes.
                tr
                  td Resultado generado
                  td Aceptar hallazgos sin evidencia suficiente.
                  td Comparar la respuesta con documentos originales.
                tr
                  td Explicación del hallazgo
                  td No saber por qué la IA señaló una alerta.
                  td Solicitar que la herramienta indique criterios, coincidencias o razones de revisión.
                tr
                  td Justicia del análisis
                  td Clasificar injustamente a clientes, proveedores o trabajadores.
                  td Revisar contexto, pagos recientes, soportes y excepciones.
                tr
                  td Supervisión humana
                  td Tomar decisiones automáticas sin validación.
                  td Definir responsable de revisión y aprobación.
                tr
                  td Trazabilidad
                  td No contar con evidencia del proceso realizado.
                  td Guardar archivo base, <i>prompt</i>, respuesta, fecha y validación.
                tr
                  td Rendición de cuentas
                  td No saber quién responde por el uso del resultado.
                  td Asignar responsables por preparación, análisis, revisión y decisión.
      //- FinTabla
      p(data-aos="fade-left") La transparencia, la justicia y la rendición de cuentas permiten que los resultados generados con IA puedan explicarse, verificarse y atribuirse a responsables definidos.
      Separador
      //- Inicio Tema4.4
      .row
        #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.4 Sesgos algorítmicos, errores de predicción y dependencia tecnológica
      p(data-aos="fade-left") Los resultados generados por inteligencia artificial pueden verse afectados por sesgos, errores de predicción o dependencia tecnológica, especialmente cuando los datos son incompletos, desactualizados o se interpretan sin suficiente contexto.
      p(data-aos="fade-left") Estos riesgos pueden diferenciarse según su origen y efecto en el análisis financiero:
      .row.justify-content-center.g-4.mb-5.pt-5(data-aos="fade-up")
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta03_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Sesgos algorítmicos
            p.mb-0 Surgen cuando los datos o criterios utilizados generan resultados parciales, injustos o poco representativos. La UNESCO destaca la importancia de la equidad, la supervisión humana y la transparencia en el uso de IA (UNESCO, 2024).
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta03_2.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Errores de predicción
            p.mb-0 Se presentan cuando una estimación o alerta no corresponde con la realidad financiera. Pueden originarse en datos insuficientes, periodos inadecuados o valores atípicos.
        .col-12.col-sm-6.col-lg-4
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta03_3.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Dependencia tecnológica
            p.mb-0 Ocurre cuando se aceptan resultados de IA sin revisar soportes, contexto o criterios profesionales. La revisión humana sigue siendo necesaria en procesos sensibles (NIST, 2026).
      p(data-aos="fade-left") En la práctica, estos riesgos pueden manifestarse de distintas maneras:
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
                              img(src='@/assets/curso/temas/t4/tarjeta04_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Datos incompletos
                            p.text-start.mb-2 Una base parcial o desactualizada puede generar clasificaciones equivocadas.
                            p.text-start.mb-0.text-color-acento-contenido <b>Cuidado:</b> actualizar y validar la información antes del análisis.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Mala clasificación
                            p.text-start.mb-2 La IA puede interpretar incorrectamente una categoría financiera.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> revisar la política contable y el uso real del registro.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Datos no representativos
                            p.text-start.mb-2 Una muestra limitada puede producir resultados poco generalizables.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> utilizar periodos comparables y explicar excepciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Error de predicción
                            p.text-start.mb-2 Una estimación puede no cumplirse debido a supuestos incorrectos.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> revisar fechas, valores y contexto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Falsa alerta
                            p.text-start.mb-2 La IA puede señalar una inconsistencia inexistente.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> contrastar el hallazgo con facturas, comprobantes y extractos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Omisión de alerta
                            p.text-start.mb-2 La herramienta puede no identificar una inconsistencia real.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> mantener revisión manual en campos críticos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Dependencia tecnológica
                            p.text-start.mb-2 Aceptar un resultado sin validación puede conducir a decisiones erróneas.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> exigir revisión humana y soporte documental.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t4/tarjeta04_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Falta de contexto
                            p.text-start.mb-2 La IA puede desconocer acuerdos, excepciones o políticas internas.
                            p.text-start.mb-0.fw.text-color-acento-contenido <b>Cuidado:</b> incorporar contexto en la instrucción y validar con responsables.
            //- Fin Carrusel
            p(data-aos="fade-left") Para contextualizar estos riesgos, se presenta una situación relacionada con el análisis de cartera vencida:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-8.p-4.bg-color-6
          p.fw-bold Ejemplo aplicado
          p Una empresa utiliza IA para revisar su cartera vencida y priorizar posibles riesgos de incumplimiento. La herramienta identifica varios clientes como de alto riesgo.
          p Al validar los soportes, la persona responsable encuentra pagos recientes no actualizados y una fecha de vencimiento incorrecta. En consecuencia, los resultados obtenidos eran parcialmente equivocados.
          p La empresa debe actualizar la información, revisar los soportes y repetir el análisis antes de tomar decisiones.
      p(data-aos="fade-left") Antes de aceptar un resultado generado por inteligencia artificial, conviene realizar las siguientes comprobaciones:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Accordion 1
            .bg--img_03
              .row.justify-content-center
                .col-lg-10
                  AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
                    .row(titulo="Calidad y actualización de la base")
                      p.mb-0 Debe verificarse que la información esté completa, actualizada y respaldada por datos recientes.
                    .row(titulo="Correspondencia del periodo")
                      p.mb-0 Los datos deben pertenecer al año, mes o corte definido para el análisis.
                    .row(titulo="Explicación de la alerta")
                      p.mb-0 Debe identificarse qué criterios, coincidencias o datos llevaron a la IA a generar el hallazgo.
                    .row(titulo="Validación con soportes")
                      p.mb-0 Los resultados deben compararse con facturas, contratos, extractos, comprobantes u otros documentos originales.
                    .row(titulo="Revisión del contexto")
                      p.mb-0 Deben considerarse acuerdos de pago, autorizaciones, políticas internas u otras condiciones que puedan modificar la interpretación.
                    .row(titulo="Impacto sobre terceros")
                      p.mb-0 Se debe evaluar si una recomendación puede afectar injustamente a clientes, proveedores o trabajadores.
                    .row(titulo="Conservación de evidencia")
                      p.mb-0 Debe guardarse la base utilizada, la instrucción formulada, la respuesta obtenida y la validación final.
                    .row(titulo="Responsabilidad humana")
                      p.mb-0 La decisión definitiva debe quedar en cabeza de una persona responsable y no de la herramienta tecnológica.
            //- Fin Accordion 1
            p(data-aos="fade-left") Los sesgos, errores de predicción y dependencia tecnológica exigen revisar datos, contexto y soportes antes de aceptar cualquier resultado generado por IA.
            p(data-aos="fade-right") El siguiente pódcast complementa el análisis de situaciones en las que una respuesta técnicamente formulada puede conducir a conclusiones equivocadas:
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#71edef") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Cuando la IA se equivoca: riesgos en el análisis financiero
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t4/img2.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema4.5
      .row
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Controles internos y normativos aplicables al uso de IA financiera
      p(data-aos="fade-left") Los controles aplicados al uso de inteligencia artificial permiten prevenir errores, proteger información, revisar resultados y conservar evidencia del proceso. Su aplicación debe considerar tanto las medidas internas de la organización como las disposiciones relacionadas con el tratamiento responsable de datos.
      p(data-aos="fade-left") Estos controles cumplen funciones diferentes, pero complementarias, en el uso de inteligencia artificial financiera:
      .row.justify-content-center.g-4.mb-5.pt-5(data-aos="fade-up")
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta05_1.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Controles internos
            p.mb-0 Establecen quién puede utilizar las herramientas, qué información puede procesarse, quién valida los resultados y cómo se conserva la evidencia del análisis.
        .col-12.col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta05_2.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Controles normativos
            p.mb-0 Orientan el cumplimiento de disposiciones sobre protección de datos, confidencialidad, seguridad, gestión documental y responsabilidad frente al tratamiento de información financiera. En Colombia, estos aspectos se relacionan con el CONPES 4144 de 2025 y la Circular Externa 002 de 2024 (DNP, 2025; Superintendencia de Industria y Comercio, 2024).
        .col-12.col-sm-6.col-lg-4
          .tarjeta.bg-color-4.rounded-4.p-4.pt-5.h-100.d-flex.flex-column.align-items-center.position-relative
            .position-absolute.top-0.start-50.translate-middle
              img(src='@/assets/curso/temas/t4/tarjeta05_3.svg', alt='', style='width: 90px;')
            h4.fw-bold.mb-3.mt-3 Gestión del riesgo
            p.mb-0 Los controles deben mantenerse durante todo el uso de la IA para reducir riesgos asociados con los datos, los resultados y las decisiones derivadas del análisis (NIST, 2026).
      p(data-aos="fade-left") En esta tabla muestra controles prácticos que pueden aplicarse antes, durante y después de usar inteligencia artificial en procesos financieros.
      p(data-aos="fade-right") En la práctica, los controles pueden integrarse en tres momentos del análisis financiero con inteligencia artificial:
      .row.bg-fondo-2.justify-content-center(data-aos="fade-right")
        .col-10
          .pt-3.pb-5.px-5      
            //- Linea de tiempo
            .row.justify-content-center
              .col-lg-10
                PasosA.color-acento-contenido.mb-4(tipo="n")
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Preparar
                      p Antes del análisis se define la finalidad, se revisa la calidad de los archivos y se protege la información personal o confidencial.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_1.svg', alt='').img125
                  .row.align-items-center
                    .col-12.col-lg-auto.mb-3.mb-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_2.svg', alt='').img125
                    .col-12.col-lg.text-start
                      h4 Controlar
                      p Durante el procesamiento se restringe el acceso, se conserva la instrucción utilizada y se revisan los resultados preliminares generados por la herramienta.
                  .row.align-items-center
                    .col-12.col-lg
                      h4 Validar y conservar
                      p Después del análisis se contrastan los resultados con los soportes originales, se documenta la decisión y se conserva la evidencia necesaria para mantener la trazabilidad.
                    .col-12.col-lg-auto.mt-3.mt-lg-0
                      figure
                        img(src='@/assets/curso/temas/t3/tarjeta07_3.svg', alt='').img125
            //- Fin Linea de tiempo
      p(data-aos="fade-left") La aplicación de estos controles puede analizarse mediante una situación financiera:
      .row.justify-content-center.mb-5(data-aos="fade-left") 
        .col-lg-10.p-4.bg-color-6.rounded-4
          h4.fw-bold.mb-3 Ejercicio aplicado
          p.mb-3 Una empresa utiliza una herramienta de IA para revisar una base de pagos a proveedores del mes. La base contiene nombre del proveedor, NIT, número de factura, fecha, valor, cuenta bancaria, comprobante de egreso y estado del pago. La IA identifica tres posibles alertas: dos pagos con el mismo valor al mismo proveedor, una factura sin comprobante asociado y un pago registrado con fecha diferente a la del extracto bancario.
          p.mb-4 A partir del caso, responder:
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 11.
            span Preguntas y respuestas esperadas
          .tabla-a.color-acento-contenido
            table              
              thead
                tr
                  th(style="width: 40%;") Pregunta
                  th(style="width: 60%;") Respuesta esperada
              tbody
                tr
                  td ¿Qué datos deberían protegerse antes de cargar la base en IA?
                  td NIT, cuentas bancarias, datos de contacto o información que no sea necesaria para identificar la alerta.
                tr
                  td ¿Qué control debe aplicarse antes del análisis?
                  td Revisar finalidad, calidad de la base, datos personales, autorización y necesidad de la información cargada.
                tr
                  td ¿Qué control debe aplicarse durante el análisis?
                  td Guardar el <i>prompt</i>, controlar el acceso a la herramienta y verificar qué datos fueron utilizados.
                tr
                  td ¿Qué control debe aplicarse después del análisis?
                  td Validar cada alerta con facturas, comprobantes de egreso y extractos bancarios.
                tr
                  td ¿Se puede tomar una decisión solo con la respuesta de la IA?
                  td No. La respuesta es preliminar y debe confirmarse con soportes originales y criterio profesional.
                tr
                  td ¿Qué evidencia debe conservarse?
                  td Base utilizada, <i>prompt</i> formulado, respuesta generada, documentos revisados y decisión final sobre cada alerta.
      p(data-aos="fade-left") Los controles internos y normativos permiten utilizar la IA con mayor seguridad, trazabilidad y responsabilidad durante el tratamiento de información financiera.

</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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

