/* =====================================================================
   CONTENIDOS DE LA PLATAFORMA  ·  Bases Bioquímicas para Enfermería
   Este es el único archivo que necesitas editar para agregar material.

   MODULES   → módulos (resumen de cada tema)
   all  : (opcional, en un módulo) true = cada ronda muestra todas sus preguntas
   QUESTIONS → banco de preguntas. En cada pregunta:
       m    : id del módulo
       q    : enunciado
       o    : alternativas. LA PRIMERA ES LA CORRECTA (la app las mezcla)
       hint : pista (opcional)
       e    : explicación que se muestra después de responder
       case : texto de la situación o caso (opcional)
   ===================================================================== */

const MODULES = [
  {
    id: "glucolisis",
    facts: [["2", "ATP netos"], ["2", "NADH"], ["2", "piruvato"]],
    title: "Glicólisis",
    tag: "Citosol · 10 reacciones",
    blurb: "La vía que parte la glucosa en dos piruvatos y deja ATP y NADH.",
    summary: [
      { h: "Lo esencial", items: [
        "Ocurre en el <b>citosol</b> de todas las células; no necesita oxígeno.",
        "<b>Glucosa (6C) → 2 piruvato (3C) + 2 ATP + 2 NADH</b>, en 10 reacciones enzimáticas.",
        "<b>Fase preparatoria</b>: la glucosa se activa con gasto de 2 ATP y se forman 2 triosas fosfato. <b>Fase oxidativa o de ganancia</b>: se producen 4 ATP y 2 NADH.",
        "<b>Balance neto: 2 ATP + 2 NADH + 2 piruvato</b> por glucosa.",
        "Además de la glucosa, pueden entrar a la vía fructosa, galactosa y glicerol-fosfato."
      ]},
      { h: "Puntos de control (enzimas reguladas)", items: [
        "Se regula en sus <b>3 puntos irreversibles</b>: hexoquinasa, fosfofructoquinasa-1 (PFK-1) y piruvato quinasa.",
        "<b>Hexoquinasa / glucoquinasa</b>: atrapa la glucosa como glucosa-6-fosfato. La hexoquinasa es inhibida por su producto, la glucosa-6-fosfato; la glucoquinasa (hígado) tiene Km alto y actúa cuando hay mucha glucosa.",
        "<b>Fosfofructoquinasa-1 (PFK-1)</b>: paso limitante. Activada por ADP y AMP; inhibida por ATP y citrato.",
        "<b>Piruvato quinasa</b>: inhibida por ATP y acetil-CoA.",
        "<b>Hormonas</b>: al subir la glicemia, la insulina (que libera el páncreas) activa la vía; el glucagón la disminuye."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Los <b>eritrocitos</b> no tienen mitocondrias: dependen solo de la glicólisis.",
        "El cerebro consume ~120 g de glucosa al día: por eso la glicemia debe mantenerse estable."
      ]}
    ]
  },
  {
    id: "fermentacion",
    facts: [["2", "ATP netos"], ["LDH", "enzima clave"], ["Cori", "músculo ↔ hígado"]],
    title: "Fermentación láctica",
    tag: "Citosol · sin oxígeno",
    blurb: "Qué hace la célula con el piruvato cuando no hay oxígeno o mitocondrias.",
    summary: [
      { h: "Lo esencial", items: [
        "Piruvato + NADH → <b>lactato + NAD⁺</b>, catalizado por la <b>lactato deshidrogenasa (LDH)</b>. Ocurre en el citosol.",
        "Su función real es <b>regenerar NAD⁺</b>, para que la glicólisis pueda seguir produciendo ATP.",
        "Rendimiento: <b>2 ATP netos por glucosa</b> (solo los de la glicólisis).",
        "Se activa en <b>hipoxia</b>, en el músculo con ejercicio intenso y en células sin mitocondrias (eritrocitos).",
        "El destino del piruvato depende del oxígeno. Sin él: <b>fermentación láctica</b> (músculo esquelético, se excreta lactato) o <b>fermentación alcohólica</b> (levaduras, se forman etanol y CO₂).",
        "El <b>eritrocito</b> termina siempre en lactato, incluso con oxígeno, porque no tiene mitocondrias."
      ]},
      { h: "Ciclo de Cori", items: [
        "El músculo exporta lactato → el hígado lo convierte en glucosa (<b>gluconeogénesis</b>) → la glucosa vuelve al músculo.",
        "El hígado gasta ATP en esta vía, pero así se recicla el lactato."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Acidosis láctica</b>: shock, sepsis o hipoperfusión → hipoxia tisular → lactato ↑ y pH ↓.",
        "El lactato sérico elevado es un marcador de gravedad en pacientes críticos."
      ]}
    ]
  },
  {
    id: "krebs",
    facts: [["3", "NADH por vuelta"], ["1", "FADH₂ y 1 GTP"], ["2", "CO₂"]],
    title: "Ciclo de Krebs",
    tag: "Matriz mitocondrial",
    blurb: "Oxida el acetil-CoA a CO₂ y carga coenzimas para la cadena de transporte.",
    summary: [
      { h: "Del piruvato al ciclo", items: [
        "Con oxígeno, el piruvato entra a la mitocondria por la <b>piruvato translocasa</b> y el <b>complejo piruvato deshidrogenasa (PDH)</b> lo convierte en <b>acetil-CoA + CO₂ + NADH</b> (descarboxilación oxidativa). Es el punto de partida de la respiración celular.",
        "<b>Regulación de la PDH</b>: inhibida por ATP, NADH, acetil-CoA y por fosforilación de la subunidad E1; activada por AMP, NAD⁺ y por desfosforilación de E1.",
        "La PDH necesita cofactores: <b>tiamina (B1)</b>, riboflavina, niacina, ácido pantoténico y ácido lipoico."
      ]},
      { h: "El ciclo (matriz mitocondrial)", items: [
        "Acetil-CoA (2C) + oxaloacetato (4C) → <b>citrato</b> (6C), por la citrato sintasa.",
        "<b>Por vuelta (1 acetil-CoA):</b> 3 NADH + 1 FADH₂ + 1 GTP/ATP + 2 CO₂.",
        "El ciclo tiene <b>8 reacciones</b>; 4 son redox (3 reducen NAD⁺ y 1 reduce FAD).",
        "Por glucosa hay 2 vueltas (2 acetil-CoA).",
        "<b>En presencia de oxígeno</b>, el ciclo funciona con normalidad: no usa O₂ directamente, pero depende de él para reoxidar NADH y FADH₂ en la cadena respiratoria."
      ]},
      { h: "Puntos de control", items: [
        "<b>Citrato sintasa</b>, <b>isocitrato deshidrogenasa</b> y <b>α-cetoglutarato deshidrogenasa</b>.",
        "Se inhiben con alta energía (ATP, NADH) y se activan con baja energía (NAD⁺, FAD, ADP, AMP).",
        "Un NADH alto indica mucho poder reductor disponible y, por lo tanto, alta energía."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Déficit de tiamina</b> (alcoholismo, desnutrición): PDH falla → se acumulan piruvato y lactato."
      ]}
    ]
  },
  {
    id: "fosforilacion",
    facts: [["O₂", "aceptor final"], ["3 · 2", "ATP por NADH · FADH₂"], ["36–38", "ATP por glucosa"]],
    title: "Cadena de transporte y fosforilación oxidativa",
    tag: "Membrana mitocondrial interna",
    blurb: "Donde se produce la mayor parte del ATP, gracias al oxígeno.",
    summary: [
      { h: "Cómo funciona", items: [
        "Ocurre en la <b>membrana mitocondrial interna</b>.",
        "Cuatro complejos:<br><b>I</b> (NADH deshidrogenasa)<br><b>II</b> (succinato deshidrogenasa)<br><b>III</b> (citocromo bc1)<br><b>IV</b> (citocromo oxidasa)",
        "La <b>ubiquinona</b> y el <b>citocromo c</b> llevan los electrones entre los complejos.",
        "NADH entrega electrones al <b>complejo I</b>; FADH₂ al <b>complejo II</b>; luego pasan por III y IV. El <b>O₂ es el aceptor final</b> y se reduce a H₂O (complejo IV).",
        "Los complejos I, III y IV bombean H⁺ al espacio intermembrana → <b>gradiente de protones</b>. El <b>complejo II no bombea</b> protones.",
        "La <b>ATP sintasa</b> (F₁F₀) usa el retorno de H⁺ para fosforilar ADP → ATP: los protones pasan por el canal F₀ y la síntesis ocurre en F₁."
      ]},
      { h: "Rendimiento", items: [
        "Según el material del curso: <b>3 ATP por NADH</b> y <b>2 ATP por FADH₂</b>.",
        "Glucosa en condiciones aerobias: <b>36–38 ATP</b>. En anaerobiosis: <b>2 ATP</b>."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Cianuro</b> y <b>monóxido de carbono</b> inhiben el complejo IV: la célula no puede usar el O₂ aunque haya.",
        "<b>Desacopladores</b> (ej. 2,4-dinitrofenol, termogenina de la grasa parda) disipan el gradiente: se consume O₂ pero se produce calor en vez de ATP."
      ]}
    ]
  },
  {
    id: "glucogeno",
    facts: [["α-1,4", "enlaces lineales"], ["α-1,6", "ramificaciones"], ["Hígado", "tiene glucosa-6-fosfatasa"]],
    title: "Síntesis y degradación de glicógeno",
    tag: "Hígado y músculo",
    blurb: "Cómo se almacena y se moviliza la glucosa según las necesidades.",
    summary: [
      { h: "¿Qué es?", items: [
        "El <b>glicógeno</b> es un homopolisacárido formado por cadenas ramificadas de glucosa.",
        "Se almacena en el <b>hígado</b> y en el <b>músculo</b>."
      ]},
      { h: "Glicogenogénesis (síntesis)", items: [
        "La glucosa que entra a la célula se fosforila a <b>glucosa-6-fosfato</b> (glucoquinasa, una isoenzima de la hexoquinasa).",
        "La <b>fosfoglucomutasa</b> la convierte en glucosa-1-fosfato y luego en <b>UDP-glucosa</b>.",
        "La <b>glicógeno sintasa</b> une las moléculas de UDP-glucosa con enlaces <b>α-1,4</b>; la <b>enzima ramificante</b> agrega los enlaces <b>α-1,6</b> de las ramificaciones.",
        "Este proceso se activa con <b>insulina</b>."
      ]},
      { h: "Glicogenólisis (degradación)", items: [
        "La <b>glicógeno fosforilasa</b> libera glucosa-1-fosfato al romper los enlaces <b>α-1,4</b>; no puede romper los <b>α-1,6</b> de las ramificaciones.",
        "La <b>enzima desramificante</b> traslada 3 glucosas de la rama a la cadena vecina y libera la glucosa que queda unida por el enlace α-1,6, para que la fosforilasa siga trabajando.",
        "La glucosa-1-fosfato se convierte en glucosa-6-fosfato por la fosfoglucomutasa.",
        "<b>Hígado:</b> se activa con glucagón. La <b>glucosa-6-fosfatasa</b> libera glucosa libre a la sangre y restaura la glicemia, por ejemplo en el ayuno (hipoglicemia).",
        "<b>Músculo:</b> no tiene glucosa-6-fosfatasa, por lo que la glucosa se usa en el propio músculo. Se activa con adrenalina (epinefrina)."
      ]},
      { h: "Regulación hormonal", items: [
        "<b>Insulina</b> (después de comer): <b>activa</b> la síntesis de glicógeno e <b>inhibe</b> su degradación.",
        "<b>Glucagón</b> (ayuno): <b>activa</b> la degradación de glicógeno en el hígado e <b>inhibe</b> su síntesis.",
        "<b>Adrenalina</b> (estrés o ejercicio): <b>activa</b> la degradación de glicógeno en el hígado y en el músculo."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Von Gierke</b> (déficit de glucosa-6-fosfatasa): hipoglicemia en ayuno y hepatomegalia.",
        "<b>McArdle</b> (déficit de fosforilasa muscular): calambres con el ejercicio y lactato que no sube."
      ]}
    ]
  },
  {
    id: "hormonas",
    facts: [["70–99", "mg/dL en ayunas"], ["Insulina", "baja la glicemia"], ["Glucagón", "sube la glicemia"]],
    title: "Homeostasis de la glicemia",
    tag: "Regulación por insulina y glucagón",
    blurb: "Dos hormonas opuestas que mantienen la glicemia entre 70 y 99 mg/dL en ayunas.",
    summary: [
      { h: "Insulina", items: [
        "Es una hormona del <b>páncreas</b> que se libera <b>después de comer</b>, cuando la glicemia está alta.",
        "↑ captación de glucosa en músculo y tejido adiposo (<b>GLUT4</b>); ↑ glicólisis; ↑ glicogenogénesis; ↑ síntesis de lípidos.",
        "↓ gluconeogénesis, ↓ glicogenólisis, ↓ lipólisis."
      ]},
      { h: "Glucagón", items: [
        "Es una hormona del <b>páncreas</b> que se libera <b>en el ayuno</b>, cuando la glicemia está baja. Actúa principalmente en el hígado.",
        "↑ glicogenólisis y ↑ gluconeogénesis; ↑ lipólisis y cetogénesis.",
        "↓ glicólisis y ↓ glicogenogénesis hepática."
      ]},
      { h: "Adrenalina", items: [
        "Estrés y ejercicio: ↑ glicogenólisis en hígado y músculo, ↑ glicemia."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Diabetes mellitus tipo 1:</b> falta de insulina → hiperglicemia y, si es grave, cetoacidosis.",
        "<b>Diabetes mellitus tipo 2:</b> resistencia a la insulina.",
        "<b>Hipoglicemia</b> (&lt; 70 mg/dL): sudoración, temblor y taquicardia por liberación de adrenalina."
      ]}
    ]
  },
  {
    id: "casos",
    all: true, // cada ronda muestra todas las preguntas del módulo
    title: "Preguntas de aplicación",
    tag: "Razonamiento analítico",
    blurb: "Situaciones que integran las vías y las hormonas.",
    summary: [
      { h: "Cómo abordar una pregunta de aplicación", items: [
        "1. Identifica <b>qué ocurre en la situación</b> (hipoxia, ayuno, falta de insulina…).",
        "2. Piensa en la <b>vía o enzima</b> comprometida.",
        "3. Deduce la <b>consecuencia fisiológica</b> y qué esperarías en los exámenes o síntomas."
      ]}
    ],
  }
];

const QUESTIONS = [
  /* ---------------- GLUCÓLISIS ---------------- */
  { m: "glucolisis", q: "¿En qué parte de la célula ocurre la glicólisis?",
    o: ["Citosol", "Matriz mitocondrial", "Membrana mitocondrial interna", "Núcleo"],
    hint: "No requiere mitocondrias: los eritrocitos también la realizan.",
    e: "La glicólisis es citosólica. Por eso los eritrocitos, que no tienen mitocondrias, obtienen ATP solo de ella." },
  { m: "glucolisis", q: "¿Cuál es el balance neto de la glicólisis por cada molécula de glucosa?",
    o: ["2 ATP, 2 NADH y 2 piruvato", "4 ATP y 2 piruvato, sin NADH", "2 ATP y 2 FADH₂", "36 ATP y 6 CO₂"],
    hint: "Se invierten 2 ATP y se producen 4.",
    e: "Se gastan 2 ATP y se forman 4 → ganancia neta de 2 ATP, más 2 NADH y 2 piruvato." },
  { m: "glucolisis", q: "¿Cuál de las siguientes enzimas es un punto de control de la glicólisis?",
    o: ["Fosfofructoquinasa-1 (PFK-1)", "Enolasa", "Aldolasa", "Fosfoglicerato mutasa"],
    hint: "Es una de las tres reacciones irreversibles de la vía.",
    e: "La fosfofructoquinasa-1 es una de las enzimas reguladas de la glicólisis, junto con la hexoquinasa y la piruvato quinasa." },
  { m: "glucolisis", q: "Cuando una célula tiene abundante energía (mucho ATP), ¿qué ocurre con la glicólisis?",
    o: ["Disminuye su velocidad", "Aumenta su velocidad", "No se modifica", "Se invierte y forma glucosa"],
    hint: "Si ya hay energía, la célula no necesita producir más.",
    e: "El ATP es una señal de energía abundante: inhibe enzimas de la vía y la glicólisis se frena." },
  { m: "glucolisis", q: "¿Qué consigue la hexoquinasa al fosforilar la glucosa?",
    o: ["La glucosa queda atrapada dentro de la célula", "Se libera ATP", "La glucosa sale de la célula", "Se forma glicógeno"],
    hint: "La glucosa-6-fosfato no puede salir por los transportadores.",
    e: "Al agregar el fosfato, la glucosa queda retenida en la célula y puede continuar por la vía." },
  { m: "glucolisis", q: "Tres enzimas actúan sobre la glucosa y tienen un Km de 0,1 mM, 1 mM y 10 mM. ¿Cuál tiene mayor afinidad por el sustrato?",
    o: ["La de Km 0,1 mM", "La de Km 1 mM", "La de Km 10 mM", "Todas tienen la misma afinidad"],
    hint: "El Km es la concentración de sustrato a la que la enzima alcanza la mitad de su velocidad máxima.",
    e: "A menor Km, mayor afinidad: la enzima necesita menos sustrato para trabajar a media velocidad." },
  { m: "glucolisis", q: "En la glicólisis, ¿cuántos ATP se gastan y cuántos se producen en total, antes de calcular el balance neto?",
    o: ["Se gastan 2 y se producen 4", "Se gastan 4 y se producen 2", "Se gastan 1 y se producen 3", "Se gastan 2 y se producen 2"],
    hint: "El balance neto es de 2 ATP.",
    e: "La fase preparatoria gasta 2 ATP y la fase oxidativa produce 4. La diferencia es la ganancia neta de 2 ATP." },
  { m: "glucolisis", q: "¿Cuál es la fuente de energía de un eritrocito?",
    o: ["Glicólisis anaerobia", "Ciclo de Krebs", "Fosforilación oxidativa", "β-oxidación de ácidos grasos"],
    hint: "Los eritrocitos maduros no tienen mitocondrias.",
    e: "Sin mitocondrias no pueden usar Krebs ni la cadena respiratoria; dependen de la glicólisis y el lactato." },

  /* ---------------- FERMENTACIÓN LÁCTICA ---------------- */
  { m: "fermentacion", q: "¿Cuál es la función principal de convertir piruvato en lactato?",
    o: ["Regenerar NAD⁺ para que la glicólisis continúe", "Producir más ATP", "Generar CO₂", "Almacenar glucosa"],
    hint: "Sin NAD⁺, la glicólisis se detiene.",
    e: "Sin O₂ no se reoxida el NADH en la cadena respiratoria. La LDH lo oxida a NAD⁺ y permite seguir con la glicólisis." },
  { m: "fermentacion", q: "Una célula degrada una glucosa hasta lactato, sin oxígeno. ¿Cuál es su rendimiento neto de ATP?",
    o: ["2 ATP, todos provenientes de la glicólisis", "4 ATP", "36–38 ATP", "Ninguno, porque la fermentación no produce ATP"],
    hint: "Piensa en el rendimiento neto de la glicólisis.",
    e: "El paso de piruvato a lactato no produce ATP, pero la glicólisis que lo antecede sí: 2 ATP netos por glucosa." },
  { m: "fermentacion", q: "¿Qué enzima cataliza la conversión de piruvato en lactato?",
    o: ["Lactato deshidrogenasa (LDH)", "Piruvato deshidrogenasa", "Piruvato quinasa", "Enolasa"],
    e: "La LDH usa NADH como donador de electrones, que pasa a NAD⁺." },
  { m: "fermentacion", q: "¿Entre qué órganos ocurre el ciclo de Cori?",
    o: ["Músculo e hígado", "Cerebro y riñón", "Intestino y pulmón", "Corazón y bazo"],
    e: "El músculo produce lactato y lo envía al hígado, que lo transforma en glucosa por gluconeogénesis. Los eritrocitos, que no tienen mitocondrias, también aportan lactato que el hígado recicla." },
  { m: "fermentacion", q: "¿Cuál de estas células depende de la fermentación láctica incluso en presencia de oxígeno?",
    o: ["Eritrocito", "Hepatocito", "Cardiomiocito", "Neurona"],
    hint: "¿Cuál no tiene mitocondrias?",
    e: "El eritrocito maduro no tiene mitocondrias, así que siempre produce lactato." },
  { m: "fermentacion", q: "En una carrera de 100 m, el lactato aumenta en el músculo. La razón más directa es que…",
    o: ["La demanda de ATP supera el aporte de oxígeno y se acelera la glicólisis anaerobia", "El ciclo de Krebs se acelera y libera lactato", "Se detiene la glicólisis", "El hígado deja de producir glucosa"],
    e: "La glicólisis rápida produce piruvato más rápido de lo que la mitocondria puede oxidar; el exceso pasa a lactato." },

  /* ---------------- KREBS ---------------- */
  { m: "krebs", q: "¿Qué complejo convierte el piruvato en acetil-CoA?",
    o: ["Piruvato deshidrogenasa (PDH)", "Lactato deshidrogenasa", "Citrato sintasa", "Piruvato quinasa"],
    e: "La PDH está en la matriz mitocondrial y libera CO₂ y NADH al formar acetil-CoA." },
  { m: "krebs", q: "¿Cuál de estas moléculas es un intermediario del ciclo de Krebs?",
    o: ["Citrato", "Lactato", "Glucosa-6-fosfato", "Fructosa-1,6-bisfosfato"],
    hint: "Se forma cuando el acetil-CoA entra al ciclo.",
    e: "El citrato es el primer intermediario del ciclo. Los demás son isocitrato, α-cetoglutarato, succinil-CoA, succinato, fumarato, malato y oxaloacetato." },
  { m: "krebs", q: "¿Cuáles son los productos del ciclo de Krebs?",
    o: ["NADH, FADH₂, GTP y CO₂", "NADH, FADH₂, lactato y etanol", "NADH, glucosa, GTP y O₂", "FADH₂, piruvato, lactato y O₂"],
    hint: "Las coenzimas reducidas llevan electrones a la cadena respiratoria.",
    e: "El ciclo produce coenzimas reducidas (NADH y FADH₂), GTP (energéticamente equivalente al ATP) y CO₂. Por cada acetil-CoA son 3 NADH, 1 FADH₂, 1 GTP y 2 CO₂." },
  { m: "krebs", q: "¿Dónde ocurre el ciclo de Krebs?",
    o: ["Matriz mitocondrial", "Citosol", "Espacio intermembrana", "Retículo endoplasmático"],
    e: "Las enzimas del ciclo están en la matriz (la succinato deshidrogenasa en la membrana interna)." },
  { m: "krebs", q: "¿En qué condiciones funciona el ciclo de Krebs?",
    o: ["En presencia de oxígeno", "Solo en ausencia de oxígeno", "Solo en el citosol", "Solo en ayuno"],
    hint: "Forma parte de la respiración celular.",
    e: "El ciclo funciona en presencia de oxígeno, porque este permite reoxidar el NADH y el FADH₂ en la cadena respiratoria." },
  { m: "krebs", q: "Una célula tiene mucho ATP y mucho NADH. ¿Qué pasa con el ciclo de Krebs?",
    o: ["Se inhibe (por ejemplo, la isocitrato deshidrogenasa)", "Se acelera", "No se modifica", "Se revierte"],
    e: "ATP y NADH indican alta energía: inhiben la isocitrato y la α-cetoglutarato deshidrogenasa." },
  { m: "krebs", q: "¿Qué vitamina es necesaria como cofactor de la piruvato deshidrogenasa?",
    o: ["Tiamina (B1)", "Vitamina C", "Vitamina K", "Vitamina D"],
    e: "El pirofosfato de tiamina es cofactor de la PDH y de la α-cetoglutarato deshidrogenasa." },

  /* ---------------- FOSFORILACIÓN OXIDATIVA ---------------- */
  { m: "fosforilacion", q: "¿Cuál es el aceptor final de electrones en la cadena de transporte?",
    o: ["Oxígeno (O₂)", "NAD⁺", "Piruvato", "CO₂"],
    e: "El O₂ se reduce a H₂O en el complejo IV." },
  { m: "fosforilacion", q: "¿Qué energía utiliza la ATP sintasa para fabricar ATP?",
    o: ["El gradiente de protones entre el espacio intermembrana y la matriz", "La transferencia directa de un fosfato desde un sustrato", "El paso directo de los electrones del NADH al oxígeno", "La energía liberada al hidrolizar el GTP del ciclo de Krebs"],
    hint: "Los H⁺ se acumulan en el espacio intermembrana.",
    e: "El retorno de H⁺ a la matriz a través de la ATP sintasa impulsa la fosforilación de ADP." },
  { m: "fosforilacion", q: "¿Dónde se encuentra la cadena de transporte de electrones?",
    o: ["Membrana mitocondrial interna", "Membrana mitocondrial externa", "Citosol", "Matriz mitocondrial"],
    e: "Los complejos I–IV y la ATP sintasa están embebidos en la membrana interna." },
  { m: "fosforilacion", q: "¿A qué complejo entrega electrones el NADH?",
    o: ["Complejo I", "Complejo II", "Complejo III", "Complejo IV"],
    hint: "El FADH₂ entra por el complejo II.",
    e: "NADH → complejo I; FADH₂ → complejo II. Por eso el FADH₂ rinde menos ATP." },
  { m: "fosforilacion", q: "¿Cuántos ATP se obtienen aproximadamente por glucosa en condiciones aerobias?",
    o: ["36–38", "2", "≈ 10", "≈ 100"],
    e: "Suman 2 ATP de la glicólisis, 2 GTP de Krebs y el resto de la fosforilación oxidativa (3 ATP por NADH y 2 por FADH₂). En anaerobiosis solo 2." },
  { m: "fosforilacion", q: "¿Qué ocurre con un desacoplante de la cadena respiratoria?",
    o: ["Se consume O₂ pero se produce calor en lugar de ATP", "Se produce más ATP", "Se bloquea el consumo de O₂", "Aumenta el gradiente de protones"],
    hint: "Disipa el gradiente sin pasar por la ATP sintasa.",
    e: "La energía del gradiente se pierde como calor. Es el mecanismo de la termogenina en la grasa parda." },
  { m: "fosforilacion", q: "¿Por qué el cianuro es tan tóxico?",
    o: ["Inhibe el complejo IV y detiene la producción aerobia de ATP", "Bloquea la glicólisis", "Destruye la hemoglobina", "Activa la ATP sintasa"],
    e: "Aunque haya oxígeno disponible, la célula no puede usarlo. Los tejidos con mayor demanda (cerebro, corazón) fallan primero." },

  /* ---------------- GLUCÓGENO ---------------- */
  { m: "glucogeno", q: "¿Qué tipo de enlaces forma la glicógeno sintasa y cuáles la enzima ramificante?",
    o: ["Sintasa: α-1,4; ramificante: α-1,6", "Sintasa: α-1,6; ramificante: α-1,4", "Ambas forman α-1,4", "Sintasa: β-1,4; ramificante: α-1,6"],
    e: "Las cadenas lineales son α-1,4 y los puntos de ramificación α-1,6." },
  { m: "glucogeno", q: "¿Por qué el glicógeno muscular no sirve para subir la glicemia?",
    o: ["Porque el músculo no tiene glucosa-6-fosfatasa", "Porque no tiene fosforilasa", "Porque el músculo no sintetiza glicógeno", "Porque el glucagón no lo degrada"],
    hint: "¿Qué enzima convierte la glucosa-6-P en glucosa libre?",
    e: "Sin glucosa-6-fosfatasa, la glucosa-6-P queda en el músculo y alimenta su propia glicólisis." },
  { m: "glucogeno", q: "¿Qué enzima libera glucosa-1-fosfato desde el glicógeno?",
    o: ["Glicógeno fosforilasa", "Glicógeno sintasa", "Hexoquinasa", "Glucoquinasa"],
    e: "La fosforilasa rompe enlaces α-1,4 por fosforólisis (usa Pi, no gasta ATP)." },
  { m: "glucogeno", q: "¿Qué ocurre con el glicógeno del hígado cuando baja la glicemia, por ejemplo en el ayuno?",
    o: ["Se degrada y libera glucosa a la sangre", "Se sintetiza más glicógeno para almacenar glucosa", "Se convierte en colesterol", "No se modifica"],
    hint: "Con la glicemia baja se libera glucagón.",
    e: "El glucagón activa la degradación del glicógeno hepático y la glucosa liberada pasa a la sangre, lo que restaura la glicemia." },
  { m: "glucogeno", q: "¿Qué hormona NO actúa sobre el glicógeno muscular?",
    o: ["Glucagón", "Adrenalina", "Insulina", "Todas actúan"],
    e: "El músculo no tiene receptor de glucagón. La adrenalina sí activa la glicogenólisis muscular." },
  { m: "glucogeno", q: "¿Cuál es el efecto de la insulina sobre la glicógeno fosforilasa y la glicógeno sintasa?",
    o: ["Inactiva la fosforilasa y activa la sintasa", "Activa ambas", "Activa la fosforilasa e inactiva la sintasa", "No tiene efecto"],
    e: "La insulina activa fosfatasas que defosforilan ambas enzimas, favoreciendo el almacenamiento." },
  { m: "glucogeno", q: "¿Qué efecto tiene la adrenalina sobre el glicógeno durante el ejercicio o el estrés?",
    o: ["Favorece su degradación y la liberación de glucosa", "Favorece su síntesis y almacenamiento", "Inhibe su degradación", "No tiene efecto sobre el glicógeno"],
    hint: "Prepara al cuerpo para obtener energía rápidamente.",
    e: "La adrenalina activa la degradación del glicógeno en el hígado y en el músculo, lo que aporta glucosa durante el ejercicio o el estrés." },

  /* ---------------- HORMONAS ---------------- */
  { m: "hormonas", q: "¿Qué hormona se libera cuando la glicemia está baja?",
    o: ["Glucagón", "Insulina", "Calcitonina", "Oxitocina"],
    e: "El páncreas libera glucagón cuando la glicemia está baja." },
  { m: "hormonas", q: "¿Qué transportador permite a la insulina aumentar la captación de glucosa en músculo y tejido adiposo?",
    o: ["GLUT4", "GLUT1", "GLUT2", "GLUT3"],
    hint: "Es el único dependiente de insulina.",
    e: "La insulina induce la translocación de GLUT4 a la membrana. Por eso se afecta en la resistencia a la insulina." },
  { m: "hormonas", q: "¿Cuál es el efecto de la insulina sobre la gluconeogénesis hepática?",
    o: ["La inhibe", "La activa", "No tiene efecto", "La invierte"],
    e: "La insulina favorece el uso y almacenamiento de la glucosa, y reduce su producción." },
  { m: "hormonas", q: "¿Cuál de estos efectos corresponde al glucagón?",
    o: ["↑ gluconeogénesis y ↑ glicogenólisis hepática", "↑ glicogenogénesis", "↑ captación de glucosa por GLUT4", "↓ glicemia"],
    e: "El glucagón aumenta la producción hepática de glucosa." },
  { m: "hormonas", q: "¿Qué valor de glicemia en ayunas se considera normal?",
    o: ["70–99 mg/dL", "40–60 mg/dL", "126–180 mg/dL", "200–250 mg/dL"],
    e: "≥ 126 mg/dL en ayunas (confirmado) es criterio de diabetes; < 70 mg/dL es hipoglicemia." },
  { m: "hormonas", q: "¿Por qué en la hipoglicemia aparecen sudoración, temblor y taquicardia?",
    o: ["Por la liberación de adrenalina", "Por exceso de insulina en el cerebro", "Por falta de oxígeno", "Por exceso de glucagón"],
    hint: "Es una respuesta contrarreguladora del sistema simpático.",
    e: "La adrenalina es una hormona contrarreguladora: sube la glicemia, pero causa estos síntomas." },
  { m: "hormonas", q: "En la diabetes tipo 1 sin tratamiento, ¿qué ocurre?",
    o: ["Falta de insulina, hiperglicemia y riesgo de cetoacidosis", "Exceso de insulina e hipoglicemia", "Falta de glucagón", "Exceso de GLUT4"],
    e: "Sin insulina la glucosa no entra a las células, hay lipólisis exagerada y producción de cuerpos cetónicos." },

  /* ---------------- PREGUNTAS DE APLICACIÓN ---------------- */
  { m: "casos",
    case: "Un maratonista de 30 años llega con calambres después de una carrera. Su lactato sérico está elevado.",
    q: "¿Qué explica el aumento de lactato?",
    o: ["Con poco oxígeno, el piruvato se convierte en lactato por fermentación láctica", "El ciclo de Krebs se acelera por exceso de oxígeno", "Aumenta la gluconeogénesis en el músculo", "Hay un déficit de insulina"],
    hint: "¿Qué hace el músculo cuando el oxígeno no alcanza?",
    e: "Cuando el oxígeno no alcanza para la demanda del músculo, el piruvato se convierte en lactato (fermentación láctica). Así la célula sigue obteniendo ATP por glicólisis." },
  { m: "casos",
    case: "Una persona es rescatada de un incendio en un recinto cerrado. Tiene dolor de cabeza, confusión y lactato muy elevado. Se diagnostica intoxicación por monóxido de carbono (CO).",
    q: "¿Por qué aumenta el lactato?",
    o: ["El CO inhibe la citocromo oxidasa: la cadena respiratoria se detiene y el piruvato se convierte en lactato", "El CO inhibe la hexoquinasa: la glucosa se acumula y se convierte en lactato", "El CO activa el ciclo de Krebs: se forma más acetil-CoA y sube el lactato", "El CO aumenta la insulina: se bloquea la glicólisis y sube el lactato"],
    hint: "Piensa en qué ocurre con la cadena respiratoria si se bloquea uno de sus complejos.",
    e: "El monóxido de carbono inhibe la citocromo oxidasa (complejo IV), por lo que la cadena respiratoria se detiene aunque haya oxígeno. Sin poder reoxidar el NADH, el piruvato se convierte en lactato (fermentación láctica) y la célula sigue obteniendo ATP por glicólisis. Además, el CO se une a la hemoglobina y reduce el transporte de oxígeno a los tejidos." },
  { m: "casos",
    case: "Una persona lleva 18 horas en ayunas por una cirugía programada. Su glicemia es de 78 mg/dL.",
    q: "¿Qué mecanismo hormonal y metabólico mantiene su glicemia?",
    o: ["Glucagón: glicogenólisis y gluconeogénesis hepática", "Insulina: glicogenogénesis hepática", "Aumento de GLUT4 en músculo", "Glicólisis hepática acelerada"],
    hint: "¿Hay insulina alta o baja en ayuno?",
    e: "Con insulina baja y glucagón alto, el hígado libera glucosa desde el glicógeno y sintetiza glucosa nueva." },
  { m: "casos",
    case: "Un paciente con diabetes mellitus tipo 1 se administra su dosis habitual de insulina rápida pero omite el almuerzo. A los 40 minutos presenta sudoración, temblor y confusión.",
    q: "¿Qué ocurre en este paciente?",
    o: ["La insulina bajó la glicemia sin aporte de glucosa: hipoglicemia con respuesta de adrenalina", "Falta de insulina: cetoacidosis", "Exceso de glucagón: hiperglicemia", "Aumento de la gluconeogénesis por la insulina"],
    e: "La insulina activa GLUT4 y bloquea la producción hepática de glucosa. La conducta es administrar glucosa de absorción rápida según protocolo." },
  { m: "casos",
    case: "Un adolescente con diabetes mellitus tipo 1 no se ha administrado insulina en los últimos días. Su glicemia es de 400 mg/dL.",
    q: "¿Qué explica la glicemia tan alta?",
    o: ["Sin insulina, la glucosa no entra a las células y se acumula en la sangre", "Hay un exceso de insulina que impide usar la glucosa", "El hígado dejó de producir glucosa", "El glucagón está ausente"],
    hint: "La insulina permite que la glucosa entre a las células.",
    e: "Sin insulina, el músculo y el tejido adiposo no captan glucosa, y el hígado sigue produciéndola. Por eso la glucosa se acumula en la sangre." },
  { m: "casos",
    case: "Un lactante presenta hipoglicemia cuando pasa varias horas sin comer y su hígado está aumentado de tamaño. Tiene la enfermedad de Von Gierke: le falta la enzima glucosa-6-fosfatasa, que permite al hígado liberar glucosa a la sangre.",
    q: "¿Por qué el lactante presenta hipoglicemia en ayuno?",
    o: ["El hígado no puede liberar glucosa a la sangre, aunque degrade el glicógeno", "No puede sintetizar glicógeno", "Tiene exceso de glucagón", "No hay glicólisis"],
    e: "Sin glucosa-6-fosfatasa, la glucosa del glicógeno queda en el hígado y no llega a la sangre. Por eso el hígado crece y la glicemia baja en el ayuno." },
  { m: "casos",
    case: "Una joven presenta calambres y dolor muscular intenso con el ejercicio. Durante la prueba, su lactato no aumenta. Se diagnostica enfermedad de McArdle (déficit de fosforilasa muscular).",
    q: "¿Por qué el lactato no aumenta?",
    o: ["No puede degradar el glicógeno muscular, por lo que no hay sustrato para la glicólisis", "Se forma más ATP por la fosforilación oxidativa", "Su LDH es hiperactiva", "No tiene glicólisis"],
    e: "Sin fosforilasa, el glicógeno muscular no se moviliza. Sin sustrato glicolítico, hay poco piruvato y poco lactato." },

  /* ---------- Ampliación con el libro de aula (agrega siempre al final) ---------- */
  { m: "glucolisis", q: "La glicólisis se divide en dos fases. ¿Qué ocurre en la fase preparatoria?",
    o: ["Se gastan 2 ATP, la glucosa se activa y se forman 2 triosas fosfato", "Se producen 4 ATP y 2 NADH", "El piruvato se convierte en lactato", "Ocurre dentro de la mitocondria"],
    hint: "Es la fase en que la célula invierte energía.",
    e: "La fase preparatoria gasta 2 ATP. La fase oxidativa o de ganancia produce 4 ATP y 2 NADH." },
  { m: "glucolisis", q: "¿Cuáles son los tres puntos irreversibles donde se regula la glicólisis?",
    o: ["Hexoquinasa, fosfofructoquinasa-1 y piruvato quinasa", "Aldolasa, enolasa y fosfoglicerato mutasa", "Fosfoglucosa isomerasa, aldolasa y enolasa", "Gliceraldehído-3-fosfato deshidrogenasa, fosfoglicerato quinasa y mutasa"],
    e: "Las tres reacciones irreversibles son las catalizadas por la hexoquinasa, la fosfofructoquinasa-1 (PFK-1) y la piruvato quinasa." },
  { m: "glucolisis", q: "¿Qué molécula inhibe a la hexoquinasa?",
    o: ["Su producto, la glucosa-6-fosfato", "El piruvato", "El ADP", "La insulina"],
    e: "Es una retroalimentación negativa: si se acumula glucosa-6-fosfato, la hexoquinasa se frena." },
  { m: "glucolisis", q: "La piruvato quinasa se inhibe cuando hay niveles altos de…",
    o: ["ATP y acetil-CoA", "ADP y AMP", "Glucosa", "Insulina"],
    e: "Ambos indican abundancia de energía y de combustible: no hace falta seguir con la vía." },
  { m: "glucolisis", q: "La glicólisis responde a la regulación hormonal de la siguiente manera:",
    o: ["La insulina la activa y el glucagón la disminuye", "El glucagón la activa y la insulina la disminuye", "La insulina y el glucagón la activan por igual", "Ninguna de las dos hormonas la regula"],
    hint: "Después de comer sube la glicemia.",
    e: "Al subir la glucosa en sangre, el páncreas libera insulina, que activa el proceso. El glucagón lo disminuye." },
  { m: "glucolisis", q: "Además de la glucosa, ¿qué otras moléculas pueden entrar a la glicólisis?",
    o: ["Fructosa, galactosa y glicerol-fosfato", "Solo lactato", "Colesterol y triglicéridos", "Urea"],
    e: "Varios azúcares y el glicerol-fosfato se incorporan a la vía en distintos pasos." },
  { m: "fermentacion", q: "¿Qué se forma en la fermentación alcohólica de las levaduras?",
    o: ["Etanol y CO₂", "Lactato", "Acetil-CoA", "Glicógeno"],
    e: "En el músculo esquelético se forma lactato; en las levaduras, etanol y CO₂." },
  { m: "fermentacion", q: "En el músculo esquelético, sin oxígeno, el piruvato se convierte en…",
    o: ["Lactato", "Acetil-CoA", "Etanol", "CO₂ y agua"],
    e: "Es la fermentación láctica. El lactato se excreta de la célula." },
  { m: "krebs", q: "¿Qué transportador introduce el piruvato a la mitocondria?",
    o: ["Piruvato translocasa", "GLUT4", "Carnitina", "ATP sintasa"],
    e: "Una vez en la matriz, la PDH lo convierte en acetil-CoA." },
  { m: "krebs", q: "¿Cuál de estas moléculas inhibe a la piruvato deshidrogenasa?",
    o: ["ATP, NADH y acetil-CoA", "AMP y NAD⁺", "Desfosforilación de la subunidad E1", "ADP"],
    hint: "Los activadores son señales de baja energía.",
    e: "ATP, NADH y acetil-CoA la inhiben, igual que la fosforilación de E1. AMP, NAD⁺ y la desfosforilación la activan." },
  { m: "krebs", q: "¿Qué ocurre con los carbonos del acetil-CoA durante el ciclo de Krebs?",
    o: ["Se oxidan por completo y se liberan como CO₂", "Se convierten en glucosa", "Se convierten en lactato", "Se almacenan como glicógeno"],
    hint: "Es el mismo gas que eliminamos al respirar.",
    e: "Los dos carbonos del acetil-CoA se oxidan por completo y salen de la célula como dióxido de carbono." },
  { m: "fosforilacion", q: "¿Qué complejo de la cadena respiratoria NO bombea protones?",
    o: ["Complejo II (succinato deshidrogenasa)", "Complejo I", "Complejo III", "Complejo IV"],
    hint: "Es el que también participa en el ciclo de Krebs.",
    e: "Los complejos I, III y IV bombean protones. El II solo transfiere electrones desde el FADH₂." },
  { m: "fosforilacion", q: "Según el material del curso, ¿cuántos ATP rinde cada NADH y cada FADH₂ en la cadena?",
    o: ["3 y 2", "2 y 3", "1 y 1", "5 y 4"],
    e: "Con esos valores, la oxidación completa de una glucosa rinde entre 36 y 38 ATP." },
  { m: "fosforilacion", q: "En la ATP sintasa, ¿por dónde pasan los protones y dónde se sintetiza el ATP?",
    o: ["Pasan por el canal F₀ y el ATP se forma en F₁", "Pasan por F₁ y el ATP se forma en F₀", "Pasan por el complejo I", "Pasan por la ubiquinona"],
    e: "El retorno de H⁺ por F₀ impulsa la reacción entre ADP y Pi en la unidad catalítica F₁." },
  /* ---------- Caso con gráfica de dobles recíprocos ---------- */
  { m: "casos",
    case: "En un laboratorio se estudia I-234, un fármaco nuevo que inhibe una enzima del metabolismo. Se midió la velocidad de la reacción con distintas cantidades de sustrato, con y sin el fármaco, y se hizo la gráfica de dobles recíprocos que se muestra.",
    img: "assets/lineweaver-burk.png",
    imgAlt: "Gráfica de dobles recíprocos. Las rectas con y sin inhibidor se cortan en el mismo punto del eje vertical, en 4. La recta sin inhibidor cruza el eje horizontal en menos 3 y la recta con inhibidor, en menos 2.",
    q: "¿Qué tipo de inhibidor es el I-234?",
    o: ["Competitivo", "No competitivo", "Irreversible", "No es un inhibidor"],
    hint: "Fíjate dónde se cortan las dos rectas: si lo hacen en el eje vertical, la velocidad máxima no cambia.",
    e: "Las dos rectas se cortan en el mismo punto del eje vertical, así que la velocidad máxima (Vmax) no cambia. Eso es característico del inhibidor competitivo, que compite con el sustrato por el sitio activo de la enzima." },
  { m: "casos",
    case: "En un laboratorio se estudia I-234, un fármaco nuevo que inhibe una enzima del metabolismo. Se midió la velocidad de la reacción con distintas cantidades de sustrato, con y sin el fármaco, y se hizo la gráfica de dobles recíprocos que se muestra.",
    img: "assets/lineweaver-burk.png",
    imgAlt: "Gráfica de dobles recíprocos. Las rectas con y sin inhibidor se cortan en el mismo punto del eje vertical, en 4. La recta sin inhibidor cruza el eje horizontal en menos 3 y la recta con inhibidor, en menos 2.",
    q: "¿Qué ocurre con el Km de la enzima en presencia de I-234?",
    o: ["Aumenta: la enzima necesita más sustrato para trabajar a la mitad de su velocidad máxima", "Disminuye: la enzima tiene más afinidad por el sustrato", "No cambia", "Se vuelve cero"],
    hint: "La recta con inhibidor cruza el eje horizontal más cerca de cero, y ese valor es el inverso del Km con signo negativo.",
    e: "Sin inhibidor la recta cruza el eje horizontal en −3 (Km ≈ 0,33 mM) y con inhibidor en −2 (Km = 0,5 mM). El Km aumenta, es decir, baja la afinidad aparente por el sustrato, y la Vmax se mantiene." },
  /* ---------- Caso: enfermedad de Hers ---------- */
  { m: "casos",
    case: "La enfermedad de Hers afecta a las células del hígado, que no pueden producir la enzima glicógeno fosforilasa, necesaria para degradar el glicógeno hepático. Los pacientes tienen períodos de glicemia muy baja (hipoglicemia).",
    q: "Después de correr 15 minutos, ¿cómo estará el glicógeno del músculo de un paciente con esta enfermedad, comparado con una persona sana?",
    o: ["Igual que en una persona sana: disminuido, porque la enfermedad solo afecta al hígado", "Más alto, porque el músculo no puede degradar su glicógeno", "Más bajo que en una persona sana, porque el hígado no libera glucosa", "No se puede degradar el glicógeno en ningún tejido"],
    e: "La enfermedad afecta la enzima del hígado. El músculo tiene la suya, por lo que degrada su glicógeno con normalidad al correr. Lo que queda alterado es el glicógeno del hígado, que no se puede degradar." }
];
