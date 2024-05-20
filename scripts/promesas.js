//* TRY CATCH ASYNCRONO

let promesa1 = new Promise((response, reject) => {
    
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '1: tres segundos'
        };
        response(resp)
        reject('fallo')
    }, 3000);

});

let promesa2 = new Promise((response, reject) => {
    
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '2: cinco segundos'
        };
        response(resp)
        reject('fallo')
    }, 5000);

});

let promesa3 = new Promise((response, reject) => {
    
    setTimeout(() => {
        let resp = {
            response: 200,
            description: '3: dos segundos y medio'
        };
        response(resp)
        reject('fallo')
    }, 2500);

});

//! NO HACER DE ESTA FORMA (PIRAMIDE DE LA PERDICION)
// promesa1.then(res => {
//     console.log(res.description)
//     promesa2.then(res => {
//         console.log(res.description)
//         promesa3.then(res => {
//             console.log(res.description)
//         })
//         .catch(error => {
//             console.error(error)
//         });
//     })
//     .catch(error => {
//         console.error(error)
//     })
// })
// .catch(error => {
//     console.error(error)
// });

//? HACER DE ESTA FORMA

async function ejecutarPromesas() {

    let resPromise1 = await promesa1;
    console.log(resPromise1);

    let resPromise2 = await promesa2;
    console.log(resPromise2);

    let resPromise3 = await promesa3;
    console.log(resPromise3);
}

//ejecutarPromesas();
