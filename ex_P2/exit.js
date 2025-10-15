let i = 1;

setInterval(() => {
    if(i === 5){
        console.log('종료');
        process.exit();
    }else{
        console.log(i);
        console.log();
        i += 1;
    }
    

}, 1000);