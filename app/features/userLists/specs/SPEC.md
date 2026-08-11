# userLists

## Intent
Esta feature permite a un usuario agregar, visualizar y eliminar nombres de usuario dentro de la aplicación.

## In scope
- Agregar un nombre de usuario válido a la lista.
- Mostrar todos los usuarios agregados.
- Eliminar un usuario de la lista individualmente.

## Out of scope
- Persistencia en almacenamiento local o servidor.
- Validación de formato más allá de que el nombre no esté vacío.
- Edición de usuarios existentes.

## Requirements
- El campo de entrada debe aceptar texto y el botón debe estar habilitado solo cuando haya al menos un caracter distinto de espacios.
- Al pulsar el botón `Agregar`, el nombre debe añadirse a la lista y el campo debe limpiarse.
- Cada usuario debe mostrarse con su nombre y un botón para eliminarlo.
- Al pulsar `Eliminar`, el usuario debe desaparecer de la lista.

## Edge cases & errors
- Si el campo está vacío o solo contiene espacios, el botón `Agregar` debe permanecer deshabilitado.
- No se deben agregar entradas duplicadas si el usuario ya existe; cada nombre se agrega como elemento independiente.

## Constraints
- Usar el patrón de feature folder en `app/features/userLists/`.
- Mantener la UI en `UserLists.tsx` y la lógica en un hook bajo `hooks/`.
- Reutilizar componentes existentes de la app cuando sea posible.

## Acceptance criteria
- [ ] El feature tiene un archivo `specs/SPEC.md` dentro de `app/features/userLists/`.
- [ ] El componente permite agregar usuarios desde un input con botón.
- [ ] Los usuarios aparecen en una lista visible.
- [ ] Cada usuario tiene un botón `Eliminar` que lo remueve.
