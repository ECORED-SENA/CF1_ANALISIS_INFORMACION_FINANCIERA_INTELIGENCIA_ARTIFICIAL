<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de inteligencia artificial (IA) para hechos económicos',
      titulo:
        'Cuestionario de verificación sobre fundamentos de IA para hechos económicos.',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos y procedimientos necesarios para utilizar herramientas de inteligencia artificial en el tratamiento inicial de hechos económicos, teniendo en cuenta la identificación de la información financiera, la normativa aplicable, la protección de datos, el uso ético de la inteligencia artificial (IA), la formulación de <i>prompts</i> y la validación de los resultados mediante soportes documentales.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa recibe una cotización de un proveedor, pero aún no ha aceptado la oferta ni ha recibido bienes o servicios. ¿Cómo debe interpretarse esta situación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Como un gasto causado que debe registrarse de inmediato en los libros contables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como un hecho económico confirmado que debe reconocerse con base en la cotización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Como una situación preliminar que aún no necesariamente constituye hecho económico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Como una obligación financiera que debe registrarse porque ya existe un valor cotizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La cotización por sí sola no confirma una operación que afecte la información financiera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una factura de compra fue recibida en junio, pero el pago se realizará en julio. ¿Qué aspecto debe revisarse para reconocer adecuadamente el hecho económico?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La fecha para efectuar el pago y el comprobante bancario que la respalda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La fecha de ocurrencia de la operación y el soporte que la respalda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La fecha de registro del proveedor y el documento comercial que identifica la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad de efectivo de la empresa y el saldo bancario registrado al cierre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El reconocimiento depende de la ocurrencia del hecho económico y del soporte, no solo del pago.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una herramienta de IA extrae de una factura la fecha, el proveedor, el valor antes de impuestos y el IVA. ¿Qué debe hacerse antes de aceptar esta información?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comparar los datos con el documento original y la clasificación contable correspondiente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar los datos extraídos automáticamente y asignar la clasificación sugerida por la herramienta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar la respuesta generada por la IA como soporte principal y conservarla como evidencia contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar la factura original por la tabla generada durante la extracción de los datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La IA apoya la extracción, pero los datos deben validarse con el soporte original.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'En una base de cuentas por pagar, la IA identifica dos registros con el mismo proveedor y valor. ¿Cuál es la interpretación más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Existe un fraude confirmado que debe reportarse de inmediato ante el área responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ambos registros deben eliminarse de la base de datos para evitar la duplicidad contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La herramienta de IA debe decidir cuál de los dos registros se debe conservar en la base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Hay una alerta preliminar que debe revisarse con facturas y comprobantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La coincidencia puede indicar duplicidad, pero debe verificarse documentalmente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función principal de la normativa financiera en el tratamiento de hechos económicos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir el análisis profesional mediante la aplicación obligatoria de reglas automáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir criterios para reconocer, medir, presentar y conservar información financiera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Permitir que todas las operaciones administrativas sean registradas como hechos económicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Autorizar el uso ilimitado de herramientas tecnológicas en los procesos de contabilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Autorizar el uso libre de herramientas tecnológicas en contabilidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Por qué la protección de datos es relevante al usar IA con información financiera?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque los documentos financieros pueden contener datos personales, bancarios o comerciales que requieren tratamiento seguro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque toda la información financiera debe publicarse y permanecer disponible para garantizar la transparencia de las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque las herramientas de IA eliminan automáticamente cualquier dato sensible incluido en los documentos financieros procesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque la protección de datos solo se aplica cuando se procesa información financiera perteneciente a entidades públicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La información financiera puede incluir datos personales o sensibles que deben protegerse.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una empresa quiere analizar pagos duplicados con IA. ¿Cuál de las siguientes acciones respeta mejor el principio de mínimo necesario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cargar toda la base de proveedores, incluidas direcciones, teléfonos y cuentas bancarias completas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cargar todos los documentos completos, sin revisar previamente la información contenida en ellos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compartir la base de datos completa con todos los usuarios vinculados al área administrativa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cargar únicamente proveedor codificado, número de factura, fecha, valor y referencia del pago.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Solo deben usarse los datos necesarios para cumplir la finalidad del análisis.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una práctica adecuada de estandarización antes de usar IA en archivos financieros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar todos los soportes financieros en una sola carpeta para facilitar y agilizar su procesamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener diferentes formatos de fecha en los archivos para conservar la información en su forma original.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Nombrar archivos con criterios uniformes de fecha, tipo de documento, tercero y número.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Utilizar colores como único criterio para organizar, diferenciar y clasificar los registros financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La estandarización facilita consulta, comparación y análisis con IA.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'Una base financiera tiene columnas llamadas “valor”, “monto”, “total pagado” y “pago”, aunque todas se refieren a conceptos distintos. ¿Qué riesgo genera esta situación?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Puede mejorar la interpretación, clasificación y comparación de los datos financieros procesados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Puede generar confusión en la lectura, clasificación o comparación de datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Puede permitir que la IA deduzca el significado correcto de cada encabezado durante el análisis.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Puede garantizar la uniformidad de los datos sin necesidad de modificar los encabezados utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Encabezados ambiguos pueden producir errores en la interpretación de la herramienta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el uso más adecuado de una herramienta OCR en un proceso financiero?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Convertir documentos escaneados en texto para facilitar la extracción de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aprobar automáticamente los pagos registrados sin requerir intervención ni validación humana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir la política contable aplicable a cada factura mediante el procesamiento de su contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar los soportes financieros originales por los archivos obtenidos durante el procesamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El OCR ayuda a leer documentos, pero no valida por sí solo el tratamiento contable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una empresa carga una base de cartera desactualizada en una herramienta de IA. La IA clasifica a varios clientes como de alto riesgo. ¿Qué problema puede presentarse?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una medición financiera automática y definitiva para el pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una confirmación normativa del riesgo de todos los clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una validación suficiente para iniciar acciones de recobros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un sesgo o error por información incompleta o no actualizada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los datos desactualizados pueden generar alertas injustas o equivocadas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué significa la transparencia algorítmica en un análisis financiero con IA?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocer obligatoriamente el código fuente utilizado para desarrollar y configurar la plataforma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que cualquier persona consulte libremente todos los resultados obtenidos y almacenados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Documentar qué datos se usaron, qué <i>prompt</i> se formuló, qué resultado se obtuvo y cómo se validó.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Aceptar las respuestas de la IA cuando estén organizadas y presentadas correctamente en cuadros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La transparencia exige trazabilidad sobre el proceso y la revisión del resultado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una señal de dependencia tecnológica en el uso de IA financiera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Validar cada alerta con soportes documentales y datos originales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Guardar el <i>prompt</i> y la respuesta generada para dejar el registro.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Anonimizar datos personales antes de cargarlos en la herramienta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aceptar recomendaciones de IA sin revisar documentos ni contexto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La dependencia surge cuando se reemplaza el criterio humano por la respuesta automática.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes controles debe aplicarse después de usar IA para detectar pagos duplicados?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar todos los soportes financieros puesto que la IA ya generó una respuesta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Validar cada alerta con facturas, comprobantes de egreso y extractos bancarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Compartir la respuesta completa de la IA con todos los proveedores registrados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Registrar los ajustes contables sugeridos sin realizar otra revisión adicional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Todo hallazgo generado por IA debe confirmarse con evidencia documental.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué elemento no debería faltar en un <i>prompt</i> financiero bien estructurado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contexto, objetivo, datos disponibles, tarea, formato de salida y límites.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una instrucción muy amplia para permitir mayor libertad de acción a la IA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La orden de tomar decisiones definitivas, basadas únicamente en los datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La petición de evitar cualquier validación humana después de la respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un <i>prompt</i> financiero requiere precisión, criterios y límites de uso.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál <i>prompt</i> está mejor formulado para revisar cuentas por pagar?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revise esta información financiera e indique qué encuentra en los datos, explique de manera general sus observaciones y mencione cualquier aspecto que considere importante para la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Señale qué errores hay en la información, corrija la contabilidad, modifique los registros que considere necesarios y entregue los resultados finales sin solicitar ninguna validación adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analice esta base de cuentas por pagar del mes de junio e identifique facturas vencidas, posibles duplicados y registros sin comprobante; presente una tabla con alerta, razón y acción sugerida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Revise toda la información financiera actual, tome una mejor decisión, aplique los cambios que considere convenientes y presente una conclusión definitiva sin explicar los criterios utilizados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Delimita periodo, tarea, criterios y formato de respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Si la IA entrega una respuesta general y sin registros específicos, ¿qué acción corresponde dentro de la iteración del <i>prompt</i>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aceptar la respuesta pues la herramienta realizó el análisis completo de la información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar los datos y repetir el análisis desde el inicio sin agregar contexto adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solicitar a la IA que invente los datos ausentes y complete directamente la información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ajustar la instrucción indicando criterios, columnas, formato y límites de la respuesta.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Iterar implica mejorar la instrucción para obtener una respuesta más verificable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Por qué se recomienda archivar <i>prompts</i> corregidos y respuestas de IA?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reemplazar soportes originales utilizados en el proceso financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para conservar trazabilidad del análisis y facilitar revisiones futuras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para impedir que algunas personas revisen posteriormente los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para utilizar siempre la misma respuesta durante los periodos contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Guardar <i>prompts</i>, respuestas y validaciones permite explicar cómo se obtuvo el resultado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una IA sugiere clasificar la compra de un computador como gasto del periodo. ¿Qué revisión debe realizarse antes de aceptar la sugerencia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar si el computador debe tratarse como gasto, activo o inventario según uso, política contable y materialidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Registrar el gasto porque la IA ya identificó el concepto y aceptar la sugerencia sin hacer alguna revisión adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clasificar el equipo como activo, sin revisar los criterios de uso, la política contable ni su nivel de materialidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Tomar como único criterio el valor total de la factura y registrar directamente la clasificación propuesta por la IA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La clasificación depende del contexto, la política contable y el tratamiento aplicable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál afirmación resume mejor el uso responsable de IA en hechos económicos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La IA puede reemplazar la normativa financiera cuando los datos están completos, organizados para efectuar el registro contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La IA debe utilizarse solo al redactar textos y no para revisar, organizar ni analizar la información financiera de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La IA sirve como apoyo para organizar, analizar y generar alertas, pero sus resultados requieren validación humana y documental.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La IA garantiza resultados exactos cuando la información se entrega completa, bien organizada y registrada en una base de Excel.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La IA apoya el proceso, pero no sustituye soportes, normativa ni criterio profesional.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
