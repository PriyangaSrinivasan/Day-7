//a.Get all the countries from Asia continent/region using Filter function:

const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
     var final = res.forEach((ele)=>console.log(ele.name.common))

}


//b.Get all the countries with a population of less than 2lakhs using Filter function:

const request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload=function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1)
    var res1 = result1.filter((ele)=>ele.population<200000);
     var final = res1.forEach((ele)=>console.log(ele.name.common))

}

//c.Print the following details name,capital,flag, using reduce function:

const request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload=function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2)
     var details = result2.forEach((ele)=>console.log(`name:${ele.name.common},capital:${ele.capital},flag:${ele.flag}`));

}

//d.Print the total population of countries using reduce function:

const request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload=function(){
    var data3 = request3.response;
    var result3 = JSON.parse(data3);
    var TotalPopulation = result3.reduce((acc,cv)=>{
        return acc+cv.population
    },0)
    console.log(TotalPopulation);
}


//e.Print the country that uses US doller as currency:

const request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload=function(){
    var data4 = request4.response;
    var result4 = JSON.parse(data4);

    const countrieswithUSD = result4.filter
     (country=>country.currencies && country.currencies.USD).map(country=>country.name.common);

     if(countrieswithUSD.length>0){
        console.log("Countries that uses US dollers as currency:"+countrieswithUSD.join(", "));
    }
    else{
        console.log("countries not found use US dollars as currency.");
    }
}

