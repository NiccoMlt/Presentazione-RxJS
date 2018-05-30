const source = from([1, 3, 5])
    .pipe(
        scan((acc, curr) => acc + curr, 0)
    );
source.subscribe(val => console.log(val));
