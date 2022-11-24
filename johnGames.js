const getNextStartingRound = (time) => {
    const startingRoundsTime = [0, 15, 30, 45]
    let nextRoundTime = time

    if(nextRoundTime.minutes >=  45) {

        if(nextRoundTime.hour === 23) {
            nextRoundTime.hour = 0
        } else {
            nextRoundTime.hour += 1
        }
        
        nextRoundTime.minutes = 0
        return nextRoundTime

    } 
        
    for(let i = 0; startingRoundsTime.length; i++) {
        if(nextRoundTime.minutes <= startingRoundsTime[i]) {
            nextRoundTime.minutes = startingRoundsTime[i]
            break
        }
        
    }

    return nextRoundTime
}

const johnGames = (A, B) => {
    const startingTime = {
        hour: parseInt(A.split(":")[0]),
        minutes: parseInt(A.split(":")[1])
    }
    const endingTime = {
        hour: parseInt(B.split(":")[0]),
        minutes: parseInt(B.split(":")[1])
    }
    
    let roundsCount = 0

    // console.log("Initial time: ")
    // console.log(startingTime)
    // console.log("Ending time: ")
    // console.log(endingTime)

    if(startingTime.hour <= endingTime.hour) {
        if(startingTime.minutes <= endingTime.minutes) {
            //Getting next round 
            let currentRound = getNextStartingRound(startingTime)

            for(let i = currentRound.hour; i <= endingTime.hour; i++) {
                for(let j = currentRound.minutes; j < 60; j+=15) {   
                    if(currentRound.minutes + 15 > endingTime.minutes && i === endingTime.hour)  {
                        break
                    }           
                    console.log(currentRound) 
                    roundsCount++
                    currentRound.minutes += 15 
                }
                currentRound = getNextStartingRound({hour: currentRound.hour, minutes: currentRound.minutes})
                console.log("hice: " + roundsCount)
            }
        }
    }

    return roundsCount
}

console.log(johnGames("11:00","12:29"))
console.log(johnGames("11:45","11:00"))
//console.log(johnGames("11:00","13:00"))

// console.log(johnGames("10:00","12:45"))
// console.log(johnGames("11:45","12:45"))
