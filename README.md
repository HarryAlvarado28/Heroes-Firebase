# Heroes Firebase

## Instalación de Angular con Firebase

### Paso nº 1 - Crear Proyecto en Angular Firebase

- Ir a [Firebase Console 🔥](https://console.firebase.google.com/).
- Has click en **Agregar proyecto**.
![Agregar Proyecto](./img-guia/-01-crearproyecto.png)

### Paso nº 2 - Defina el nombre del Proyecto en Firebase

- Coloque el nombre que desee en **Ingresa el nombre de tu proyecto**, en esta ocasión _HeroesFirebase_. Dale en **Continuar**.
![Nombre del Proyecto](./img-guia/-02-nombredelproyecto.png)
- _Configuraciones Opcionales, de Google Analytics_, dale en **continuar** (este servicio es gratuito).
- De click en **Crear proyecto**.
![Creando Proyecto](./img-guia/-03-creandoproyecto.png)

### Paso nº 3 - Agregar Firebase a tu Aplicación Web

- De click en Web (como se muestra en la ilustración).
![Creando Proyecto](./img-guia/-04-agregarweb.png)
- Coloque un sobrenombre a su app, y da click en **Siguiente**.
- Copie las configuraciones que le da Firebase.
![Firebase Config](./img-guia/-05-firebaseconfig.png)

### Paso nº 4 - Configuración en Angular

- **Instala Firebase en Angular**. Información obtenida del repositorio [AngularFire](https://firebaseopensource.com/projects/angular/angularfire2/).

```
npm install firebase @angular/fire --save
```

- Busca el archivo `src/app/environments/environment.ts` y ajuste la siguiente información.

```javascript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyByEY95Dm7GhfXJzcw1TDJyHsMHMjUBpxo",
    authDomain: "heroesfirebase-f69f9.firebaseapp.com",
    databaseURL: "https://heroesfirebase-f69f9.firebaseio.com",
    projectId: "heroesfirebase-f69f9",
    storageBucket: "heroesfirebase-f69f9.appspot.com",
    messagingSenderId: "716259620584",
    appId: "1:716259620584:web:34bdfd3f02e13d87633b5d",
    measurementId: "G-6KDSLYGFH0",
  },
};
```

- Busca el archivo `src/app/app.module.ts` y agregemos dos imports.

```javascript
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
```

- Ahora importa el modulo de AngularFireModule en el NgModule, de la siguiente manera debe quedar.

```javascript
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
```

## 🔥 Hasta aquí YA has configurado Angular con Firebase 🔥


**De aquí en adelante es salsa** puedes utilizarlo como proyectos base de un nuevo proyecto o incluso para probar tu servicio de Firebase.


¡Feliz code!
