setTimeout(() => {
    
    const firebaseConfig = {
        apiKey: "AIzaSyCc36FsnHaeDlAmQ1sn1Z-QUahpbavDgTo",
        authDomain: "datos-de-formulario-652a3.firebaseapp.com",
        projectId: "datos-de-formulario-652a3",
        storageBucket: "datos-de-formulario-652a3.appspot.com",
        messagingSenderId: "739664873868",
        appId: "1:739664873868:web:78ff11676d8088bc676ea9",
        measurementId: "G-R5F8LL9S5D"
    };

    //* INICIALIZAR FIREBASE
    firebase.initializeApp(firebaseConfig);

    //* IMPORTAR BASE DE DATOS DE FIRESTORE
    const db = firebase.firestore();

    //* OBTENER EL FORMULARIO
    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault()
 
        //* VALIDAR NOMBRE
        const entradaNombre = document.getElementById('name');
        const errorNombre = document.getElementById('nameError');
    
        if (entradaNombre.value.trim() === '')
            {
                errorNombre.textContent= "Por favor! Introduce tu nombre"
                errorNombre.classList.add('error-message')
            }
        else
            {
                errorNombre.textContent= ""
                errorNombre.classList.add('error-message')
            }
    
        //* VALIDAR CORREO ELECTRONICO
        const entradaEmail = document.getElementById('email');
        const errorEmail = document.getElementById('emailError');
        const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!patternEmail.test(entradaEmail.value))
            {
                errorEmail.textContent= "Por favor! Introduce un email valido"
                errorEmail.classList.add('error-message')
            }
        else
            {
                errorEmail.textContent= ""
                errorEmail.classList.add('error-message')
            }
    
        //* VALIDAR CONTRASEÑA
        const entradaClave = document.getElementById('password');
        const errorClave = document.getElementById('passwordError');
        const patternClave = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    
        if (!patternClave.test(entradaClave.value))
            {
                errorClave.textContent= "La contraseña debe tener al menos 8 caracteres"
                errorClave.classList.add('error-message')
            }
        else
            {
                errorClave.textContent= ""
                errorClave.classList.add('error-message')
            }
    
        //* VALIDAR TODOS LOS CAMPOS DEL FORMULARIO
        if (!errorNombre.textContent && !errorEmail.textContent && !errorClave.textContent)
            {
                //* BACKEND QUE RECIBA LA INFORMACION

                db.collection("users").add({
                    nombre: entradaNombre.value,
                    email: entradaEmail.value,
                    clave: entradaClave.value
                })
                .then((docRef) => {
                    alert("El formulario se ha enviado con exito!", docRef.id);
                    document.getElementById('formulario').reset();
                })
                .catch((error) => {
                    alert(error)
                });



            }
    
    });
    
}, 1);

