let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`


const getOptions = function(){
    const toJson = JSON.parse(jsonString);
    let retrieveAllOptions = toJson["quiz"]["sport"]["q1"]["options"];
    retrieveAllOptions.forEach((element) => console.log(element))
}

getOptions()



const devide = function(num, denom){
   try{
     if(denom !==0){
        return num/denom
     }else{
        throw new RangeError("didnt work")
    }
   } catch (err){
     console.log("not good", err.message)
   }

}
devide(2,0)

































