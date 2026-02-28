let array=[];
array.push( function () {
        console.log("Lavoro completato!");
    }
);
array.push( function () {
        console.log("Non sono capace!");
    }
);
array.forEach(func => {
    func();
});
