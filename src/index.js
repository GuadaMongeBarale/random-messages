const messages = [
    "Sé el cambio que quieres ver en el mundo",
    "No se trata de si van a derribarte, se trata de si vas a levantarte cuando lo hagan",
    "Nadie puede hacerte sentir inferior sin tu consentimiento",
    "Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo",
    "Muchos piensan en cambiar el mundo, pero casi nadie piensa en cambiarse a sí mismo",
    "Si estás trabajando en algo que te importa de verdad, nadie tiene que empujarte: tu visión te empuja",
    "No tienes que ser grande para empezar. Pero tienes que empezar para poder ser grande",
    "Podemos sufrir muchas derrotas pero no debemos ser derrotados",
    "No esperes. Nunca va a ser el momento adecuado",
    "La creatividad es la inteligencia divirtiéndose",
    "La mayor parte de las grandes cosas que ha conseguido el hombre, fueron declaradas imposibles antes de que alguien las hiciera"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };