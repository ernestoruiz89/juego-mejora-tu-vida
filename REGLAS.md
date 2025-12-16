# Mecánicas del Juego - Decisión Financiera

## 📋 Reglas del Juego

### Objetivo
Acumular la mayor cantidad de dinero tomando decisiones financieras inteligentes a lo largo del tablero.

### Dinero Inicial
Cada jugador comienza con **$15,000**

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

### INICIO (Espacio 0)
- **Al pasar por INICIO:** Ganas $2,000
- **Al caer en INICIO:** Ganas $2,000
- Es el punto de partida de todos los jugadores

### 🎲 SORTEO (Espacio 10)
- Esquina de sorteo
- Actualmente muestra mensaje especial
- Puede expandirse con mecánicas de cartas o sorteos especiales

### 📊 INVERSIONES (Espacio 20)
- Esquina de inversiones
- Actualmente muestra mensaje especial
- Puede expandirse con opciones de inversión estratégica

### 💵 MONEY (Espacio 30)
- **Al caer:** Ganas $5,000
- La esquina más lucrativa del tablero

---

## 🎮 Flujo del Juego

### Configuración Inicial
1. Click en "Iniciar Juego"
2. Selecciona el número de jugadores (2-6)
3. Personaliza los nombres (opcional)
4. Click en "Confirmar"

### Durante el Juego
1. El jugador actual está destacado en el panel superior
2. Click en "Lanzar Dados"
3. Se lanzan 2 dados automáticamente
4. Tu ficha se mueve la cantidad de espacios indicada
5. Se aplica el evento del espacio donde caíste
6. Una notificación muestra lo que sucedió y cuánto dinero ganaste/perdiste
7. El dinero se actualiza automáticamente en tu tarjeta de jugador
8. El turno pasa al siguiente jugador

### Controles
- **"Lanzar Dados"**: Tira los dados en tu turno
- **"Agregar Jugador"**: Reconfigura los jugadores
- **"Reiniciar"**: Comienza un nuevo juego

---

## 📊 Sistema de Notificaciones

Cada tipo de evento tiene un color distintivo:

| Tipo | Color | Emoji |
|------|-------|-------|
| Gastos (Rojo) | Rojo intenso | 💸 |
| Inversión (Azul) | Azul intenso | 📈 |
| Ingresos (Verde) | Verde intenso | 💰 |
| Sorpresa Positiva | Naranja | 🎁 |
| Sorpresa Negativa | Naranja oscuro | ⚠️ |
| Esquinas | Morado/Azul | Variado |

Las notificaciones aparecen en el centro de la pantalla por 3 segundos con animación de entrada y salida.

---

## 💡 Estrategia

### Consejos Generales
- **Espacios Verdes y Azules** son siempre positivos
- **Espacios Rojos** siempre te cuestan dinero - evítalos si puedes
- **Espacios Amarillos** son impredecibles - pueden ser muy buenos o muy malos
- Pasar por **INICIO** es importante para mantener un flujo de dinero constante
- La esquina **MONEY** da la mayor recompensa ($5,000)

### Rangos de Eventos
- **Gastos (Rojo):** -$300 a -$1,200
- **Ingresos (Verde):** +$1,000 a +$2,500
- **Inversión (Azul):** +$1,000 a +$2,200
- **Sorpresas:** -$1,500 a +$3,000

---

## 🎯 Condición de Victoria

Actualmente, el juego es de duración libre. Puedes establecer tus propias condiciones:

### Opciones sugeridas:
1. **Por Tiempo:** El jugador con más dinero después de X rondas (ej: 20 turnos)
2. **Por Meta:** El primer jugador en alcanzar $50,000
3. **Por Quiebra:** El último jugador que no llegue a $0
4. **Por Decisión:** Juega hasta que todos estén listos y cuenta el dinero

---

## 🔧 Personalización

Si quieres ajustar las cantidades o eventos, puedes editar el archivo `game.js`:

- **Líneas 411-426:** Eventos de Gastos (rojos)
- **Líneas 428-443:** Eventos de Inversión (azules)
- **Líneas 445-468:** Eventos de Sorpresa (amarillos)
- **Líneas 470-485:** Eventos de Ingresos (verdes)
- **Líneas 368-389:** Recompensas de esquinas

También puedes cambiar el dinero inicial modificando la línea 50 en `game.js`:
```javascript
this.money = 15000; // Cambia este valor
```

---

## 📱 Multijugador Local

El juego soporta 2-6 jugadores en la misma computadora. Cada jugador tiene:
- Color único
- Emoji distintivo
- Tarjeta de jugador con su nombre y dinero actual
- Ficha en el tablero

El sistema de turnos rota automáticamente después de cada lanzamiento de dados.
