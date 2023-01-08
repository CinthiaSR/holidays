// 1
// const UserName=(name)=>{
//     const procesado = name.replace(/\s+/g, '') 
//     const dim= procesado.length
//     return `${name}, tu nombre tiene ${dim} caracteres`
// }
// const User= prompt('Ingresa tu nombre completo');
// console.log(UserName(User));

// 2
// const UserName=(name)=>{
//     const vocales = "aeiou";
//     let cantidadVocales = 0;
//     for (const letra of name) {
//         if (vocales.includes(letra.toLowerCase())) {
//             cantidadVocales++;
//         }
//     }
//       return `${name}, tu nombre tiene ${cantidadVocales} vocales`
// }
// const User= prompt('Ingresa tu nombre completo');
// console.log(UserName(User));

// 3
// let StrText='Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado'
// console.log(StrText)
// const ReplaceUser=(text, word)=>{
//     const vector=text.split(" ")
//     let cont=0
//     // console.log(vector)
//     for(const newWord of vector){ 
//         if(newWord===word){
//             cont++
//         }  
//     }            
//    console.log(word, 'se usa ' + cont + ' veces')   
//     const regex = word;
//     const change=(text.replaceAll(regex, 'koder')); 
//     return change

// }
// const result=ReplaceUser(StrText, 'estudiante');
// console.log(result);

// 4
// const UserCompare=(str1, str2)=>{
//     const processText1 = str1.replace(/\s+/g, '') 
//     const processText2 = str2.replace(/\s+/g, '') 
//     const dimText1=processText1.length
//     const dimText2=processText2.length
// if(dimText1>=dimText2){
//     return `el string ${str1} es el mas largo`
// }else{
//     return `el string ${str2} es el mas largo`
// }
// }
// const Text1= prompt('Ingresa texto');
// const Text2= prompt('Ingresa texto');
// console.log(UserCompare(Text1, Text2));

// 5
// const UserWord=(str)=>{
//   const vector=str.split(" ")
//   console.log(vector)
//   let longestWord = '';
//   vector.forEach((word) => { 
//     if (word.length > longestWord.length) { 
//         longestWord = word 
//      } 
//     });
//     return `${longestWord}, es la palabra mas larga`
// }
// const text= prompt('Ingresa texto');
// console.log(UserWord(text));

// 6 incomplete
// const UserSingular=(str)=>{
// console.log(str.split(''))
// }
// const text= prompt('Ingresa texto');
// console.log(UserSingular(text));

// 7
// const UserSegment=(row)=>{
//     const ent=row
//     for (let index = 1; index <= ent; index++) {
//       let piramide=''
//       for (let interno = 1; interno <=index; interno++) {
//         piramide+=index
//       }
//       console.log(piramide)
//     }

//     for (let index = ent; index >= 1; index--) {
//       let piramide=''
//       for (let interno = 1; interno <=index; interno++) {
//         piramide+=index
//       }
//       console.log(piramide)
//     }
// }
// const num=parseInt(prompt("Tamaño de la piramide"))
// console.log(UserSegment(num));

// 8
// const arr= [1,6,76,2,8,3,9,34,6]
// let mayor=0
// let menor=0
// let suma=0
// let prom=0
// const Mayorque=(mayor, menor)=>{
//   for( let index=0; index<arr.length; index++){
//     if(arr[index]>mayor){
//       mayor=arr[index]
//     }
//     menor = Math.min(...arr);
//   }
//   arr.forEach(function(a){
//     prom=(suma += a)/arr.length
//   });
//   return `El numero mayor es ${mayor}, el menor es ${menor}, la suma de los numeros es: ${suma} y el
//   promedio es: ${prom}`
// }
// const results= Mayorque(mayor, menor)
// console.log(results)

// 9
// const example = [
//   'Bacon ipsum dolor amet corned',
//   'Buffalo pork ball tip',
//   'Leberkas short loin pork loin'
// ]
// const output=[]
// const ForthWord=(arr, numberIt)=>{
// for (const iterator of arr) {
//  const NumIteration=iterator.slice(0,numberIt)
// output.push(NumIteration) 
// }
// return output
// }
// const num=parseInt(prompt('Ingresa el numero de caracteres que se muestren'))
// const result=ForthWord(example, num)
// console.log(result)

// 10
// let area=0
// let suma=0
// const CalcArea=(size1, size2, size3)=>{
//   console.log('Base:'+ size1, 'Altura: '+ size2, 'Hipotenusa: '+ size3)
//   area= (size1+size2)/2

//   if(size1===size2 && size1===size3){
//     return `Area total: ${area} y es un Triangulo 
//     Equilátero porque todos sus lados son iguales`
//   }else if(size1===size2 && size1!==size3){
//     return `Area total: ${area} y es un Triangulo 
//     Isósceles porque dos de sus tres lados son de igual longitud`
//   }else if(size1!==size2 && size1!==size3){
//     return `Area total: ${area} y es un Triangulo 
//     Escaleno, todos sus lados son de diferente longitud`
//   }
// }
// const num1= parseInt(prompt('Base: '))
// const num2= parseInt(prompt('Altura: '))
// const num3= parseInt(prompt('Hipotenusa: '))
// const result=CalcArea(num1, num2, num3)
// console.log(result)

// 11
const mentorsArray = [
  {
    name: "Ivan Diaz",
    scores: [
      {
        signature: "HTML",
        score: 8,
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 8
      },
      {
        signature: "ReactJS",
        score: 8
      }
    ]
  },
  {
    name: "Alan Medina",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 7
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Elvira Camarillo",
    scores: [
      {
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 9
      },
     
      {
        signature: "ReactJS",
        score: 9
      }
    ]
  },
  {
    name: "Alejandra Paez",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
     
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
];


const getAverangeBySignature=(ListSigna)=>{
  const newList=[] 
  const res={}
  const SignatureList= ListSigna.map((item)=>{
   const List=item.scores
    List.forEach((element) => {
      const signa=element.signature
      if(newList.includes(signa)){ 
        }else{
            newList.push(signa)
          }  
        });
      })      
      newList.forEach((materia)=>{
        let total=0   
        let accum=0     
        ListSigna.forEach((iterator)=>{
          const calf=iterator.scores
          calf.forEach((signatureGral)=>{
            const NameSignature= signatureGral.signature
            const CalfSignature=signatureGral.score
            if(materia===NameSignature){
              total+=CalfSignature
              accum++
            }
            })            
          }) 
          
            const calificaciones=total/accum
            res[materia]=calificaciones
                 
        })        
    // console.log(res)
  return res //return que pertenece a la funcion
};
console.log(getAverangeBySignature(mentorsArray))




