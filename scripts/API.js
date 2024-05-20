const urlBase = "https://jsonplaceholder.typicode.com";
const query = "users";
const insert = "posts";
const eliminar = "posts";
const eliminarId = 5;
const post = 5;
const idEdit = 3;
const insertBody = JSON.stringify({
    title: 'Nuevo titulo',
    body: 'Insertar algo',
    userId: 1,
});
const updateWithPut = JSON.stringify({
    id: idEdit,
    title: 'Titulo actualizado',
    body: 'actualizar algo',
    userId: 1,
});
const updateWithPatch = JSON.stringify({
    title: 'Titulo actualizado',
});

//* GET: READ
fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))

//* POST -> INSERT
fetch(`${urlBase}/${insert}`, {
    method: 'POST',
    body: insertBody,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//* PUT -> UPDATE
fetch(`${urlBase}/${insert}/${post}`, {
    method: 'PUT',
    body: updateWithPut,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//* PATCH -> UPDATE(un solo atributo)
fetch(`${urlBase}/${insert}/${post}`, {
    method: 'PATCH',
    body: updateWithPatch,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

//* DELETE -> DELETE
fetch (`${urlBase}/${eliminar}/${eliminarId}`, {
    method: 'DELETE'
});

