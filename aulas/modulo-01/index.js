const classA = [
    {
        name: "Guilherme",
        grade: 9.8
    },
    {
        name: "Cristiany",
        grade: 10
    },
    {
        name: "Victor",
        grade: 2
    }

]

const classB = [
    {
        name: "Débora",
        grade: 7
    },
    {
        name: "Robson",
        grade: 2
    },
    {
        name: "Gustavo",
        grade: 4
    },
    {
        name: "Ana",
        grade: 10
    }

]

function calculateAverage(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;
    }

    const average = sum / students.length;
    return average;
}


const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A média da turma ${turma} foi de ${average}. Parabéns`);
    } else {
        console.log(`A média  da turma ${turma} é menor que 5`);
    }
}


function marcarComoReprovado(students) {
    students.reprovado = false;
    if (students.grade < 5) {
        students.reprovado = true;
    }

}


function enviarMensagemReprovado(student) {
    if (student.reprovado) {
        console.log(`O student ${student.name} está reprovado!`);
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        marcarComoReprovado(student);
        enviarMensagemReprovado(student);
    }
}


sendMessage(average1, 'classA');
sendMessage(average2, 'classB');

studentsReprovados(classA);
studentsReprovados(classB);