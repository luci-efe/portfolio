# SensorGrid Labs - Propuesta Técnica

## Sistema de Monitoreo Ambiental IoT
**Cliente:** ITESO - Cafetería Central  
**Equipo:** Renata, Rodrigo, Robert, Fernando (Team Lead)  
**Duración:** 12 semanas | **Fecha:** Enero 2026

---

## 1. Resumen Ejecutivo

Sistema IoT cloud-native para monitorear:
- **Temperatura** de refrigeradores y congeladores (en tiempo real)
- **Detección de puertas abiertas** por tiempo prolongado
- **Calidad del aire:** COVs, PM2.5, temperatura ambiente, humedad
- **Alertas automáticas** vía Telegram ante anomalías
- **Dashboard web** con autenticación y datos históricos
- **Cumplimiento NOM-251-SSA1-2009** (normativas sanitarias)

---

## 2. Stack Tecnológico

| Capa | Tecnología | Justificación |
|------|------------|---------------|
| Microcontrolador | ESP32 + LoRa (TTGO LoRa32) | WiFi+BLE+LoRa integrado, bajo costo |
| Comunicación | LoRa 915 MHz | Largo alcance (1-2 km), bajo consumo |
| Protocolo | LoRaWAN 1.0.3 | Estándar industrial, AES-128 |
| Network Server | The Things Network v3 | Gratuito, comunidad activa |
| Gateway | Dragino LPS8 | 8 canales, económico |
| WAN | Router 4G LTE + SIM | Independiente de red ITESO |
| Backend | Cloudflare Workers | Serverless, TypeScript, edge computing |
| Base de Datos | InfluxDB Cloud | Optimizada para time series |
| Dashboard | Grafana Cloud | Estándar industria, autenticación |
| Alertas | Telegram Bot API | Gratuito, notificaciones push |
| DNS/SSL | Cloudflare | CDN, protección DDoS |

---

## 3. Arquitectura Cloud-Native (Sin Servidor Local)

### Flujo de Datos:
1. **CAPTURA:** Sensores → ESP32 cada 5 minutos (I2C/OneWire/GPIO)
2. **CODIFICACIÓN:** Paquete Cayenne LPP (Low Power Payload)
3. **TRANSMISIÓN:** LoRa 915 MHz → Gateway
4. **ROUTING:** Gateway → TTN vía 4G
5. **PROCESAMIENTO:** TTN webhook → Cloudflare Worker
6. **ALMACENAMIENTO:** Worker → InfluxDB Cloud
7. **ALERTAS:** Si umbral excedido → Telegram
8. **VISUALIZACIÓN:** Grafana consulta InfluxDB

### ¿Por qué sin servidor local?
- Experiencia del equipo en cloud (Cloudflare, Vercel)
- Sin administración de servidores físicos
- URL pública incluida
- Escalabilidad comercial (diferenciador clave)
- 99.9% uptime SLA
- Ahorro: ~$3,230 MXN (sin Raspberry Pi)

---

## 4. Diseño de Hardware

### Nodo Tipo A: Monitoreo de Refrigeradores
- **2× DS18B20:** Temperatura refrigeradores
- **2× Reed Switch:** Estado de puertas
- **1× BME280:** Temperatura/humedad ambiente
- **Alimentación:** Batería 18650 + cargador TP4056

### Nodo Tipo B: Calidad del Aire
- **1× SGP40:** COVs (compuestos orgánicos volátiles)
- **1× PMS5003:** PM2.5, PM10 (partículas)
- **1× BME280:** Temperatura/humedad
- **Alimentación:** Fuente 5V

### Conexiones ESP32:
| Componente | Pin | Protocolo |
|------------|-----|-----------|
| DS18B20 (×2) | GPIO 25 | OneWire |
| Reed Switch 1 | GPIO 33 | Digital |
| Reed Switch 2 | GPIO 32 | Digital |
| BME280 | SDA=21, SCL=22 | I2C |
| SGP40 | SDA=21, SCL=22 | I2C |
| PMS5003 | TX→16, RX→17 | UART |

---

## 5. Metodología: Scrum Adaptado

- **Sprints:** 2 semanas (6 sprints)
- **Dailies:** Asíncronos (WhatsApp)
- **Tablero:** Notion (Kanban)
- **Definition of Done:** Código completo + tests + PR aprobado + merge a dev + documentación

### Cronograma:
| Sprint | Semanas | Entregable |
|--------|---------|------------|
| 0 | 1-2 | Setup: Materiales, cuentas cloud, repo GitHub |
| 1 | 3-4 | Prototipo: Primer nodo funcionando vía LoRaWAN |
| 2 | 5-6 | Sensores: Todos los sensores integrados, datos en InfluxDB |
| 3 | 7-8 | Alertas: Sistema Telegram, múltiples nodos. **ENTREGABLE INTERMEDIO** |
| 4 | 9-10 | Instalación: Despliegue físico en cocinas ITESO |
| 5 | 11-12 | Pulido: Dashboards finales, documentación. **ENTREGABLE FINAL** |

---

## 6. Costos Operativos

| Concepto | Costo Mensual |
|----------|---------------|
| SIM de datos (Telcel 6GB) | $200 MXN |
| The Things Network | $0 (gratuito) |
| Cloudflare Workers | $0 (100k req/día) |
| InfluxDB Cloud | $0 (30 días) |
| Grafana Cloud | $0 (gratuito) |
| Dominio sensorgrid.lat | ~$25 MXN |
| **TOTAL MENSUAL** | **$225-$325 MXN** |

---

## 7. Entregables

### Semana 8 (Intermedio):
- 2+ nodos transmitiendo datos reales
- Dashboard básico en tiempo real
- Alertas Telegram operativas

### Semana 12 (Final):
- Sistema completo instalado en cocinas ITESO
- Dashboard profesional con autenticación
- Documentación técnica completa
- Manual de usuario
- Repositorio GitHub con código fuente
- Video demo del sistema funcionando

---

## Diferenciadores Clave

✅ **Arquitectura 100% cloud-native** (sin servidor local)  
✅ **LoRaWAN independiente** de infraestructura ITESO  
✅ **Costo operativo mínimo** (~$225 MXN/mes)  
✅ **Escalable** a otros campus o clientes comerciales  
✅ **Disponibilidad 99.9%** con servicios cloud  

---

**SensorGrid Labs S. de R.L.**  
ITESO - Laboratorio de Desarrollo de Soluciones Tecnológicas  
Enero 2026
