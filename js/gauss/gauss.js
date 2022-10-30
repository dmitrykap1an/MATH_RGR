const x_button = document.querySelectorAll(".x_button")
const y_button = document.querySelectorAll(".y_button")
const z_button  = document.querySelectorAll(".z_button")
const result_button = document.querySelectorAll(".result_button")
const form = document.getElementById("form")

form.addEventListener("click", onsubmit)

function onsubmit(){

    const x = checkX() //проверка валидности введенных данных пользователем, возвращает объект с полями mass - массив из чисел x,
    // error - boolean(true в случае ошибки), message(в случае отсутствия ошибки вернет пустую строку), остальные функции по аналогии
    const y = checkY()
    const z = checkZ()
    const result = checkResult()
    if(!(x.error && y.error && z.error && result.error)){ //проверка валидности данных
        gauss(x, y, z, result)
    }
    else{
        alert(x.message + y.message + z.message + result.message) //вывод сообщения в случаи невалидных данных
    }

}

function gauss(x, y, z, result){
    let s1 = [x.mass[0], y.mass[0], z.mass[0], result.mass[0]]
    let s2 = [x.mass[1], y.mass[1], z.mass[1], result.mass[1]]
    let s3 = [x.mass[2], y.mass[2], z.mass[2], result.mass[2]] //cтроки
    let A = [s1, s2, s3]
    console.log("A is", A[0] === s1, A, s1)
    const n = 3
    replaceString(A)
        //TODO добавить логику приведения уравнения к треугольному виду, с условием, что а_{k,k} != 0(элемент, находящийся на главной диагонали)
        //TODO и дальнейшее нахождение корней(важно, чтобы использовался именно модифицированный алгоритм Гаусса, а не классический,
        // так как в случае работы с числами с плавающей точкой может быть потеря части результата
}

function replaceString(A){
    let maxS1 = maxAbs(A[0].slice(0,3)) //находим максимальный элемент первой строки
    let indexOfMaxS1 = A[0].indexOf(maxS1)//находим индекс максимального элемента

    let maxS2 = maxAbs(A[1].slice(0,3))
    let indexOfMaxS2 = A[1].indexOf(maxS2)

    let maxS3 = maxAbs(A[2].slice(0,3))
    let indexOfMaxS3 = A[2].indexOf(maxS3)



    if (indexOfMaxS1 !== indexOfMaxS2 && indexOfMaxS1 !== indexOfMaxS3 && indexOfMaxS2 !== indexOfMaxS3){

        let temp1 = A[indexOfMaxS1]
        A[indexOfMaxS1] = A[0]

        let indexOfMaxTemp1 = temp1.indexOf(maxAbs(temp1.slice(0,3)))
        let temp2 = A[indexOfMaxTemp1]
        A[indexOfMaxTemp1] = temp1

        let indexOfMaxTemp2 = temp2.indexOf(maxAbs(temp2.slice(0,3)))
        A[indexOfMaxTemp2] = temp2
        return A
    }
    else if(indexOfMaxS1 === indexOfMaxS2 && indexOfMaxS1 === indexOfMaxS3){
        
        let temp1 = A[indexOfMaxS1]
        A[indexOfMaxS1] = A[0]

        let indexOfMaxTemp1 = temp1.indexOf(maxAbs(temp1.slice(0,3)))
        let temp2 = A[indexOfMaxTemp1]
        A[indexOfMaxTemp1] = temp1

        let indexOfMaxTemp2 = temp2.indexOf(maxAbs(temp2.slice(0,3)))
        A[indexOfMaxTemp2] = temp2
    }
    else if(indexOfMaxS1 === indexOfMaxS2 && indexOfMaxS1 !== indexOfMaxS3){

    }

    //TODO добавить логику перестановки столбцов, для того чтобы на главных диагоналях стояли максимальные элементы строки
    // в соответствии с модифицированным алгоритмом Гаусса



}

function maxAbs(A){
    if(Math.max(...A.slice(0, 3)) >= Math.abs(Math.min(...A))){
        return Math.max(...A)
    }
    else{
        return -Math.abs(Math.min(...A))
    }
}

function swap2(a, b){
    let c = a
    a = b
    b = c
    return{
        first: a,
        second: b,
    }
}

function checkX(){
    const mass = []
    x_button.forEach(function (input){
        const x = input.value.replace(',', '.')
        if(!isNaN(x)){
            mass.push(Number.parseFloat(x))
        }
    })

    if(mass.length === 3){
        return{
            mass: mass,
            error: false,
            message: ""
        }
    }
    else{
        return{
            mass: [],
            error: true,
            message: "Заполните все поля X\n"
        }
    }
}

function checkY(){
    const mass = []
    y_button.forEach(function (input){
        const y = input.value.replace(',', '.')
        if(!isNaN(y)){
            mass.push(Number.parseFloat(y))
        }
    })

    if(mass.length === 3){
        return{
            mass: mass,
            error: false,
            message: ""
        }
    }
    else{
        return{
            mass: [],
            error: true,
            message: "Заполните все поля Y\n"
        }
    }
}

function checkZ(){
    const mass = []
    z_button.forEach(function (input){
        const z = input.value.replace(',', '.')
        if(!isNaN(z)){
            mass.push(Number.parseFloat(z))
        }
    })

    if(mass.length === 3){
        return{
            mass: mass,
            error: false,
            message: ""
        }
    }
    else{
        return{
            mass: [],
            error: true,
            message: "Заполните все поля Z\n"
        }
    }
}

function checkResult(){
    const mass = []
    result_button.forEach(function (input){
        const result = input.value.replace(',', '.')
        if(!isNaN(result)){
            mass.push(Number.parseFloat(result))
        }
    })

    if(mass.length === 3){
        return{
            mass: mass,
            error: false,
            message: ""
        }
    }
    else{
        return{
            mass: [],
            error: true,
            message: "Заполните все поля Result\n"
        }
    }
}

