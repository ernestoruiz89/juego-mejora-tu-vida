# Mecánicas del Juego - Decisión Financiera

## 📋 Reglas del Juego

### Objetivo
**¡Ser el primero en alcanzar la Libertad Financiera o el último jugador en pie!**

Gana el jugador que:
- Acumule **$50,000 en capital total** (dinero + propiedades), O
- Sea el **último jugador activo** cuando todos los demás se declaren en quiebra

### Dinero Inicial
Cada jugador comienza con **$15,000**

### Jugadores
El juego soporta de **2 a 6 jugadores** en la misma computadora

---

## 🎨 Espacios de Colores

### 🔴 Espacios Rojos - GASTOS
Cuando caes en un espacio rojo, tienes un gasto inesperado y pierdes dinero.

**Eventos posibles:**
- Reparación de Auto: -$500
- Cuenta Médica: -$800
- Multa de Tránsito: -$300
- Reparación del Hogar: -$1,000
- Factura de Servicios: -$400
- Pago de Impuestos: -$1,200
- Reparación de Electrodoméstico: -$600
- Seguro Inesperado: -$700

**Notificación:** Fondo rojo con el evento y cantidad

---

### 🔵 Espacios Azules - INVERSIÓN
Cuando caes en un espacio azul, tus inversiones dan frutos y ganas dinero.

**Eventos posibles:**
- Inversión en Bolsa: +$1,500
- Negocio Rentable: +$2,000
- Propiedad Apreciada: +$1,800
- Dividendos: +$1,200
- Bonos del Gobierno: +$1,000
- Fondo de Inversión: +$1,600
- Inversión Inmobiliaria: +$2,200
- Acciones Exitosas: +$1,400

**Notificación:** Fondo azul con el evento y cantidad

---

### 💛 Espacios Amarillos - SORPRESA
Cuando caes en un espacio amarillo, ocurre un evento aleatorio que puede ser positivo o negativo.

**Eventos positivos:**
- Ganaste la Lotería: +$3,000
- Bono de Trabajo: +$2,000
- Regalo de Familiar: +$1,000
- Herencia Pequeña: +$2,500
- Reembolso de Impuestos: +$1,500

**Eventos negativos:**
- Multa Inesperada: -$800
- Robo en Casa: -$1,500
- Accidente Menor: -$600
- Pérdida en Apuesta: -$400
- Deuda Olvidada: -$1,000

**Notificación:** Fondo naranja (positivo) o naranja oscuro (negativo)

---

### 💚 Espacios Verdes - INGRESOS
Cuando caes en un espacio verde, recibes ingresos de tu trabajo o actividades y ganas dinero.

**Eventos posibles:**
- Salario Mensual: +$2,000
- Bono de Rendimiento: +$1,500
- Venta Exitosa: +$1,800
- Comisión: +$1,200
- Trabajo Extra: +$1,000
- Proyecto Freelance: +$1,600
- Aumento de Sueldo: +$2,500
- Renta de Propiedad: +$1,400

**Notificación:** Fondo verde con el evento y cantidad

---

## 🎯 Esquinas Especiales

### AHORRO O DEUDA (Espacio 0) 🏠
**Punto de partida del tablero**

- **Al CAER en esta casilla:** Ganas $2,000
- **Al PASAR por esta casilla:** Pagas $15 de gasto fijo de alimentación
- Es el punto de partida de todos los jugadores
- Completar una vuelta completa del tablero significa "pasar" por la casilla

**Diferencia importante:**
- 🎯 **CAER** = Tus dados te llevan exactamente a la casilla 0 → Ganas $2,000
- 🔄 **PASAR** = Completas una vuelta alrededor del tablero → Pagas $15

### ⛓️ CASTIGO - Cuarto de los Castigados (Espacio 20)
**Casilla de penalización**

- **Al caer:** El jugador es enviado al Cuarto de los Castigados
- **Duración:** Permaneces **2 turnos** completos sin poder jugar
- **Restricciones:** NO puedes comprar ni vender propiedades/animales mientras estás castigado
- **Indicador visual:** La tarjeta del jugador se oscurece con borde naranja

**Mecánica de Salida:**
- Cada turno que pasa, el contador se reduce en 1
- Después de 2 turnos, sales automáticamente con notificación de liberación
- No puedes salir antes de cumplir los 2 turnos completos

### ⚠️ Esquinas Eliminadas
Las siguientes esquinas ya no son especiales:
- ~~Espacio 10: SORTEO~~ → Ahora es un espacio regular de color
- ~~Espacio 30: MONEY~~ → Ahora es un espacio regular de color

---

## 🎮 Flujo del Juego

### Configuración Inicial
1. Click en "Iniciar Juego"
2. Selecciona el número de jugadores (2-6)
3. Personaliza los nombres (opcional)
4. Click en "Confirmar"
5. El juego inicia con todos los jugadores en AHORRO O DEUDA

### Durante el Juego - Turno Normal
1. El jugador actual está destacado en el panel superior
2. Click en "Lanzar Dados"
3. Se lanzan 2 dados automáticamente
4. **Si sacas DOBLES (ambos dados iguales):**
   - Tu ficha se mueve normalmente
   - Se aplica el evento de la casilla
   - ¡Tiras de nuevo! 🎲🎲 (no pasa el turno)
   - Puedes seguir tirando si vuelves a sacar dobles
5. **Si NO sacas dobles:**
   - Tu ficha se mueve la cantidad de espacios indicada
   - Si pasaste por AHORRO O DEUDA → se cobra $15 de alimentación
   - Se aplica el evento del espacio donde caíste
   - El dinero se actualiza automáticamente
   - El turno pasa al siguiente jugador

### Durante el Juego - Turno en el Castigo
Si un jugador está en el **Cuarto de los Castigados**:
1. Al hacer click en "Lanzar Dados", NO se tiran dados
2. El contador de turnos se reduce en 1
3. Aparece notificación mostrando turnos restantes
4. El turno pasa automáticamente al siguiente jugador
5. Después de 2 turnos, el jugador sale y puede volver a jugar normalmente

### Fin del Juego
1. El juego detecta automáticamente cuando alguien gana
2. Se muestra modal de victoria dorado 🏆
3. Aparece el nombre del ganador y la razón
4. Se muestra la clasificación final de todos los jugadores
5. Botón "Nuevo Juego" para jugar otra partida

### Controles
- **"Lanzar Dados"**: Tira los dados en tu turno
- **"Agregar Jugador"**: Reconfigura los jugadores
- **"Reiniciar"**: Comienza un nuevo juego

---

## 📊 Sistema de Notificaciones

Cada tipo de evento tiene un color distintivo y emoji característico:

| Tipo | Color | Emoji | Ejemplo |
|------|-------|-------|---------|
| Gastos (Rojo) | Rojo intenso | 💸 | "Reparación de Auto -$500" |
| Inversión (Azul) | Azul intenso | 📈 | "Inversión en Bolsa +$1,500" |
| Ingresos (Verde) | Verde intenso | 💰 | "Salario Mensual +$2,000" |
| Sorpresa Positiva | Naranja | 🎁 | "Ganaste la Lotería +$3,000" |
| Sorpresa Negativa | Naranja oscuro | ⚠️ | "Multa Inesperada -$800" |
| Números Dobles | Naranja | 🎲🎲 | "¡Sacó DOBLES! Tira de nuevo" |
| Castigo | Naranja oscuro | ⛓️ | "Enviado al Cuarto de Castigados" |
| Liberación | Verde | 🎉 | "Salió del Cuarto de Castigados" |
| Victoria | Dorado | 🏆 | "¡Ganó por Libertad Financiera!" |

Las notificaciones aparecen en el centro de la pantalla por 2-3 segundos con animaciones suaves de entrada y salida.

---

## 💡 Estrategia

### Consejos Generales
- **Espacios Verdes y Azules** son siempre positivos - intenta caer en ellos
- **Espacios Rojos** siempre te cuestan dinero
- **Espacios Amarillos** son impredecibles - pueden ser muy buenos o muy malos
- **Evita el CASTIGO (espacio 20)** - perder 2 turnos puede costarte la victoria
- **Gestiona tu dinero** - Ten suficiente para pagar el gasto de alimentación ($15) cada vuelta
- **Busca los dobles** - Te dan turnos extra para avanzar más rápido
- **Capital total es lo que importa** - No solo el dinero, también las propiedades cuentan

### Rangos de Eventos
- **Gastos (Rojo):** -$300 a -$1,200
- **Ingresos (Verde):** +$1,000 a +$2,500
- **Inversión (Azul):** +$1,000 a +$2,200
- **Sorpresas:** -$1,500 a +$3,000

### Estrategia para Ganar
1. **Mantén un balance saludable** - No gastes todo tu dinero
2. **Acumula propiedades** cuando puedas - contribuyen a tu capital total
3. **Evita quedarte sin dinero** - Podrías declararte en quiebra
4. **Aprovecha los dobles** - Los turnos extra son muy valiosos
5. **Ten paciencia** - Llegar a $50,000 requiere varias vueltas al tablero

---

## 🎯 Condición de Victoria

El juego termina cuando se cumple una de estas condiciones:

### 1. Libertad Financiera 🏆
**El primer jugador en alcanzar $50,000 en capital total gana inmediatamente.**

El capital total incluye:
- Dinero en efectivo
- Valor de todas las propiedades y animales

Cuando un jugador alcanza esta meta, el juego termina automáticamente y se muestra la pantalla de victoria con la clasificación final.

### 2. Último Jugador en Pie 💪
**Si todos los jugadores excepto uno se declaran en quiebra, el jugador restante gana.**

El juego continúa hasta que solo quede un jugador capaz de jugar.

### 3. Opciones Alternativas (Opcional)
Puedes establecer tus propias reglas de victoria:
- **Por Tiempo:** El jugador con más capital después de X rondas
- **Por Decisión:** Juega hasta que todos estén listos y cuenta el capital total

---

## 🔧 Personalización

Si quieres ajustar las cantidades o eventos, puedes editar el archivo `game.js`:

- **Meta de Libertad Financiera:** Línea 10 - Cambia `financialFreedomGoal: 50000`
- **Dinero Inicial:** Línea 77 - Cambia `this.money = 15000`
- **Turnos en Castigo:** Línea 474 - Cambia `punishmentTurnsRemaining = 2`
- **Eventos de Gastos (rojos):** Líneas 501-516
- **Eventos de Inversión (azules):** Líneas 518-533
- **Eventos de Sorpresa (amarillos):** Líneas 535-556
- **Eventos de Ingresos (verdes):** Líneas 558-573

---

## 📱 Multijugador Local

El juego soporta 2-6 jugadores en la misma computadora. Cada jugador tiene:
- Color único
- Emoji distintivo
- Tarjeta de jugador con su nombre y dinero actual
- Ficha en el tablero

El sistema de turnos rota automáticamente después de cada lanzamiento de dados.
