const source = from([1, 2, 3])
    .pipe(
        map(x => 10 * x)
    );
source.subscribe(val => console.log(val));
