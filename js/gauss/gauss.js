const x_button = document.querySelectorAll(".x_button")
const y_button = document.querySelectorAll(".y_button")
const z_button  = document.querySelectorAll(".z_button")
const result_button = document.querySelectorAll(".result_button")
const form = document.getElementById("form")

form.addEventListener("click", onsubmit)

function onsubmit(){

    const x = checkX()
    const y = checkY()
    const z = checkZ()
    const result = checkResult()
    if((!x.error && y.error && z.error && result.error)){
        gauss(x, y, z, result)
    }
    else{
        alert(x.message + y.message + z.message + result.message)
    }

}

function gauss(x, y, z, result){
    let s1 = [x.mass[0], y.mass[0], z.mass[0], result.mass[0]]
    let s2 = [x.mass[1], y.mass[1], z.mass[1], result.mass[1]]
    let s3 = [x.mass[2], y.mass[2], z.mass[2], result.mass[2]] //cтроки
    const n = 3
    for(let k = 0; k < n-1; k++){
            let row
    }
}

function replaceRow(s1, s2, s3){
    let row1 = [s1[0], s2[0], s3[0]]
    let row2 = [s1[1], s2[1], s3[1]]
    let row3 = [s1[2], s2[2], s3[2]] //столбцы

    let maxS1 = s1.max
    let indexOfMaxS1 = s1.indexOf(maxS1)

    let maxS2 = s2.max
    let indexOfMaxS2 = s2.indexOf(maxS2)

    let maxS3 = s3.max
    let indexOfMaxS3 = s3.indexOf(maxS3)

    if (indexOfMaxS1 !== indexOfMaxS2 && indexOfMaxS1 !== indexOfMaxS3 && indexOfMaxS2 !== indexOfMaxS3){
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
            x1: mass[0],
            x2: mass[1],
            x3: mass[2],
            error: false
        }
    }
    else{
        return{
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
            y1: mass[0],
            y2: mass[1],
            y3: mass[2],
            error: false
        }
    }
    else{
        return{
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
            z1: mass[0],
            z2: mass[1],
            z3: mass[2],
            error: false
        }
    }
    else{
        return{
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
            result1: mass[0],
            result2: mass[1],
            result3: mass[2],
            error: false
        }
    }
    else{
        return{
            error: true,
            message: "Заполните все поля Result\n"
        }
    }
}

