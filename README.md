
# serverless
PROYECTO NODE + SERVERLESS

Versión Node: 16 - Esto evitará errores de algunas librerías. 

Desplegar con sls deploy

DB MYSQL
Duplicar el .env.example, cambiar nombre a .env, luego configurar las variables de entorno para la conexión a la DB

EndPoints:

    HEALTCHECK

        /**Verifica el estado de la aplicación**/

        GET  | http://localhost:3000/dev                        

    SWAPI

        /**Metodo General, obtiene todo los datos, para obtener los endpoint de la API, ejecutar despues en el {name} root
            ejemplo http://localhost:3000/dev/swapi/root**/

        GET  | http://localhost:3000/dev/swapi/{name}  

        /**Metodo de busqueda, esto aplica tanto a la busquda por ID, como por atributo(name, model, etc)
            ejemplo por ID:
             http://localhost:3000/dev/swapi/people/1
            ejemplo por nombre:
             http://localhost:3000/dev/swapi/people_search/juan
        **/

        GET  | http://localhost:3000/dev/swapi/{name}/{id}      --
    
    USER

        /**Obtiene todo los registros de la tabla usuario**/
        GET  | http://localhost:3000/dev/user
        
        /**Crea los usuarios mediando el endpoint**/    --
        POST | http://localhost:3000/dev/user/create            --

