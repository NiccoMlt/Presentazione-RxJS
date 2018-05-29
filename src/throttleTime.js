const source = interval(1)
    .pipe(
        throttleTime(50)
    );
source.subscribe(val => console.log(val));
