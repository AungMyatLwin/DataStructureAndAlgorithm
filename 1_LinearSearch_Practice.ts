//

const x:Array<number> = []
for(let i= 0;i<=Math.floor(Math.random()*200+1); i++){
    x.push(Math.floor(Math.random()*200+1))
}

const value=x[Math.floor(Math.random()*x.length)+Math.floor(Math.sqrt(x.length))]
console.log(x,'\n',value)


// O(N) Linear Search
function linearSearch(x:Array<number>, value:number):number{ 
    for(let i=0; i<=x.length; i++){
        if(value===x[i]){
            return x[i]
        }
    }
    return -1
}


const res=linearSearch(x, value)
console.log(res)