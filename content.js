/* =====================================================================
   CONTENIDOS DE LA PLATAFORMA  ·  Bases Bioquímicas para Enfermería
   Este es el único archivo que necesitas editar para agregar material.

   MODULES   → módulos (resumen + juegos)
   QUESTIONS → banco de preguntas. En cada pregunta:
       m    : id del módulo
       q    : enunciado
       o    : alternativas. LA PRIMERA ES LA CORRECTA (la app las mezcla)
       hint : pista (opcional)
       e    : explicación que se muestra después de responder
       case : texto del caso clínico (opcional)
   ===================================================================== */

const MODULES = [
  {
    id: "glucolisis",
    title: "Glucólisis",
    icon: "🔥",
    tag: "Citosol · 10 reacciones",
    blurb: "La vía que parte la glucosa en dos piruvatos y deja ATP y NADH.",
    summary: [
      { h: "Lo esencial", items: [
        "Ocurre en el <b>citosol</b> de todas las células; no necesita oxígeno.",
        "<b>Glucosa (6C) → 2 piruvato (3C)</b>. Fase de inversión (gasta 2 ATP) y fase de beneficio (produce 4 ATP y 2 NADH).",
        "<b>Balance neto: 2 ATP + 2 NADH + 2 piruvato</b> por glucosa.",
        "El ATP se forma por <b>fosforilación a nivel de sustrato</b> (fosfoglicerato quinasa y piruvato quinasa)."
      ]},
      { h: "Puntos de control (enzimas reguladas)", items: [
        "<b>Hexoquinasa / glucoquinasa</b>: atrapa la glucosa como glucosa-6-fosfato. La hexoquinasa es inhibida por su producto; la glucoquinasa (hígado, células β) tiene Km alto y actúa cuando hay mucha glucosa.",
        "<b>Fosfofructoquinasa-1 (PFK-1)</b>: paso limitante. Activada por AMP y fructosa-2,6-bisfosfato; inhibida por ATP y citrato.",
        "<b>Piruvato quinasa</b>: activada por fructosa-1,6-bisfosfato; inhibida por glucagón (hígado) y ATP."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "Los <b>eritrocitos</b> no tienen mitocondrias: dependen solo de la glucólisis.",
        "El cerebro consume ~120 g de glucosa al día: por eso la glicemia debe mantenerse estable."
      ]}
    ],
    games: [
      {
        type: "order", id: "g-glucolisis-orden",
        title: "Ordena la glucólisis",
        intro: "Toca los intermediarios en el orden en que aparecen, desde la glucosa hasta el piruvato.",
        items: [
          { t: "Glucosa", n: "Entra a la célula" },
          { t: "Glucosa-6-fosfato", n: "Hexoquinasa / glucoquinasa · gasta 1 ATP" },
          { t: "Fructosa-6-fosfato", n: "Fosfoglucosa isomerasa" },
          { t: "Fructosa-1,6-bisfosfato", n: "PFK-1 (paso regulador) · gasta 1 ATP" },
          { t: "Gliceraldehído-3-fosfato (×2)", n: "Aldolasa; DHAP se isomeriza a G3P" },
          { t: "1,3-bisfosfoglicerato", n: "GAPDH · se produce NADH" },
          { t: "3-fosfoglicerato", n: "Fosfoglicerato quinasa · se produce ATP" },
          { t: "2-fosfoglicerato", n: "Fosfoglicerato mutasa" },
          { t: "Fosfoenolpiruvato (PEP)", n: "Enolasa" },
          { t: "Piruvato", n: "Piruvato quinasa · se produce ATP" }
        ]
      }
    ]
  },
  {
    id: "fermentacion",
    title: "Fermentación láctica",
    icon: "💪",
    tag: "Citosol · sin oxígeno",
    blurb: "Qué hace la célula con el piruvato cuando no hay oxígeno o mitocondrias.",
    summary: [
      { h: "Lo esencial", items: [
        "Piruvato + NADH → <b>lactato + NAD⁺</b>, catalizado por la <b>lactato deshidrogenasa (LDH)</b>. Ocurre en el citosol.",
        "Su función real es <b>regenerar NAD⁺</b>, para que la glucólisis (GAPDH) pueda seguir produciendo ATP.",
        "Rendimiento: <b>2 ATP netos por glucosa</b> (solo los de la glucólisis).",
        "Se activa en <b>hipoxia</b>, en el músculo con ejercicio intenso y en células sin mitocondrias (eritrocitos)."
      ]},
      { h: "Ciclo de Cori", items: [
        "El músculo exporta lactato → el hígado lo convierte en glucosa (<b>gluconeogénesis</b>) → la glucosa vuelve al músculo.",
        "El hígado gasta ATP en esta vía, pero así se recicla el lactato."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Acidosis láctica</b>: shock, sepsis o hipoperfusión → hipoxia tisular → lactato ↑ y pH ↓.",
        "El lactato sérico elevado es un marcador de gravedad en pacientes críticos."
      ]}
    ],
    games: [
      {
        type: "order", id: "g-cori",
        title: "Ordena el ciclo de Cori",
        intro: "Toca los pasos en el orden en que ocurren.",
        items: [
          { t: "Músculo en ejercicio intenso: glucosa → piruvato → lactato", n: "Glucólisis + LDH, regenera NAD⁺" },
          { t: "El lactato sale a la sangre", n: "" },
          { t: "El hígado capta el lactato y lo convierte en piruvato", n: "LDH en sentido inverso" },
          { t: "El hígado sintetiza glucosa", n: "Gluconeogénesis (gasta ATP)" },
          { t: "La glucosa vuelve por la sangre al músculo", n: "Se completa el ciclo" }
        ]
      }
    ]
  },
  {
    id: "krebs",
    title: "Ciclo de Krebs",
    icon: "🔄",
    tag: "Matriz mitocondrial",
    blurb: "Oxida el acetil-CoA a CO₂ y carga coenzimas para la cadena de transporte.",
    summary: [
      { h: "Del piruvato al ciclo", items: [
        "El piruvato entra a la mitocondria y el <b>complejo piruvato deshidrogenasa (PDH)</b> lo convierte en <b>acetil-CoA + CO₂ + NADH</b>.",
        "La PDH necesita cofactores: <b>tiamina (B1)</b>, riboflavina, niacina, ácido pantoténico y ácido lipoico."
      ]},
      { h: "El ciclo (matriz mitocondrial)", items: [
        "Acetil-CoA (2C) + oxaloacetato (4C) → <b>citrato</b> (6C), por la citrato sintasa.",
        "<b>Por vuelta (1 acetil-CoA):</b> 3 NADH + 1 FADH₂ + 1 GTP/ATP + 2 CO₂.",
        "Por glucosa hay 2 vueltas (2 acetil-CoA).",
        "Es una vía <b>aerobia</b>: no usa O₂ directamente, pero depende de él para reoxidar NADH y FADH₂ en la cadena respiratoria."
      ]},
      { h: "Puntos de control", items: [
        "<b>Citrato sintasa</b>, <b>isocitrato deshidrogenasa</b> y <b>α-cetoglutarato deshidrogenasa</b>.",
        "Se inhiben con alta energía (ATP, NADH) y se activan con baja energía (ADP, Ca²⁺)."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Déficit de tiamina</b> (alcoholismo, desnutrición): PDH falla → se acumulan piruvato y lactato."
      ]}
    ],
    games: [
      {
        type: "order", id: "g-krebs-orden",
        title: "Ordena el ciclo de Krebs",
        intro: "Parte desde el citrato (acetil-CoA + oxaloacetato). Toca los intermediarios en orden.",
        items: [
          { t: "Citrato", n: "Citrato sintasa" },
          { t: "Isocitrato", n: "Aconitasa" },
          { t: "α-Cetoglutarato", n: "Isocitrato deshidrogenasa · NADH + CO₂" },
          { t: "Succinil-CoA", n: "α-cetoglutarato deshidrogenasa · NADH + CO₂" },
          { t: "Succinato", n: "Succinil-CoA sintetasa · GTP" },
          { t: "Fumarato", n: "Succinato deshidrogenasa · FADH₂" },
          { t: "Malato", n: "Fumarasa" },
          { t: "Oxaloacetato", n: "Malato deshidrogenasa · NADH" }
        ]
      }
    ]
  },
  {
    id: "fosforilacion",
    title: "Cadena de transporte y fosforilación oxidativa",
    icon: "⚡",
    tag: "Membrana mitocondrial interna",
    blurb: "Donde se produce la mayor parte del ATP, gracias al oxígeno.",
    summary: [
      { h: "Cómo funciona", items: [
        "Ocurre en la <b>membrana mitocondrial interna</b>.",
        "NADH entrega electrones al <b>complejo I</b>; FADH₂ al <b>complejo II</b>; luego pasan por III y IV. El <b>O₂ es el aceptor final</b> y se reduce a H₂O (complejo IV).",
        "Los complejos I, III y IV bombean H⁺ al espacio intermembrana → <b>gradiente de protones</b>.",
        "La <b>ATP sintasa</b> (complejo V) usa el retorno de H⁺ para fosforilar ADP → ATP."
      ]},
      { h: "Rendimiento", items: [
        "≈ <b>2,5 ATP por NADH</b> y ≈ <b>1,5 ATP por FADH₂</b>.",
        "Glucosa en condiciones aerobias: <b>≈ 30–32 ATP</b>. En anaerobiosis: <b>2 ATP</b>."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Cianuro</b> y <b>monóxido de carbono</b> inhiben el complejo IV: la célula no puede usar el O₂ aunque haya.",
        "<b>Desacopladores</b> (ej. 2,4-dinitrofenol, termogenina de la grasa parda) disipan el gradiente: se consume O₂ pero se produce calor en vez de ATP."
      ]}
    ],
    games: [
      {
        type: "match", id: "g-complejos",
        title: "Une cada elemento con su función",
        intro: "Toca un elemento de la izquierda y luego su pareja a la derecha.",
        pairs: [
          ["Complejo I", "Recibe los electrones del NADH"],
          ["Complejo II", "Recibe los electrones del FADH₂ (succinato deshidrogenasa)"],
          ["Complejo IV", "Reduce el O₂ a agua"],
          ["ATP sintasa", "Fosforila ADP usando el gradiente de H⁺"],
          ["Cianuro", "Bloquea el complejo IV"],
          ["Desacoplante", "Disipa el gradiente y genera calor"]
        ]
      },
      {
        type: "match", id: "g-donde",
        title: "¿Dónde ocurre cada proceso?",
        intro: "Une el proceso con su ubicación en la célula.",
        pairs: [
          ["Glucólisis", "Citosol"],
          ["Fermentación láctica", "Citosol"],
          ["Descarboxilación del piruvato (PDH)", "Matriz mitocondrial"],
          ["Ciclo de Krebs", "Matriz mitocondrial"],
          ["Cadena de transporte de electrones", "Membrana mitocondrial interna"]
        ]
      }
    ]
  },
  {
    id: "glucogeno",
    title: "Síntesis y degradación de glucógeno",
    icon: "📦",
    tag: "Hígado y músculo",
    blurb: "Cómo se almacena y se moviliza la glucosa según las necesidades.",
    summary: [
      { h: "Glucogenogénesis (síntesis)", items: [
        "Glucosa → glucosa-6-P → glucosa-1-P → <b>UDP-glucosa</b>.",
        "<b>Glucógeno sintasa</b> (enzima regulada) forma enlaces <b>α-1,4</b>; la enzima ramificante forma enlaces <b>α-1,6</b>.",
        "Se activa con <b>insulina</b> (defosforilada = activa)."
      ]},
      { h: "Glucogenólisis (degradación)", items: [
        "<b>Glucógeno fosforilasa</b> libera glucosa-1-fosfato; la enzima desramificante actúa sobre las ramas.",
        "<b>Hígado:</b> tiene glucosa-6-fosfatasa → libera <b>glucosa libre a la sangre</b> (mantiene la glicemia).",
        "<b>Músculo:</b> no tiene glucosa-6-fosfatasa → usa la glucosa-6-P solo para su propia glucólisis."
      ]},
      { h: "Regulación (fosforilación)", items: [
        "<b>Glucagón</b> (hígado) y <b>adrenalina</b> (hígado y músculo) → AMPc → PKA → fosforilan: <b>fosforilasa activa, sintasa inactiva</b>.",
        "<b>Insulina</b> → activa fosfatasas → <b>sintasa activa, fosforilasa inactiva</b>."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>Von Gierke</b> (déficit de glucosa-6-fosfatasa): hipoglicemia en ayuno y hepatomegalia.",
        "<b>McArdle</b> (déficit de fosforilasa muscular): calambres con el ejercicio y lactato que no sube."
      ]}
    ],
    games: [
      {
        type: "order", id: "g-glucagon",
        title: "Ordena la cascada del glucagón",
        intro: "Toca los pasos desde la hormona hasta la liberación de glucosa.",
        items: [
          { t: "El glucagón se une a su receptor en el hepatocito", n: "Receptor acoplado a proteína G" },
          { t: "Se activa la adenilato ciclasa y sube el AMPc", n: "Segundo mensajero" },
          { t: "El AMPc activa la proteína quinasa A (PKA)", n: "" },
          { t: "La PKA fosforila a la fosforilasa quinasa", n: "" },
          { t: "La fosforilasa quinasa fosforila (activa) a la glucógeno fosforilasa", n: "Y la glucógeno sintasa queda inactiva" },
          { t: "Glucógeno → glucosa-1-P → glucosa-6-P → glucosa libre", n: "Glucosa-6-fosfatasa (hígado)" }
        ]
      }
    ]
  },
  {
    id: "hormonas",
    title: "Regulación por insulina y glucagón",
    icon: "⚖️",
    tag: "Homeostasis de la glicemia",
    blurb: "Dos hormonas opuestas que mantienen la glicemia entre 70 y 99 mg/dL en ayunas.",
    summary: [
      { h: "Insulina (células β · estado postprandial)", items: [
        "Se libera con <b>glicemia alta</b>.",
        "↑ captación de glucosa en músculo y tejido adiposo (<b>GLUT4</b>); ↑ glucólisis; ↑ glucogenogénesis; ↑ síntesis de lípidos.",
        "↓ gluconeogénesis, ↓ glucogenólisis, ↓ lipólisis."
      ]},
      { h: "Glucagón (células α · ayuno)", items: [
        "Se libera con <b>glicemia baja</b>. Actúa principalmente en el hígado.",
        "↑ glucogenólisis y ↑ gluconeogénesis; ↑ lipólisis y cetogénesis.",
        "↓ glucólisis y ↓ glucogenogénesis hepática."
      ]},
      { h: "Adrenalina", items: [
        "Estrés y ejercicio: ↑ glucogenólisis en hígado y músculo, ↑ glicemia."
      ]},
      { h: "Para la práctica de enfermería", items: [
        "<b>DM tipo 1:</b> falta de insulina → hiperglicemia y, si es grave, cetoacidosis.",
        "<b>DM tipo 2:</b> resistencia a la insulina.",
        "<b>Hipoglicemia</b> (&lt; 70 mg/dL): sudoración, temblor y taquicardia por liberación de adrenalina."
      ]}
    ],
    games: [
      {
        type: "classify", id: "g-hormonas",
        title: "¿Insulina, glucagón o adrenalina?",
        intro: "Elige la hormona a la que corresponde cada efecto o situación.",
        categories: ["Insulina", "Glucagón", "Adrenalina"],
        items: [
          { t: "Aumenta la entrada de glucosa vía GLUT4 en músculo", c: 0 },
          { t: "Se libera tras comer, con glicemia alta", c: 0 },
          { t: "Activa la glucógeno sintasa", c: 0 },
          { t: "Inhibe la gluconeogénesis hepática", c: 0 },
          { t: "Se libera en ayuno prolongado, con glicemia baja", c: 1 },
          { t: "Activa la gluconeogénesis en el hígado", c: 1 },
          { t: "Estimula la glucogenólisis hepática, pero no la muscular", c: 1 },
          { t: "Aumenta la lipólisis y la cetogénesis", c: 1 },
          { t: "Prepara el cuerpo para el estrés: actúa en glucógeno de músculo e hígado", c: 2 },
          { t: "Responsable de la taquicardia y sudoración en una hipoglicemia", c: 2 }
        ]
      }
    ]
  },
  {
    id: "casos",
    title: "Casos clínicos de integración",
    icon: "🩺",
    tag: "Razonamiento analítico",
    blurb: "Situaciones de enfermería que integran las vías y las hormonas.",
    summary: [
      { h: "Cómo abordar un caso", items: [
        "1. Identifica <b>qué le pasa al paciente</b> (hipoxia, ayuno, falta de insulina…).",
        "2. Piensa en la <b>vía o enzima</b> comprometida.",
        "3. Deduce la <b>consecuencia fisiológica</b> y qué esperarías en los exámenes o síntomas."
      ]}
    ],
    games: []
  }
];

const QUESTIONS = [
  /* ---------------- GLUCÓLISIS ---------------- */
  { m: "glucolisis", q: "¿En qué parte de la célula ocurre la glucólisis?",
    o: ["Citosol", "Matriz mitocondrial", "Membrana mitocondrial interna", "Núcleo"],
    hint: "No requiere mitocondrias: los eritrocitos también la realizan.",
    e: "La glucólisis es citosólica. Por eso los eritrocitos, que no tienen mitocondrias, obtienen ATP solo de ella." },
  { m: "glucolisis", q: "¿Cuál es el balance neto de la glucólisis por cada molécula de glucosa?",
    o: ["2 ATP, 2 NADH y 2 piruvato", "4 ATP y 2 piruvato, sin NADH", "2 ATP y 2 FADH₂", "36 ATP y 6 CO₂"],
    hint: "Se invierten 2 ATP y se producen 4.",
    e: "Se gastan 2 ATP y se forman 4 → ganancia neta de 2 ATP, más 2 NADH y 2 piruvato." },
  { m: "glucolisis", q: "¿Cuál es la enzima limitante (principal punto de control) de la glucólisis?",
    o: ["Fosfofructoquinasa-1 (PFK-1)", "Enolasa", "Aldolasa", "Fosfoglucosa isomerasa"],
    hint: "Cataliza F6P → fructosa-1,6-bisfosfato.",
    e: "La PFK-1 es el paso comprometido: la activan AMP y fructosa-2,6-bisfosfato; la inhiben ATP y citrato." },
  { m: "glucolisis", q: "Una célula tiene mucho ATP y mucho citrato. ¿Qué esperarías de la glucólisis?",
    o: ["Disminuye, porque la PFK-1 se inhibe", "Aumenta, porque la PFK-1 se activa", "No cambia", "Se detiene la hexoquinasa por falta de glucosa"],
    hint: "Energía abundante: la célula no necesita producir más.",
    e: "ATP y citrato son señales de abundancia energética e inhiben alostéricamente la PFK-1." },
  { m: "glucolisis", q: "¿Por qué es importante que la hexoquinasa convierta la glucosa en glucosa-6-fosfato?",
    o: ["La atrapa dentro de la célula y mantiene el gradiente de entrada", "Porque libera ATP", "Porque la convierte en glucógeno directamente", "Porque la hace salir de la célula"],
    hint: "La glucosa-6-fosfato tiene carga negativa.",
    e: "La molécula fosforilada no atraviesa la membrana por los transportadores: queda atrapada y favorece que siga entrando glucosa." },
  { m: "glucolisis", q: "¿Qué diferencia a la glucoquinasa (hígado) de la hexoquinasa?",
    o: ["Tiene Km alto y actúa cuando hay mucha glucosa, tras comer", "Tiene Km bajo y trabaja incluso con glicemia baja", "Es inhibida por glucosa-6-fosfato", "Solo existe en el músculo"],
    hint: "Piensa en el hígado después de una comida: ¿mucha o poca glucosa?",
    e: "La glucoquinasa, con Km alto y sin inhibición por su producto, permite al hígado captar el exceso de glucosa en el estado postprandial." },
  { m: "glucolisis", q: "¿Cómo se forma el ATP en las reacciones de la fosfoglicerato quinasa y de la piruvato quinasa?",
    o: ["Por fosforilación a nivel de sustrato", "Por fosforilación oxidativa", "Por el gradiente de protones", "Por acción de la ATP sintasa"],
    e: "Un grupo fosfato de alta energía del sustrato se transfiere directamente al ADP." },
  { m: "glucolisis", q: "¿Cuál es la fuente de energía de un eritrocito?",
    o: ["Glucólisis anaerobia", "Ciclo de Krebs", "Fosforilación oxidativa", "β-oxidación de ácidos grasos"],
    hint: "Los eritrocitos maduros no tienen mitocondrias.",
    e: "Sin mitocondrias no pueden usar Krebs ni la cadena respiratoria; dependen de la glucólisis y el lactato." },

  /* ---------------- FERMENTACIÓN LÁCTICA ---------------- */
  { m: "fermentacion", q: "¿Cuál es la función principal de convertir piruvato en lactato?",
    o: ["Regenerar NAD⁺ para que la glucólisis continúe", "Producir más ATP", "Generar CO₂", "Almacenar glucosa"],
    hint: "La GAPDH necesita NAD⁺ para funcionar.",
    e: "Sin O₂ no se reoxida el NADH en la cadena respiratoria. La LDH lo oxida a NAD⁺ y permite seguir con la glucólisis." },
  { m: "fermentacion", q: "¿Cuántos ATP netos se obtienen por glucosa en la fermentación láctica?",
    o: ["2", "4", "30–32", "0"],
    hint: "Solo cuentan los de la glucólisis.",
    e: "La conversión de piruvato a lactato no produce ATP. El total es el de la glucólisis: 2 ATP netos." },
  { m: "fermentacion", q: "¿Qué enzima cataliza la conversión de piruvato en lactato?",
    o: ["Lactato deshidrogenasa (LDH)", "Piruvato deshidrogenasa", "Piruvato quinasa", "Enolasa"],
    e: "La LDH usa NADH como donador de electrones, que pasa a NAD⁺." },
  { m: "fermentacion", q: "¿Entre qué órganos ocurre el ciclo de Cori?",
    o: ["Músculo (o eritrocito) e hígado", "Cerebro y riñón", "Intestino y pulmón", "Corazón y bazo"],
    e: "El tejido que produce lactato lo envía al hígado, que lo transforma en glucosa por gluconeogénesis." },
  { m: "fermentacion", q: "¿Cuál de estas células depende de la fermentación láctica incluso en presencia de oxígeno?",
    o: ["Eritrocito", "Hepatocito", "Cardiomiocito", "Neurona"],
    hint: "¿Cuál no tiene mitocondrias?",
    e: "El eritrocito maduro no tiene mitocondrias, así que siempre produce lactato." },
  { m: "fermentacion", q: "En un deportista, el lactato aumenta con un esprint de 100 m. La razón más directa es que…",
    o: ["La demanda de ATP supera el aporte de oxígeno y se acelera la glucólisis anaerobia", "El ciclo de Krebs se acelera y libera lactato", "Se detiene la glucólisis", "El hígado deja de producir glucosa"],
    e: "La glucólisis rápida produce piruvato más rápido de lo que la mitocondria puede oxidar; el exceso pasa a lactato." },

  /* ---------------- KREBS ---------------- */
  { m: "krebs", q: "¿Qué complejo convierte el piruvato en acetil-CoA?",
    o: ["Piruvato deshidrogenasa (PDH)", "Lactato deshidrogenasa", "Citrato sintasa", "Piruvato quinasa"],
    e: "La PDH está en la matriz mitocondrial y libera CO₂ y NADH al formar acetil-CoA." },
  { m: "krebs", q: "¿Con qué molécula se condensa el acetil-CoA para formar citrato?",
    o: ["Oxaloacetato", "Malato", "Succinato", "Piruvato"],
    e: "Acetil-CoA (2C) + oxaloacetato (4C) → citrato (6C), por la citrato sintasa." },
  { m: "krebs", q: "¿Qué se produce en una vuelta del ciclo de Krebs (por un acetil-CoA)?",
    o: ["3 NADH, 1 FADH₂, 1 GTP/ATP y 2 CO₂", "1 NADH, 3 FADH₂ y 2 ATP", "2 NADH, 2 FADH₂ y 4 CO₂", "6 NADH y 1 CO₂"],
    hint: "Hay 3 NADH y solo 1 FADH₂.",
    e: "Por glucosa son 2 vueltas: 6 NADH, 2 FADH₂, 2 GTP y 4 CO₂." },
  { m: "krebs", q: "¿Dónde ocurre el ciclo de Krebs?",
    o: ["Matriz mitocondrial", "Citosol", "Espacio intermembrana", "Retículo endoplasmático"],
    e: "Las enzimas del ciclo están en la matriz (la succinato deshidrogenasa en la membrana interna)." },
  { m: "krebs", q: "¿Por qué el ciclo de Krebs depende del oxígeno si ninguna de sus reacciones lo consume?",
    o: ["Porque necesita que NADH y FADH₂ se reoxiden en la cadena respiratoria", "Porque el O₂ forma el citrato", "Porque el O₂ es un sustrato de la citrato sintasa", "No depende del oxígeno"],
    e: "Sin O₂ la cadena se detiene, NAD⁺ y FAD no se regeneran y el ciclo se enlentece." },
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
    o: ["El gradiente de protones", "El gradiente de sodio", "La hidrólisis de GTP", "La luz"],
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
    o: ["≈ 30–32", "2", "≈ 10", "≈ 100"],
    e: "2 de la glucólisis, 2 de Krebs y el resto de la fosforilación oxidativa. En anaerobiosis solo 2." },
  { m: "fosforilacion", q: "¿Qué ocurre con un desacoplante de la cadena respiratoria?",
    o: ["Se consume O₂ pero se produce calor en lugar de ATP", "Se produce más ATP", "Se bloquea el consumo de O₂", "Aumenta el gradiente de protones"],
    hint: "Disipa el gradiente sin pasar por la ATP sintasa.",
    e: "La energía del gradiente se pierde como calor. Es el mecanismo de la termogenina en la grasa parda." },
  { m: "fosforilacion", q: "¿Por qué el cianuro es tan tóxico?",
    o: ["Inhibe el complejo IV y detiene la producción aerobia de ATP", "Bloquea la glucólisis", "Destruye la hemoglobina", "Activa la ATP sintasa"],
    e: "Aunque haya oxígeno disponible, la célula no puede usarlo. Los tejidos con mayor demanda (cerebro, corazón) fallan primero." },

  /* ---------------- GLUCÓGENO ---------------- */
  { m: "glucogeno", q: "¿Qué tipo de enlaces forma la glucógeno sintasa y cuáles la enzima ramificante?",
    o: ["Sintasa: α-1,4; ramificante: α-1,6", "Sintasa: α-1,6; ramificante: α-1,4", "Ambas forman α-1,4", "Sintasa: β-1,4; ramificante: α-1,6"],
    e: "Las cadenas lineales son α-1,4 y los puntos de ramificación α-1,6." },
  { m: "glucogeno", q: "¿Por qué el glucógeno muscular no sirve para subir la glicemia?",
    o: ["Porque el músculo no tiene glucosa-6-fosfatasa", "Porque no tiene fosforilasa", "Porque el músculo no sintetiza glucógeno", "Porque el glucagón no lo degrada"],
    hint: "¿Qué enzima convierte la glucosa-6-P en glucosa libre?",
    e: "Sin glucosa-6-fosfatasa, la glucosa-6-P queda en el músculo y alimenta su propia glucólisis." },
  { m: "glucogeno", q: "¿Qué enzima libera glucosa-1-fosfato desde el glucógeno?",
    o: ["Glucógeno fosforilasa", "Glucógeno sintasa", "Hexoquinasa", "Glucoquinasa"],
    e: "La fosforilasa rompe enlaces α-1,4 por fosforólisis (usa Pi, no gasta ATP)." },
  { m: "glucogeno", q: "En el hígado, tras la acción del glucagón, ¿cuál es el estado de las enzimas del glucógeno?",
    o: ["Fosforilasa activa y sintasa inactiva", "Fosforilasa inactiva y sintasa activa", "Ambas activas", "Ambas inactivas"],
    hint: "El glucagón promueve la degradación.",
    e: "La cascada AMPc → PKA fosforila: activa la fosforilasa e inactiva la sintasa." },
  { m: "glucogeno", q: "¿Qué hormona NO actúa sobre el glucógeno muscular?",
    o: ["Glucagón", "Adrenalina", "Insulina", "Todas actúan"],
    e: "El músculo no tiene receptor de glucagón. La adrenalina sí activa la glucogenólisis muscular." },
  { m: "glucogeno", q: "¿Cuál es el efecto de la insulina sobre la glucógeno fosforilasa y la glucógeno sintasa?",
    o: ["Inactiva la fosforilasa y activa la sintasa", "Activa ambas", "Activa la fosforilasa e inactiva la sintasa", "No tiene efecto"],
    e: "La insulina activa fosfatasas que defosforilan ambas enzimas, favoreciendo el almacenamiento." },
  { m: "glucogeno", q: "En una situación de ejercicio intenso, ¿qué hormona estimula la degradación de glucógeno en el músculo?",
    o: ["Adrenalina", "Glucagón", "Insulina", "Cortisol únicamente"],
    e: "La adrenalina activa la cascada del AMPc en el músculo (el Ca²⁺ también activa la fosforilasa quinasa)." },

  /* ---------------- HORMONAS ---------------- */
  { m: "hormonas", q: "¿Qué hormona se libera cuando la glicemia está baja?",
    o: ["Glucagón", "Insulina", "Calcitonina", "Oxitocina"],
    e: "Las células α del páncreas liberan glucagón con glicemia baja." },
  { m: "hormonas", q: "¿Qué transportador permite a la insulina aumentar la captación de glucosa en músculo y tejido adiposo?",
    o: ["GLUT4", "GLUT1", "GLUT2", "GLUT3"],
    hint: "Es el único dependiente de insulina.",
    e: "La insulina induce la translocación de GLUT4 a la membrana. Por eso se afecta en la resistencia a la insulina." },
  { m: "hormonas", q: "¿Cuál es el efecto de la insulina sobre la gluconeogénesis hepática?",
    o: ["La inhibe", "La activa", "No tiene efecto", "La invierte"],
    e: "La insulina favorece el uso y almacenamiento de la glucosa, y reduce su producción." },
  { m: "hormonas", q: "¿Cuál de estos efectos corresponde al glucagón?",
    o: ["↑ gluconeogénesis y ↑ glucogenólisis hepática", "↑ glucogenogénesis", "↑ captación de glucosa por GLUT4", "↓ glicemia"],
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

  /* ---------------- CASOS CLÍNICOS ---------------- */
  { m: "casos",
    case: "Un maratonista de 30 años llega con calambres. Su lactato sérico está elevado tras el esfuerzo máximo.",
    q: "¿Qué explica el aumento de lactato?",
    o: ["La glucólisis anaerobia produjo más piruvato que el que la mitocondria pudo oxidar", "Falla del ciclo de Krebs por exceso de oxígeno", "Aumento de la gluconeogénesis muscular", "Déficit de insulina"],
    hint: "¿Qué hace el músculo cuando la demanda de ATP supera el oxígeno?",
    e: "Al regenerar NAD⁺ con la LDH, la glucólisis puede seguir. El lactato viajará al hígado (ciclo de Cori)." },
  { m: "casos",
    case: "Una persona llega de un incendio con intoxicación por humo. Tiene lactato muy elevado y SpO₂ aparentemente normal. Se sospecha intoxicación por cianuro.",
    q: "¿Cuál es el mecanismo de daño?",
    o: ["Inhibición del complejo IV: no se puede usar el O₂ y se detiene la producción aerobia de ATP", "Bloqueo de la glucólisis", "Exceso de gluconeogénesis", "Inhibición de la hexoquinasa"],
    e: "La célula pasa a metabolismo anaerobio y produce lactato, aunque haya oxígeno en sangre." },
  { m: "casos",
    case: "Una persona lleva 18 horas en ayunas por una cirugía programada. Su glicemia es de 78 mg/dL.",
    q: "¿Qué mecanismo hormonal y metabólico mantiene su glicemia?",
    o: ["Glucagón: glucogenólisis y gluconeogénesis hepática", "Insulina: glucogenogénesis hepática", "Aumento de GLUT4 en músculo", "Glucólisis hepática acelerada"],
    hint: "¿Hay insulina alta o baja en ayuno?",
    e: "Con insulina baja y glucagón alto, el hígado libera glucosa desde el glucógeno y sintetiza glucosa nueva." },
  { m: "casos",
    case: "Un paciente con DM tipo 1 se administra su dosis habitual de insulina rápida pero omite el almuerzo. A los 40 minutos presenta sudoración, temblor y confusión.",
    q: "¿Qué ocurre en este paciente?",
    o: ["La insulina bajó la glicemia sin aporte de glucosa: hipoglicemia con respuesta de adrenalina", "Falta de insulina: cetoacidosis", "Exceso de glucagón: hiperglicemia", "Aumento de la gluconeogénesis por la insulina"],
    e: "La insulina activa GLUT4 y bloquea la producción hepática de glucosa. La conducta es administrar glucosa de absorción rápida según protocolo." },
  { m: "casos",
    case: "Un paciente con alcoholismo crónico y desnutrición llega con acidosis láctica. Se sospecha déficit de tiamina.",
    q: "¿Por qué aumenta el lactato?",
    o: ["La PDH no funciona sin tiamina: el piruvato se acumula y se convierte en lactato", "El ciclo de Cori se acelera", "La tiamina es cofactor de la LDH", "La insulina está elevada"],
    e: "Sin PDH, el piruvato no entra al ciclo. Se redirige a lactato por la LDH." },
  { m: "casos",
    case: "Un lactante tiene hipoglicemia en ayuno y hepatomegalia. Se diagnostica enfermedad de Von Gierke (déficit de glucosa-6-fosfatasa).",
    q: "¿Por qué hay hipoglicemia?",
    o: ["El hígado no puede convertir glucosa-6-P en glucosa libre", "No puede sintetizar glucógeno", "Tiene exceso de glucagón", "No hay glucólisis"],
    hint: "La hepatomegalia se debe a acumulación de glucógeno.",
    e: "Se acumula glucógeno (hepatomegalia) y la glucogenólisis y la gluconeogénesis no pueden liberar glucosa a la sangre." },
  { m: "casos",
    case: "Una joven presenta calambres y dolor muscular intenso con el ejercicio. Durante la prueba, su lactato no aumenta. Se diagnostica enfermedad de McArdle (déficit de fosforilasa muscular).",
    q: "¿Por qué el lactato no aumenta?",
    o: ["No puede degradar el glucógeno muscular, por lo que no hay sustrato para la glucólisis", "Se forma más ATP por la fosforilación oxidativa", "Su LDH es hiperactiva", "No tiene glucólisis"],
    e: "Sin fosforilasa, el glucógeno muscular no se moviliza. Sin sustrato glucolítico, hay poco piruvato y poco lactato." }
];
